import { useLocation } from "react-router-dom";
const DetailCart = () => {
    const location=useLocation();

    const {title,description,price,image}=location.state.selectItem

    return  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-auto mt-[100px]">
        <a href="#">
            <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-black dark:text-gray-400">{description}</p>
            <div className="flex justify-between">
                <p className="text-black text-xl font-medium">{price}</p>
                 <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#BF1017] rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Buy Now
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
            </div>
        </div>
    </div>
    
    
}
export default DetailCart