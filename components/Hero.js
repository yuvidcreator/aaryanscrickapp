import Head from 'next/head';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaStore, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

function Hero() {
    return (
        <section>
            <Head>
                <title>Aryans Cricket Academy</title>
                <meta name="keywords" content="" />
                <meta name="description" content="This Aryans Cricket Academy - NextJS App is designed and developed by Yuvraj Limbole" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative min-h-[calc(110vh-72px)]">
                <Image src="/images/Aryans-Web-Background.jpg" layout="fill" objectFit="cover" alt="hero background image" />
            </div>
            <div className="flex justify-center items-center">
                <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auti p-8 -mt-16">
                    <Image src="/Aryans-Logo.png" width="600" height="200" objectFit="contain" alt="logo" />
                    <button className="text-white uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
                        Website is Under Construction
                    </button>

                    <p className="text-sm text-center text-white">
                        {" "}
                        Cricket is a TEAM Game. If you want Fame for Yourself, Go and play an Individual Game.
                    </p>
                    {/* <p className="text-sm text-white">- Gautam Gambhir</p> */}
                    
                    {/* <Image src="/images/cta-logo-two.png" width={600} height={70} objectFit="contain" alt="cta logo" /> */}
                    <h3 className="text-lg text-white font-semibold flex justify-center">Follow us</h3>
                    <div className="flex justify-center mb-6">
                        <a href="https://www.facebook.com/CricketAryans/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-blue-800 hover:border-blue-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaFacebook className="ml-2 mt-2 mx-auto" />
                        </a>

                        <a href="https://www.instagram.com/aryanscricketacademy_pune/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-gradient-to-tr from-fuchsia-600 to-orange-600 hover:border-none focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaInstagram className="ml-2 mt-2 mx-auto" />
                        </a>

                        <a href="https://wa.me/919881689768" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaWhatsapp className="ml-2 mt-2 mx-auto" />
                        </a>

                        <a href="https://twitter.com/aryancricket/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-blue-400 hover:border-blue-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaTwitter className="ml-2 mt-2 mx-auto" />
                        </a>

                        <a href="https://goo.gl/maps/M7ByRTsKbv5tnXmN8" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaStore className="ml-2 mt-2 mx-auto" />
                        </a>

                        <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaLinkedinIn className="ml-2 mt-2 mx-auto" />
                        </a>

                        {/* <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <svg aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="github"
                            className="w-3 h-full mx-auto"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            >
                            <path
                                fill="currentColor"
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                            ></path>
                            </svg>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;