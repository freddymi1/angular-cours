import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Task} from '../../data/Task'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task)
  }

  onToggleClick(task: Task){
    this.onToggleReminder.emit(task)
  }

}
