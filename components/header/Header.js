import React from 'react'
import logo from '@/assets/logo.png'
import classes from './Header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './MainHeaderBackground'
import Link from 'next/link'
import NavLink from './nav-link'

function Header() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          <Image src={logo} alt='logo' width={100} height={100} priority />
          Saint Germain
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Meals</NavLink>
            </li>
            {/* <li>
              <NavLink href='/meals/share'>Share</NavLink>
            </li> */}
            <li>
              <NavLink href='/community'>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
