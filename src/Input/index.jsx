
const Input=({id,name,required,placeholder,type,minLength,value,handleChange,autocomplete,tagname,maxLength})=>{
    return <>
    {tagname === 'textarea' ? 
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
   
    :

    <input 
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
    className={`text-lg text-black w-full border ${type === 'file' ? 'h-[130px] cursor-pointer':'h-12'} ${type === 'description' ? 'h-[100px] ': 'h-12 '}  my-1 rounded-md p-2 focus:outline-none`}/>
}

</>
}
export default Input