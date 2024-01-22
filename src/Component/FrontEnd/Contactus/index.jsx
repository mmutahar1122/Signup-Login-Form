import { useState } from 'react'
import Input from '../../../Input'
import ContactusFields from './Inputs.json'
import { useDispatch } from 'react-redux'
import { ContactusData } from '../../../MyStore/Slices'
import * as yup from 'yup'

const Contact = () => {
    const initialState = {
        fname: '',
        lname: '',
        email: '',
        description: '',

    }

    const contactusSchema = yup.object({
        fname: yup.string().required('first name is required'),
        lname: yup.string().required('last name is required'),
        email: yup.string().email().required('email is required'),
        description: yup.string().min(20).required('description is required'),
    })
    const [state, setState] = useState(initialState);
    const [errMessage, setErrMessage] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const isValid = await contactusSchema.validate(state, { abortEarly: false })

            if (isValid) {
                dispatch(ContactusData(state));
                setState(initialState);
                setErrMessage({})
                
            }
        }
        catch (error) {
            const errorFormated = error.inner.reduce((acc, curr) => {
                acc[curr.path] = curr.message

                return acc
            }, {})
            setErrMessage(errorFormated)
        }

    }
    return <>
        <div>
            <h1 className="font-semibold text-[#BF1017] text-center text-[32px] my-5">ContactUs</h1>
            <form className="block w-[500px] px-3 m-auto" onSubmit={handleSubmit}>
                {ContactusFields?.ContactusFields?.map((field) => (
                    <Input id={field.id}
                        name={field.name}
                        placeholder={field.placeholder}
                        //    required={field.required}
                        type={field.type}
                        tagname={field.tagname}
                        handleChange={handleChange}
                        errMessage={errMessage}
                        value={state[field.name]}
                    />
                ))}
                <button type="submit" className="focus:outline-none text-white bg-[#BF1017] rounded-md w-full h-12 my-1">Submit</button>

            </form>
        </div>
    </>

}

export default Contact