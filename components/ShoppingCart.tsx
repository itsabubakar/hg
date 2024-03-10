import { useShoppingCart } from "@/context/ShoppingCartContext"
import CartItem from "./CartItem"
import { formatCurrency } from "@/utils/formatCurrency"
import storeItem from "../data/item.json"
import Link from "next/link"

type Props = {

}
const ShoppingCart = (props: Props) => {
    const { cartItems } = useShoppingCart()
    return (
        < >
            <section className="max-w-3xl mx-auto">
                <div className="flex items-center gap-x-4">
                    <h2 className="font-semibold text-2xl ">Cart</h2>
                    <div><p className="text-[#045346] text-2xl font-semibold">
                        {cartItems.reduce((total, cartItem) => {
                            return total + cartItem.quantity
                        }, 0)}
                    </p>

                    </div>
                </div>

            </section>


            <section className="max-w-3xl mx-auto ">
                <div>
                    <div className="flex flex-wrap gap-y-12 gap-x-5 justify-center sm:justify-between">
                        {cartItems.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>

                    {/* Total */}
                    <div className="pt-6">
                        <h3 className="font-semibold text-xl ">Cart Summary</h3>

                        <div className="flex justify-between items-center">
                            <h4 className="font-mont font-medium">Subtotal</h4>
                            <p className="font-mont font-semibold">{formatCurrency(
                                cartItems.reduce((total, cartItem) => {
                                    const item = storeItem.find(i => i.id === cartItem.id)
                                    return total + (item?.price || 0) * cartItem.quantity
                                }, 0)
                            )}</p>
                        </div>

                        <Link href="/checkout" className="border bg-[#045346] p-3 w-full rounded-lg text-white mt-6 block text-center">Checkout</Link>
                    </div>

                </div>
            </section>
        </>
    )
}
export default ShoppingCart