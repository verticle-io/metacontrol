import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription }   from 'rxjs';

import { ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Event, NavigationEnd, Router } from '@angular/router';

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch()



import { formatDate } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'metacontrol';

  constructor(
    private router: Router
  ) {}


  ngOnInit() { }


  ngOnDestroy() { }

}
