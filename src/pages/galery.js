import React from "react";
import Footer from "../components/Footer";
import logo from "../asset/logo.png"
import kegiatan1 from "../asset/kegiatan1.png"
import kegiatan2 from "../asset/kegiatan2.png"
import kegiatan3 from "../asset/kegiatan3.png"
import kegiatan4 from "../asset/kegiatan4.png"
import kegiatan5 from "../asset/kegiatan5.png"
import kegiatan6 from "../asset/kegiatan6.png"
import kegiatan7 from "../asset/kegiatan7.png"
import kegiatan8 from "../asset/kegiatan8.png"
import kegiatan9 from "../asset/kegiatan9.png"
import kegiatan10 from "../asset/aktivitas4.png"

const Galery = () => {
    return(
        <div>
        <section className="about-section h-screen">
        <div className="about w-full">
        <div className=" header absolute w-full flex justify-between items-center ">
          <a href="#" className="logoNavbar">
            <img src={(logo)} className="logo w-14 h-14 absolute "></img>
            <p className="textLogo absolute text-white text-2xl font-black tracking-widest">Sumber Pasir</p>
          </a>
          <div></div>
          <nav className="navbar">
            <ul className="relative text-white mt-5">
              <li className="list"><a href="/">Home</a></li>
              <li className="list"><a href="/about">Tentang Kami</a></li>
              <li className="list"><a href="/">Produk ▾</a>
               <ul className="">
                <li className="produk"><a href="/batu">Batu</a></li>
                <li className="produk"><a href="/pasir">Pasir</a></li>
               </ul>
              </li>
              <li className="list"><a href="/kontak">Kontak</a></li>
              <li className="list"><a href="/blog">Blog</a></li>
             
                <button>
                  <li><a className="galery" href="/galery">Galery</a></li>
                </button>
             
            </ul>

          </nav>
        </div>
            <div className="about-text justify-center text-center text-white">
              <h1 className="font-bold text-6xl pt-52 mb-6">Galery</h1>
              <p className=" font-bold text-3xl">Sumber Pasir</p>
            </div>          
        </div>

    <div className="halaman-galery">
            <h1 className="text-center mt-20 text-4xl font-bold text-blue-950">Kami dan Tim</h1>
        <div className="flex justify-center items-center flex-wrap gap-6 mt-20 mb-20">
            <img src={(kegiatan7)} className="w-[600px] h-[400px]"></img>
            <img src={(kegiatan6)} className="w-[600px] h-[400px]"></img>
            <img src={(kegiatan5)} className="w-[600px] h-[400px]"></img>
            <img src={(kegiatan9)} className="w-[600px] h-[400px]"></img>
        </div>

            <h1 className="text-center mt-20 text-4xl font-bold text-blue-950">Kegiatan dan Proses</h1>
        <div className="flex justify-center items-center flex-wrap gap-6 mt-20 mb-20">
            <img src={(kegiatan1)} className="w-[600px] h-[400px]"></img>
            <img src={(kegiatan2)} className="w-[600px] h-[400px]"></img>
            <img src={(kegiatan3)} className="w-[600px] h-[400px]"></img>
            <img src={(kegiatan4)} className="w-[600px] h-[400px]"></img>
            <img src={(kegiatan8)} className="w-[600px] h-[400px]"></img>
            <img src={(kegiatan10)} className="w-[600px] h-[400px]"></img>
        </div>
    </div>

    <div className="closing-cta mt-20 mb-52 ml-56 mr-40 justify-center align-center rounded-2xl">
          <div className="ml-10 pt-10 text-left">
          <h1 className="h1-cta font-bold text-3xl mb-5 pb-">Hubungi Kami Segera</h1>
          <p className="p-cta font-bold">Untuk informasi mengenai Harga Pasir & Harga Batu terbaru.</p>
          <a href="https://wa.me/6281388230020" className="btn-cta justify-center align-center flex ">
              081388230020
          </a>
          </div>
          </div>

      <div className="mt-20">
      <Footer/>
      </div>
</section>
</div>
    )
}

export default Galery