import react,{useState} from "react"
import LginFields from './Inputs.json'
import Input from "../../../Input"
import { UserforLogin } from "../../../MyStore/Slices"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import * as yup from 'yup'

const Login=()=>{
    const initialState={
        email:'',
        password:'',
    }
    const [state,setState]=useState(initialState);
    const [errMessage,setErrMessage]=useState({});
    const RegisteredUsers=useSelector((state)=>state.Data.signUpusers)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;

        setState({
            ...state,
            [name]:value
        })

    }
const LoginSchema=yup.object({
    email : yup.string().email('Email must be a valid email').required('Email is Required'),
    password : yup.string().required('Password is required'),
})
    const handleSubmit= async (e)=>{
e.preventDefault();
try{
    const isValid = await LoginSchema.validate(state, {abortEarly:false});

    if(isValid) {
        dispatch(UserforLogin(state));

        const userFound = RegisteredUsers.some(users => users?.email === state?.email && users?.password === state?.password);

        if(userFound){

            navigate('/dashboard') 

        }else{
            alert("User Not Found")
        }
        setState(initialState);
        setErrMessage({});
            }
    }
    catch(error){
        // console.log('error',error)
        const formattedError = error.inner.reduce((acc, curr)=>{
            acc[curr.path] = curr.message;
            return acc;
        },{})
        setErrMessage(formattedError);

    }
}
console.log('erree',errMessage)

    return <div className="mt-12">
    <form onSubmit={handleSubmit} className="block md:w-[500px] px-1 md:px-3 m-auto">
        <h1 className="font-semibold text-[#BF1017] text-center my-5 text-[32px]">Login</h1>
    {LginFields.Loginfields.map((field)=>{
        return <Input key={field.id}
        id={field.id} 
        name={field.name} 
        value={state[field.name]}
        // required={field.required} 
        placeholder={field.placeholder} 
        type={field.type} 
        tagname={field.tagname}
        minLength={field.minLength}
        handleChange={handleChange}
        errMessage={errMessage}
        />
    })}

<button type="submit" className="focus:outline-none text-white font-semibold h-12 bg-[#BF1017] rounded-md w-full my-1">Login</button>
    <p className="mt-1 md:text-base text-sm text-black">don't have an Account? <Link to="/signup"><span className="cursor-pointer text-[#BF1017]">Create One</span></Link></p>
    </form>

</div>
}

export default Login