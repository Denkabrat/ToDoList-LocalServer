import CreateToDo    from '../components/CreateToDo/CreateToDo'
import ToDoList      from '../components/ToDoList/ToDoList';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Settings      from '../components/Settings/Settings';

const MainPage = ({fontColor,todo,setToDo,completed,setCompleted,setActive}) => {


   
return(
    <>
    <div>
    
      <ErrorBoundary>
            <Settings setActive={setActive}/>
      </ErrorBoundary>
      

        <ErrorBoundary>
              <ToDoList todo={todo} 
                     setToDo={setToDo}   
                   completed={completed} 
                setCompleted={setCompleted}/>
        </ErrorBoundary>
            
        <ErrorBoundary>
            <CreateToDo todo={todo} 
                     setToDo={setToDo}        
                   fontColor={fontColor} />
        </ErrorBoundary>
            
    </div>
    </>
)}

export default MainPage;