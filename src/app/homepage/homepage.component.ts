import { Component, OnInit, OnChanges } from '@angular/core';
import { SpacexDataService } from '../services/spacex-data.service';
import { FlightDetails } from '../models/flight-details';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  years=["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];
  loading=false;
  rocketLaunches: Array<FlightDetails>=[];
  launchesFilterForm:FormGroup;
  constructor(public spacexDataService: SpacexDataService,private fb:FormBuilder) { }

  ngOnInit() {
    this.launchesFilterForm = this.fb.group({
      launchYear: [null],
      successfulLaunch: [null],
      successfulLanding: [null],
    });
    this.fetchLaunches();
    this.launchesFilterForm.valueChanges.subscribe((val)=>{
      this.rocketLaunches=[];
      this.fetchLaunches();
    });
  }
  fetchLaunches(){
    try{
      this.loading=true;
      this.spacexDataService.fetchAllSpaceXLaunches(this.launchesFilterForm.value).subscribe((res: Array<FlightDetails>)=>{
        this.rocketLaunches=res;
        this.loading=false;
      }),
      (err)=>{
        console.log("Error fetching details from service"+err);
        this.loading=false;
      }
    }
   catch{
     console.log("Service unavailable");
     this.loading=false;
   }
  }
}
