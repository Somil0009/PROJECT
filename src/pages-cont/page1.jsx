import HEADER from './header'
import LightRays from '../components/hero-b'
import Footer from './Footer'
import { BsBuildingsFill } from "react-icons/bs";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import CircularGallery from '../components/scroll'
import PixelTransition from '../components/pro'
import ScrollStack, { ScrollStackItem } from '../components/stack'
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { BsHouseCheckFill } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa";
import { FaBuildingShield } from "react-icons/fa6";
import ScrollVelocity from '../components/scroll-b'

const PAGE = () => {

    return (
        <>
            <ScrollStack>
                <HEADER />
                <div style={{ width: '100%', height: '800px', position: 'relative' }}>
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="white"
                        raysSpeed={1.5}
                        lightSpread={0.8}
                        rayLength={1.2}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                        className="custom-rays absolute inset-0 z-0"
                    />
                    <div className='flex flex-col items-center justify-center h-full w-full absolute top-0 left-0 z-10'>
                        <h1 className='text-white text-6xl mb-8 text-center'>Best Real Estate Consultant</h1>
                        <div className='bg-white text-black mx-auto w-90 rounded-xl flex justify-center items-center gap-x-12 px-8 py-6 shadow-lg'>
                            <div className='flex flex-col items-center'><BsBuildingsFill className='text-4xl mb-2' /><span className='font-semibold'>Building</span></div>
                            <div className='flex flex-col items-center'><IoTabletLandscapeOutline className='text-4xl mb-2' /><span className='font-semibold'>Land</span></div>
                            <div className='flex flex-col items-center'><FaHome className='text-4xl mb-2' /><span className='font-semibold'>Home</span></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg p-4 sm:p-8 mt-8 sm:mt-12 mx-auto w-full max-w-screen-sm md:max-w-7xl">
                    <div className="flex-1 flex flex-col justify-center items-start md:pr-12 mb-6 md:mb-0 w-full">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-center md:text-left">
                            <span className="block">Find Your Place</span>
                            <span className="block text-yellow-300 font-semibold">Find Your Home</span>
                            <span className="block">Choose ATR</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center md:text-left">We provide the best properties for you.</p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center md:justify-start">
                            <div className="bg-gradient-to-r from-green-400 to-red-200 rounded-xl px-6 sm:px-8 py-4 sm:py-6 flex flex-col items-center shadow w-full sm:w-auto mb-4 sm:mb-0">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">1,500+</h2>
                                <p className="text-sm sm:text-base text-gray-700">Happy Families</p>
                            </div>
                            <div className="bg-gradient-to-r from-green-400 to-red-200 rounded-xl px-6 sm:px-8 py-4 sm:py-6 flex flex-col items-center shadow w-full sm:w-auto">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">1,000+</h2>
                                <p className="text-sm sm:text-base text-gray-700">Luxury Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center w-full md:w-auto mt-6 md:mt-0">
                        <img src="https://aroundtownrealty.in/wp-content/uploads/2024/07/Highline-2-Aroundtown-Realty-1024x819.jpeg" alt="img" className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover shadow-lg border-4 border-yellow-300" />
                    </div>
                </div>
                <div>
                    <br /><br /><br />
                    <h1 className="text-center text-white text-5xl">How ATR Delivers More Than Just Real Estate Services</h1>
                    <br />
                    <p className="text-center  text-yellow-300 text-3xl">We focus on client satisfaction.</p>
                    <br />
                    <p className="text-center text-white text-2xl"><strong>ATR</strong> is changing the way real estate works. As a <strong>top real estate agent in Ahmedabad</strong>, we offer expert advice, smart digital tools, and always put our clients first. Our team helps buyers and sellers with residential and commercial properties, including villas, resales, and rentals across Ahmedabad, Gujarat and Dubai. A strong network of developers and reliable sales methods are used to make every deal smooth and transparent. We are here to help you with client satisfaction, which is our top priority. Results are delivered through clear communication and well-tested strategies</p>
                    <br />
                    <button
                        type="submit"
                        className="text-black flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                    >
                        Explore
                        <svg
                            className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                            viewBox="0 0 16 19"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                className="fill-gray-800 group-hover:fill-gray-800"
                            ></path>
                        </svg>
                    </button>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <h1 className="text-center text-white text-5xl">Connecting Dreams to Addresses</h1>
                    <br />
                    <p className="text-center text-yellow-300 text-3xl">We turn your vision into reality.</p>
                    <br />
                    <p className="text-center text-white text-2xl">Looking for the right property in Gujarat as well as Dubai? At <strong>Noorinfra</strong>, your reliable <strong>real estate consultants in Ahmedabad, Gujarat and Dubai.</strong> From cozy homes to prime investments, we connect you to properties that truly fit your goals. Start your journey with confidence and let us bring your vision to life.</p>
                </div>
                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
                </div>
                    <br /><br /><br />
                    <br /><br /><br />
                    <br /><br /><br />
                    <br /><br /><br />
                    <br /><br /><br />
                    <br /><br /><br />
                <div>
                    <h1 className="text-center text-white text-5xl">New and Featured Projects</h1><br />
                    <p className='text-center text-white text-2xl'>We offer exclusive deals.</p><br />
                    <p className='text-center text-white text-2xl'>Our featured projects, developed by trusted names in real estate, offer the finest in design, location, and lifestyle. With exclusive pricing and personalized guidance, our team is here to help you find a home or investment that exceeds expectations.</p>
                    <br /><br /><br />
                    <br /><br /><br />
                    {/* start */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-full px-2 sm:px-0 place-items-center">
                        <div className="w-full max-w-xs flex justify-center items-center mx-auto">
                            <PixelTransition
                                firstContent={
                                    <img
                                        src="https://aroundtownrealty.in/wp-content/uploads/2024/11/bellagio-iscon-ambli-1-Aroundtown-680x510.jpg"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                }
                                secondContent={
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            display: "grid",
                                            placeItems: "center",
                                            backgroundColor: "#111"
                                        }}
                                    >
                                        <p className='text-center' style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Bellagio Iscon Ambli</p>
                                    </div>
                                }
                                gridSize={12}
                                pixelColor='#ffffff'
                                once={false}
                                animationStepDuration={0.4}
                                className="custom-pixel-card "
                            />
                        </div>
                        <div className="w-full max-w-xs flex justify-center items-center mx-auto">
                            <PixelTransition
                                firstContent={
                                    <img
                                        src="https://aroundtownrealty.in/wp-content/uploads/2022/06/oeuvre-iconic-3BHK-aroundtown-realty-680x510.jpg"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                }
                                secondContent={
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            display: "grid",
                                            placeItems: "center",
                                            backgroundColor: "#111"
                                        }}
                                    >
                                        <p className='text-center' style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Madhav Oeuvre Iconic</p>
                                    </div>
                                }
                                gridSize={12}
                                pixelColor='#ffffff'
                                once={false}
                                animationStepDuration={0.4}
                                className="custom-pixel-card"
                            />
                        </div>
                        <div className="w-full max-w-xs flex justify-center items-center mx-auto">
                            <PixelTransition
                                firstContent={
                                    <img
                                        src="https://aroundtownrealty.in/wp-content/uploads/2025/09/sadxcc-680x510.png"
                                        alt="default pixel transition content, a cat!"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                }
                                secondContent={
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            display: "grid",
                                            placeItems: "center",
                                            backgroundColor: "#111"
                                        }}
                                    >
                                        <p className='text-center' style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Alayam Shivalik</p>
                                    </div>
                                }
                                gridSize={12}
                                pixelColor='#ffffff'
                                once={false}
                                animationStepDuration={0.4}
                                className="custom-pixel-card"
                            />
                        </div>
                        <div className="w-full max-w-xs flex justify-center items-center mx-auto">
                            <PixelTransition
                                firstContent={
                                    <img
                                        src="https://i.pinimg.com/736x/c7/f2/b5/c7f2b5293950e82b855d83a70c0577ec.jpg"
                                        alt="default pixel transition content, a cat!"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                }
                                secondContent={
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            display: "grid",
                                            placeItems: "center",
                                            backgroundColor: "#111"
                                        }}
                                    >
                                        <p className='text-center' style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Dubai Shivalik</p>
                                    </div>
                                }
                                gridSize={12}
                                pixelColor='#ffffff'
                                once={false}
                                animationStepDuration={0.4}
                                className="custom-pixel-card"
                            />
                        </div>
                    </div>
                    {/* end */}
                </div>
                <br /><br />
                <div className="relative z-10"> <ScrollVelocity texts={['| Real Estate | Noorinfra']} velocity={50} className="custom-scroll-text" /> <br /> <br /> </div>
                <br /><br />
                <br /><br />
                <br /><br />
                <div>
                    <h1 className="text-center text-white text-5xl">Tailored Property Services for Every Need</h1>
                    <br />
                    <p className='text-center text-white text-2xl'>We are offering</p>
                    <br />
                    <p className='text-center text-white text-2xl'><span className='text-yellow-300'>ATR</span> offers end-to-end real estate solutions right from identifying deals to finalizing purchases and arranging finance. We focus on securing your capital, enhancing your property portfolio, and unlocking future-ready opportunities at smart price points.</p>
                </div>
                <ScrollStackItem itemClassName="bg-yellow-500">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                        <div className="flex-1 min-w-0">
                            <h1 className='text-3xl md:text-6xl wrap-break-word text-center'>Buy</h1>
                            <p className='text-sm md:text-base wrap-break-word'>Looking to buy your dream home or a smart investment? Noorinfra helps you find the perfect property with expert support at every step.{ /* As a leading real estate agent in Ahmedabad, we ensure secure, value-driven purchases in prime locations.*/}</p>
                        </div>
                        <div className="flex items-center justify-end md:pl-8">
                            <BsHouseCheckFill className="text-[200px] text-right" />
                        </div>
                    </div>
                </ScrollStackItem>
                <ScrollStackItem itemClassName="bg-red-500">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                        <div className="flex-1 min-w-0">
                            <h1 className='text-3xl md:text-6xl wrap-break-word text-center'>Sell</h1>
                            <p className='text-sm md:text-base wrap-break-word'>Sell your property faster and at the right price with ATR. We offer expert market insights, professional listings, and strategic promotion.{ /* Property sales are streamlined and optimized for profit by Gujarat's trusted real estate consultant.*/}</p>
                        </div>
                        <div className="flex items-center justify-end md:pl-8">
                            <FaMoneyBill1Wave className="text-[200px] text-right" />
                        </div>
                    </div>
                </ScrollStackItem>
                <ScrollStackItem itemClassName="bg-green-500">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                        <div className="flex-1 min-w-0">
                            <h1 className='text-3xl md:text-6xl wrap-break-word text-center'>Rent</h1>
                            <p className='text-sm md:text-base wrap-break-word'>Whether you're looking to rent a home or lease out your property, Noorinfra simplifies the process. We connect owners and tenants with ease, backed by verified listings and expert assistance.{ /*We handle all rental needs quickly and professionally.*/}</p>
                        </div>
                        <div className="flex items-center justify-end md:pl-8">
                            <FaBuildingShield className="text-[200px] text-right justify-center" />
                        </div>
                    </div>
                </ScrollStackItem>
                <ScrollStackItem itemClassName="bg-blue-500">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                        <div className="flex-1 min-w-0">
                            <h1 className='text-3xl md:text-6xl wrap-break-word text-center'>Invest</h1>
                            <p className='text-sm md:text-base wrap-break-word'>Unlock smart investment opportunities. We guide investors through profitable real estate deals across Gujarat and Dubai. As a leading real estate advisor in Dubai.</p>
                        </div>
                        <div className="flex items-center justify-end md:pl-8">
                            <FaChartArea className="text-[200px] text-right" />
                        </div>
                    </div>
                </ScrollStackItem>

                {/* Spacer to allow last card to scroll up naturally */}
                {/* <div style={{ height: '100vh' }}></div> */}
                <br /><br />

                <Footer />
            </ScrollStack>
        </>
    )
}

export default PAGE
