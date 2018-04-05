import { Component, OnInit } from '@angular/core';
import { ReleasesService } from '../../services/releases/releases.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-releases-list',
  templateUrl: './releases-list.component.html',
  styleUrls: ['./releases-list.component.css']
})
export class ReleasesListComponent implements OnInit {

  wants = [];
  releasesFromWants = [];

  constructor(private _releasesService: ReleasesService) { }

  getRelease(releaseNumber) {
    this._releasesService.getRelease(releaseNumber);
  }

  getReleases(releaseIds) {
    releaseIds.forEach(releaseId => {
      this._releasesService.getRelease(releaseId).subscribe((response:Response) => {
        this.releasesFromWants.push(response.json());
      });
    });
  }

  getWantList() {
    this._releasesService.getWantList('bcooley83').subscribe((response:Response) => {
      this.wants = response.json()['wants'];
      // console.log(this.wants);

      let newArr = [];

      this.wants.forEach(element => {
        // console.log(element)
        newArr.push({
          "releaseName": element['basic_information']['artists'][0]['name'] + " - " + element['basic_information']['title'],
          "releaseId": element['id'], 
          "sellers": []
        })
      });
      console.log(newArr);
    });
  }

  getWantListReleases() {
    this._releasesService.getWantList('bcooley83').subscribe((response:Response) => {
      this.getReleases(this.extractReleaseIds(response.json()['wants']));
    });
  }

  extractReleaseIds(wantLists) {
    let releaseIds = [];
    wantLists.forEach(element => {
      releaseIds.push(element['id']);
    });
    return releaseIds;
  }

  ngOnInit() {
  }

}
