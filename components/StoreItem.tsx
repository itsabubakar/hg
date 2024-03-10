import { useShoppingCart } from "@/context/ShoppingCartContext"
import { formatCurrency } from "@/utils/formatCurrency"
import Image from "next/image"

// icons
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}
const StoreItem = ({ id, name, price, imgUrl }: Props) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <div className=" max-w-56">
            <div>
                <Image className="w-full" alt="img" src={imgUrl} width={200} height={200} />
            </div>

            <h2 className=" pt-2 font-pont text-gray-800">{name}</h2>
            <p className="font-pont pb-4 text-lg font-medium">{formatCurrency(price)}</p>
            {quantity === 0 ? (
                <button onClick={() => increaseCartQuantity(id)} className="border bg-[#045346] p-3 w-full rounded-lg text-white">Add to cart</button>
            ) : <div className="">
                <div className="flex justify-between items-center">
                    <button onClick={() => decreaseCartQuantity(id)} className="border rounded-lg bg-[#d49f11] p-3"><AiOutlineMinus color="white" /></button>
                    <p className="text-lg font-medium">{quantity}</p>
                    <button onClick={() => increaseCartQuantity(id)} className="border rounded-lg bg-[#d49f11] p-3"><AiOutlinePlus color="white" /></button>
                </div>
                <div>
                    <button onClick={() => removeFromCart(id)} className="border bg-red-500 p-3 w-full text-white mt-2 rounded-lg">Remove</button>
                </div>

            </div>}
            <div>

            </div>
        </div>
    )
}
export default StoreItem