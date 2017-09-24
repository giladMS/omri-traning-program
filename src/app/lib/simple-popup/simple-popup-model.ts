import {Subject} from "rxjs/Subject";
import {ElementRef} from "@angular/core";
export class SimplePopupModel implements ISimplePopup{

  type:string;
  description:string;
  title:string;
  okButtonText:string;
  cancelButtonText:string;
  isBackDropped:boolean;

  constructor(type:string,description:string,okButtonText:string,cancelButtonText:string,isBackDropped:boolean,title?:string){
    this.type = type;
    this.title = title;
    this.description = description;
    this.okButtonText = okButtonText;
    this.cancelButtonText = cancelButtonText;
    this.isBackDropped = isBackDropped;
  }
}

export interface  ISimplePopup {
  type:string;
  description:string;
  title?:string;
  okButtonText?:string;
  cancelButtonText?:string;
  isBackDropped?:boolean;
}

export interface OnCloseResponse {
  closingType:string;
  parent:ElementRef;
}
