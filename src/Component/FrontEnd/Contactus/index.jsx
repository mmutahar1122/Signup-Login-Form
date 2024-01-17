import { useState } from 'react'
import Input from '../../../Input'
import ContactusFields from './Inputs.json'
import { useDispatch } from 'react-redux'
import { ContactusData } from '../../../MyStore/Slices'

const Contact=()=>{
    const initialState={
        fname:'',
        lname:'',
        email:'',
        description:'',

    }
    const [state,setState]=useState(initialState);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        const {name,value}=e.target
        setState({
            ...state,
        [name]:value
        })

    }
    console.log('state---',state)
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(ContactusData(state));
        setState(initialState);

    }
    return  <>
    <div>
        <h1 className="font-semibold text-[#BF1017] text-center text-[32px] my-5">ContactUs</h1>
    <form className="block w-[500px] px-3 m-auto" onSubmit={handleSubmit}>
{ContactusFields?.ContactusFields?.map((field)=>(
    <Input  id={field.id}
name={field.name}
       placeholder={field.placeholder}
       required={field.required}
       type={field.type} 
       tagname={field.tagname}
       handleChange={handleChange}
       value={state[field.name]}
        />
        ))}
        <button type="submit" class="focus:outline-none text-white bg-[#BF1017] rounded-md w-full h-12 my-1">Submit</button>

        </form>
        </div>
    </>

}

export default Contact