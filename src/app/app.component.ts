import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title:any = 'first-app';
  // username:string = 'login1';

  // showMessage(arr: Array<string>){
  //   console.log(arr);
  // }

  // click1()
  // {
  //   console.log("click");
  // }

  //----------------------------------------------
  // age: number = 20;
  // firstname: string = "Valik";
  // isRaining: boolean = false;

  // changeAge(){
  //   this.age+=10;
  // }

  //----------------------------------------------
  // counter: number = 0;

  // changeNumber(type: string){
  //   switch (type)
  //   {
  //     case "INC":
  //       this.counter += 1;
  //       break;
  //     case"DEC":
  //       this.counter -= 1;
  //       break;
  //     case"RESET":
  //       this.counter = 0;
  //       break;

  //   }
  // }

  //----------------------------------------------
  todo:string = '';
  todos: any[] = []; // todos:any

  addTodo(){
    // console.log(this.todo);
    let obj = {
      id: Date.now(),
      content: this.todo
    };
    this.todos.push(obj);
  }

  update(id: number)
  {
    let value = prompt("Enter new todo: ");
    this.todos = this.todos.map(todo => {
      if(todo.id === id){
        return{...todo, content: value}
      }else{
        return todo;
      }
    })
  }

  delete(id: number)
  {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
}
