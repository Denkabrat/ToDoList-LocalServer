import React,{ useState,memo} from "react";
import { v4 as uuidv4 }       from 'uuid';
import { useFormik }          from 'formik';
import * as Yup               from 'yup';
import './CreateToDo.scss';


const CreateToDo = memo(({setToDo,todo,fontColor}) => {

    const [color,setColor]   = useState('#323232');
    const [value,setValue]   = useState(todo.title);
    


    const addToDo = () => {
        setToDo([{
            id:uuidv4(),
            title:formik.values.text,
    }, ...todo])

      document.querySelector('input').value = '';
      
    }

    const formik = useFormik({
        initialValues:{
            text:"",
        },validationSchema:Yup.object({
            text:Yup.string()
                    .min(5, 'No less than 5 symbols'),
    }),
        onSubmit:values => JSON.stringify(values, null, 2)
    })

  
        return(
            <div className="addTask">
                <form onSubmit={formik.handleSubmit}>
                        <input 
                            style={{borderColor:color,color:fontColor}}
                            maxLength='80'
                            id='text'
                            name='text'
                            type='text'
                            value={formik.values.value}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            onKeyDown={e => e.key === 'Enter' && formik.values.text.length >= 5 ? addToDo(value) : null}
                            placeholder='Add a task'/>
                            {formik.errors.text && formik.touched.text ? <h3 style={{color:'#323232'}}>{formik.errors.text}</h3> : null}
                </form>
                        <button onClick={formik.values.text.length >= 5 ? addToDo : null} className="addButton">Add</button>
            </div>
            
    )
        
})




export default CreateToDo;
