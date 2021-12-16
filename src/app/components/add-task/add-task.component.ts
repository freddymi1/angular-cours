import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Task } from '../../data/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string | undefined;
  day: string | undefined;
  reminder: boolean | undefined = false;
  

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text || !this.day){
      alert("Veuillez remplir tous les champs SVP!");
      return;
    }
    const newTask: any = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // @todo - emit event
    this.onAddTask.emit(newTask);

    this.text= "";
    this.day= "";
    this.reminder= false
  }

}
