import Image from "next/image"

export default function Submitted({data}){
    return(
        <div className="flex flex-col items-center">
            <h1>Auction Submitted</h1>
            <div>
                <Image src="/car-two.png" width={200} height={100} />
            </div>
            <strong>Description</strong>
            <div className="flex flex-col gap-8">
                <p> {data.description}</p>
                <ul className="w-2/3 flex flex-col gap-3">
                    {data?.details?.map((detail, index)=>(
                    <li className="grid grid-cols-2" key={index}>
                        <p>{detail.label}:</p>
                        <p>{detail.value}</p>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}