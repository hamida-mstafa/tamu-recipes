import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-socialshare',
  templateUrl: './socialshare.component.html',
  styleUrls: ['./socialshare.component.css']
})
export class SocialshareComponent implements OnInit {
  @Input() recipeId:any

  currentLocation: string
  getLocation() {
    this.currentLocation = window.location.host
  }
  constructor() { }

  ngOnInit(): void {
    this.getLocation()
  }

}

