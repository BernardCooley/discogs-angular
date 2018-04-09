import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ReleasesService {

  db;
  url = 'https://api.discogs.com';

  constructor(private _http: Http) {}

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
      },
      {
        "releaseName": "Various ‎– More Space To Dance",
        "releaseId": "182735", 
        "sellers":
        [
          "1207vinyl.dk",
          "Raw_Torino",
          "PlexusRecords",
          "SYNCHRONICITIES",
          "brightonvinylfinds",
          "riouxs",
          "basement.5",
          "MILLSPEED",
          "moment_in_time",
          "1207vinyl.dk",
          "Andale23"
        ]
      },
      {
        "releaseName": "Galaxy 2 Galaxy ‎– Galaxy 2 Galaxy",
        "releaseId": "4276", 
        "sellers":
        [
          "biragomes",
          "BRUCE1991",
          "SLIMM893",
          "REALMS",
          "biragomes",
          "mcas4150",
          "ElstredVaump",
          "sounzdog",
          "eshi",
          "tiagolobo",
          "mondo_diggers_club",
          "jd221169",
          "clone.nl",
          "Swinger",
          "ddrthe1",
          "SoundChamber",
          "gyuly",
          "dansauk",
          "KillaCutz",
          "MariaRecord",
          "TF2036",
          "mazegogroove",
          "houseofvinyl.london",
          "VISTI",
          "tashi.delek",
          "AndreaMazzucato",
          "djrobv",
          "Integer",
          "interstellarsounds"
        ]
      },
      {
        "releaseName": "Various ‎– Decade Dubs",
        "releaseId": "8440968", 
        "sellers":
        [
          "Mimen",
          "OBIU",
          "Vinyl_In_Me",
          "greytail",
          "private",
          "Teresa"
        ]
      },
      {
        "releaseName": "Golden Girls ‎– Kinetic",
        "releaseId": "10785", 
        "sellers":
        [
          "jenzi54",
          "shoobeedoo",
          "VandalG",
          "unsitrovapiunulla",
          "sugarsoundz",
          "SeinMaedchen",
          "ivanblack",
          "oakantheath1",
          "Silverplatters",
          "cieslukmusic",
          "coxbox",
          "djclassix",
          "Frank-HSJ",
          "dirk_djaydee",
          "Dyama",
          "XyTeC",
          "hipcity",
          "luca7840",
          "MEGA-MIX"
        ]
      },
      {
        "releaseName": "Joey Beltram ‎– The Beltram Re-Releases 1989-1991",
        "releaseId": "1952", 
        "sellers":
        [
          "Technik1210",
          "purple_vinylfunk_76",
          "Recordresidence",
          "laurence",
          "Aerosolid",
          "KillaCutz",
          "Deskjet",
          "Soulmotion_Dj",
          "3345vinylrecords",
          "VinceWatson",
          "IllianaMusic",
          "mrformic",
          "MonsieurEdd",
          "mondo_diggers_club",
          "japhy",
          "mrformic",
          "urbanvinyl",
          "mazegogroove",
          "jeffswing",
          "dicabor",
          "franky.b",
          "DJ_Angus"
        ]
      },
      {
        "releaseName": "Endlec ‎– Linear Authority",
        "releaseId": "8563097", 
        "sellers":
        [
          "www.hhv.de",
          "weeklywax",
          "hotmix-recordstore",
          "thevinylcurtain",
          "Teresa",
          "mutt_discogs",
          "sinewave93",
          "TheSoundArcade"
        ]
      }
    ]
  }

  ngOnInit() {}

}
