import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CompanyDetail } from 'src/app/classes/company-detail';
import { CompanyStock } from 'src/app/classes/company-stock';
import { CompanyFinData } from 'src/app/classes/company-fin-data';
import { CompanyNews } from 'src/app/classes/company-news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public companyDetails: CompanyDetail;
  public companyStock: CompanyStock;
  public companyFin: CompanyFinData;
  public companyNews: Array<CompanyNews>;
  public companyCode: string;
  public image: string;
  public imageList = {
    'NWG': 'assets/natwest.jpg',
    'ICICIBANK.NS': 'assets/icici.jpg',
    'SBIN.NS': 'assets/sbi.jpeg',
    'KOTAKBANK.NS': 'assets/kotak.jpg',
    'NIITLTD.NS': 'assets/niit.jpg'
  }


  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(data => {
      this.companyCode = data.companyCode;
      this.image = this.imageList[this.companyCode];
      this.dataService.getCompanyDetails(this.companyCode).subscribe(data => {
        this.companyDetails = data['summaryProfile'];
        this.companyStock = data['price'];
        this.companyFin = data['financialData'];
      });

      this.dataService.getCompanyNews(this.companyCode).subscribe(data => {
        this.companyNews = data['items']['result'];
      });

    })


  }

  ngOnInit() {
  }

}
