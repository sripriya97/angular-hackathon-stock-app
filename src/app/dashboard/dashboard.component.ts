import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DashboardData } from 'src/app/classes/dashboard-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public NSEArray: DashboardData;
  public BSEArray: DashboardData;
  public images: Array<string> = ['assets/bse.png','assets/nse.jpeg'];

  constructor(private dataService: DataService) {
    this.dataService.getMarketSummary().subscribe(data => {
      let a = data;
      this.NSEArray = data['marketSummaryResponse']['result'][0];
      this.BSEArray = data['marketSummaryResponse']['result'][1];
    }, error => {
      console.log(error.message);
    })
  }

  ngOnInit() {
  }

}
