import { LuDog } from "react-icons/lu";
import { GiLoincloth } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Services=()=>{
  const navigate=useNavigate();
    return <div className="max-w-[1440px] m-auto p-2 relative">

<div className="grid gap-y-5 m-auto md:w-[40%] ">
<p className="text-black text-center text-[32px] font-bold">Category</p>
<div onClick={()=>navigate('/animal-category')} className="text-black shadow rounded-md h-[100px] flex items-center justify-center cursor-pointer"><LuDog  className="w-[30px] h-[30px] mx-2 "/><span className="text-[24px] font-medium">Animals</span></div>
<div onClick={()=>navigate('/cloth-category')} className="text-black shadow rounded-md h-[100px] flex items-center justify-center cursor-pointer"><GiLoincloth  className="w-[30px] h-[30px] mx-2 "/><span className="text-[24px] font-medium">Cloths</span></div>
<div onClick={()=>navigate('/car-category')} className="text-black shadow rounded-md h-[100px] flex items-center justify-center cursor-pointer"><FaCar  className="w-[30px] h-[30px] mx-2 "/><span className="text-[24px] font-medium">Cars</span></div>
</div>
    </div>

}

export default Services