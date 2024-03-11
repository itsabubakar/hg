import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

type Props = {}
const Join = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const router = useRouter()

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
                                        <h3 className="pb-2 text-2xl font-medium font-pont ">One Off</h3>
                                        <h4 className="pb-2 text-xl font-medium font-pont ">₦500</h4>
                                        <h5 className="pb-4 text-lg font-pont ">One off pass</h5>
                                        <p className="pb-2 text-lg">For those who want a little taste of us </p>
                                        <p className="pb-4 text-lg">Access to Halal Agric premises</p>


                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href={`/join/${500}`}>Register</Link>
                                        </div>
                                    </div>
                                    {/* Visa */}
                                    <div>
                                        <h3 className="pb-2 text-2xl font-medium font-pont ">Bronse</h3>
                                        <h4 className="pb-2 text-xl font-medium font-pont ">₦5,000</h4>
                                        <h5 className="pb-4 text-lg font-pont ">One month multiple entry</h5>
                                        <p className="pb-2 text-lg">Explore our premises multiple times for a month </p>
                                        <p className="pb-4 text-lg">Enjoy a 10% discount on all Halal Organic Wellness products and services</p>

                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/join/5000'>Register</Link>
                                        </div>
                                    </div>
                                    {/* Visa */}
                                    <div>
                                        <h3 className="pb-2 text-2xl font-medium font-pont ">Silver</h3>
                                        <h4 className="pb-2 text-xl font-medium font-pont ">₦12,000</h4>
                                        <h5 className="pb-4 text-lg font-pont ">Three month multiple entry</h5>
                                        <p className="pb-2 text-lg">Explore our premises multiple times for 3 months </p>
                                        <p className="pb-4 text-lg">Enjoy a 15% discount on all Halal Organic Wellness products and services</p>
                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/join/12000'>Register</Link>
                                        </div>



                                    </div>
                                    {/* Visa */}
                                    <div>
                                        <h3 className="pb-2 text-2xl font-medium font-pont ">Silver</h3>
                                        <h4 className="pb-2 text-xl font-medium font-pont ">₦40,000</h4>
                                        <h5 className="pb-4 text-lg font-pont ">One year multiple entry</h5>
                                        <p className="pb-2 text-lg">Explore our premises multiple times for a yeah </p>
                                        <p className="pb-4 text-lg">Enjoy a 25% discount on all Halal Organic Wellness products and services</p>
                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/join/40000'>Register</Link>
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
export default Join