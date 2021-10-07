import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 categories:Array<string> =["movie", "series", "episode"]

  constructor() { }

  ngOnInit(): void {
  }

}
