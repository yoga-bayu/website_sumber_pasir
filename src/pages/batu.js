import React from "react";
import Header from "../components/Header";
import produk1 from "../asset/bata merah.png"
import produk3 from "../asset/batu sirdam.png"
import produk4 from "../asset/batu screening.png"
import produk5 from "../asset/batu sk.png"
import Footer from "../components/Footer";
const Batu = () => {
  return (
    <div>
    <div className="">
    <Header/>
    </div>
   
   <div className=" bg-slate-200 pb-60">
    <h1 className=" text-center text-5xl mb-14 text-blue-950 font-bold pt-40">BATU</h1>
    <div className="card-batu flex justify-center items-center flex-wrap gap-8">
                <div className="cardBox-batu text-left">
                  <img src={(produk3)} className="w-full"></img>
                  <h1 className="font-bold text-3xl text-blue-950 mt-5">Batu Sirdam</h1>
                  <p className="mt-6 mb-5">Batu sirdam adalah istilah kependekan dari pasir makadam, yaitu campuran pasir sebesar 50% dan batu makadam sebanyak 50%, perpaduan dua material antara pasir dengan batu makadama ini akan menghasilkan pemadatan dan perataan pada komponen bangunan, contoh penggunaan bisa untuk pemadatan jalan, campuran beton dan lain sebagainya. Istilah makadam mengacu pada pecahan batu kali yang dikenal …</p>
                  <a href="../batu/batuSirdam" className=" hover:text-blue-600">Read More ➠</a>
                </div>
                <div className="cardBox-batu text-left">
                  <img src={(produk1)} className="w-full"></img>
                  <h1 className="font-bold text-3xl text-blue-950 mt-5">Batu Bata Merah</h1>
                  <p className="mt-6 mb-5">"Bata merah" adalah istilah yang merujuk pada jenis bahan bangunan yang umumnya digunakan dalam konstruksi. Bata merah dibuat dari tanah liat yang dibentuk dan kemudian dibakar di dalam oven atau tungku. Proses pembakaran menghasilkan bata merah yang keras, tahan lama, dan tahan terhadap cuaca. Jual Bata Merah Press dengan ukuran dan harga murah Jenis-jenis Batu Bata Secara garis besar, batu bata terbagi atas 2 jenis yaitu batu bata tanah …</p>
                  <a href="../batu/batuBataMerah" className=" hover:text-blue-600">Read More ➠</a>
                </div>
                <div className="cardBox-batu text-left">
                <img src={(produk5)} className="w-full"></img>
                <h1 className="font-bold text-3xl text-blue-950 mt-5">Batu Split-Koral</h1>
                <p className="mt-6 mb-5">Jual Batu Split Kualitas terbaik mulai dari ukuran 1-2Cm dan 2-3 cm. Batu split adalah batu yang di gunakan sebagai campuran semen dan pasir untuk membuat adukan coran. Mulai dari ceker ayam, dak, jalan cor dan kolom. Khusus untuk anda yang berada di Jabodetabek (Jakarta, Bogor, Depok, Tangerang dan Bekasi), bisa melakukan pemesanan batu split … !</p>
                <a href="../batu/batuSk" className=" hover:text-blue-600">Read More ➠</a>
                </div>
                <div className="cardBox-batu text-left">
                  <img src={(produk4)} className="w-full"></img>
                  <h1 className="font-bold text-3xl text-blue-950 mt-5">Batu Screening</h1>
                  <p className="mt-6 mb-5">Mengenal Batu Screening Beserta Kegunaannya Batu Screening – Batu merupakan salah satu material alam yang sangat dibutuhkan di dalam industri pembangunan. Hampir di setiap industri pembangunan baik gedung, tol, ataupun jalan membutuhkan material batu. Ada banyak jenis-jenis batu yang bisa digunakan dalam proses pembangunan baik batu yang berasal …</p>
                  <a href="../batu/batuScreening" className=" hover:text-blue-600">Read More ➠</a>
                </div>
    </div>
    </div>

    <Footer/>
    </div>
  )
}

export default Batu