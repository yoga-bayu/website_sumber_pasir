import React from "react";
import Header from "../components/Header";
import produk from "../asset/pasirCor.png"
import produk2 from "../asset/pasir rangkas.png"
import produk6 from "../asset/abu batu.png"
import produk7 from "../asset/pasir bangka.png"
import Footer from "../components/Footer";

const Pasir = () => {
  return (
    <div>
    <div className="">
    <Header/>
    </div>
   
   <div className=" bg-slate-200 pb-60">
    <h1 className=" text-center text-5xl mb-14 text-blue-950 font-bold pt-40">PASIR</h1>
    <div className="card-batu flex justify-center items-center flex-wrap gap-8">
                <div className="cardBox-batu text-left">
                  <img src={(produk)} className="w-full"></img>
                  <h1 className="font-bold text-3xl text-blue-950 mt-5">Pasir Cor</h1>
                  <p className="mt-6 mb-5">Pasir Hitam merupakan pasir dengan corak warna hitam pekat dengan butiran pasirnya yang agak kasar. Pasir Hitam Cor – Pengecoran merupakan salah satu kegiatan wajib yang harus dilakukan dalam proses pembangunan. Dalam pengerjaannya, pengecoran memerlukan beberapa bahan penting salah satu contohnya adalah pasir. Pasir memang sangat mudah kita temukan di alam sekitar kita, baik di …</p>
                  <a href="../pasir/pasirCor" className=" hover:text-blue-600">Read More ➠</a>
                </div>
                <div className="cardBox-batu text-left">
                  <img src={(produk2)} className="w-full"></img>
                  <h1 className="font-bold text-3xl text-blue-950 mt-5">Pasir Rangkas</h1>
                  <p className="mt-6 mb-5">"Apa itu Pasir Rangkas ? "Pasir rangkas" adalah istilah yang mungkin mengacu pada jenis pasir yang berasal dari daerah tertentu, terutama di Indonesia, yang dikenal karena kualitas dan sifatnya yang unik. Pasir rangkas sering digunakan dalam konstruksi, terutama dalam pembuatan campuran beton atau mortir.Berapa harga Jual Pasir Rangkas yang beredar di Jakarta dan sekitarnya? Harga pasir rangkas …</p>
                  <a href="../pasir/pasirRangkas" className=" hover:text-blue-600">Read More ➠</a>
                </div>
                <div className="cardBox-batu text-left">
                <img src={(produk7)} className="w-full"></img>
                <h1 className="font-bold text-3xl text-blue-950 mt-5">Pasir Bangka</h1>
                <p className="mt-6 mb-5">Pasir Bangka adalah jenis pasir yang berasal dari Pulau Bangka, sebuah pulau di Indonesia yang terkenal dengan tambang timahnya. Pasir ini sering digunakan dalam berbagai aplikasi konstruksi, terutama sebagai bahan campuran dalam pembuatan beton atau mortar. Karakteristik utama dari Pasir Bangka adalah kehalusannya dan warnanya yang putih atau keabu-abuan. Kekhalusan butiran pasirnya membuatnya cocok untuk digunakan dalam campuran beton yang ... </p>
                <a href="../pasir/pasirBangka" className=" hover:text-blue-600">Read More ➠</a>
                </div>
                <div className="cardBox-batu text-left">
                  <img src={(produk6)} className="w-full"></img>
                  <h1 className="font-bold text-3xl text-blue-950 mt-5">Abu Batu</h1>
                  <p className="mt-6 mb-5">Apa itu Abu Batu? Masyarakat awam terutama yang tak menggeluti bidang teknik konstruksi pasti bingung dengan istilah tersebut. Dulu, abu batu biasa digunakan sebagai lapisan awal sebelum lapisan aspal beton pada konstruksi lapisan penetrasi makadam atau lapen (lapisan permukaan jalan). Namun, di zaman modern seperti saat ini abu batu jarang digunakan di kota-kota besar, karena …</p>
                  <a href="../pasir/abuBatu" className=" hover:text-blue-600">Read More ➠</a>
                </div>
    </div>
    </div>

    <Footer/>
    </div>
  )
}

export default Pasir