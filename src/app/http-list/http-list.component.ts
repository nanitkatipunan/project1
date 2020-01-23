import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { userFormat } from '../http-form/user'
import { ServiceFolderService } from '../service-folder.service';

@Component({
  selector: 'app-http-list',
  templateUrl: './http-list.component.html',
  styleUrls: ['../child/child.component.css']
})
export class HttpListComponent implements OnInit {
  @Input() holder: userFormat[]
  @Output() formEvent = new EventEmitter()
  @Output() deleteEvent = new EventEmitter()



  constructor(private fservice: ServiceFolderService) { }

  ngOnInit() {

  }
  onEdit(info) {
    this.formEvent.emit(info)
  }
  onDelete(id) {
    this.fservice.delete(id)
      .subscribe(response => {
        console.log(response)
        this.deleteEvent.emit(id)
      })
  }
}
