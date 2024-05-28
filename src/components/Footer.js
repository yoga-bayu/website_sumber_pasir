import React from "react";
import Image1 from "../asset/logo.png"
import facebook from "../asset/facebook.png"
import twitter from "../asset/twitter.png"
import email from "../asset/email.png"
import linkin from "../asset/linkin1.png"
import youtube from "../asset/youtube.png"
import instagram from "../asset/instagram.png"

const Footer = () => {
    return (
        <div className="body grid justify-center items-end ">
    <div className="footer relative w-full h-auto">
        <div className="container-footer w-full grid pt-10 pb-10">
            <div className="ml-10">
                <h1 className="font-bold text-2xl relative mb-6">Tentang kami</h1>
                {/* <img src={(Image1)} className="w-6 h-6"></img> */}
                <p className="">Sumber pasir adalah Suplier bahan Bangunan yang menyediakan 
                segala jenis pasir dan batu untuk kebutuhan pembagunan rumah dan lain-lain.</p>
                <ul className="icon-footer mt-6 grid ">
                    <li>
                        <a href="https://www.facebook.com/yoga.bayu.9279">
                            <img src={(facebook)} className="w-6 h-6"></img>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={(twitter)} className="w-6 h-6"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/yogabayu_20/">
                            <img src={(instagram)} className="w-6 h-6"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://mail.google.com/mail/u/3/#inbox">
                            <img src={(email)} className="w-8 h-8"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/yoga-bayu-942a322b6/">
                            <img src={(linkin)} className="w-6 h-6 mb-2 mt-4 linkin"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@YBChannel20">
                            <img src={(youtube)} className="w-8 h-8 mb-2 mt-3"></img>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="informasi-footer relative">
                <h1 className="font-bold text-2xl relative mb-6">Informasi</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Tentang Kami</a></li>
                    <li><a href="#">Produk ▾</a>
                    <ul className="">
                        <li className=""><a href="/batu">Batu</a></li>
                        <li className=""><a href="/pasir">Pasir</a></li>
                    </ul>
                    </li>
                    <li><a href="/kontak">Kontak</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/galery">Galery</a></li>
                </ul>
            </div>
            <div>
                <h1 className="font-bold text-2xl relative mb-6">Support</h1>
                <ul>
                    <li><a href="https://www.aretanet.com/">PT. Aretanet Indonesia</a></li>
                    <li><a href="https://portofolio-yoga-bayu.vercel.app/">YOGBAY Production </a></li>
                    <li><a href="https://portofolio-yoga-bayu.vercel.app/">jokicoding YB</a></li>
                </ul>
            </div>
            <div className="relative mr-10">
                <h1 className="font-bold text-2xl relative mb-6">Alamat kantor</h1>
                <p>Pasar Kemis, Kabupaten Tangerang, Banten</p>
            </div>


        </div>
        <div className="copyRightText w-full text-white">
            <p className="">Copyright © 2024 Sumber Pasir | All Right Reserved by Yoga Bayu.</p>
        </div>
        </div>

        </div>
    )
}   

export default Footer