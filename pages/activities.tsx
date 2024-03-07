import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Props = {}
const activities = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false)


    return (
        <div className="font-jost">
            <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            {
                !isMenuOpen && (
                    <>
                        <section className=" ">
                            <div className="max-w-6xl mx-auto px-5 py-20 text-center">
                                <h1 className="text-4xl text-[#045346] font-semibold font-pont ">Activities in Halal Agric</h1>
                            </div>
                        </section>


                        <section className=" bg-gray-100">
                            <div className="max-w-6xl mx-auto px-5 py-20 text-center">
                                <h2 className="text-3xl text-[#045346] font-semibold font-pont "> Lorem ipsum</h2>

                                <div className="py-8 flex flex-col gap-y-14 lg:flex-row gap-x-6">
                                    <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci expedita quos laborum consequuntur. Commodi voluptatem eligendi earum, provident optio laboriosam! Soluta voluptatem quisquam quaerat id autem et officiis unde cupiditate!</p>

                                </div>
                            </div>

                        </section>

                        <section className=" ">

                            {/* Activities */}

                            <div className="max-w-6xl mx-auto px-5 py-20  ">

                                <div className="lg:flex items-center py-10">
                                    {/* Image */}
                                    <div className="lg:w-1/2 flex justify-center">
                                        <Image src="/img/hlogo.png" width={400} height={400} alt="Activities" />
                                    </div>

                                    {/* text */}
                                    <div className="lg:w-1/2 text-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quibusdam atque. Sint quod necessitatibus reprehenderit, quisquam adipisci laborum incidunt quidem quibusdam quam, magni ea perferendis voluptatibus. Illo quisquam inventore et?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut maiores assumenda sint eaque illum minima optio vitae accusantium tempore sed fugit eius nihil cumque ipsam nesciunt perspiciatis, harum commodi?</p>
                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/'>SIGN UP</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex items-center py-10">
                                    {/* Image */}
                                    <div className="lg:w-1/2 flex justify-center">
                                        <Image src="/img/hlogo.png" width={400} height={400} alt="Activities" />
                                    </div>

                                    {/* text */}
                                    <div className="lg:w-1/2 text-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quibusdam atque. Sint quod necessitatibus reprehenderit, quisquam adipisci laborum incidunt quidem quibusdam quam, magni ea perferendis voluptatibus. Illo quisquam inventore et?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut maiores assumenda sint eaque illum minima optio vitae accusantium tempore sed fugit eius nihil cumque ipsam nesciunt perspiciatis, harum commodi?</p>
                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/'>SIGN UP</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex items-center py-10">
                                    {/* Image */}
                                    <div className="lg:w-1/2 flex justify-center">
                                        <Image src="/img/hlogo.png" width={400} height={400} alt="Activities" />
                                    </div>

                                    {/* text */}
                                    <div className="lg:w-1/2 text-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quibusdam atque. Sint quod necessitatibus reprehenderit, quisquam adipisci laborum incidunt quidem quibusdam quam, magni ea perferendis voluptatibus. Illo quisquam inventore et?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut maiores assumenda sint eaque illum minima optio vitae accusantium tempore sed fugit eius nihil cumque ipsam nesciunt perspiciatis, harum commodi?</p>
                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/'>SIGN UP</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex items-center py-10">
                                    {/* Image */}
                                    <div className="lg:w-1/2 flex justify-center">
                                        <Image src="/img/hlogo.png" width={400} height={400} alt="Activities" />
                                    </div>

                                    {/* text */}
                                    <div className="lg:w-1/2 text-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quibusdam atque. Sint quod necessitatibus reprehenderit, quisquam adipisci laborum incidunt quidem quibusdam quam, magni ea perferendis voluptatibus. Illo quisquam inventore et?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut maiores assumenda sint eaque illum minima optio vitae accusantium tempore sed fugit eius nihil cumque ipsam nesciunt perspiciatis, harum commodi?</p>
                                        <div className="py-6">
                                            <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href='/'>SIGN UP</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex items-center py-10">
                                    {/* Image */}
                                    <div className="lg:w-1/2 flex justify-center">
                                        <Image src="/img/hlogo.png" width={400} height={400} alt="Activities" />
                                    </div>

                                    {/* text */}
                                    <div className="lg:w-1/2 text-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quibusdam atque. Sint quod necessitatibus reprehenderit, quisquam adipisci laborum incidunt quidem quibusdam quam, magni ea perferendis voluptatibus. Illo quisquam inventore et?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut maiores assumenda sint eaque illum minima optio vitae accusantium tempore sed fugit eius nihil cumque ipsam nesciunt perspiciatis, harum commodi?</p>
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
export default activities