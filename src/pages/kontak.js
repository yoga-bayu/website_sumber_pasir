import React from "react";
import image1 from "../asset/logo.png"
import Footer from "../components/Footer";

const Kontak = () => {
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
              <h1 className="font-bold text-6xl pt-52 mb-6">Kontak Kami</h1>
              <p className=" font-bold text-3xl">Sumber Pasir</p>
            </div>          
        </div>

        <div className=" justify-between flex mx-36 mt-20 font-bold text-3xl text-blue-950">
          <h1>Konsultasi Sekarang</h1>
          <h1>Get In Touch</h1>
        </div>

      <div className="konsultasi w-full h-screen pt-20">
        <div className="flex items-center bg-white mx-20 mb-40 py-10 rounded-xl">
      <form className="">
        <input type="text" placeholder="Your Name*" className=" border border-gray-300 py-2 w-[300px] ml-10 pl-3 my-3 bg-slate-50"></input>
        <input type="text" placeholder="Your Name*" className=" border border-gray-300 py-2 w-[300px] ml-10 pl-3 my-3 bg-slate-50"></input>
        <textarea name="comment" id="comment" placeholder="Your Message*" required className=" border border-gray-300 py-2 w-[300px] ml-10 pl-3 my-3 bg-slate-50 h-[200px]"></textarea>
        <button type="submit" className=" border border-gray-300 py-3 w-[150px] ml-10 my-3 text-white rounded-xl">Submit</button>
      </form>

      <div className="mx-10">
      <iframe width="400" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=600&amp;hl=en&amp;q=areta%20informatics%20college%20+(Sumber%20Pasir)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      <a href="https://www.gps.ie/" className="gmaps">gps tracker sport</a></iframe>
      </div>

      <div className="mr-10 text-blue-950">
                <p className="font-bold text-2xl text-blue-950 mb-8">Reach Us</p>
              <div className="">
                <p className="my-3">🏢 Desa Sukamantri Kec. Pasar Kemis Kab. Tangerang, Prov. Banten</p>
                <p className="my-3">✉️ sumberpasir618@gmail.com</p>
                <p className="my-3">📱 081388230020</p>
                <p className="my-3">📞 081388230020</p>
                <a href="https://wa.me/6281388230020" className="">
                <h1 className="konsultasi-cta text-white py-3 px-3 w-[175px] mt-10 rounded-xl text-center">Hubungi Sekarang</h1>
                </a>
              </div>
                <p className="mt-20 text-blue-950"><b>Sumber pasir</b> adalah Suplier bahan Bangunan yang menyediakan segala jenis pasir dan batu untuk kebutuhan pembagunan rumah dan lain-lain.
                 System pembayaran bisa melalui COD “Barang sampai langsung bayar”</p>
        </div>
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


export default Kontak