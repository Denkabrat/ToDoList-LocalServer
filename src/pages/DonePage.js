import { BsTrash} from 'react-icons/bs';
import { v4 as uuidv4 }                  from 'uuid';
import { TransitionGroup ,CSSTransition }from "react-transition-group";
import './DonePage.scss'
import Settings      from '../components/Settings/Settings';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
const DonePage = ({completed,setCompleted,setActive}) => {


    const delToDos = (id) => {
        let newTodo = [...completed].filter(item=>item.id !== id);
        setCompleted(newTodo);
    }

        return(
            <div>
                 <>
                    <ErrorBoundary>
                            <Settings  setActive={setActive}/>
                    </ErrorBoundary>
                 </>

                <TransitionGroup className='todo-list'>
                {
                    completed.map(item=>(
                        <CSSTransition 
                        key={item.id}
                        nodeRef={item.nodeRef}
                        timeout={400}
                        classNames="item">
                        <div className="toDoItem" key={uuidv4()} ref={item.nodeRef} style={{marginTop:40,marginBottom:0}} >
                             <p>{item.title}</p>
                             <div className="change__btns">
                                <button className="remove-btn" onClick={()=> delToDos(item.id)}><BsTrash size={22}/></button>
                             </div>
                        </div>
                        </CSSTransition>
                    ))  
                }
                </TransitionGroup>
            </div>
        )
    }




export default DonePage;