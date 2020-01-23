import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceFolderService } from '../service-folder.service';
import { userFormat } from '../http-form/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
public informations:any[]=[]
public id:number
  constructor(
    private route: ActivatedRoute,
    private fservice: ServiceFolderService
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    this.fservice.getInfo(this.id)
    .subscribe(response =>{
      console.log(response)
      this.informations.push(response)
    })
  }

}
