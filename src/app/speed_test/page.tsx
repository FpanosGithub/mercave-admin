import Image from 'next/image'
import RefreshButton from '@/componentes/refresh';

export default function speed_test() {
  return (
    <div className="text-2xl text-gray-800 text-center py-2 px-4 flex justify-between gap-6">
      <p className='mt-6'>Speed Test</p> 
      <div className='p-2'><RefreshButton/></div>
    </div>
  )
}
