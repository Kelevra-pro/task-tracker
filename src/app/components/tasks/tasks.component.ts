import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../sevices/task.service';
import { Task } from '../../Task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(() => this.tasks = this.tasks.filter((t: Task) => t.id !== task.id));
  }
}
