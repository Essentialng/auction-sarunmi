import Products from "@/components/users/products"

export const data = 
            [
                {
                    "image": "/car-one.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-two.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-three.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-four.png",
                    "status": "Upcoming Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },

            {
                "image": "/property-one.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-two.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-three.png",
                "status": "Upcoming Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-four.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/electronic-one.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/electronic-two.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/eletronic-three.png",
                "status": "Upcoming Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/eletronic-four.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
    ]

export default function Page(){
    return(
        <>
            <Products 
            page="Auctions" 
            headline="Discover Exceptional Deals on Premium Items"
            detail="Bid now on exclusive products and unbeatable offers 
            in our live auctions."
            category="All Auctions"
            style="auctions"
            data={data}/>
        </>
    )
}