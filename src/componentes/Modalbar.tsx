'use client'
import { XMarkIcon, TrashIcon, TruckIcon, CogIcon, HomeModernIcon, CloudArrowDownIcon, IdentificationIcon, TableCellsIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import tria from  '@/../public/logos/triaWhite.png'

export default function Modalbar({open, setOpen}:{open: Boolean, setOpen:Function}) {
  return (
    <div 
    onClick={()=>{setOpen(!open)}}
    className="fixed z-40 w-full h-screen left-0 top-12 bg-black/25">
      <div 
        onClick={(e)=>e.stopPropagation()}
        className="bg-gray-800 absolute top-0 left-0 w-56 h-screen overflow-y-scroll text-gray-400 flex flex-col justify-between px-2">
        <div className="px-4 space-y-4 mt-10">
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 hover:text-gray-300">
            Home
          </Link>
          <p className="font-light tracking-wider text-sm pt-4">DB RECORDS</p>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 hover:text-gray-300">
            <TruckIcon className="w-6 h-6"/>
            Vehicles
          </Link>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 hover:text-gray-300">
            <CogIcon className="w-6 h-6"/>
            EAVMs
          </Link>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 hover:text-gray-300">
            <HomeModernIcon className="w-6 h-6"/>
            Gauge Changers
          </Link>
          <p className="font-light tracking-wider text-sm pt-4">SPEED TESTS</p>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 hover:text-gray-300">
            <CloudArrowDownIcon className="w-6 h-6"/>
            lists Download
          </Link>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 hover:text-gray-300">
            <IdentificationIcon className="w-6 h-6"/>
            Find Element
          </Link>
            <p className="font-light tracking-wider text-sm pt-4 text-rose-600">DANGER ZONE</p>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 hover:text-gray-300">
            <TrashIcon className="w-6 h-6"/>
            Delete Tables
          </Link>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 hover:text-gray-300">
            <TableCellsIcon className="w-6 h-6"/>
            Seed
          </Link>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 hover:text-gray-300">
            <WrenchScrewdriverIcon className="w-6 h-6"/>
            Migrate
          </Link>
        </div>
        <div className="flex space-x-4 text-sm justify-center py-4 mb-10 border-t border-gray-600">
          <p className="">Creado por </p>
          <Image src={tria} width = {66} height={21} alt='logo adif' priority/>
        </div>
      </div>
    </div>
  )
}
