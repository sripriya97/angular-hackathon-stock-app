import { Component, OnInit, Input } from '@angular/core';
import { CompanyNews } from '../classes/company-news'

@Component({
  selector: 'app-company-news',
  templateUrl: './company-news.component.html',
  styleUrls: ['./company-news.component.css']
})
export class CompanyNewsComponent implements OnInit {

  @Input() companyNews = new CompanyNews();
    constructor() { }

ngOnInit() {
}

}
