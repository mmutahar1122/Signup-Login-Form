import AnimalJson from './inputs.json'
import Input from '../../../Input'
import { useState, useRef } from 'react'
import { AnimalCat } from '../../../MyStore/Slices'
import { useDispatch } from 'react-redux'
const AnimalProduct=()=>{
    const initialState={
        title:'',
        description:'',
        quantity:'',
        price:'',
        phone_no:'',

    }
    const [state,setState]=useState(initialState);
    const [selectedImage, setSelectedImage] = useState(null);
    const inputImageRef=useRef(null);
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        if (e.target.type === 'file') {
            setSelectedImage(URL.createObjectURL(e.target.files[0]))
        } 
        else{
            const {name,value}=e.target;
            setState({
                ...state,
                [name]:value
            })
        }

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(AnimalCat({state,selectedImage}))
        setState(initialState);
        setSelectedImage(null)
        const request = indexedDB.open("MyTestDatabase", 1);

    }

    return <div className='max-w-[1440px] m-auto'>
     <div className="mt-12">
    <form onSubmit={handleSubmit} className="block w-[500px] px-3 m-auto">
    {AnimalJson?.AnimalProduct?.map((field)=>{
        return <Input key={field.id}
        id={field.id} 
        name={field.name} 
        value={state[field.name]}
        required={field.required} 
        placeholder={field.placeholder} 
        type={field.type} 
        minLength={field.minLength}
        maxLength={field.maxLength}
        tagname={field.tagname}
        handleChange={handleChange}
        />
    })}

<button type="submit" className="text-white font-semibold h-12 bg-[#BF1017] rounded-md w-full my-1">Upload Product</button>
    </form>

<img src={selectedImage} alt="upload image" className='h-[80px] w-[80px]' />
</div>
</div>
}
export default AnimalProduct;