import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { TodoItem } from '../interfaces/todo-item';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() item: TodoItem; 

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  removeItem() {
    this.remove.emit(this.item);
  }
}
