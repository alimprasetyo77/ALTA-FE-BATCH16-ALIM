import Layout from "../../components/Layout"

const DetailBook = () => {
  return (
    <Layout>
      <div className="p-8 flex-grow">
        <div className="bg-white rounded border shadow-sm flex gap-2">
          <div className="w-1/3 flex flex-col items-center p-4 gap-y-12">
            <img src="https://source.unsplash.com/400x400?book" alt="book" />
            <button className="px-10 py-2 rounded bg-sky-400 text-white font-semibold text-sm">Borrow</button>
          </div>
          <div className="w-full p-4 space-y-4">
            <h1 className="font-semibold text-4xl font-Montserrat">Title</h1>
            <h3 className="text-gray-500 font-semibold text-lg">Sub Title</h3>

            <div className="flex text-sm gap-x-3 text-gray-700 tracking-wide">
              <p><span className="text-base text-gray-900">{Math.ceil(Math.random() * 1000)}</span> Want to read</p>
              <p><span className="text-base text-gray-900">{Math.ceil(Math.random() * 1000)}</span> Have Read</p>
            </div>

            <p className="text-gray-900 tracking-wide text-base ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatum culpa, placeat hic iusto eos laboriosam! Officia, consequuntur facilis ratione pariatur incidunt accusantium, temporibus quisquam suscipit provident, error nesciunt adipisci.
              Fugiat soluta incidunt quia ipsum assumenda ea nemo placeat consequatur reiciendis ullam ut, voluptas dolorum itaque sit deleniti doloremque, molestiae voluptates eos laborum fuga ad necessitatibus debitis minus! Adipisci, eveniet!
              Delectus praesentium adipisci quis ab facilis eius nobis beatae odit! Aut tenetur ad dolor quas nihil corporis nulla quisquam rerum minus quod, aspernatur id unde iste reprehenderit cum aliquam explicabo.
              Minus fugiat voluptates dolore voluptatibus quisquam fuga numquam perspiciatis neque architecto necessitatibus repellendus ad nam laborum amet nemo vitae, repellat a reprehenderit nulla? Eveniet dicta asperiores laborum provident in eaque.</p>
            <div className="flex gap-x-4 ">
              <div className="border rounded px-12 py-2 border-gray-300 shadow-sm flex flex-col items-center ">
                <span className="text-sm text-gray-500 whitespace-nowrap">Publich Date</span>
                <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">2000</span>
              </div>
              <div className="border rounded px-12 py-2 border-gray-300 shadow-sm flex flex-col items-center ">
                <span className="text-sm text-gray-500 whitespace-nowrap">Publisher</span>
                <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">Bloomsbury Publishing</span>
              </div>
              <div className="border rounded px-12 py-2 border-gray-300 shadow-sm flex flex-col items-center ">
                <span className="text-sm text-gray-500 whitespace-nowrap">Language</span>
                <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">Inggris</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailBook