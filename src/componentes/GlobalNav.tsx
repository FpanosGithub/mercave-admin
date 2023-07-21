'use client'
import clsx from "clsx"
import {useState} from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Modalbar from "./Modalbar"

export default function GlobalNav({admin = false, children}:{admin?:Boolean, children: React.ReactNode}) {
  const [open, setOpen] = useState(false)

  return (
    <div className='grid grid-rows-header font-mono'>
      <Navbar admin = {admin} open = {open} setOpen = {setOpen} />
      <div className={clsx('h-screen', {'md:ml-52 mt-12':!admin})}>
        {(!open && !admin) && <Sidebar open = {open}/>}
        <div className=" bg-gray-100">
          {children}
        </div>
        {(open && !admin) && <Modalbar open = {open} setOpen = {setOpen}/>}
      </div>
    </div>
  )
}