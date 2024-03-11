import Image from "next/image"
import Link from "next/link"

type Props = {
    text: string[]
    link: string
    price: string
    src: string
}
const Activity = ({ text, link, price, src }: Props) => {
    return (
        <div className="lg:flex items-center py-10">
            {/* Image */}
            <div className="lg:w-1/2 flex justify-center pb-5 lg:pb-0">
                <Image src={src} width={400} height={400} alt="Activities" />
            </div>

            {/* text */}
            <div className="lg:w-1/2 text-lg">
                {
                    text.map((t, i) => (
                        <p className="pb-4" key={i}>{t}</p>
                    ))
                }
                <p className="font-pont pb-2 text-xl font-semibold">{price}</p>

                <div className="py-6">
                    <p className="  rounded-lg py-2 px-3">{link}</p>
                    {/* <Link className="bg-[#045346] text-white rounded-lg py-2 px-3" href={link}>Register</Link> */}
                </div>
            </div>
        </div>
    )
}
export default Activity