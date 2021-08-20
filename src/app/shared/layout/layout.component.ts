import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  @ViewChild('profileMenu') profileMenu?: ElementRef;
  @ViewChild('sidebar') sidebar?: ElementRef;

  constructor(private renderer2: Renderer2) { }


  ngOnInit(): void {
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

}
