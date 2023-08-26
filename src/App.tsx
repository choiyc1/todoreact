import { useState } from 'react';
import './App.css';
import { Todolist2 } from './model/todolist2';




  const App=()=>{
    const[input_todoname,setInput_TodoName]=useState<string>('');
    const[input_todocategory,setInput_TodoCategory]=useState<string>('');

    const[todolist,setTodoList]=useState<Todolist2[]>([]);

    const addItem =()=>{
      const newTodo:Todolist2={
        id: Date.now(),
        category:input_todocategory,
        name:input_todoname,
        completed:false
      }
      setTodoList([...todolist,newTodo]);
      console.log(todolist);
    };

    const onReset=()=>{
      setInput_TodoCategory('');
      setInput_TodoName('');
    }

    const makeToggle=(id:number)=>{
      setTodoList(
        todolist.map((todo)=>{
          if(todo.id===id) {
            return{...todo, completed: !todo.completed};
          }
          return todo;
        })
      );
    };

    const reName=(targetid:number)=>{
      let newname=prompt();
      console.log(newname);
      let updatetodo={
        name:newname,
        completed:false
      };
      console.log(updatetodo);
      setTodoList(
        todolist.map((todo)=>{
          if(todo.id===targetid) {
            return {...todo, ...updatetodo};
          }
          return todo;
        })
      );
      console.log(todolist);
    };
  
    const deleteTodo=(targetId:number)=>{
      setTodoList(todolist.filter(({id})=>id !== targetId));

    }

    
    return (
      <div className='maintodo'>
        <h1>TODO LIST</h1>

        <div>

          <input className='input1' value={input_todoname} type="text" placeholder="할일을 써주세요"onChange={(event)=>setInput_TodoName(event.target.value)}/>

          <input className='input1'value={input_todocategory} type="text" placeholder="어느 카테고리에 들어가나요"onChange={(event)=>setInput_TodoCategory(event.target.value)}/>
          
          <button className='addbutton' onClick={()=>{ addItem();onReset();}}>추가</button>
        </div>
        <div>
          <ul>
            {todolist.map((todo)=>(
              <li
                key={todo.id}
                value={todo.id}
                onClick={()=>makeToggle(todo.id)}
                style={{textDecoration:todo.completed?"line-through":"none"}}
                >
                {todo.name}({todo.category})
                <button className='todobutton' onClick={(e)=>{e.stopPropagation();reName(todo.id);}}>수정</button>
                <button className='todobutton' onClick={(e)=>{e.stopPropagation();deleteTodo(todo.id);}}>삭제</button>

              </li>

            ))}
          </ul>
        </div>
      </div>

    );
 }

export default App
