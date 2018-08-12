import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

import { NavigationService } from './../navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class AppNavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    navigationEnd: Observable<NavigationEnd>;
  //  activatedRoute: ActivatedRoute;

    constructor(
      private breakpointObserver: BreakpointObserver,
      private NavigationService: NavigationService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private pageTitleService: NavigationService
      ) {

        // Create an Observable NavigationEnd event
        this.navigationEnd = this.router.events.pipe(
          filter((navigationEndEvent) => navigationEndEvent instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => {
            while (route.firstChild) route = route.firstChild;
            return route;
          }),
          filter((route) => route.outlet === 'primary'),
          mergeMap((route) => route.data)
        ) as Observable<NavigationEnd>;
      }

      ngOnInit() {
        this.navigationEnd.subscribe(evt => console.log('Navigation Ended!'));
        this.navigationEnd.subscribe(navigationEndEvent => this.pageTitleService.setPageTitle(navigationEndEvent['pageTitle']));
        this.navigationEnd.subscribe(evt => console.log("In MyNavComponent ngOnInit pageTitle is: " + this.NavigationService.getPageTitle()));
      }

      pageTitle = this.NavigationService.getPageTitle();

  }
