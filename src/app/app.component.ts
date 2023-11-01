import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'covid-tracker-app';
  hideSidebarTopbar = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd) {
        this.hideSidebarTopbar = event.url === '/login' || event.url === '/NoFoundPage';
      }
    });
  }
}
