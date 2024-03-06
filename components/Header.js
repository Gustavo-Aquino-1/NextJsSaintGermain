import React from 'react'
import Link from 'next/link'
import logo from '@/assets/logo.png'

function Header() {
  return (
    <header>
      <Link href='/'>
        <img src={logo.src} alt='logo' />
        Saint Germain
      </Link>
      <nav>
        <li>
          <Link href='/meals'>Meals</Link>
        </li>
        <li>
          <Link href='/meals/share'>Share</Link>
        </li>
        <li>
          <Link href='/community'>Community</Link>
        </li>
      </nav>
    </header>
  )
}

export default Header
