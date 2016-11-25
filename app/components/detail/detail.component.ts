import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'detail',
  templateUrl: 'detail.component.html'
})
export class DetailComponent {

  constructor(private router: RouterExtensions) { }
  
  public goBack() {
    this.router.back();
  }  
}