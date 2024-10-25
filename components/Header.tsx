"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  const [indexNum, setindexNum] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  useEffect(() => {
    if (path === "/contact") {
      setindexNum(6);
    }
  }, [path]);

  const links = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Hire a Talent",
      link: "/common",
    },
    {
      title: "Apply as a Talent",
      link: "/about",
    },
    {
      title: "Web Services",
      link: "/service",
    },
    {
      title: "More Header",
      link: "/common",
    },
  ];

  const changePage = (number: number) => {
    setindexNum(number);
  };

  const underline = {
    textDecoration: "none",
    borderBottom: "2px solid orange",
    paddingBottom: "2px",
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); 
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 70,
        alignItems: "center",
      }}
    >
      <div>
        <Image src={"/newlogo.png"} alt="logo" width={150} height={50} />
      </div>

     
      <div className="p-1 flex hidden md:block">
        {links.map((item, index) => (
          <Link
            className="m-5 text-black text-center text-sm"
            href={item.link}
            key={index}
          >
            <label
              onClick={() => {
                changePage(index);
              }}
              style={indexNum === index ? underline : {}}
            >
              {item.title}
            </label>
          </Link>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="h-10 w-24 bg-orange-500 rounded-full flex justify-center items-center hover:bg-customBlue transition-colors duration-300">
          <Link href={"/contact"} className="text-center text-white">
            Contact
          </Link>
        </div>
      </div>

     
      <div>
        <button
          className="bg-white-800 text-xl w-12 h-12 rounded lg:hidden block"
          onClick={toggleMobileMenu}
        >
          <i style={{ color: "black" }} className="ri-menu-line"></i>
        </button>
      </div>

      
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-10 flex flex-col items-center md:hidden">
          {links.map((item, index) => (
            <Link
              className="p-4 text-black text-center text-sm w-full"
              href={item.link}
              key={index}
              onClick={toggleMobileMenu} 
            >
              <label
                onClick={() => {
                  changePage(index);
                }}
                style={indexNum === index ? underline : {}}
              >
                {item.title}
              </label>
            </Link>
          ))}
          <Link href={"/contact"} className="p-4 text-center text-white bg-orange-500 w-full hidden md:block">
            Contact
          </Link>
          <Link href={"/contact"} className="p-4 text-center text-white md:hidden">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
