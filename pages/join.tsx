import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { useState } from "react"

type Props = {}
const join = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <div className="font-jost">
            <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            {
                !isMenuOpen && (
                    <>
                        <section className=" ">
                            <div className="max-w-6xl mx-auto px-5 py-20 text-center">

                                <h1 className="text-4xl text-[#045346] font-semibold font-pont ">Membership options - Visas</h1>
                                <h2 className="text-2xl text-gray-800 pt-4">Each member/visitor requires an entry VISA (an entry permit/pass)to access Halal Organic Wellness premise.</h2>
                                <h2 className="text-2xl text-gray-800 pt-4"> Halal Organic Wellness Visas can be obtained online or at Halal Wellness gate.</h2>

                            </div>
                        </section>

                        <section className=" bg-gray-100">
                            <div className="max-w-6xl mx-auto px-5 py-20 text-center">
                                <h2 className="text-3xl text-[#045346] font-semibold font-pont "> Visas</h2>

                                {/* Visas */}
                                <div className="py-8 flex flex-col gap-y-14 lg:flex-row gap-x-6">

                                    {/* Visa */}
                                    <div>
                                        <h3 className="pb-2 text-2xl font-medium font-pont ">Silver</h3>
                                        <h4 className="pb-2 text-xl font-medium font-pont ">₦500</h4>
                                        <h5 className="pb-4 text-lg font-pont ">One off pass</h5>
                                        <p className="pb-2 text-lg">For those who want a little taste of us each week. </p>
                                        <p className="pb-4 text-lg">8 classes to use how you like over 28 days.</p>
                                        <p className="pb-6 text-lg">All club members get their exclusive numbered key ring with all benefits for you.</p>
                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/'>SIGN UP</Link>
                                        </div>
                                    </div>
                                    {/* Visa */}
                                    <div>
                                        <h3 className="pb-2 text-2xl font-medium font-pont ">Silver</h3>
                                        <h4 className="pb-2 text-xl font-medium font-pont ">₦500</h4>
                                        <h5 className="pb-4 text-lg font-pont ">One off pass</h5>
                                        <p className="pb-2 text-lg">For those who want a little taste of us each week. </p>
                                        <p className="pb-4 text-lg">8 classes to use how you like over 28 days.</p>
                                        <p className="pb-6 text-lg">All club members get their exclusive numbered key ring with all benefits for you.</p>
                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/'>SIGN UP</Link>
                                        </div>
                                    </div>
                                    {/* Visa */}
                                    <div>
                                        <h3 className="pb-2 text-2xl font-medium font-pont ">Silver</h3>
                                        <h4 className="pb-2 text-xl font-medium font-pont ">₦500</h4>
                                        <h5 className="pb-4 text-lg font-pont ">One off pass</h5>
                                        <p className="pb-2 text-lg">For those who want a little taste of us each week. </p>
                                        <p className="pb-4 text-lg">8 classes to use how you like over 28 days.</p>
                                        <p className="pb-6 text-lg">All club members get their exclusive numbered key ring with all benefits for you.</p>
                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/'>SIGN UP</Link>
                                        </div>



                                    </div>
                                    {/* Visa */}
                                    <div>
                                        <h3 className="pb-2 text-2xl font-medium font-pont ">Silver</h3>
                                        <h4 className="pb-2 text-xl font-medium font-pont ">₦500</h4>
                                        <h5 className="pb-4 text-lg font-pont ">One off pass</h5>
                                        <p className="pb-2 text-lg">For those who want a little taste of us each week. </p>
                                        <p className="pb-4 text-lg">8 classes to use how you like over 28 days.</p>
                                        <p className="pb-6 text-lg">All club members get their exclusive numbered key ring with all benefits for you.</p>
                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/'>SIGN UP</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </section>

                        <Footer />
                    </>
                )
            }

        </div>
    )
}
export default join