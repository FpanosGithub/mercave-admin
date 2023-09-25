'use client'
import { SwatchIcon, TrashIcon, TruckIcon, CogIcon, HomeModernIcon, CloudArrowDownIcon, IdentificationIcon, TableCellsIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import tria from  '@/../public/logos/triaWhite.png'
import { useState } from "react"

export default function Sidebar({open}:{open:Boolean}) {
  const [selectedLink, setSelectedLink] = useState('link1')
  const active = "flex gap-4 text-white"
  const nonactive = "flex gap-4 hover:text-gray-300"
  return (
    <div className='fixed left-0 z-40 h-screen hidden md:flex md:flex-col justify-between p-2 bg-gray-800 text-gray-400'>
      <div className="px-4 py-8 space-y-4">
        <Link href={'/'} className={selectedLink === 'link1' ? active : nonactive} onClick={() => setSelectedLink('link1')}>
          Home
        </Link>
        <p className="font-light tracking-wider text-sm pt-4">DB RECORDS</p>
        <Link href={'/Vehiculos'} className={selectedLink === 'link2' ? active : nonactive} onClick={() => setSelectedLink('link2')}>
          <TruckIcon className="w-6 h-6"/>
          Vehiculos
        </Link>
        <Link href={'/Vehiculos/tipos'} className={selectedLink === 'link10' ? active : nonactive} onClick={() => setSelectedLink('link10')}>
          <SwatchIcon className="w-6 h-6"/>
          <TruckIcon className="w-6 h-6"/>
          Tipos
        </Link>
        <Link href={'/EAVMs'} className={selectedLink === 'link3' ? active : nonactive} onClick={() => setSelectedLink('link3')}>
          <CogIcon className="w-6 h-6"/>
          EAVMs
        </Link>
        <Link href={'/EAVMs/tipos'} className={selectedLink === 'link11' ? active : nonactive} onClick={() => setSelectedLink('link11')}>
          <SwatchIcon className="w-6 h-6"/>
          <CogIcon className="w-6 h-6"/>
          Tipos
        </Link>
        <Link href={'/Cambiadores'} className={selectedLink === 'link4' ? active : nonactive} onClick={() => setSelectedLink('link4')}>
          <HomeModernIcon className="w-6 h-6"/>
          Cambiadores
        </Link>
        <p className="font-light tracking-wider text-sm pt-4">SPEED TESTS</p>
        <Link href={'speed_test'} className={selectedLink === 'link5' ? active : nonactive} onClick={() => setSelectedLink('link5')}>
          <CloudArrowDownIcon className="w-6 h-6"/>
          lists Download
        </Link>
        <Link href={'/'} className={selectedLink === 'link6' ? active : nonactive} onClick={() => setSelectedLink('link6')}>
          <IdentificationIcon className="w-6 h-6"/>
          Find Element
        </Link>
      <p className="font-light tracking-wider text-sm pt-4 text-rose-600">DANGER ZONE</p>
        <Link href={'/'} className={selectedLink === 'link7' ? active : nonactive} onClick={() => setSelectedLink('link7')}>
          <TrashIcon className="w-6 h-6"/>
          Delete Tables
        </Link>
        <Link href={'/'} className={selectedLink === 'link8' ? active : nonactive} onClick={() => setSelectedLink('link8')}>
          <TableCellsIcon className="w-6 h-6"/>
          Seed
        </Link>
        <Link href={'/'} className={selectedLink === 'link9' ? active : nonactive} onClick={() => setSelectedLink('link9')}>
          <WrenchScrewdriverIcon className="w-6 h-6"/>
          Migrate
        </Link>
      </div>
      <div className="mb-10 py-4  flex space-x-4 text-sm justify-center border-t border-gray-600">
        <p className="">Creado por </p>
        <Image src={tria} width = {66} height={21} alt='logo adif' priority/>
      </div>
      
    </div>
  )
}
