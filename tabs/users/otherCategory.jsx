import { BiSolidRightArrow } from "react-icons/bi";

export default function OtherCategories({categories, handleFetchProducts, filter}){
    return(
        <div className="col-span-1 2xl:flex xl:flex hidden flex-col gap-8">
            <p className="text-[#EF6509] text-600 text-[24px]">Other Categories</p>
            <ul className="flex flex-col gap-4">
                {categories.map((value, index)=>(
                    <li 
                    key={index} 
                    className="flex items-center gap-12 cursor-pointer"
                    onClick={()=>handleFetchProducts(value.id)}
                    >
                        {value.name}
                        <BiSolidRightArrow size={10} color={value.name === filter && "#EF6509"}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}