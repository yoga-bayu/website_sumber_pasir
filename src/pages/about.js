import React from "react";
import image1 from "../asset/logo.png"
import excavator from "../asset/excavator.png"
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        
        <div>
        <section className="about-section h-screen">
        <div className="about w-full">
        <div className=" header absolute w-full flex justify-between items-center ">
          <a href="#" className="logoNavbar">
            <img src={(image1)} className="logo w-14 h-14 absolute "></img>
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
              <h1 className="font-bold text-6xl pt-52 mb-6">Tentang Kami</h1>
              <p className=" font-bold text-3xl">Sumber Pasir</p>
            </div>          

            <div className="about-info  bg-white justify-center ml-36 mt-20 items-center text-left pt-10 rounded-xl">
                <div className="garis w-20 h-2 bg-blue-700 ml-10"></div>
                <h1 className="h1-about text-3xl font-bold pt-4 ml-10">Tentang Sumber Pasir</h1>
                <p className="h1-about ml-10 mt-6">Sumber pasir adalah Suplier bahan Bangunan yang menyediakan segala jenis pasir dan batu untuk kebutuhan pembagunan rumah dan lain-lain.
                   System pembayaran bisa melalui COD “Barang sampai langsung bayar”</p>
            </div>
            </div>
      
      </section>

      <section className="about-section-info w-full h-screen">
        <div className="text-center">
            <h1 className="h1-about font-bold text-3xl pt-20">CARA ORDER PASIR & BATU</h1>
        </div>

        <div className="order flex justify-center items-center flex-wrap gap-6">
                <div className="order-about text-left">
                  <h1 className=" text-8xl text-gray-300 font-black mb-3">01.</h1>
                  <h1 className="cardText font-bold text-2xl">Cek Website Sumber Pasir</h1>
                  <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                </div>
                <div className="order-about text-left">
                  <h1 className=" text-8xl text-gray-300 font-black mb-3">02.</h1>
                  <h1 className="cardText font-bold text-2xl">Cari Kontak</h1>
                  <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                </div>
                <div className="order-about text-left">
                  <h1 className=" text-8xl text-gray-300 font-black mb-3">03.</h1>
                  <h1 className="cardText font-bold text-2xl">Hubungan Kontak</h1>
                  <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                </div>
                <div className="order-about text-left mt-[-50px]">
                  <h1 className=" text-8xl text-gray-300 font-black mb-3">04.</h1>
                  <h1 className="cardText font-bold text-2xl">Pesan Sesuai Kebutuhan</h1>
                  <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                </div>
                <div className="order-about text-left mt-[-50px]">
                  <h1 className=" text-8xl text-gray-300 font-black mb-3">05.</h1>
                  <h1 className="cardText font-bold text-2xl">Pesanan Akan di Proses</h1>
                  <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                </div>
                <div className="order-about text-left mt-[-50px]">
                  <h1 className=" text-8xl text-gray-300 font-black mb-3">06.</h1>
                  <h1 className="cardText font-bold text-2xl">Pengiriman Pesanan</h1>
                  <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                </div>
            </div>

            <div className="closing-first flex items-center mb-40">
            <div className="img-logo">
                <img className="w-[650px] h-[800px] mr-20" src={(excavator)} alt="Gambar" />
            </div>
            <div className="text-logo mr-20 mt-[-400px]">
                <h1 className="text-5xl font-bold mb-6 mt-[-100px]">Kenapa Kami ?</h1>
                <p>Butuh pasir segera? Langsung hubungi SUMBERPASIR!  Pesan pasir di SUMBER PASIR dijamin anti worry!.</p>
            <div className="list-card bg-white w-[450px] h-[460px] absolute mt-10">
                <ul className="list">
                    <li className="list-li mt-6">
                        <p className="py-2 mx-4 font-bold">✓ Terbaik di kelas nya</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kami selalu menjaga Kualitas produk kami supaya menjadi terbaik di kelas nya</p>
                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Material di jamin asli sesuai produk nya</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Material yang kami jual pastinya original dan kualitas terbaik</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Termurah</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Harga kami selalu bersaing dengan yang lain, pastinya lebih murah</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Harga Termasuk Ongkir</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Gausah lagi mikirin ongkir, karna harga sudah termasuk ongkir</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Harga termasuk bongkar menggunakan dump hydraulic</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Harga termasuk bongkar menggunakan dump hydraulic</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Hari ini pesan hari ini juga sampai</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kami selalu menjaga Kualitas produk kami supaya menjadi terbaik di kelas nya</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Gratis ongkir untuk wilayah Tangerang, Jakarta</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Ingat Gaes, Gratis ongkir untuk wilayah Tangerang dan Jakarta</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Kapasitas ukuran 6.0- 6.5 kubik (m3) bisa refund jika ukuran tidak sesuai.</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kapasitas ukuran 6.0- 6.5 kubik (m3) bisa refund jika ukuran tidak sesuai.</p>
                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Solusi mudah bisa order melalui WA</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kami memudahkan customer dalam mengorder produk, bisa langsung chat whatsapp sumber pasir.</p>

                    </li>
                   
                </ul>
            </div>
            </div>


            </div>

            <div className="closing-cta mt-20 mb-52 ml-56 mr-40 justify-center align-center bg-white rounded-2xl">
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

export default AboutPage