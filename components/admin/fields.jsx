import Image from "next/image"


export default function Fields({fields, image}){
    return(
        <div className="flex flex-col gap-8 items-center">
            {image != "" &&
            <div className="rounded-full border overflow-hidden">
                <Image src={image} alt="" width={80} height={100}/>
            </div>
            }
            <div className="grid grid-cols-2 gap-6 w-full">
            {fields.map((field, index)=>(
                <div className="col-span-1 flex flex-col gap-1 w-full" key={index}>
                    <label htmlFor="">{field.name}</label>
                    <input type="text" className="w-full p-3 rounded-md border bg-[#F4FDFF]" placeholder={field.placeholder} />
                </div>
            ))}
            </div>
        </div>
    )
}