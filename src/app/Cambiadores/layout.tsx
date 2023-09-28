export const metadata = {
    title: 'Cambiadores',
    description: 'Acceso a tabla cambiadores'
}

export default function Layout(props: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col justify-between w-full pl-4 md:pl-8 pr-4 pt-4 gap-4">
            <div className="text-2xl text-gray-800 text-center py-2 px-4 flex justify-between gap-6">
                <p className='mt-6'>Cambiadores</p> 
            </div>
            {props.children}
        </div>
    )
}