import { useState } from 'react'
import PasswordHide from '../assets/Images/EyeIcon.png'
const Input=({id, name, required, placeholder, type, minLength, value, handleChange, autocomplete, tagname, maxLength, errMessage})=>{
    console.log('errMessage',errMessage)
    const [show, setShow]=useState(false);
    const ShowHideHandler=()=>{
        setShow((show)=>!show)
    }
    return <>
    {tagname === 'textarea' ? 
     <div className="my-2">
     <textarea 
     id={id}
     name={name} 
     placeholder={placeholder} 
     required={required} 
     type={type} 
     minLength={minLength} 
     onChange={handleChange} 
     value={value}  
     maxLength={maxLength}
     autoComplete={autocomplete}
     className={'text-lg text-black w-full border max-h-[100px] my-1 rounded-md p-2 overflow-hidden focus:outline-none'}/>
    {errMessage && errMessage[name] && 
          <span className="text-[#BF1017] text-sm">{errMessage[name]}</span>
      }

     </div>

   
    :
<div className={`my-2 relative ${type === 'file' ? 'md:h-[130px]':'md:h-[80px] h-[70px]'} `}>
    <input 
    id={id}
    name={name} 
    placeholder={placeholder} 
    required={required} 
    type={!show && type} 
    minLength={minLength} 
    onChange={handleChange} 
    value={value}  
    maxLength={maxLength}
    autoComplete={autocomplete}
    className={`text-lg text-black w-full border ${type === 'file' ? 'h-[130px] cursor-pointer':'h-12'} ${type === 'description' ? 'h-[100px] ': 'h-12 '}  my-1 rounded-md p-2 focus:outline-none`}/>
   {
   errMessage && errMessage[name] && 
        <span className="text-[#BF1017] text-sm">{errMessage[name]}</span>
    }
    { 
    tagname === 'password' && <img onClick={ShowHideHandler} src={PasswordHide} alt='' className='md:h-6 h-5 cursor-pointer absolute top-0 right-0 mr-[4%] md:mt-[3.5%] mt-[18px]'/>
    }

    </div>

}

</>
}
export default Input
