import { Component, OnInit, Input } from '@angular/core';
import { CompanyStock } from 'src/app/classes/company-stock';
import { CompanyFinData } from 'src/app/classes/company-fin-data';

@Component({
  selector: 'app-company-stock',
  templateUrl: './company-stock.component.html',
  styleUrls: ['./company-stock.component.css']
})
export class CompanyStockComponent implements OnInit {

  @Input() public companyStock = new CompanyStock();
  @Input() public companyFin = new CompanyFinData();
  
  constructor() { }

  ngOnInit() {
  }

}
