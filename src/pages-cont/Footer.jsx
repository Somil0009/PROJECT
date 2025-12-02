// import { SiHomebridge } from "react-icons/si";

const Footer = () => {
    return (
        <>
            <footer className='bg-amber-400 relative z-10 px-8 py-8'>
                <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8">
                    <div id="left1" className="flex-1 mb-8 md:mb-0">
                        {/* <SiHomebridge className='text-black text-6xl mb-4' /> */}
                        <img src="NOOR1.jpg" alt="image" height={20}/>
                        <p className='text-black text-2xl'>Noorinfra is a leading company specialising in real estate consultancy. We help buyers to buy & sellers to sell property.</p>
                    </div>
                    <div id="center" className="flex-1 mb-8 md:mb-0 text-center">
                        <h1 className='text-black text-5xl mb-4'>Popular Searches</h1>
                        <ul className='text-black'>
                            <li>Residential Properties</li>
                            <li>Commercial Properties</li>
                            <li>Villa Properties</li>
                        </ul>
                    </div>
                    <div id="bottom" className="flex-1 md:text-right">
                        <h1 className='text-black text-5xl mb-4'>Contact Information</h1>
                        <ul className='text-black'>
                            <li>Rishikesh</li>
                            <li>Uttrakhand</li>
                            <li>India</li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-black" />
                <p className='text-4xl text-black text-center'>✦ Noorinfra ✦</p>
            </footer>
        </>
    )
}

export default Footer
