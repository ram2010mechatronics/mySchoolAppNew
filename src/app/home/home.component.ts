import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById('sideNavigation').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

 closeNav() {
    document.getElementById('sideNavigation').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

}
