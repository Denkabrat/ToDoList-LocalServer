import {FcSettings }            from 'react-icons/fc'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {MdDone}                 from 'react-icons/md'
import {NavLink}                from 'react-router-dom'
import './Settings.scss'

const Settings = ({setActive}) => {

return(
    <div className='parent__list'>
        <div className='tabs__list'>

            <NavLink to='/MainPage' style={({isActive})=>({backgroundColor:isActive ? '#1f1f1f' : '#323232'})} className='button__list'> <button><AiOutlineUnorderedList size={26}/></button></NavLink>
            <button  className='button__list' onClick={()=> setActive(true)}><FcSettings size={26}/></button>
            <NavLink to='/done' style={({isActive})=>({backgroundColor:isActive ? '#1f1f1f' : '#323232'})} className='button__list'><button><MdDone size={26}/></button></NavLink>
        </div>
    </div>
)}

export default Settings;