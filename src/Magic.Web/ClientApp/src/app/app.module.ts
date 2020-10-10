import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxLoadingModule } from 'ngx-loading';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GokuldhamComponent } from './gokuldham/gokuldham.component';
import { MahasangramComponent } from './mahasangram/mahasangram.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MahasangramComponent,
    GokuldhamComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'gokuldham', component: GokuldhamComponent },
      { path: 'mahasangram', component: MahasangramComponent },
    ]),
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
