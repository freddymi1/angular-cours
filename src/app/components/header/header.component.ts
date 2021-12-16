import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask: boolean | any = false;
  subscription: Subscription | any;
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe(value=>(this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

}
