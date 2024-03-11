import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useState } from "react"

type Props = {}
const About = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false)


    return (
        <div className="font-jost">
            <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            {
                !isMenuOpen && (
                    <>
                        <section className=" ">
                            <div className="max-w-6xl mx-auto px-5 py-20 text-center">

                                <h1 className="text-4xl text-[#045346] font-semibold font-pont ">About Us</h1>


                            </div>
                        </section>


                        <section className=" bg-gray-100">
                            <div className="max-w-6xl mx-auto px-5 py-20 text-center">
                                <h2 className="text-3xl text-[#045346] font-semibold font-pont "> Who we are</h2>

                                <div className="py-8 flex flex-col gap-y-14 lg:flex-row gap-x-6">
                                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatum? Placeat veritatis sunt adipisci beatae, assumenda ad quas veniam dolores laborum reiciendis qui dolorum voluptatem velit ab nostrum incidunt consectetur!</p>
                                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatum? Placeat veritatis sunt adipisci beatae, assumenda ad quas veniam dolores laborum reiciendis qui dolorum voluptatem velit ab nostrum incidunt consectetur!</p>
                                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatum? Placeat veritatis sunt adipisci beatae, assumenda ad quas veniam dolores laborum reiciendis qui dolorum voluptatem velit ab nostrum incidunt consectetur!</p>

                                </div>
                            </div>

                        </section>

                        <section className=" ">
                            <div className="max-w-6xl mx-auto px-5 py-20  ">
                                <h2 className="text-3xl text-[#045346] text-center font-semibold font-pont "> What we do</h2>

                                <div className="py-8">
                                    <p className="pb-4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatum? Placeat veritatis sunt adipisci beatae, assumenda ad quas veniam dolores laborum reiciendis qui dolorum voluptatem velit ab nostrum incidunt consectetur!</p>
                                    <p className="pb-4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatum? Placeat veritatis sunt adipisci beatae, assumenda ad quas veniam dolores laborum reiciendis qui dolorum voluptatem velit ab nostrum incidunt consectetur!</p>
                                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatum? Placeat veritatis sunt adipisci beatae, assumenda ad quas veniam dolores laborum reiciendis qui dolorum voluptatem velit ab nostrum incidunt consectetur!</p>

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
export default About