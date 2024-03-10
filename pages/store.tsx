import StoreItem from '@/components/StoreItem'
import storeItems from '../data/item.json'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

type Props = {}
const Store = (props: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <div className="font-jost">
            <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            {
                !isMenuOpen && (
                    <>
                        <section className=" ">
                            <div className="max-w-6xl mx-auto px-5 py-20 text-center">

                                <h1 className="text-4xl text-[#045346] font-semibold font-pont ">Halal Stores</h1>
                                <h2 className="text-2xl text-gray-800 pt-4">Most Halal Organic Wellness signature products are organically grown at Halal Farms</h2>
                            </div>
                        </section>

                        <section className=" bg-gray-100">
                            <div className="max-w-6xl mx-auto px-5 py-20 ">
                                <h2 className="pb-12 text-3xl text-[#045346] font-semibold font-pont "> Halal Products</h2>

                                <div className='grid gap-y-12 grid-cols-2 lg:grid-cols-4 gap-x-5 sm:grid-cols-2 md:grid-cols-3 '>
                                    {storeItems.map(item => (
                                        <div key={item.id}>
                                            <StoreItem  {...item} />
                                        </div>
                                    ))}
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
export default Store

