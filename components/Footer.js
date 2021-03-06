import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaStore, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="text-center bg-black text-white">
            <div className="container px-6 pt-6">
                <div className="mt-8 mb-8">
                    <Link href={"/"} passHref>
                        <Image src="/logo.png" alt="Saffron Logo" width={210} height={63} />
                    </Link>
                </div>
                
                <h3 className="text-lg font-semibold flex justify-center">Follow us</h3>
                <div className="flex justify-center mb-6">
                    <a href="https://www.facebook.com/saffronbeautysalonnspa/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-blue-800 hover:border-blue-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <FaFacebook className="ml-2 mt-2 mx-auto" />
                    </a>

                    <a href="https://www.instagram.com/saffronbeautysalonnspa/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-gradient-to-tr from-fuchsia-600 to-orange-600 hover:border-none focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <FaInstagram className="ml-2 mt-2 mx-auto" />
                    </a>

                    <a href="https://wa.me/917038298223" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <FaWhatsapp className="ml-2 mt-2 mx-auto" />
                    </a>

                    <a href="https://twitter.com/saffronbeautysalonnspa/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-blue-400 hover:border-blue-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <FaTwitter className="ml-2 mt-2 mx-auto" />
                    </a>

                    <a href="https://goo.gl/maps/p5QAVaeZo919Lfo58" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
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

                {/* <div>
                    <form action="">
                        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
                            <div className="md:ml-auto md:mb-6">
                                <p className="">
                                <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>


                            <div className="md:mb-6">
                                <input
                                type="text"
                                className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="exampleFormControlInput1"
                                placeholder="Email address"/>
                            </div>

                            <div className="md:mr-auto mb-6">
                                <button type="submit" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div> */}

                <div className="mb-6">
                    <p className="lg:ml-72 lg:mr-72 mb-12 mt-6">
                    As professionals and revered estheticians, we provide Beauty Services with a passion to improve your skin, lokk using the best Available products. We ensure for all types of skin ,Safe and high effcient for our lovely customers.!!
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Hair Services</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <Link href="/services" passHref>
                                    <a className="text-white">Hair Treatment</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" passHref>
                                    <a className="text-white">Mehendi</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" passHref>
                                    <a className="text-white">Hair Cut</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" passHref>
                                    <a className="text-white">Hair Colours</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Beauty Services</h5>

                        <ul className="list-none mb-0">
                        <li>
                            <Link href="/services" passHref>
                                <a className="text-white">Cleanup</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" passHref>
                                <a className="text-white">Facial</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" passHref>
                                <a className="text-white">Makeup</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" passHref>
                                <a className="text-white">Bridal</a>
                            </Link>
                        </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Other Services</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <Link href="/services" passHref>
                                    <a className="text-white">Waxing</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" passHref>
                                    <a className="text-white">Threading</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" passHref>
                                    <a className="text-white">Nail Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" passHref>
                                    <a className="text-white">Massage</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Useful Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <Link href="/about" passHref>
                                    <a href="#!" className="text-white">Abouts us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://wa.me/917208875838/" passHref>
                                    <a href="#!" className="text-white">Contact us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tandc" passHref>
                                    <a className="text-white">Terms of Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" passHref>
                                    <a className="text-white">Privacy Policy</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>

            <div className="text-center p-4 bg-black">
                {(new Date().getFullYear())} ?? Saffron Beauty Salon | Designed by 
                <a className="text-white" href="https://neurosoftech.org/" > NeurosofTech</a>
            </div>
        </footer>
    )
}

export default Footer;