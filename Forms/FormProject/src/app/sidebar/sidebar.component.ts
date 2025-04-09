import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarHeight:any;
  templateHeight(){
    this.sidebarHeight='128vh';
  }
  reactiveHeight(){
    this.sidebarHeight='150vh';
  }
  homeHeight(){
    this.sidebarHeight='94vh'
  }
}
