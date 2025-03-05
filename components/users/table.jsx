import classNames from "classnames";


export default function Table({headers}){
   
    const data = Array.from({ length: 15 }, (_, i) => i + 1);

    const tdStyle = "py-4 px-5 border-y capitalize text-center"
    return(
        <div className="2xl:px-[4rem] xl:px-[4rem] px-[1rem] overflow-x-scroll">
            <table className="w-full xl:text-[18px] text-[12px] font-[500] border-separate border-spacing-y-2">
                <thead className=" w-full text-white font-[500] bg-[#35318E] ">
                {headers.map((header, index) => (
                    <th
                    key={index}
                    className={classNames({
                        "xl:py-8 py-4" : true,
                        "rounded-tl-2xl rounded-bl-2xl" : index === 0,
                         "rounded-tr-2xl rounded-br-2xl" : index === 4
                    })}
                    >
                        <p className={classNames({
                            "w-full xl:border-r-2 border-r-white text-center" : true,
                            "border-r-[#35318E] " : index === 4 
                            })}
                            >
                            {header}
                        </p>
                    </th>
                ))}
                </thead>
                <tbody className="bg-white">
                    {data?.map((item, index) => (
                    <tr key={index} className="shadow-md rounded-2xl">
                        <td className={`${tdStyle} border-l-2 rounded-l-2xl`}>
                            {index + 1}
                        </td>
                        <td className={tdStyle}>
                            John Adeyemi
                        </td>
                        <td className={tdStyle}>
                            Lagos
                        </td>
                        <td className={tdStyle}>
                            Houses
                        </td>
                        <td className={`${tdStyle} border-r-2  rounded-r-2xl`}>
                            Years of Experience
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}