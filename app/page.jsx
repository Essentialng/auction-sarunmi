import Hero from "@/components/users/heroSection";
import Auctions from "@/components/users/auctions";
import Cards from "@/components/users/cards";
import Footer from "@/components/users/footer";
import HeroSectionMobile from "@/components/users/heroSectionMobile";
export default function DashBorad(){



    return(
    <main className="overflow-x-hidden manrope pt-32">
        <Hero/>
        <HeroSectionMobile/>
        <Auctions/>
        <Cards/>
        <Footer/>
    </main>
    )
}