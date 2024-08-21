import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges,OnInit{
  
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

}
