import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() holder:any[]= []
  @Output() formEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onEdit(info){
    this.formEvent.emit(info)
    console.log(info)
  }

}
