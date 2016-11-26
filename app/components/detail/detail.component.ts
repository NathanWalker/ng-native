import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  moduleId: module.id,
  selector: 'detail',
  templateUrl: 'detail.component.html'
})
export class DetailComponent {

  public items$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  
  constructor(private router: RouterExtensions, private params: ModalDialogParams) {
    console.log(params.context.msg);
    let items = [
      { title: 'NativeScript' },
      { title: 'Angular' },
      { title: 'TypeScript' },
      { title: 'JavaScript' }
    ];
    let cnt = 0;
    let timer = setInterval(() => {
      if (cnt < 4) {
        this.items$.next([...this.items$.getValue(), items[cnt]]);
        cnt++;
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  public onItemTap(e) {
    for (let key in e) {
      console.log(`${key}: ${e[key]}`);
    }
  }
  
  public goBack() {
    this.router.back();
  }  

  public close() {
    this.params.closeCallback('closed the ModalDialogOptions.');
  }
}