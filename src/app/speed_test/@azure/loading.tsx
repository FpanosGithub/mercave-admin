export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-full border border-gray-400 shadow-sm rounded-lg flex justify-between gap-4 p-4  text-gray-800">
      <div className='flex flex-col justify-center text-center text-lg w-24 line-clamp-2'>FETCH Azure</div>
      <div className="flex flex-col justify-center text-center text-xl">..... ejes</div>
      <div className="flex flex-col justify-center text-center text-2xl font-semibold">
        <p className='py-4 px-8 border border-rose-600 shadow rounded-lg bg-rose-500 text-white animate-pulse'>Calculando ..</p> 
      </div>
    </div>
  )
}