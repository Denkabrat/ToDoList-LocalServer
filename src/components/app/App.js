import { useState ,useEffect}from 'react';
import Modal          from '../Modal/Modal';
import DonePage       from '../../pages/DonePage';
import MainPage       from '../../pages/MainPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Page404        from '../../pages/Page404';
import RootComponent  from '../index';
import './App.scss';

function App() {


const [active,setActive]       = useState(false);
const [fontColor,setFontColor] = useState(JSON.parse(localStorage.getItem('color')));
const [todo,setToDo]           = useState(JSON.parse(localStorage.getItem('todos')) || []);
const [completed,setCompleted] = useState(JSON.parse(localStorage.getItem('completeds')) || []);


  useEffect(()=>{
    localStorage.setItem('color', JSON.stringify(fontColor));
  },[fontColor])

  useEffect(()=>{
    localStorage.setItem('completeds', JSON.stringify(completed));
  },[completed])
    
  useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todo));
    },[todo])
    
 

    

  return (
    <Router>
    <div className="App">
      <h1 style={{color:fontColor,margin:0}}>Todo List</h1>
        <Routes>
          <Route path='/' element={<RootComponent/>}/>
            
          <Route path='/log' element={<RootComponent/>}/>
   

          

            <Route path='/MainPage' 
            element={<MainPage completed={completed} 
                            setCompleted={setCompleted} 
                               fontColor={fontColor} 
                                    todo={todo} 
                                 setToDo={setToDo}
                               setActive={setActive}/>}/>
            <Route path='/done'
                element={<DonePage 
                completed={completed} 
                setCompleted={setCompleted}
                setActive={setActive}/>}/>
             <Route  path="*" element={<Page404 />}/>
        </Routes>
            <Modal active={active} setActive={setActive} setFontColor={setFontColor} />
    </div>
    </Router>
  );
}

export default App;
