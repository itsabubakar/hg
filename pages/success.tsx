import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useState } from "react"

type Props = {}
const Success = (props: Props) => {
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
                                <p>Thank you for your order. Our delivery team will contact you shortly</p>

                            </div>
                        </section>


                        <Footer />
                    </>
                )
            }

        </div>
    )
}
export default Success