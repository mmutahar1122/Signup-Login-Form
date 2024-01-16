import CarInputs from './CarInputs.json'
import Input from '../../../Input';
import { useState } from 'react';
import { CarCat } from '../../../MyStore/Slices';
import { useDispatch } from 'react-redux';
const CarProduct=()=>{
    const initialState={
        title:'',
        description:'',
        color:'',
        quantity:'',
        price:'',
        phone_no:''
    }
    
    const [state,setState]=useState(initialState);
    const [selectedImage,setSelectedImage]=useState(null);
    const dispatch=useDispatch();
        const handleChange=(e)=>{
    
                if(e.target.type==='file'){
    
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
    dispatch(CarCat({state,selectedImage}))
    setState(initialState);
    setSelectedImage(null);
        }
    
    return <div className="max-w-[1440px] m-auto">
   <div className="mt-12">
    <form onSubmit={handleSubmit} className="block w-[500px] px-3 m-auto">
    {CarInputs?.CarInputs?.map((field)=>{
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

export default CarProduct;