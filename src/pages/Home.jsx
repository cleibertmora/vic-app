import Layout from "../components/Layout"
import ClientsGrid from "../components/ClientsGrid"
import { useCollection } from '../hooks/useCollection'

function Home() {
  const { documents, error } = useCollection('clientes')

  return (
    <Layout>
      {error && <p className="error">{error}</p>}
      {documents && <ClientsGrid clientes={documents} />}
    </Layout>
  )
}

export default Home