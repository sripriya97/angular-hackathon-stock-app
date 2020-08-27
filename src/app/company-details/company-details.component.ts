import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service'
import { CompanyDetail } from '../classes/company-detail';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  @Input() public companyData = new CompanyDetail(); 
  @Input() public imageUrl : string; 
  

  constructor() { }

  ngOnInit() {
  }

}
