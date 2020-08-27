import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageURL = 'assets/yahoologo.jpg';
  imageText = 'news icon';

  constructor(private routerService : RouterService) { }

  ngOnInit() {
  }

  goToSearchPage(code) {
    this.routerService.routeToSearch(code);

  }

  goToHomePage() {
    this.routerService.routeToDashboard();
  }
}
