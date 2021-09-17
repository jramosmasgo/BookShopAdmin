import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserLogin } from '../models/user/user-login.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  @ViewChild('profileMenu') profileMenu?: ElementRef;
  @ViewChild('sidebar') sidebar?: ElementRef;

  constructor(private renderer2: Renderer2, private cookieService: CookieService) { }

  user: UserLogin = {} as UserLogin;

  ngOnInit(): void {
    let userstring = localStorage.getItem('user');
    if (userstring) {
      let user: UserLogin = JSON.parse(userstring);
      this.user = user;
    }

  }

  showHideOptionsProfile(): void {
    const menu = this.profileMenu?.nativeElement;
    if (menu.classList.contains('show-box')) {
      this.renderer2.removeClass(menu, 'show-box');
    } else {
      this.renderer2.addClass(menu, 'show-box');
    }
  }

  showHideSidebar(): void {
    const sidebarMenu = this.sidebar?.nativeElement;
    if (sidebarMenu.classList.contains('show-sidebar')) {
      this.renderer2.removeClass(sidebarMenu, 'show-sidebar');
    } else {
      this.renderer2.addClass(sidebarMenu, 'show-sidebar');
    }
  }

  logOut(): void {
    this.cookieService.delete('token');
  }

}
