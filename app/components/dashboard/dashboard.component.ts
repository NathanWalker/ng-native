import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  public checkProp: boolean = false;
}