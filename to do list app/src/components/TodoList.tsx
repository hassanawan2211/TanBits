import { useState } from "react";

interface item {
    id: number;
    text: string;
    completed: boolean;

}

export const TodoList = () => {
const [todos, setTodos] = useState<item[]>([
    {id: 1, text: "tanbits is a software company ", completed:false},
    {id: 2, text: "Tanbits knowledge center ", completed:false},
])

const [input, setInput] = useState<string>("")

const handleToggle = (id:number ) {
setTodos(
    todos.map((todo)=>{
        if(todo.id === id){
            return{...todo,completed: !todo.completed};
        }
        return todo;
    })
)
}
 
const handleClick = () =>{
const newTodo: item = {id: Date.now(),text:input,completed:false}
setTodos([...todos,newTodo])
}

  return (
    <div className="main-container">
      <h1>To Do List</h1>
      <ul>
      {todos.map((todo) =>(
        <li key={todo.id} onClick={()=> handleToggle(todo.id)}>{todo.text} Style={{textDecoration: todo.completed? "line-through" : "none"}}</li>
      ))}
      </ul>
      <input type="text" placeholder="add todo iteam" onChange={(e)=>setInput(e.currentTarget.value)}/>
      <button onClick={handleClick}>Add</button>                                                                                                                                                                                                              
    </div>
  )
}

