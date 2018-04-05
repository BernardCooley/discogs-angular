import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
var Discogs = require('disconnect').Client;
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ReleasesService {

  db;
  url = 'https://api.discogs.com';

  constructor(private _http: Http) {
    this.db = new Discogs().database();
  }

  getRelease(releaseId): Observable<any> {
    return this._http.get(this.url + '/releases/' + releaseId);
  }

  getWantList(user): Observable<any> {
    return this._http.get(this.url + '/users/' + user + '/wants');
  }

  getSellersOfRelease() {
    return [
      {
        "releaseName": "Planetary Assault systems - In From The Night",
        "releaseId": "4497", 
        "sellers":
        [
          "Infld",
          "Richgatkow",
          "funkdirection",
          "misj",
          "Promofox23",
          "vinylrites",
          "GESSCOM",
          "jamesmacrecords",
          "3345vinylrecords",
          "Mysickvinyl",
          "Schmerie73",
          "Schmerie73",
          "akkupunkt"
        ]
      },
      {
        "releaseName": "The Advent - In Search",
        "releaseId": "10003", 
        "sellers":
        [
          "KaytodaD",
          "wgwstore",
          "earcandymusic",
          "Marceleri",
          "jimpanse",
          "Nikiwi",
          "misj",
          "savetherecords",
          "InfinitePleasure",
          "tootsi",
          "peter_tryba",
          "shallamusica",
          "renatolambretta",
          "URVC_Vinyl",
          "davetheruf",
          "bamyasi",
          "akkupunkt",
          "JiggyJamz",
          "1207vinyl.dk",
          "3345vinylrecords",
          "cbass-909",
          "jancito303",
          "secretpsycho",
          "thevinylcurtain",
          "brittanymcpeak",
          "mrformic",
          "Sensationrecords",
          "www.totalrecall.de",
          "12-INCH-ZONE", 
          "dicabor",
          "Musicsoundsrl"
        ]
      },
      {
        "releaseName": "X-102 - Titan",
        "releaseId": "1393615", 
        "sellers":
        [
          "swisst",
          "ANYMX",
          "choolder",
          "proben",
          "EricTarlouf"
        ]
      }
    ]
  }

  ngOnInit() {}

}
