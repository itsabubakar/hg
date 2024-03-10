import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link"
import { useRouter } from 'next/router'
import { useShoppingCart } from "@/context/ShoppingCartContext";



const Navbar = ({ isMenuOpen, setMenuOpen, light }: { isMenuOpen: boolean, setMenuOpen: any, light?: boolean }) => {
    const { openCart, cartQuantity } = useShoppingCart()

    const router = useRouter()

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }


    return (
        <nav className="relative font-pont">
            {/*  Mobile Menu  */}
            <div className={`absolute z-50 w-full min-h-[650px] bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} `}>
                <div className="flex  justify-end">
                    <button onClick={toggleMenu} className="flex justify-center items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="25" y1="7" x2="7" y2="25"></line>
                            <line x1="7" y1="7" x2="25" y2="25"></line>
                        </svg>
                    </button>
                </div>

                <ul className="flex h-full flex-col  text-[40px] text-center justify-center gap-y-2">
                    <li className={` hover:text-gray-400 ${router.pathname === '/' ? ' text-gray-400' : ''}`}>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className={` hover:text-gray-400 ${router.pathname === '/discover' ? ' text-gray-400' : ''}`}><Link href={'/discover'}>Join us</Link></li>
                    <li className={` hover:text-gray-400 ${router.pathname === '/roadmaps' ? ' text-gray-400' : ''}`}><Link href={'/roadmaps'}>Store</Link></li>
                    <li className={` hover:text-gray-400 ${router.pathname === '/arc' ? ' text-gray-400' : ''}`}><Link href={'/arc'}>About us</Link></li>
                    <li className={` hover:text-gray-400 ${router.pathname === '/community' ? ' text-gray-400' : ''}`}><Link href={'/community'}
                    >Activities</Link></li>

                    <li className={` hover:text-gray-400 ${router.pathname === '/community' ? ' text-gray-400' : ''}`}><Link className="flex justify-center items-center gap-x-2 " href={'/community'}
                    >Cart <MdOutlineShoppingCart size={26} className="" /></Link></li>
                </ul>
            </div>

            {/* Large screen menu */}
            <div className={`relative border-b border-gray-100 items-center max-w-6xl mx-auto py-6  px-6 xl:px-0 hidden lg:flex  ${light ? 'text-white' : 'text-dark'}`}>
                <Link href={'/'} className="">
                    <p className="font-semibold text-lg">Halal<span className="font-jost text-green-500">Agric</span></p>
                </Link>

                {/* Centered Navigation Links */}
                <div className="flex justify-center items-center font-medium ml-auto">
                    <ul className={`flex gap-x-4`}>
                        <li className={`hover:underline decoration `}>
                            <Link href="/join">Join us</Link>
                        </li>
                        <li className={`hover:underline decoration `}>
                            <Link href="/about">About us</Link>
                        </li>
                        <li className={`hover:underline decoration `}>
                            <Link href="/store">Store</Link>
                        </li>

                        <li className={`hover:underline decoration `}>
                            <Link href="/activities">Activities</Link>
                        </li>
                        <li className={`hover:underline decoration`}>
                            <Link href={'/cart'} className="flex relative items-center" >Cart <span className="absolute  top-4 right-0 bg-green-500 rounded-full px-2 py-1">{cartQuantity}</span> <MdOutlineShoppingCart size={20} className="ml-2" /></Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`flex justify-between p-6 lg:hidden ${light ? 'text-white' : 'text-dark'}`}>
                <div className="">
                    <Link href={'/'} className="">
                        <p className="text-lg font-semibold">Halal<span className="font-jost text-green-500">Agric</span></p>
                    </Link>
                </div>
                <button onClick={toggleMenu} className="p-2 text-gray-600 text-xl rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={light ? 'white' : 'gray'} className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-8.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;