import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiResponse, TeamSummary, TeamDataList } from "../models";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  title = 'IPL-MAGIC';

  teamSummary: TeamSummary[];
  public loading = false;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.loading = true;
    http.get<IApiResponse<TeamSummary[]>>(baseUrl + 'data/gokuldham-summary').subscribe(result => {
      console.log(result);
      this.loading = false;
      this.teamSummary = result.data;
    }, error => console.error(error));
  }
}