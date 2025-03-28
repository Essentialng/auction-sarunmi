export default function Section(){

    const firstColumn = [
        "CAR",
        "SECURITY CAMERA",
        "SMART GLASSES",
        "BLENDER",
        "XIAOMI",
        "SCANNER",
        "PROJECTOR",
        "FAX MACHINE",
        "ELECTRIC KELLTE",
        "AIR FRYER",
        ]

    const secondColumn = [
        "PRORERTIES",
        "HOME FURNITURE ",
        "OFFICE FURNITURE",
        "CABINET",
        "OUTDOOR",
        "DECORATIVE",
        "3D PRINTER",
        "DRONES",
        "SECURITY CAMERA",
        "TOASTER ",
    ]

    const thirdColumn = [
        "DRYER",
         "HEATER",
         "DISHWASHER",
         "DESKTOP",
         "PRINTER",
         "REFRIGERATOR",
         "WASHING MACHINE",
         "MICROWAVE OVEN",
         "VACUUM CLEANER",
         "AIR CONDITIONER",
     ]


    const fourColumn = [
        "SMARTPHONES",
        "TABLETS",
        "LAPTOPS",
        "DIGITAL CAMERA",
        "SMARTWATCHES",
        "SPEAKERS",
        "SOUND BARS",
        "GAME CONSOLE",
        "TELEVISION",
        "HOME THEATER ",
     ]

    const listOfItems = [
        firstColumn,
        secondColumn,
        thirdColumn,
        fourColumn
    ]

    const list_style = "flex flex-col cursor-pointer transition-all duration-500 ease-in-out font-[400] text-[16px]"

    return(
        <div className="bg-[#E8E9E8] h-[492px] rounded-2xl lg:flex hidden gap-14">
                <div className="w-[575px] px-[20px] rounded-2xl bg-white font-[700] text-[24px] py-6 shadow-2xl">
                    <h1 className="text-[#EF6509]">What is Essential E-Auction?</h1>
                    <div className="info text-[16px] flex flex-col gap-10 py-4">
                        <small>
                        Essential E-Auction is an innovative auction company 
                        at the forefront of digital bidding experiences. 
                        </small>
                        <small>
                        Specializing in online auctions, Essential E-Auction offers a 
                        diverse range  
                        of products and services, catering to both individual 
                        consumers and business clients. 
                        </small>
                        <small>
                        With a user-friendly platform and transparent processes, Essential E-Auction ensures 
                        accessibility and fairness 
                        for all participants. 
                        </small>
                        <small>
                        Leveraging cutting-edge technology, the company provides 
                        seamless bidding opportunities, 
                        facilitating efficient transactions and delivering unparalleled customer satisfaction. 
                        </small>
                    </div>
                </div>
                <div className="w-full grid grid-cols-4 gap-2 text-[14px] font-[400] py-20">

                    {listOfItems.map((items)=>(
                        items.map((item, int)=>(
                        <ul key={int} className={list_style}>
                            <li>{item}</li>
                        </ul>
                        ))
                    ))}

                </div>
            </div>
    )
}