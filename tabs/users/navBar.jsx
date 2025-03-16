"use client";
import MobileNav from "./mobileNav";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import useStore from "@/app/store";
import {Logo, Search, Authentications, MobileSearch, NavLink} from "@/components/users/navSections";
import DropDown from "@/components/users/userProfile";


export default function NavBar(){
const {user, getUser, categories, fetchCategory, auctions} = useStore()
    const [active, setActive] = useState("Home");
    const [activate, setActivate] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false)
    const pathname = usePathname()
    const menuContents =["Home","Auctions","Cars","Properties","Others Categories","About"];
    
   

    useEffect(()=>{
        if(!user){
        getUser()
    }
    fetchCategory()
    },[])

    const search = pathname !== '/register' && pathname !== '/login'
    const account = pathname === '/login'
    const signUp = !user && pathname !== '/register'
    const already = pathname === '/register'
    const login = !user && pathname !== '/login'
    const menulink = pathname !== '/register' && pathname !== '/login'
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAuctions, setFilteredAuctions] = useState([]);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term.length > 0) {
            const filtered = auctions.filter(auction =>
                auction.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredAuctions(filtered);
        } else {
            setFilteredAuctions([]);
        }
    };
    const dropLinks = [
        {
            name: "Profile",
            link: ""
        },
        {
            name: "My Revenue",
            link: ""
        },
        {
            name: "Notification",
            link: ""
        },
       
        {
            name: "Upload Product",
            link: ""
        },
        {
            name: "History",
            link: ""
        },

    ]

    const nav_btn = "cursor-pointer hover:bg-[#FFB485] px-3 py-2 rounded-xl"
    return(
        <div className="fixed top-0 right-0 w-full bg-[#35318E] py-4 xl:px-[4rem] px-[1rem] 
        flex flex-col gap-4 text-[16px] font-[500] overflow-visible z-50 "
        >
            <div className="flex justify-between items-center text-white ">
                <Logo setMenuToggle={setMenuToggle} setActivate={setActivate}/>
                {search && <Search
                 handleSearchChange={handleSearchChange}
                 searchTerm={searchTerm}
                 setSearchTerm={setSearchTerm}
                 filteredAuctions={filteredAuctions}
                 setFilteredAuctions={setFilteredAuctions}
                 />}
                <Authentications 
                user={user}
                account={account}
                signUp={signUp}
                already={already}
                login={login}
                dropLinks={dropLinks}
                />
                <div className="xl:hidden">
                    <FaUserLarge size={25} color="white" onClick={()=>setActivate(!activate)}/>
                    {activate &&
                    <DropDown dropLinks={dropLinks} user={user}/>
                    }
                </div>
            </div>
            <MobileSearch
             handleSearchChange={handleSearchChange}
             searchTerm={searchTerm}
             setSearchTerm={setSearchTerm}
             filteredAuctions={filteredAuctions}/>
            <div className="text-white xl:flex hidden justify-between">
                {menulink && 
                <NavLink
                menuContents={menuContents}
                active={active}
                nav_btn={nav_btn}
                setActive={setActive}
                categories={categories}
                />}
                {menulink &&
                <> 
                {!user ?
                <div className="flex gap-12">
                    <Link href="/our-valuers" className={nav_btn}>Our Valuers</Link>
                    <Link href="/vendors" className={nav_btn}>Our Vendors</Link>
                </div>
                :
                <Link 
                href={`/hub/${user?.id}/${user?.type}/profile`} 
                className="bg-[#EF6509] px-4 py-2 rounded-2xl text-center">
                    Upload Product to Auction
                </Link>
                }
                </>}
            </div>
            {menuToggle && <MobileNav setMenuToggle = {setMenuToggle}/>}
        </div>
    )
}