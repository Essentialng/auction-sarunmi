import Image from "next/image"

export default function Submitted({data}){
    return(
        <div className="flex flex-col items-center">
            <h1>Auction Submitted</h1>
            <div>
                <Image src={data?.images[0]} width={200} height={100} />
            </div>
            <strong>Description</strong>
            <div className="flex flex-col gap-8">
                <p> {data.description}</p>
                <ul className="w-2/3 flex flex-col gap-3">
                    {Object.entries(data?.details)?.map(([key, value], index)=>(
                    <li className="grid grid-cols-2" key={index}>
                        <p>{key}:</p>
                        <p>{value}</p>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}