import {
  ComponentFactoryResolver, Injectable, ReflectiveInjector,
  ViewContainerRef
} from '@angular/core';
import {SimplePopupComponent} from "./simple-popup.component";
import {ISimplePopup} from "./simple-popup-model";
import "rxjs/add/observable/of";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class SimplePopupService {

    onCloseType$ = new Subject();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  show(viewContainerRef: ViewContainerRef, data: ISimplePopup): Subject<any> {
    let factory = this.componentFactoryResolver.resolveComponentFactory(SimplePopupComponent);

    let injector = ReflectiveInjector.fromResolvedProviders([], viewContainerRef.parentInjector);
    let component = factory.create(injector);
    component.instance.popupData = data;

    viewContainerRef.insert(component.hostView);

    let subscription = component.instance.onClose.subscribe(() => {
      component.destroy();
      subscription.unsubscribe();

    });

    return this.onCloseType$

  }

}

