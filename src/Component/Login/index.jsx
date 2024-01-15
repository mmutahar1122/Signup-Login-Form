import react,{useState} from "react"
import LginFields from './Inputs.json'
import Input from "../../Input"
import { UserforLogin } from "../../MyStore/Slices"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Dashboard from "../Dashboard"
import { useSelector } from "react-redux"

const Login=()=>{
    const initialState={
        email:'',
        password:'',
    }
    const [state,setState]=useState(initialState);
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

    const handleSubmit=(e)=>{
e.preventDefault();
dispatch(UserforLogin(state));
const userFound = RegisteredUsers.some(users => users?.email === state?.email && users?.password === state?.password);
if(userFound){
    navigate('/dashboard')
}
setState(initialState);
    }

    const handlNavigate=()=>{
        navigate('/signup')
    }

    return <div className="mt-12">
    <form onSubmit={handleSubmit} className="block w-[500px] px-3 m-auto">
        <h1 className="font-semibold text-[#BF1017] text-center my-5 text-[32px]">Login</h1>
    {LginFields.Loginfields.map((field)=>{
        return <Input key={field.id}
        id={field.id} 
        name={field.name} 
        value={state[field.name]}
        required={field.required} 
        placeholder={field.placeholder} 
        type={field.type} 
        minLength={field.minLength}
        handleChange={handleChange}
        />
    })}

<button type="submit" className="focus:outline-none text-white font-semibold h-12 bg-[#BF1017] rounded-md w-full my-1">Login</button>
    <p className="mt-1 text-black">don't have an Account? <span onClick={handlNavigate} className="cursor-pointer text-[#BF1017]">Create One</span></p>
    </form>

</div>
}

export default Login