import React from "react";
import image1 from "../asset/logo.png"

const Header = () => {
    return (
        <div>
            <div className=" header bg-blue-950 absolute w-full flex justify-between mb-10 items-center ">
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
               <ul className="mt-[1px]">
                <li className="produk hover:bg-blue-950"><a href="/batu">Batu</a></li>
                <li className="produk hover:bg-blue-950"><a href="/pasir">Pasir</a></li>
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
        </div>
    )
}

export default Header