
export interface TeamSummary {
    teamId: number;
    teamName: String;
    points: number;
    transfersDone: number;
    viceCaptain: string;
    captain: string;
    rank: number;
    dayPoints: number;
    dayTransfers: number;
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