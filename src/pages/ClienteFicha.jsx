import { useParams } from "react-router-dom";
import Layout from "../components/Layout"
import { useDocument } from "../hooks/useDocument";

function ClienteFicha() {
    const params = useParams();
    const { document, error, isCancelled } = useDocument("clientes", params.clienteID)

    console.log(document)
    console.log(error)
  
    return (
        <Layout>
            <div>Cliente {params.clienteID}</div>
        </Layout>
    )
}

export default ClienteFicha