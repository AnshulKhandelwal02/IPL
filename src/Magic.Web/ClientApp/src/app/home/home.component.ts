import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Summary {
  rank:number;
   name: String;
   points: number;
   subs: number;
   team1:string;
   team2:string;
   subs1: number;
   subs2: number;
 }
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'IPL-MAGIC';

  teamSummary: TeamSummary[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<IApiResponse<TeamSummary[]>>(baseUrl + 'data/summary').subscribe(result => {
      console.log(result);
      this.teamSummary = result.data;
    }, error => console.error(error));
  }

  teams: Summary[] = [
    { rank:1, name:'NH',team1:'The Strategist',team2:'HDS192',points:9937.5,subs:57, subs1:29,subs2:28 },
    { rank:2, name:'AR',team1:'Chennai Conquistadors',team2:'Raghujabar11',points:9746,subs:73, subs1:37,subs2:36 },
    { rank:3, name:'NV',team1:'The Viktor',team2:'Experlliarmus',points:9463,subs:45, subs1:18,subs2:27 },
    { rank:4, name:'DPR',team1:'DPR Team 1',team2:'agileteam11',points:9397.5,subs:78, subs1:39,subs2:39 },
    { rank:5, name:'AP',team1:'ABDVK 91',team2:'ABHI007LAKSH',points:9326.5,subs:65, subs1:28,subs2:37 },
    { rank:6, name:'MS',team1:'MahiDrea11',team2:'hurricanes 87',points:9284,subs:67, subs1:35,subs2:32 },
    { rank:7, name:'AM',team1:'Adi Mumbai Indians 11',team2:'Rajasthan Ke Rajwadee',points:9168,subs:84, subs1:40,subs2:44 },
    { rank:8, name:'PA',team1:'Bullfighter7',team2:'ABHIEF35NO',points:9106.5,subs:70, subs1:31,subs2:39 },
    { rank:9, name:'GK',team1:'Supersonic222',team2:'Karan1781YZ',points:9094.5,subs:66, subs1:35,subs2:31 },
    { rank:10, name:'NA',team1:'Sleeepers',team2:'St3iKeR',points:9038,subs:59, subs1:28,subs2:31 },
    { rank:11, name:'HP',team1:'HARPR2418LM',team2:'PANKAJ15806AB',points:8980,subs:68, subs1:34,subs2:34 },
    { rank:12, name:'DY',team1:'Dhawal04',team2:'IiiRocket',points:8891,subs:72, subs1:33,subs2:39 },
    { rank:13, name:'RA',team1:'RoopeshIPL11',team2:'DREAMIPLAK11',points:8773,subs:67, subs1:34,subs2:33 },
    { rank:14, name:'SP',team1:'SAMARTH92',team2:'Prsi11',points:8748,subs:76, subs1:36,subs2:40 },
    { rank:15, name:'RK',team1:'Zandu Balm',team2:'Zehereley',points:8698,subs:60, subs1:30,subs2:30 },
    { rank:16, name:'AS',team1:'Sopan Paranjape',team2:'salvationarmy',points:8401.5,subs:66, subs1:36,subs2:30 },
  ]  
}

interface TeamSummary {
   teamName: String;
   points: number;
   transfersDone: number;
 }

export interface TeamDataList {
  teamId: number;
  teamName: string;

}

export interface IApiResponse<T> {
  messageKey: string;
  errorCode: string;
  responseType: ResponseType;
  data: T;
}

export enum ResponseType {
  error,
  success,
  fatal,
  successWithWarning
}

