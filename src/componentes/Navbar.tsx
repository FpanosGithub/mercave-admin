'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import adif from  '@/../public/logos/adif.png'

export default function Navbar({admin, open, setOpen}:{admin?: Boolean, open: Boolean, setOpen:Function}) {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 border-b border-gray-300 flex justify-between items-center px-4 py-2 bg-white'>
      <div className='flex gap-4'> 
        {!admin && <Bars3BottomLeftIcon 
          className='h-8 mt-1 hover:cursor-pointer md:hidden text-gray-600'
          onClick={()=>setOpen(!open)}/>
        }
        <Link href="/" className="">
            <Image src={adif} width = {80} height={40} alt='logo adif' className='w-auto mt-1' priority/>
        </Link>
      </div>
      <div className='text-gray-600 text-xl ml-6 mt-1'>Mercave Data Base Admin</div>
    </div>
  )
}
