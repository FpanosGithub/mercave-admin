import FormVersionCambiador from "@/componentes/FormVersionCambiador"

async function getVersionCambiador(codigo:string) {
    const res = await fetch(`${process.env.APP_URL}/api/cambiadores/versiones/${codigo}`, {cache: 'no-cache', next: {tags: [codigo]}})
    return await res.json()
}

export default async function page({params}:{ params: { codigo: string } }) {
    const version = await getVersionCambiador(params.codigo)

    return (
        <div className="w-full border border-gray-200 shadow rounded-lg bg-white p-4">
            <FormVersionCambiador version={version[0]} />
        </div>
    )
}