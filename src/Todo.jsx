import React, { useState } from 'react'

const Todo = () => {
    const [task,setTask]=useState(["Eat Breakfast ","Attend Meeting"])
    const [newTask,setNewTask]=useState("")

    function inputChange(event){
      setNewTask(event.target.value)
    }

    function addTask(){
     if(newTask.trim()!==""){
        setTask(t=>[...t,newTask])
        setNewTask("")
     }
    }
  
  
  function deleteTask(index){
    const updatedTask =task.filter((_,i)=>i!==index)
    setTask(updatedTask)
  } 
  function moveTaskUp(index){
    if(index>0){
        const updatedTask=[...task];
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
        setTask(updatedTask)
    }
  }

  function moveTaskDown(index){
    if(index<task.length-1){
        const updatedTask=[...task];
        [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
        setTask(updatedTask)
    }
  }
  return (
    <div className='todo-list'>
      <h5>Hey 👋 Add Your Task</h5>

      <div>
        <input type="text" placeholder='enter task here...' value={newTask} onChange={inputChange} />
        <button className='add-button' onClick={addTask}>Add Task</button>
      </div>
        <ol>
            {task.map((ta,index)=>
                <li key={index}>
                    <span className='text'>{ta}</span>
                    <button  className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
                    <button className='move-button' onClick={()=>moveTaskUp(index)}>👆</button>
                    <button className='move-button' onClick={()=>moveTaskDown(index)}>👇</button>
                </li>
            )}
        </ol>
    </div>
  )
}

export default Todo