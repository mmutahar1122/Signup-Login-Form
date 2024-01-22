import react, { useState } from "react"
import Cart from "./Cart"
import JsonData from './Dashboard.json'
import Tiger from './Images/Tiger.jpg'
// import DetailCart from "./DetailCart"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const Dashboard=()=>{
const [selectItem,setSelectItem]=useState();
const [filtertype,setFilterType]=useState(" ")
const navigate = useNavigate();
const AllCategory=useSelector(state => state.Data.AllCategory);


const SelectedItem=(item)=>{
    setSelectItem(item)

}
useEffect(() => {
    if (selectItem) {
        navigate('/detail-cart',{state:{selectItem}});
    }
}, [selectItem]);

const handleChange=(e)=>{
    setFilterType(e.target.value.toLowerCase())
}
// const Data = JsonData?.items
const filterType = filtertype.trim();
const data = AllCategory?.filter(item => item.state.title && item.state.title.includes(filterType));


    return <div className="max-w-[1440px] m-auto p-2">
    
<form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" onChange={(e)=>handleChange(e)} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search..."/>
        {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#BF1017] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
</form>

    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-3 gap-y-8 mt-2">
    
      {
        data?.map((item,i)=>(
            <Cart 
            key={i}
            image={item.selectedImage}
            title={item.state.title?.toLowerCase()}
            description={item.state.description}
            price={item.state.price}
           SelectedItem={()=> SelectedItem(item)}

            />
        ))
}
</div>
    
    </div>
}

export default Dashboard