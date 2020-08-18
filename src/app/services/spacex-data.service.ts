import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConstants } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {

  constructor(private http: HttpClient) { }

  fetchAllSpaceXLaunches(launchFilterForm)
  {
    let paramString="?limit=100";
    Object.keys(launchFilterForm).forEach(function(key) {
      if((launchFilterForm[key]!=null) && (launchFilterForm[key]!=""))
      {
        switch(key) {
          case 'launchYear':
            paramString +="&launch_year="+launchFilterForm[key];
            break;
          case 'successfulLaunch':
            paramString +="&launch_success="+launchFilterForm[key];
            break;
          case 'successfulLanding':
            paramString +="&land_success="+launchFilterForm[key];
            break;
          default:
            break;
        }
      }
    })
    let url=ServiceConstants.SPACEX_LAUNCH_ENDPOINT + paramString;
    return this.http.get(url);
  }
}
