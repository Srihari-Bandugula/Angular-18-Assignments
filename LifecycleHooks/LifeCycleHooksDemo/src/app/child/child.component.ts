import { NgTemplateOutlet } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [NgTemplateOutlet],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  //To store the data from the ParentComponent
  @Input() inputData!: string;

  @ContentChild('projectedContent') projectedTemplate!: TemplateRef<any>; //For the reference of <ng-content>
  @ViewChild('viewElement') viewElement!: ElementRef; //For the reference of ViewElement in the DOM

  // by default contructor will be called first after the component creation
  constructor() {
    console.log('Constructor called');
  }

  //On every change of variable inputData it will be called
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes);
  }

  //It will be called on initializing the all components
  ngOnInit() {
    console.log('ngOnInit called');
  }


  //It will be called on every change detection
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  //It will be called after <ng-content> initialization
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  //It will be called after change detection in the <ng-content> 
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  //It will be called after the View/DOM initializes
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('View Element:', this.viewElement.nativeElement);
  }

  //It will be called after every change/check in the view
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  //It will be called after destroying the component (ChildComponent)
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
