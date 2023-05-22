'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu(){

  const pathname = usePathname()
  
  return <div className={styles.menu}>
    <Link className={pathname === '/'?styles.active:''} href="/">Home</Link>
    <Link className={pathname === '/nested'?styles.active:''} href="/nested">Nested Object</Link>
  </div>

}