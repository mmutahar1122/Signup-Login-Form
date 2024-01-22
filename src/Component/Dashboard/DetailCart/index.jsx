import { useLocation } from "react-router-dom";
import BackArrow from '../../../assets/Images/BackArrow.png'
import { useNavigate } from "react-router-dom";
const DetailCart = () => {
    const location=useLocation();
    const navigate=useNavigate()

    const {title,description,price,phone_no,quantity,color
    }=location.state.selectItem.state
    const {selectedImage}=location.state.selectItem
    console.log('location.state.selectItem',selectedImage);

    return <> 
    <div className="p-5">
    <img onClick={()=>navigate(-1)} src={BackArrow} alt="" className="sm:w-10 w-7 cursor-pointer absolute mt-[50px]"/> 
     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700  m-auto mt-[100px] p-2">
        <div className="w-full">
            <img className="rounded-t-lg w-full" src={selectedImage} alt="" />
        </div>
        <div className="mt-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-black dark:text-gray-400"><span className="font-medium">Color :</span> {color}</p>
            <div className="flex justify-between border-b">
            <p className="mb-3 font-medium text-black dark:text-gray-400">Qty Available</p>
 <p className="mb-3 font-normal text-black dark:text-gray-400">{quantity
}</p>
</div>

            <p className="mb-3 font-normal text-black dark:text-gray-400"> <span className="font-medium">Description :</span> {description}</p>
            <div className="flex justify-between border-b">
            <p className="mb-3 font-medium text-black dark:text-gray-400">Contact us</p>
 <p className="mb-3 font-normal text-black dark:text-gray-400">{phone_no
}</p>
</div>
            <div className="flex justify-between mt-3 ">
                <p className="text-black text-xl font-medium">${price}</p>
                 <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#BF1017] rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Buy Now
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
            </div>
        </div>
    </div>
    </div>
    </>
    
}
export default DetailCart