import DeleteCambiador from "@/componentes/DeleteCambiador"

export default function page({params} : {params: {fichero: string}}) {
    const codigoCambiador = params.fichero

    return (
        <DeleteCambiador fichero={codigoCambiador} />
    )
}