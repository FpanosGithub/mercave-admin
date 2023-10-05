import DeleteVersionCambiador from "@/componentes/DeleteVersionCambiador"

export default function page({params}:{ params: {codigo: string} }) {
    const codigo = params.codigo
    return(
        <DeleteVersionCambiador codigo={codigo} />
    )
}