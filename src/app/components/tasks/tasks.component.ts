import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';

import { Task } from '../../data/Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  showAddTask: boolean | any;
  subscription: Subscription | undefined;

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value=>(this.showAddTask = value))
  }

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks()
    // Or Using Observable service
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    })
  }
  deleteTask(task: Task){
    this.taskService.deleteTask(task)
    .subscribe(()=>{
      this.tasks = this.tasks.filter(ts=>ts.id! !== task.id)
    })
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task)
    })
  }

}
