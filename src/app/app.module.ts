import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReleasesListComponent } from './components/releases-list/releases-list.component';
import { ReleasesService } from './services/releases/releases.service';
import { HttpModule } from '@angular/http';
import { CommonSellersComponent } from './components/common-sellers/common-sellers.component';


@NgModule({
  declarations: [
    AppComponent,
    ReleasesListComponent,
    CommonSellersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ReleasesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
