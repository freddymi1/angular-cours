import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Task } from '../data/Task';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Get the api url
  private apiUrl = "http://localhost:5000/tasks";

  constructor( private http: HttpClient) { }

  // getTasks(): Task[]{
  //   return TASKS
  // }
  // OR Using Observable  and mock-data
  // getTasks(): Observable<Task[]>{
  //   const tasks = of(TASKS);
  //   return tasks;
  // }
  // OR using http request
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  // Delete task
  deleteTask(task: Task): Observable<Task>{
    const taskId = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(taskId)
  }

  // Reminder toggle
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
