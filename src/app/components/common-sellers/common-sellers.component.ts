import { Component, OnInit } from '@angular/core';
import { ReleasesService } from '../../services/releases/releases.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-common-sellers',
  templateUrl: './common-sellers.component.html',
  styleUrls: ['./common-sellers.component.css']
})
export class CommonSellersComponent implements OnInit {

  sellersList;
  matches = [];

  constructor(private _releasesService: ReleasesService) { }

  getSellersOfRelease() {
    this.sellersList = this._releasesService.getSellersOfRelease();

    for(let i = 0; i < this.sellersList.length; i++) {
      let arr1 = this.sellersList[i]
      for(let j = 0; j < this.sellersList.length; j++) {
        let arr2 = this.sellersList[j];
        if(arr1['releaseId'] == arr2['releaseId']) {
          continue;
        }
        this.compareSellersLists(arr1, arr2);
      }
    }
    this.matches = this.deduplicate(this.sortArray(this.matches));
    this.matches = this.deduplicate(this.formatList(this.matches));

    this.matches.forEach(match => {
      match['sellers'] = _.uniqWith(match['sellers'], _.isEqual);
    });

    console.log(this.matches);
  }

  compareSellersLists(arr1, arr2) {
    let matches = [];
    arr1['sellers'].forEach(seller1 => {
      arr2['sellers'].forEach(seller2 => {
        if(seller1 == seller2) {
          this.matches.push(
            {
              "seller": seller1,
              "releases": [
                {
                  "name": arr1['releaseName'],
                  "id": arr1['releaseId']
                },
                {
                  "name": arr2['releaseName'],
                  "id": arr2['releaseId']
                },
              ]
            }
          )
        }
      });
    });
  }

  sortArray(arr) {
    let newArr = [];

    arr.forEach(element => {
      newArr.push(
        {
          "seller": element['seller'],
          "releases": _.orderBy(element['releases'], function(e) {
            return e.name
          }, ['desc'])
        })
    });
    return newArr;
  }

  formatList(arr) {
    let newArr = [];
    let sellers = [];
    for(let i = 0; i < arr.length; i++) {
      for(let j = 1; j < arr.length; j++) {
        if((arr[i]['seller'] != arr[j]['seller']) && (arr[i]['releases'] != arr[j]['releases'])) {
          sellers.push(
            arr[i]['seller'],
            arr[j]['seller']
          )
          
        }
      }
      newArr.push(
        {
          "releases": [arr[i]['releases']],
          "sellers": sellers
        }
      );
    }
    return newArr;
  }

  deduplicate(arr) {
    return _.uniqWith(arr, _.isEqual);
  }

  ngOnInit() {
  }

}
