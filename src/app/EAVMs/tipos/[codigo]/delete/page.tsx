import DeleteTipoEAVM from "@/componentes/DeleteTipoEAVM"

export default function page({params}: { params: {codigo: string}}) {
    const codigo = params.codigo
    return(
        <DeleteTipoEAVM codigo={codigo} />
    )
}