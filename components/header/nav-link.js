'use client' // less you use the 'use client' better because if you don't use it your file will be rendered by the server and that's much better. if you have to use use in small parts, put the part that will use in a small component so then only this small part will be rendered by the client

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './nav-links.module.css'

export default function NavLink({ href, children }) {
  const path = usePathname() // when the path changes the usePathname will update the variable path, in every file that has some variable using usePathname it will go and update the value!
  // console.log(path, href)
  return (
    <Link
      className={path.endsWith(href) ? classes.active : undefined}
      href={href}
    >
      {children}
    </Link>
  )
}
