import React,{ memo }           from "react";
import { BsTrash}               from 'react-icons/bs';
import { TransitionGroup ,CSSTransition }from "react-transition-group";
import {MdDone}                 from 'react-icons/md'
import './ToDoList.scss';

const ToDoList = memo(({todo,setToDo,completed,setCompleted}) => {
  

const delToDo = (id) => {
      let newTodo = [...todo].filter(item=>item.id !== id);
      setToDo(newTodo);
  }

    return(
        <div>
            <TransitionGroup className='todo-list'>
            {
                todo.map(item => {
                    const addToDos = () => {
                     
                         setCompleted([{
                             id:item.id,
                             title:item.title,
                             status:false,
                       }, ...completed])
                     }

                    return (<CSSTransition 
                        key={item.id}
                        nodeRef={item.nodeRef}
                        timeout={400}
                        classNames="item">
                    <div className="toDoItem" key={item.id} ref={item.nodeRef} >
                         <p>{item.title}</p>
                         <div className="change__btns">
                            <button className="remove-btn" onClick={()=>{addToDos(item.id);delToDo(item.id)}}><MdDone size={26}/></button>
                            <button className="remove-btn" onClick={()=> delToDo(item.id)}><BsTrash size={22}/></button>
                         </div>
                    </div>
                    </CSSTransition>)
})
            }
            </TransitionGroup>
        </div> 
         )
      }
)

export default ToDoList;