import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { useState } from "react"

// icons
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CgCommunity } from "react-icons/cg";

const Index = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <main className="font-jost">
      <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      {
        !isMenuOpen && (
          <>
            <section className=" bg-[#fbf7f0]">
              <div className="max-w-6xl mx-auto px-5 py-20 text-center">
                <h1 className="text-4xl text-[#045346] font-semibold font-pont ">Your trusted guide to
                  mental health & wellness</h1>
                <h2 className="text-2xl text-gray-800 pt-4">Start improving your mental health and well-being today. HalalAgric shows you how.</h2>
                <div className="pt-6 flex justify-center">
                  <Link className="text-lg bg-[#045346] text-white px-4 py-2 rounded w-fit" href='/'>Join us</Link>
                </div>
              </div>
            </section>

            <section className="max-w-6xl mx-auto px-5 py-20 ">
              <h2 className="text-[#d49f11] text-2xl pb-4 text-center">What we offer </h2>
              <p className="text-xl">Whether you are seeking to rejuvenate your personal health,                 or require a customised mind coaching experience
                to ovrhaul your                mindset, and sharpen your emotional intelligence, or you simply need an ideal avenue for                family nonding, or a serence environment                to heal an elderly relative, or just need regular supply of HalalAgric fruits/vegetables in Kaduna, Abuja, or Kano</p>
            </section>

            <section className=" bg-gray-100">
              <div className="max-w-6xl mx-auto px-5 py-20 ">
                <h2 className="text-[#d49f11] text-2xl pb-4 text-center">Join a Wellness Club </h2>

                <p className="text-xl pb-4"> Depending on your individual goals, you can choose either the Daily Wellbeing or Weight Management programme. We have the right Wellness products to support your need. All products are developed in Sweden and the formulations are all inspired by nature and power by science.

                  Don't wait! Start your journey to a healthier lifestyle today by joining one of our Wellness Clubs!

                  A healthier, happier life starts here!</p>
              </div>

            </section>

            <section className=" ">
              <div className="max-w-6xl mx-auto px-5 py-20 ">
                <h2 className="text-[#d49f11] text-2xl pb-4 text-center">Goals </h2>

                <p className="text-xl pb-4"> Depending on your individual goals, you can choose either the Daily Wellbeing or Weight Management programme. We have the right Wellness products to support your need. All products are developed in Sweden and the formulations are all inspired by nature and power by science.

                  Don't wait! Start your journey to a healthier lifestyle today by joining one of our Wellness Clubs!

                  A healthier, happier life starts here!</p>
              </div>

            </section>

            <section className=" bg-[#fbf7f0]">
              <div className="flex-col gap-y-8 lg:flex-row flex gap-x-5 max-w-6xl mx-auto px-5 py-20 
              ">
                <div>
                  {/* Icon */}
                  <div className="pb-2">
                    <CiHeart color="#045346" size={30} />
                  </div>
                  <h2 className="text-xl font-mont font-medium pb-2">Start a healthier lifestyle</h2>
                  <p>Join us and learn how to make small lifestyle changes that add up to a big difference for your overall health and wellbeing in the long term.</p>
                </div>
                <div>
                  {/* Icon */}
                  <div className="pb-2">
                    <CiUser color="#045346" size={30} />
                  </div>
                  <h2 className="text-xl font-mont font-medium pb-2">Learn from the experts</h2>
                  <p>Our certified Oriflame Wellness Club Coaches have gone through an extensive science based educational programme, developed by our Swedish health experts.</p>
                </div>
                <div>
                  {/* Icon */}
                  <div className="pb-2">
                    <CgCommunity color="#045346" size={30} />
                  </div>
                  <h2 className="text-xl font-mont font-medium pb-2">Join our supportive Community</h2>
                  <p>As a Club member you will get to know other people, feel the friendly and supportive atmosphere to help you reach your goals.

                  </p>
                </div>

              </div>
            </section>
            <Footer />
          </>
        )
      }

    </main >
  )
}

export default Index                                        