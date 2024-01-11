const Input=({id,name,required,placeholder,type,minLength,value,handleChange,autocomplete})=>{
// console.log(fields)
    return  <input 
    id={id}
    name={name} 
    placeholder={placeholder} 
    required={required} 
    type={type} 
    minLength={minLength} 
    onChange={handleChange} 
    value={value}  
    autoComplete={autocomplete}
    className="text-lg w-full border h-12 my-1 rounded-md p-2 text-center focus:outline-none"/>
}
export default Input