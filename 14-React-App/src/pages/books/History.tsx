import Layout from "../../components/Layout"
import TableBook from "../../components/TableBook"

const History = () => {
  return (
    <Layout>
      <div className="p-16 mx-auto container">
        <h1 className="font-semibold text-4xl mb-6 text-gray-700">History </h1>
        <TableBook borrowNameActive={true} />
      </div>
    </Layout>
  )
}

export default History