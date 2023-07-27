import { Component,HostBinding,HostListener,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  showContent: boolean = true;

  menuItemClicked(): void {
    this.showContent = !this.showContent;
}
}
  

  

