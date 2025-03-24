import Image from "next/image"
import { useState } from "react";


export default function Submitted({data}){
    const [previewImage, setPreviewImage] = useState(null);

    const handleViewImage = (imageUrl) => {
        setPreviewImage(imageUrl);
      };

    const closePreview = () => {
    setPreviewImage(null);
    };

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
                    {Object.entries(data?.details)?.map(([key, value], index)=>{
                    const formattedKey = key.replace(/([A-Z])/g, ' $1').trim();
                    return(
                    <li className="grid grid-cols-2" key={index}>
                        <p>{formattedKey}:</p>
                        {typeof value === 'string' && value.startsWith('https://') ? (
                        <button
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                        onClick={() => handleViewImage(value)}
                        >
                        View
                        </button>
                    ) : (
                        <span>{value}</span>
                    )}
                    </li>
                    )
                    })}
                </ul>

                {previewImage && (
                <div
                className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                onClick={closePreview}
                >
                <img src={previewImage} alt="Preview" className="max-h-[90%] max-w-[90%] rounded" />
                </div>
                )}
            </div>
        </div>
    )
}