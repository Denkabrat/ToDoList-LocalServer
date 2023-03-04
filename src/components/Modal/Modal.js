import React,{memo}            from "react";
import { ThemeContext,themes } from '../../contexts/ThemeContext';
import Toggle                  from '../Toggle/Toggle';

import './Modal.scss';

const Modal = memo(({active,setActive,setFontColor}) => {
    window.addEventListener('keydown',(e)=>{
        e.key === 'Escape' && setActive(false);
    })

    if(active){
        document.body.classList.add('style__body__hidden');
        document.body.classList.remove('style__body__scroll');
      }else{
        document.body.classList.remove('style__body__hidden');
        document.body.classList.add('style__body__scroll');
    }
      
    return(
        <div className={active ? "modal active": "modal"} onClick={()=> setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <button className="closeButtonModal" onClick={()=> setActive(false)}>X</button>
                        <h2>Description</h2>
                <p className="modalText">Это мое приложение для создания списка дел,
                    с его помощью ты можешь создавать задачи чтобы их не
                    забыть выполнить.</p>
                <span className="manual">Чтобы добавить задачу просто впиши ее в поле и нажми кнопку "Add"</span>
                <p className="modalText">С Уважением, @Abramov_id01</p>

                <span className="dark-mode">Тёмная тема</span>

            <ThemeContext.Consumer>
                {({ theme, setTheme }) => (
                    <Toggle
                    onChange={() => {
                        if (theme === themes.light){setTheme(themes.dark); setFontColor('white')}
                        if (theme === themes.dark) {setTheme(themes.light); setFontColor('black')}}}
                    value={theme === themes.dark}/>)}
        </ThemeContext.Consumer>
            </div>
        </div>
)})
export default Modal;