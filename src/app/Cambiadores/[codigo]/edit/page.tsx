import FormCambiador from "@/componentes/FormCambiador"

async function getCambiador(codigo: string) {
    const res = await fetch(`${process.env.APP_URL}/api/cambiadores/${codigo}`, {cache: 'no-cache', next: {tags: ['cambiadores']}})
    return await res.json()
}

export default async function page({params} : {params: {codigo: string}}) {
    const cambiador = await getCambiador(params.codigo)

    return(
        <>
            <div className="w-full border border-gray-200 shadow rounded-lg bg-white p-4">
                <FormCambiador cambiador={cambiador[0]} />
            </div>
        </>
    )
}