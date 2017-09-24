import {Component, ElementRef, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import  {SimplePopupService} from "../lib/simple-popup/simple-popup.service";
import {Subscription} from "rxjs/Subscription";
import {OnCloseResponse, SimplePopupModel} from "../lib/simple-popup/simple-popup-model";
import {ButtonNames, OnCloseStatuses, Statuses} from "../lib/app-consts/app.consts";

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit, OnDestroy {

  response: string;
  subscription: Subscription;

  constructor(private simplePopupService: SimplePopupService,
              private containerRef: ViewContainerRef) {
  }

  ngOnInit() {
  }

  openPopup() {
    let popupData = new SimplePopupModel(Statuses.SUCCESS, 'test popup', ButtonNames.CONFIRM, ButtonNames.CANCEL, true, 'Test title');
    // Observable happens when user closes the popup
   this.simplePopupService.show(this.containerRef, popupData).subscribe((closingType)=>{
      switch (closingType) {
      case OnCloseStatuses.SUCCESS:
      break;
      case OnCloseStatuses.CANCEL:
      break;
      case OnCloseStatuses.DISMISS:
      break;
      }
   });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
