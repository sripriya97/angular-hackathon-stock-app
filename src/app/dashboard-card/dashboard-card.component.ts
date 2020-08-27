import { Component, OnInit, Input } from '@angular/core';
import { DashboardData } from 'src/app/classes/dashboard-data';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

  @Input() public marketData = new DashboardData();
  @Input() public imageUrl: String;
  
  constructor() { }

  ngOnInit() {
  }

}
