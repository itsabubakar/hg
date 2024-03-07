
type Props = {}
const Footer = (props: Props) => {
    return (
        <footer className="footer">
            <section className="relative h-full py-10 lg:py-0 px-5">
                <div className="max-w-6xl mx-auto flex md:flex-row flex-col gap-4 lg:gap-10  justify-center px-5 lg:px-0 items-center lg:h-[320px]   z-20 relative">
                    <section className="w-full lg:w-1/2">
                        <h2 className="font-pont pb-4 font-semibold">Subscribe to our newsletter</h2>
                        <p className="pb-4">Stay in touch and subscribe to our newsletter for upcoming events, residency info, and inspiration!</p>
                        <div>
                            <form>
                                <input className="w-full px-2 py-3 rounded-md" type="email" placeholder="Email address" />
                                <button className="mt-4 px-2 py-2 rounded-md bg-black text-white">Subscribe</button>
                            </form>
                            <p className="pt-4 font-pont text-sm">We respect your privacy</p>
                        </div>

                    </section>
                    <section className="w-full lg:w-1/2">
                        <h2 className="font-pont pb-4 font-semibold">HalalAgric</h2>
                        <p className="font-jost pb-4">8C Dabo Rd. Off Kefi Rd. Barnawa
                            Kaduna, Nigeria 800243</p>
                        <p className="font-jost underline text-green-500 pb-2">info@halalagric.com</p>
                        <p className="font-jost underline text-green-500">+234 (803)-872-0064</p>




                    </section>
                </div>


            </section>
        </footer>
    )
}
export default Footer