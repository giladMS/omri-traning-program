import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SimplePopupComponent} from "./simple-popup.component";
import {SimplePopupService} from "./simple-popup.service";
import {DynamicComponentComponent} from "../../dynamic-component/dynamic-component.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimplePopupComponent],
  providers:[SimplePopupService],
  entryComponents:[DynamicComponentComponent,SimplePopupComponent]
})
export class SimplePopupModule { }
