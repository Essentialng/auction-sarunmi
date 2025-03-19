import classNames from "classnames";
import { statesLists } from "@/utils/location";
import { Header, ProductNav } from "./productSections";

export default function Products({page, headline, detail, category, style, data, productsFiter, locationHandler, typeFilter, amountFiltering, link}){

    return(
        <div className={classNames(
            'flex flex-col gap-8 2xl:px-[4rem] xl:px-[4rem] px-[1rem]',
            {
                'py-[10rem]': (page !== 'categories' && page !== 'valuers' && !link),
                'py-[0rem] pb-[5rem]': page === 'categories' || page === 'valuers',
                "py-[1rem] pb-[10rem]": link
            }
            )}> 
                       
            {!link &&
            <Header
            page={page}
            headline={headline}
            detail={detail}
            style={style}
            />
            }

            {(page !== "vendors" && page !== "valuers") && 
            <ProductNav
                page={page}
                category={category}
                statesData={statesLists}
                data={data}
                productsFiter={productsFiter} 
                locationHandler={locationHandler} 
                typeFilter={typeFilter} 
                amountFiltering={amountFiltering} 
                link={link}        
            />
            }

        </div>
    )
}