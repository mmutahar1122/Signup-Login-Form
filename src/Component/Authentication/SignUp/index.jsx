import react,{useState} from "react";
import * as yup from 'yup';    
import signupFields from './Inputs.json';
import Input from "../../../Input";
import { Signup } from "../../../MyStore/Slices";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignUp=()=>{
    const initialState={
        fname:'',
        lname:'',
        email:'',
        password:'', 
    }
const [state,setState]=useState(initialState);
const [errMessage,setErrMessage]=useState({});
const dispatch=useDispatch();
const navigate=useNavigate();

    const handleChange= (e)=>{

        const {name,value}=e.target

        setState({
            ...state,
            [name]:value
        })

       
    }
// const showPassword=()=>{ 
//     setState((prev)=>({
//         ...prev,
        

// }))

// }
    const signUpSchema = yup.object({
        fname: yup.string().required('First name is required'),
        lname: yup.string().required('Last name is required'),
        email: yup.string().email('Email must be a valid email').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    });
    
    const handleSubmit= async (e)=>{
e.preventDefault();

try{
    const isValid= await signUpSchema.validate(state,{abortEarly:false})
    if(isValid){
        dispatch(Signup(state))
        setState(initialState)
        setErrMessage({})
        navigate('/dashboard')
        console.log("signUp Succefully")

    }
} catch(error) {
    const formattedErrors = error.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
    }, {});
    setErrMessage(formattedErrors)
    console.log("Invalid signUp Data",formattedErrors)

}


    }


    return <div className="mt-12">
    <form className="block w-[500px] px-3 m-auto" onSubmit={handleSubmit}>
        <h1 className="font-semibold text-[#BF1017] text-center text-[32px] my-5">SignUp</h1>
        {signupFields.Signupfields.map((field) => {
            return <Input key={field.id}
                id={field.id} 
                name={field.name} 
                // required={field.required} 
                placeholder={field.placeholder} 
                type={field.type}   
                // minLength={field.minLength} 
                handleChange={handleChange}
                value={state[field.name]}
                errMessage={errMessage}
                tagname={field.tagname}
                />
            })}
            {/* <p className="mt-1 text-black h-10 b">{errMessage.lname}</p> */}

        <button type="submit" className="focus:outline-none text-white font-semibold bg-[#BF1017] rounded-md w-full h-12 my-1">Signup</button>
      <p className="mt-1 text-black">Already have an Account? <Link to="/"><span className="cursor-pointer text-[#BF1017]">Goto Login</span></Link> </p>
    </form>
</div>

    //  value={state[field.name]}
}

export default SignUp;