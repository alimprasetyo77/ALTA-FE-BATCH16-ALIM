import Layout from "../../components/Layout"
import TableBorrows from "../../components/Tables/TableBorrows"

const MyBooks = () => {
  return (
    <Layout>
      <div className="p-16 mx-auto container space-y-10">
        <TableBorrows />
      </div>
    </Layout>
  )
}

export default MyBooks