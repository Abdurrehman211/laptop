import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import image from './image/laptop.png';
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Landing() {
    const navigate = useNavigate();
    
    const GotoAbout= () =>{
        <Loader/>
        navigate("/about");
    }

   
useEffect(() => {
    Aos.init({
        duration: 2000,
        mirror: true,
        once: false
    })
})
    return (
        <>
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-7 col-md-6 col-sm-12">
                                <h1 data-aos='fade-up'>Meet The New Technology</h1>
                                <p id="text" data-aos='fade-bottom'>
                                    Diving into technology involves exploring innovations,
                                    from software and hardware to AI and blockchain.
                                    It drives global connectivity, enhances efficiency,
                                    and opens new frontiers in how we live, work, and interact.
                                </p>
                                <div className="container1">
                                    <div className="btn" data-aos='fade-right'>
                                        <a onClick={GotoAbout}>Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col1 col-lg-5 col-md-6 col-sm-12" data-aos='fade-left'>
                            <div class="container221">
  <div class="mockup mockup-macbook loaded opened">
    <div class="part top">
      <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-top.svg" alt="" class="top"/>
      <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg" alt="" class="cover"/>

      <video autoplay>
        <source src="https://d1xm195wioio0k.cloudfront.net/images/video/support.mp4" type="video/mp4"/>
      </video>
    </div>
    <div class="part bottom">
      <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg" alt="" class="cover"/>
      <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-bottom.svg" alt="" class="bottom"/>
    </div>
  </div>
</div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
