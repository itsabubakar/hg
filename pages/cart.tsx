import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ShoppingCart from "@/components/ShoppingCart"
import { useShoppingCart } from "@/context/ShoppingCartContext"
import { useState } from "react"


type Props = {}
const cart = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false)


    return (
        <div className="font-jost">
            <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            {
                !isMenuOpen && (
                    <>
                        <section className=" ">
                            <div className="max-w-6xl mx-auto px-5 py-20 text-center">
                                <h1 className="text-4xl text-[#045346] font-semibold font-pont ">Cart</h1>

                            </div>
                        </section>

                        <section>
                            <div className="max-w-6xl mx-auto px-5 py-20 ">
                                <ShoppingCart />
                            </div>
                        </section>



                        <Footer />
                    </>
                )
            }

        </div>
    )
}
export default cart