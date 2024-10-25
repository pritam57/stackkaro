"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Comonhaeder = () => {
    const [Hovered, setHovered] = useState(false);

    const links = [
        { title: "Home", link: "/home" },
        { title: "About", link: "/about" },
        { title: "Service", link: "/service" },
        { title: "Portfolio", link: "/common" },
        { title: "Blog", link: "/common" },
    ];

    const data = ['Software development', "app development", "website development", "ui/ux design", "digital marketing ", "SEO"]

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: 70, alignItems: "center", padding: '0 20px' }}>
            <div>
                <Image
                    src="/newlogo.png"
                    alt="logo"
                    width={150}
                    height={50}
                />
            </div>
            <div className="p-1 flex flex-row items-center">
                {links.map((item, index) => (
                    <div key={index} style={{ position: 'relative', margin: '0 10px' }}>
                        <Link
                            className="text-black text-center text-sm"
                            href={item.link}
                            onMouseEnter={() => {
                                if (item.title === "Service") {
                                    setHovered(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (item.title !== "Service") {
                                    setHovered(false);
                                }
                            }}
                        >
                            <label className="hover:text-blue-900">{item.title}</label>
                        </Link>


                        {item.title === "Service" && Hovered && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'white',
                                    border: '1px solid black',
                                    padding: '5px',
                                    zIndex: 10,
                                }}
                            >
                                {data.map((item, index) => {

                                    const formattedItem = item.replace(/ /g, '-');

                                    return (
                                        <div style={{ width: 200 }} key={index}>
                                            <Link  href={`/service/${formattedItem}`}>
                                                <label style={{ color: "black", margin: 5, textAlign: "center" }}>
                                                    {item}
                                                </label>
                                            </Link>
                                        </div>
                                    );
                                })}

                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="hidden md:block">
                <div className="h-10 w-24 bg-orange-500 rounded-full flex justify-center items-center hover:bg-customBlue transition-colors duration-300">
                    <Link href="/contact" className="text-center text-white">Contact</Link>
                </div>
            </div>
            <div>
                <button className='bg-white-800 text-xl w-12 h-12 rounded lg:hidden block'>
                    <i style={{ color: "black" }} className="ri-menu-line"></i>
                </button>
            </div>
        </div>
    );
}

export default Comonhaeder;
