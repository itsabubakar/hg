import PaystackPop from '@paystack/inline-js'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { useFormik } from 'formik'
import storeItem from "../data/item.json"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import { useRouter } from 'next/router'


const CheckOut = () => {
    const { cartItems } = useShoppingCart()
    const [isMenuOpen, setMenuOpen] = useState(false)
    const router = useRouter()

    const price = Math.round(cartItems.reduce((total, cartItem) => {
        const item = storeItem.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0))

    // formik logic
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            address: "",
            phone: "",
            amount: price,
        },

        // submit form
        onSubmit: (values) => {
            console.log(values)

            const paystack = new PaystackPop()
            paystack.newTransaction({
                key: 'pk_live_9a13759caa958cb249c6f4c0f93c63f6f027de5e',
                amount: price * 100,
                email: values.email,
                firstname: values.firstname,
                lastname: values.lastname,
                onSuccess(transaction: { reference: string }) {
                    postOrder(transaction.reference)
                    router.push('/payment/success')
                    console.log('Payment success ' + transaction.reference);
                },
                onCancel() {
                    console.log('Payment failed');

                },
            })
        }
    })

    const postOrder = async (transactionId: string) => {
        console.log('transactionId', transactionId);

        // const firstName = formik.values.firstname
        // const lastName = formik.values.lastname
        // const phone = formik.values.phone
        // const email = formik.values.email
        // const address = formik.values.address

        // const orderInfo = { cart, price, transactionId, phone, email, address, firstName, lastName }

        // try {

        //     const { data } = await api.post('/api/order', orderInfo)
        //     console.log(data)
        // } catch (error) {
        //     console.log(error)
        // }
    }


    return (
        // < !--component -- >
        <div className="font-jost">
            <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            {
                !isMenuOpen && (
                    <>
                        <div className="grid min-h-screen place-items-center">
                            <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                                <h1 className="text-xl font-semibold">Please fill in your information to continue</h1>

                                <form onSubmit={formik.handleSubmit} className="mt-6">

                                    {/* Names */}
                                    <div className="flex justify-between gap-3 mb-4">
                                        <span className="w-1/2">
                                            <label htmlFor="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                                            <input
                                                value={formik.values.firstname}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}

                                                id="firstname" type="text" name="firstname" placeholder="Hauwa" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                                        </span>
                                        <span className="w-1/2">
                                            <label htmlFor="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                                            <input
                                                value={formik.values.lastname}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                id="lastname" type="text" name="lastname" placeholder="Hyatudeen" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                                        </span>
                                    </div>

                                    {/* Email */}
                                    <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                                    <input
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        id="email" type="email" name="email" placeholder="Hauwa.Hyatudeen@abc.com" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mb-4" required />



                                    {/* Phone number */}
                                    <label htmlFor="phone" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Phone Number</label>
                                    <input
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        id="phone" type="text" name="phone" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mb-4" required />

                                    {/* Shipping address */}
                                    <label htmlFor="address" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Shipping Address</label>
                                    <input
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        id="address" type="text" name="address" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mb-4" required />

                                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-500 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none mb-4">
                                        Pay NGN {price}
                                    </button>

                                </form>
                            </div>
                        </div>



                        <Footer />
                    </>
                )
            }

        </div>


    )
}
export default CheckOut