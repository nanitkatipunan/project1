import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
// import { IfStmt } from '@angular/compiler';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    public id: number = 0;
    public inputFname: string
    public inputLname: string
    public inputEmail: string
    public inputGender: string
    public inputPass: string
    public edit: boolean = false
    public data: any[] = []
    public press:boolean=false
    public cancel:boolean=false


    constructor() { }

    ngOnInit() {
    }
    onSubmit() {
        if (this.edit == false) {
            var info = {
                id: this.data.length + 1,
                firstname: this.inputFname,
                lastname: this.inputLname,
                gender: this.inputGender,
                email: this.inputEmail,
                password: this.inputPass
            }
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
                        firstname: this.inputFname,
                        lastname: this.inputLname,
                        gender: this.inputGender,
                        email: this.inputEmail,
                        password: this.inputPass
                    }
                    this.data[this.data.indexOf(this.data[i])] = info
                    this.edit = false
                    this.press=!this.press;
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
        this.inputFname = information.firstname;
        this.inputLname = information.lastname;
        this.inputGender = information.gender;
        this.inputEmail = information.email;
        this.inputPass = information.password;
        this.id = information.id;
        this.edit = true 
        this.press=!this.press;
        this.cancel=true
    }
    onPress(){
        this.press=!this.press;
        this.press==true ? this.cancel=false : this.cancel=true

    }
    btnCancel(){
        this.press=!this.press;
        this.cancel=false
    }
}
