import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public flag: any;
  constructor(
    private router: Router,
    private sessionService: SessionService
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    if (this.sessionService.isAuthenticated()) {
      this.flag = true;

    } else {
      this.flag = false;
    }
  }

  logout() {
    this.flag = false;
    this.sessionService.logout();
  }

  profile() {
    this.router.navigate(['profile']);
  }

}
