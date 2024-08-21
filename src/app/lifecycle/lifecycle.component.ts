import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit{

  constructor(){
    console.log('Constructor implemented.');
  }
  
  

  @Input() x:string="Kiran"
  ngOnInit(): void {
    console.log('Method Init implemented.');
  }
    
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method OnChanges implemented.');
    console.log(changes);
  }

  ngDoCheck(){
    console.log('Method DoCheck implemented.');
  }

  ngAfterContentInit(): void {
    console.log('Method AfterContentInit implemented.');
  }

  ngAfterContentChecked(): void {
    console.log('Method AfterContentChecked implemented.');
  }
 
  ngAfterViewInit(): void {
    console.log('Method AfterViewInit implemented.');
  }
  ngAfterViewChecked(): void {
    console.log('Method AfterViewChecked implemented.');
  }

}
