'use client'
import Link from 'next/link'
import { useTransition } from 'react'
import { deleteEAVM } from "@/actions/actions_EAVMs"

export default function DeleteEAVM({codigo}: {codigo:string}) {
  let [isPending, startTransition] = useTransition()
  
  return (
    <div className="fixed z-40 w-full h-screen left-0 top-0 bg-black/80 flex flex-col justify-center">
      <div 
        onClick={(e)=>e.stopPropagation()}
        className= 'mx-auto w-[21rem] h-60 rounded-lg bg-white flex flex-col justify-between gap-4 p-4'>
          <p>Por favor confirma que quieres eliminar: </p>
          <p className="text-xl text-center">{codigo}</p>
          <div className="flex justify-end gap-4">
            <Link 
              href= '/EAVMs'
              className="border border-gray-400 shadow rounded-lg p-4 hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:border-gray-700">
                Cancelar
            </Link>
            <Link 
              href= '/EAVMs'
              className="border border-gray-400 bg-rose-500 text-white shadow rounded-lg p-4 hover:cursor-pointer hover:bg-red-600 hover:shadow-lg hover:border-gray-200"
              onClick={() => startTransition(() => deleteEAVM(codigo))}>
                Eliminar
            </Link>
          </div>
      </div>

    </div>
  )
}