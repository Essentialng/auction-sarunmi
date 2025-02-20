import { FaAngleRight } from "react-icons/fa6";
import { RiArrowDownSFill } from "react-icons/ri";
import { AuctionItems } from "./auction_items";
import classNames from "classnames";
import useStore from "@/app/store";
import Loading from "@/tabs/admin/loading";
import { statesData } from "@/utils/location";
import { Header, ProductNav } from "./productSections";

export default function Products({page, headline, detail, category, style, data}){

    return(
        <div className={classNames(
            'flex flex-col gap-8 2xl:px-[4rem] xl:px-[4rem] px-[1rem]',
            {
                'py-[10rem]': page !== 'categories' && page !== 'valuers',
                'py-[0rem] pb-[5rem]': page === 'categories' || page === 'valuers',
            }
            )}> 
                       
            
            <Header
            page={page}
            headline={headline}
            detail={detail}
            style={style}
            />

            <ProductNav
            page={page}
            category={category}
            statesData={statesData}
            data={data}
            />
        </div>
    )
}