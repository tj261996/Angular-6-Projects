import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {SpecialEventsComponent} from './special-events/special-events.component'
const routes: Routes = [
{
  path:'events',
  component: EventsComponent 
},

{
  path: 'login',
  component : LoginComponent
},
{
 path: 'register',
 component: RegisterComponent

},
{
path: 'special',
component: SpecialEventsComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
