

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {WelcomeComponent} from "./welcome/welcome.component";
import {DynamicComponentComponent} from "./dynamic-component/dynamic-component.component";

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dynamic-component', component: DynamicComponentComponent },

  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
