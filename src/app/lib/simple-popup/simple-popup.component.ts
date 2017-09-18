import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {ISimplePopup, OnCloseResponse} from "./simple-popup-model";
import {OnCloseStatuses} from "../app-consts/app.consts";

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss']
})


export class SimplePopupComponent implements OnInit {

  @Input() popupData:ISimplePopup;
   onClose:Subject<OnCloseResponse> = new Subject();

  constructor(private el:ElementRef) { }

  ngOnInit() {
  }

  confirm(){
    this.onClose.next({closingType:OnCloseStatuses.SUCCESS,parent:this.el});
  }

  dismiss(){
    this.onClose.next({closingType:OnCloseStatuses.DISMISS,parent:this.el});
  }

  close(){
    this.onClose.next({closingType:OnCloseStatuses.CANCEL,parent:this.el});
  }

}
