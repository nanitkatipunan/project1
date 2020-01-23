import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpListComponent } from './http-list/http-list.component';
import { HttpFormComponent } from './http-form/http-form.component';
import {HttpClientModule}  from '@angular/common/http';
import { ErrorComponent } from './error/error.component'
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import {RouterModule} from '@angular/router'


const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'dashboard', component: HttpFormComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'notFound', component: ErrorComponent },
  { path: '**', redirectTo: '/notFound' }
]


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HttpListComponent,
    HttpFormComponent,
    ErrorComponent,
    HomeComponent,
    ViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
