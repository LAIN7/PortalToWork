import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  lat = 37.2119519;
  lng = -93.290407;

  hideDescription = true;
  constructor() { }

  ngOnInit() {
  }

  toggleDescription() {
    this.hideDescription = !this.hideDescription;
  }
}
