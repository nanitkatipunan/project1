import { Component, OnInit } from '@angular/core';
import { ServiceFolderService } from '../service-folder.service'
import Swal from 'sweetalert2'
import { userFormat } from './user';
// import { flatten } from '@angular/compiler';



@Component({
  selector: 'app-http-form',
  templateUrl: './http-form.component.html',
  styleUrls: ['../parent/parent.component.css']
})
export class HttpFormComponent implements OnInit {
  public id: number = 0;
  public inputName: string
  public inputUsername: string
  public inputEmail: string
  public inputContact: string
  public edit: boolean = false
  public data: userFormat[]
  public press: boolean = false
  public cancel: boolean = false

  constructor(private fservice: ServiceFolderService) { }

  ngOnInit() {
    this.fservice.getData()
      .subscribe(response => {
        this.data = response
      })
  }
  onSubmit() {
    if (this.edit == false) {
       var info  =  {
        id: this.data.length + 1,
        name: this.inputName,
        username: this.inputUsername,
        email: this.inputEmail,
        phone: this.inputContact
      }
      this.fservice.add(info)
      .subscribe(response =>{
        console.log(response)
      })
      this.data.push(info)
      Swal.fire({
        icon: 'success',
        title: 'Your information has been sucessfully submitted',
        showConfirmButton: false,
        timer: 1800
      })
    } else {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].id == this.id) {
          var info = {
            id: this.id,
            name: this.inputName,
            username: this.inputUsername,
            email: this.inputEmail,
            phone: this.inputContact
          }
          this.fservice.update(info,this.id)
          .subscribe(response=>{
            console.log(response)
          })
          this.data[this.data.indexOf(this.data[i])] = info
          this.edit = false
          this.press = !this.press;
          Swal.fire({
            icon: 'success',
            title: 'Your information has been edited successfully!',
            showConfirmButton: false,
            timer: 2000
          })
          break
        }
      }
    }
  }
  onClick(information) {
    this.inputName = information.name;
    this.inputUsername = information.username;
    this.inputEmail = information.email;
    this.inputContact = information.phone;
    this.id = information.id;
    this.edit = true
    this.press = !this.press;
    this.cancel = true
  }
  onPress() {
    this.press = !this.press;
    this.press == true ? this.cancel = true : this.cancel = false

  }
  btnCancel() {
    this.press = !this.press;
    this.cancel = false
  }
  onDelete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#rgb(4, 76, 94)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].id === id) {
            this.data.splice(this.data.indexOf(this.data[i]), 1);
            break;
          }
        }
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}



