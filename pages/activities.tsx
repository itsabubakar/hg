import Activity from "@/components/Activity"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Props = {}
const Activities = (props: Props) => {
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
                                <h2 className="text-3xl text-[#045346] font-semibold font-pont "> Activities</h2>

                                <div className="py-8 flex flex-col gap-y-14 lg:flex-row gap-x-6">
                                    <p className="text-lg">Our services focus on patient-centered care, promoting total wellness through the professional use of nature bounties and mind coaching therapies. We aim to heal the mind, body, and soul</p>

                                </div>
                            </div>

                        </section>

                        <section className=" ">

                            {/* Activities */}

                            <div className="max-w-6xl mx-auto px-5 py-20  ">
                                <Activity
                                    src="/img/retreats.jpg"
                                    text={["Weekend Retreats: Ideal for groups and families of 4 persons. Our services encompass a range of activities including sports, group dynamics exercises, and classes in aerobics, yoga, and tai chi"]}
                                    link="Call Halal Agric on 070 3000 3000 to register"
                                    price="N22,000 per session per group"
                                />
                                <Activity
                                    src="/img/laundary.jpg"
                                    text={["Our laundry services cater to the entire family's needs, handling everything from daily wear to blankets for an entire month. Enjoy the convenience of a full-service solution for your household laundry."]}
                                    link="Call Halal Agric on 070 3000 3000 to register"
                                    price="N30,000 per month"
                                />
                                <Activity
                                    src="/img/care.jpg"
                                    text={["Residential Care for the Elderly (RCFE) offers a nurturing environment for seniors facing health challenges such as depression, stroke, dementia, cancer, high blood pressure, diabetes, and those recovering from trauma or accidents. It's also a peaceful haven for seniors seeking solitude and a serene setting for holistic healing. Our services include nursing care, cleaning, massage, mind coaching, wellness meals, restful siestas, hairdressing, manicure, pedicure, earthing/grounding therapy, aromatherapy, and more."]}
                                    link="Call Halal Agric on 070 3000 3000 to register"
                                    price="N14,000 per session per person"
                                />

                                <Activity
                                    src="/img/mind.jpg"
                                    text={["Dr. Musa Bawa Garba brings his expertise to the forefront with professional mind coaching services. These sessions are designed to empower individuals, helping them to unlock their full potential by cultivating mental resilience, focus, and clarity. Through personalized strategies and techniques, Dr. Garba aims to guide his clients toward achieving their personal and professional goals, ensuring a balanced and fulfilling life.", "In addition to mind coaching, Dr. Garba specializes in character modification therapy. This therapeutic approach is tailored to individuals seeking to improve their behavioral responses and develop positive personality traits. By utilizing evidence-based methods, Dr. Garba assists clients in their journey of self-improvement and character development, ultimately striving to bring about lasting change and improved well-being."]}
                                    link="Call Halal Agric on 070 3000 3000 to register"
                                    price="N6,500 per session per person"


                                />

                                <Activity
                                    src="/img/fruits.jpg"
                                    price="N24,000 per week inclusive of delivery"
                                    text={["Enjoy the convenience of having fresh, Halal-certified fruits and vegetables delivered straight to your preferred address every week. Our service covers Kaduna, Abuja, and Kano, bringing the market's freshness right to your doorstep. We pride ourselves on our commitment to quality and freshness, ensuring that you receive the best produce for you and your family.", "Our supplies come directly from Halal Farms and feature a wide variety of seasonal fruits, vegetables, and herbs to cater to your health requirements. Our selection includes, but is not limited to, avocado pears, pawpaw, mangoes, guavas, bananas, pineapples, sugarcane, beetroots, peanuts, cashew nuts, sesame seeds, bambara nuts, and sunflower seeds. We also offer unique items like baobab powder, ginger, turmeric, garlic, prekese/aidan, cucumbers, tomatoes, bell peppers, and Halal Farm sweet doum palm/goruba. Our array is complemented by a range of leafy greens and herbs such as cabbage, lettuce, sweet potatoes, pumpkins, watermelons, cauliflower, broccoli, basil, kale, sage, celery, parsley, coriander/cilantro, oregano, and more. We accommodate the diverse needs of our members, including providing passion fruits, noni, lemon/lime, mulberries, neem, tiger nuts, moringa, and other health-boosting options."]}
                                    link="Call Halal Agric on 070 3000 3000 to register"
                                />


                                <Activity
                                    src="/img/sports.jpg"
                                    price="3,500"
                                    text={["Enjoy a variety of sports and recreational activities led by a professional coach. Start with a warm-up and floor exercises, then dive into basketball, football, table tennis, badminton, and volleyball. For a gentler pace, we offer swings, walking, jogging, and skipping, complemented by aerobics, yoga, and tai chi classes for a holistic workout.", "Excitingly, swimming will join our offerings in July 2024. Embrace a healthy lifestyle with our engaging and fun activities."]}
                                    link="Call Halal Agric on 070 3000 3000 to register"
                                />

                                <Activity
                                    src="/img/meal.jpg"
                                    price="3500"
                                    text={["Savor our selection of regular fitness meals and patient-centered dishes designed for optimal health. Indulge in refreshing smoothies, wholesome snacks, a variety of nuts, fresh fruits, invigorating noni juice, and herbal teas. All our produce, including fresh organic vegetables, is sourced directly from Halal Farms", "To top it off, our outdoor catering service is available upon request, perfect for your events and special occasions."]}
                                    link="Call Halal Agric on 070 3000 3000 to register"
                                />

                                <Activity
                                    src="/img/salon.jpg"
                                    price="N7,000"
                                    text={["Enhance your wellness experience with our on-site unisex salon services, including hairdressing, barbing, plaiting, manicure, and pedicure."]}
                                    link="Call Halal Agric on 070 3000 3000 to register"
                                />

                                <Activity
                                    src="/img/mind.jpg"
                                    price="N7,000"
                                    text={["Experience rejuvenation and healing for your mind, body, and soul. Our therapies include earthing/grounding to connect you with nature, relaxing massages, and siestas complemented by soothing aromatherapy. Unwind further in our sauna, steam bath, or indulge in a therapeutic bath soak."]}
                                    link="Call Halal Agric on 070 3000 3000 to register"
                                />
                                <Activity
                                    src="/img/classes.jpg"
                                    price="N3,500"
                                    text={["Offering academic lessons, tutorials, and revision sessions tailored for primary school pupils in Primary 1 to 3. Our educational approach is designed to reinforce learning and boost understanding in core subjects."]}
                                    link="Call Halal Agric on 070 3000 3000 to register"
                                />



                            </div>

                        </section>


                        <Footer />
                    </>
                )
            }

        </div>
    )
}
export default Activities