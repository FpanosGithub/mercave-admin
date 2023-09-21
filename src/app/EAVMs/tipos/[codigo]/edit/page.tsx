import FormTipoEAVM from "@/componentes/FormTipoEAVM"
import { TipoEAVM } from "@/verceldb/schema/EAVMs"

async function getTipoEAVM(codigo:string) {
    const res = await fetch(`${process.env.APP_URL}/api/ejes/tipos/${codigo}`, {cache: "no-cache", next: {tags: [codigo]}})
    return await res.json()
}

export default async function page({params}: { params: { codigo: string } }) {
    const tipo: TipoEAVM[] = await getTipoEAVM(params.codigo)

    return (
        <div className="w-full border border-gray-200 shadow rounded-lg bg-white p-4">
            <FormTipoEAVM tipo={tipo[0]} />
        </div>
    )
}