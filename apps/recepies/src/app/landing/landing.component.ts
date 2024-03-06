import { Component, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'recepies-workspace-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit, OnDestroy {
  static isBrowser = new BehaviorSubject<boolean>(false);
  platformId = inject(PLATFORM_ID);
  isBorwser = false;
  isAuthenticated = false;
  // store = inject(Store);
  router = inject(Router);

  constructor() {
    LandingComponent.isBrowser.next(isPlatformBrowser(this.platformId));
  }

  ngOnInit() {
    LandingComponent.isBrowser.subscribe((isBrowser) => {
      if (isBrowser) {
          // this.store.dispatch(userActions.loginSuccess(user));
          console.log('I am a browser');
          // this.router.navigate(['/home']);
        } else {
        console.log('I am not a browser');
      }
    });
  }

  ngOnDestroy() {
    LandingComponent.isBrowser.unsubscribe();
  }

}
