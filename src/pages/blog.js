import React from "react";
import logo from "../asset/logo.png"
import blog1 from "../asset/aktivitas1.png"
import blog2 from "../asset/aktivitas2.png"
import blog3 from "../asset/aktivitas3.png"
import blog4 from "../asset/aktivitas4.png"
import Footer from "../components/Footer";

const Blog = () => {
    return (
        <div>
        <section className="h-screen">
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
              <h1 className="font-bold text-6xl pt-52 mb-6">Blog</h1>
              <p className=" font-bold text-3xl">Sumber Pasir</p>
            </div>          
        </div>

        <div className="blog text-center pt-20 text-blue-950">
            <h1 className="text-5xl font-bold mb-10">Sumber Pasir</h1>
        <div className="flex mx-16 text-left">
           <div>
           </div>
            <p className="">Selamat datang di Toko Batu dan Pasir kami, tempat terbaik untuk memenuhi kebutuhan material konstruksi Anda dengan kualitas terbaik dan pelayanan yang ramah. Di sini, kami menyediakan berbagai jenis batu dan pasir yang dapat digunakan untuk berbagai proyek konstruksi, mulai dari proyek kecil hingga proyek besar.
               Dengan berbagai macam pilihan batu, mulai dari batu pecah, batu kali, batu split, hingga batu belah, kami memastikan bahwa Anda akan menemukan batu yang sesuai dengan kebutuhan proyek Anda. Keberagaman jenis batu yang kami sediakan juga memungkinkan Anda untuk memilih batu yang sesuai dengan gaya desain yang Anda inginkan, mulai dari tampilan alami hingga modern.</p>
           <div>
            <p className="ml-20">Kami juga menawarkan beragam jenis pasir yang cocok untuk berbagai keperluan konstruksi, seperti pasir beton, pasir cor, pasir urug, dan pasir halus. Pasir berkualitas tinggi yang kami sediakan akan memberikan hasil yang optimal dalam setiap proyek konstruksi Anda.
               Kami mengutamakan kualitas dalam setiap produk yang kami jual, sehingga Anda dapat mempercayakan kebutuhan material konstruksi Anda kepada kami dengan percaya diri. Selain itu, tim kami yang profesional dan berpengalaman siap membantu Anda dalam memilih produk yang tepat sesuai dengan kebutuhan dan anggaran Anda.
               Kunjungi Toko Batu dan Pasir kami hari ini dan temukan solusi terbaik untuk semua kebutuhan material konstruksi Anda. Dengan layanan yang cepat, ramah, dan berkualitas, kami siap menjadi mitra terpercaya Anda dalam setiap proyek konstruksi.</p>
            </div>
        </div>
        </div>
        
        

            <div className="blog-img mt-20 pt-20 flex justify-center items-center flex-wrap gap-8">
                <div className="cardBox-blog text-left">
                  <img src={(blog1)} className="mb-10 mt-[-200px]"></img>
                  <h1 className="cardText font-bold mb-8">Proses Pengerukan Tanah</h1>
                  <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eum tempore corporis reprehenderit deserunt voluptatibus totam cumque ad suscipit dignissimos unde beatae laudantium quaerat, quia nisi accusamus? Eius, in qui earum voluptatum expedita unde dolor repellendus natus quidem aperiam dicta. Enim, fugiat iste? Sit maxime at est deserunt doloribus debitis.</p>
                </div>
                <div className="cardBox-blog text-left">
                  <img src={(blog2)} className="mb-10 mt-[-200px]"></img>
                  <h1 className="cardText font-bold mb-8">Kegiatan Pengangkutan Tanah</h1>
                  <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eum tempore corporis reprehenderit deserunt voluptatibus totam cumque ad suscipit dignissimos unde beatae laudantium quaerat, quia nisi accusamus? Eius, in qui earum voluptatum expedita unde dolor repellendus natus quidem aperiam dicta. Enim, fugiat iste? Sit maxime at est deserunt doloribus debitis.</p>
                </div>
                <div className="cardBox-blog text-left">
                  <img src={(blog3)} className="mb-10 mt-[-200px]"></img>
                  <h1 className="cardText font-bold">Proses Pengambilan Tanah</h1>
                  <p className="mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eum tempore corporis reprehenderit deserunt voluptatibus totam cumque ad suscipit dignissimos unde beatae laudantium quaerat, quia nisi accusamus? Eius, in qui earum voluptatum expedita unde dolor repellendus natus quidem aperiam dicta. Enim, fugiat iste? Sit maxime at est deserunt doloribus debitis.</p>
                </div>
                <div className="cardBox-blog text-left">
                  <img src={(blog4)} className="mb-10 mt-[-200px]"></img>
                  <h1 className="cardText font-bold">Proses Pengambilan Tanah</h1>
                  <p className="mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eum tempore corporis reprehenderit deserunt voluptatibus totam cumque ad suscipit dignissimos unde beatae laudantium quaerat, quia nisi accusamus? Eius, in qui earum voluptatum expedita unde dolor repellendus natus quidem aperiam dicta. Enim, fugiat iste? Sit maxime at est deserunt doloribus debitis.</p>
                </div>
            </div>
        
            <Footer/>
        </section>

       </div>
    )
}

export default Blog