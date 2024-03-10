import { useShoppingCart } from "@/context/ShoppingCartContext"
import storeItems from '../data/item.json'
import Image from "next/image"
import { formatCurrency } from "@/utils/formatCurrency"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
type Props = {
    id: number
    quantity: number
}
const CartItem = ({ id, quantity }: Props) => {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)

    if (item == null) return null

    return (
        <div className=" max-w-56">
            <div>
                <Image className="w-full" alt="img" src={item.imgUrl} width={200} height={200} />
            </div>

            <h2 className=" pt-2 font-pont text-gray-800">{item.name}</h2>
            <p className="font-pont pb-4 text-lg font-medium">{formatCurrency(item.price)}</p>
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

            </div>
            }

        </div>
    )
}
export default CartItem

