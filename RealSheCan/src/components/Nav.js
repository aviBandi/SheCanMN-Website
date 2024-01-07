import hamburger from "../icons/hamburger.svg"
import { Link } from "react-router-dom";
import { Fragment, useState } from 'react'
import {Popover, Transition} from "@headlessui/react"

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/team", label: "Meet the Team" },
    { href: "/contact", label: "Contact" },
  ]
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <h1 className="italic text-xl text-purple-700 font-semibold font-montserrat">&gt;SheCan MN</h1>
        </a>
        <ul className='flex-1 flex justify-end items-center gap-8 max-lg:hidden'>
          {navLinks.map((item) => (
            <Link to={item.href}>
              <li key={item.label}>
                <h1
                  className='font-montserrat leading-normal text-lg text-purple-700 font-semibold'
                >
                  {item.label}
                </h1>
              </li>
            </Link>
          ))}
        </ul>

        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>













      </nav>
    </header>
  );
};

export default Nav;
