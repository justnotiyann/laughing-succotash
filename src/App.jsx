// Kita perlu mengimport juga useState dari react
import { useEffect, useState } from "react"

function App() {
   // Buat satu state untuk menampung data
   const [products, setProducts] = useState([]) // Kita inisialisasikan nilai pada paramater useState berupa array kosong

   // Buat fungsi untuk melakukan proses fetching data
   const fetchDataProducts = () => {
      fetch("http://localhost:3000/products")
         .then((result) => result.json())
         .then((result) => {
            // Kita masukkan hasil data fetching kedalam state yang kita buat disini
            setProducts(result)
            console.log("Isi variabel products")
            console.log(products)
         })
   }

   useEffect(() => {
      fetchDataProducts() // Kita jalankan fungsi disini agar berjalan setiap kali komponen app dirender / ditampilkan
   }, [])

   return (
      <>
         {/* Kita Tambahkan elemen UI */}
         <div className="flex justify-center items-center gap-x-2 h-screen">
            {/* Kita lakukan perulangan disini */}
            {products.map((result, index) => (
               <div className="w-1/3 card border flex flex-col justify-center p-5 rounded-md" key={index}>
                  <div className="flex justify-center mb-4">
                     <img src={result.image} alt="Mechanikal Keyboard" className="rounded-md" />
                  </div>

                  <div>
                     <div className="flex justify-between items-center">
                        <div className="font-bold">{result.name}</div>
                        <div className="text-sm py-2 px-6 bg-black rounded-xl text-white flex justify-center items-center gap-x-2">
                           <span className="">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                           </span>
                           <span className="block">Add To Cart</span>
                        </div>
                     </div>
                     <p className="my-2">{result.brand}</p>
                     <p className="font-bold">${result.price}</p>
                  </div>
               </div>
            ))}
         </div>
      </>
   )
}

export default App
