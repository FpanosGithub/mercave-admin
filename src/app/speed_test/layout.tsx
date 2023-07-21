
export const metadata = {
  title: 'Speed Test',
  description: 'Comprobación de velocidades de acceso a BD por diveros métodos',
}

export default function RootLayout(props: {
  children: React.ReactNode,
  azure: React.ReactNode,
  join: React.ReactNode,
  route_handler: React.ReactNode,
  select: React.ReactNode
}) {
  
  return (
    <div className="flex flex-col justify-between w-full pl-8 pr-4 pt-4 gap-4">
      {props.children}
      {props.select}
      {props.join}
      {props.route_handler}
      {props.azure} 
    </div>
    
          
        
  )
}
