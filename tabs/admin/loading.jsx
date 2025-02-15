import { Rings } from "react-loading-icons"

export default function Loading(){
    return(
        <div className="fixed top-0 right-0 flex justify-center items-center h-full w-full bg-[#35318E] backdrop-blur-3xl z-50">
            <Rings width={50} height={50}/>
        </div>
    )
}