import react,{useState} from "react";
import signupFields from './Inputs.json';
import Input from "../../Input";
import { Signup } from "../../MyStore/Slices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const SignUp=()=>{
    const initialState={
        fname:'',
        lname:'',
        email:'',
        password:'',


    }
const [state,setState]=useState(initialState)
const dispatch=useDispatch();
const navigate=useNavigate();




    const handleChange=(e)=>{

        const {name,value}=e.target
        // console.log(name,value)
        setState({
            ...state,
            [name]:value
        })
    }

    const handlNavigate=()=>{
        navigate('/')
    }

    const handleSubmit=(e)=>{
        console.log('e',e)
e.preventDefault();
dispatch(Signup(state))
setState(initialState)
    }

    

    return <div className="mt-12">
    <form className="block w-[500px] px-3 m-auto" onSubmit={handleSubmit}>
        <h1 className="font-semibold text-[#BF1017] text-center my-5">SignUp</h1>
        {signupFields.Signupfields.map((field) => {
            return <Input key={field.id}
                id={field.id} 
                name={field.name} 
                required={field.required} 
                placeholder={field.placeholder} 
                type={field.type} 
                minLength={field.minLength} 
                handleChange={handleChange}
                value={state[field.name]}
            />
        })}

        <button type="submit" class="focus:outline-none text-white bg-[#BF1017] rounded-md w-full my-1">Signup</button>
        <p className="mt-1">Already have an Account? <span onClick={handlNavigate} className="cursor-pointer text-[#BF1017]">Goto Login</span> </p>
    </form>
</div>

    //  value={state[field.name]}
}

export default SignUp;