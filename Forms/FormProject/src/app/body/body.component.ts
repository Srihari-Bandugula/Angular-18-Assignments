import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-body',
  imports: [ContentComponent,SidebarComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
