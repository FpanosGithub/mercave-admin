export const metadata = {
  title: 'EAVMs',
  description: 'acceso a tabla de EAVMs',
}

export default function Layout(props: {
  children: React.ReactNode,
}) {
  
  return (
    <div className="flex flex-col justify-between w-full pl-8 pr-4 pt-4 gap-4">
      <div className="text-2xl text-gray-800 text-center py-2 px-4 flex justify-between gap-6">
      <p className='mt-6'>Ejes Ancho Variable</p> 
    </div>
      {props.children}
    </div>
    
          
        
  )
}
