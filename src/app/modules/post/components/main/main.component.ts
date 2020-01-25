import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public data: any;
  public dataFilter: any;
  private lastChangeTimer: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.data = data.someKey;
      this.dataFilter = this.data;
    });
  }

  public search(value) {
    clearTimeout(this.lastChangeTimer);

    this.lastChangeTimer = setTimeout(() => {
        if (value) {
        this.dataFilter = this.data.filter(item => {
          return item.id.toString().indexOf(value) > -1 ||
                  item.title.toUpperCase().indexOf(value.toUpperCase()) > -1 ||
                  item.body.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        } else {
          this.dataFilter = this.data;
        }
      }, 500);
  }

  goto(id) {
    this.router.navigate(['post-detail/' + id]);
  }

}
