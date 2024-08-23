import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import image from "./image/freepi.jpeg";
import image1 from "./image/laptop.jpg";
import image2 from "./image/laptoppic.png";
import image3 from "./image/Landing-page.png";
import image4 from "./image/black.jpg";
import image5 from "./image/ColorLartop.jpg";
import image6 from "./image/blackdev.jpg";
import image7 from "./image/pink.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Products = () => {
    
    const GoToLocation = () => {
        window.open(`https://www.hp.com/us-en/shop/pdp/hp-omnibook-x-laptop-14-fe0057nr`, "_blank");
      };
      const GoToLocation2 = () => {
        window.open(`https://www.hp.com/us-en/shop/mdp/hp-spectre-x360-16-3074457345617622169--1`, "_blank");
      };
      const GoToLocation3 = () => {
        window.open(`https://www.hp.com/us-en/shop/pdp/hp-envy-laptop-17t-da000-17-a19crav-1`, "_blank");
      };
      const GoToLocation4 = () => {
        window.open(`https://www.hp.com/us-en/shop/pdp/omen-transcend-laptop-14-fb0097nr`, "_blank");
      };
      const GoToLocation5 = () => {
        window.open(`https://www.hp.com/us-en/shop/pdp/victus-by-hp-gaming-laptop-pc-15t-fa100-156-771t0av-1`, "_blank");
      };
      const GoToLocation6 = () => {
        window.open(`https://www.hp.com/us-en/shop/pdp/hp-pavilion-plus-laptop-14z-ey000-14-7y8v4av-1`, "_blank");
      };
      const GoToLocation7 = () => {
        window.open(`https://www.hp.com/us-en/shop/pdp/hp-chromebook-14a-nf0050nr`, "_blank");
      };
      const GoToLocation8 = () => {
        window.open(`https://www.hp.com/us-en/shop/pdp/hp-zbook-power-16-inch-g11-mobile-workstation-pc-wolf-pro-security-edition-p-a1yl6ua-aba-1`, "_blank");
      };
      useEffect(()=> {
        Aos.init({
          duration: 2000,
          mirror: true,
          once: false,
        })
      })
  return (
    <>
    <div className="Product-main">
    <h1 id="heading">Our Products</h1>
    <div className="containe331">
     
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-right">
          <div className="card h-100 text-center">
            <img
              className="card-img-top"
              src={image}
              alt="Product"
            />
            <div className="card-body">
              <h3 className="card-title">HP Omni Book</h3>
              <h6>An Ai Powered System</h6>
              <p className="card-text">Windows 11 HomeSnapdragon® X Elite X1E-78-100 (up to 3.4 GHz, 12 cores) + Qualcomm® Adreno™ GPU + 16 GB(onboard)512 GB PCIe® NVMe™ M.2 SSD</p>
              <h5>$1,499.99</h5>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={GoToLocation} formTarget="_blank" id="btn1">Link to Buy</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-right">
          <div className="card h-100 text-center">
            <img
              className="card-img-top"
              src={image1}
              alt="Product"
            />
            <div className="card-body">
              <h3 className="card-title">HP Spectre X-360</h3>
              <h6>Discover the newest HP Spectre X-360</h6>
              <p className="card-text">Windows 11 HomeSnapdragon® X Elite X1E-78-100 (up to 3.4 GHz, 12 cores) + Qualcomm® Adreno™ GPU + 16 GB(onboard)512 GB PCIe® NVMe™ M.2 SSD</p>
              <h5>$1499.99</h5>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={GoToLocation2}>Link to Buy</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-left">
          <div className="card h-100 text-center">
            <img
              className="card-img-top"
              src={image2}
              alt="Product"
            />
            <div className="card-body">
              <h3 className="card-title">HP Envy laptop</h3>
              <h6>Discover the newest HP Envy laptop</h6>
              <p className="card-text">Windows 11 HomeIntel® Core™ Ultra 5 125H (up to 4.5 GHz, 18 MB L3 cache, 14 cores, 18 threads) + Intel® Arc™ Graphics16 GB DDR5-5600 MHz RAM (2 x 8 GB)512 GB PCIe® NVMe™ M.2 SSD</p>
              <h5>$750.00</h5>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={GoToLocation3}>Link to Buy</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-left">
          <div className="card h-100 text-center">
            <img
              className="card-img-top"
              src={image3}
              alt="Product"
            />
            <div className="card-body">
              <h3 className="card-title">OMEN BOOK</h3>
              <h6>Discover the power of Copilot in Windows 11</h6>
              <p className="card-text">Windows 11 HomeIntel® Core™ Ultra processorsNVIDIA® GeForce® RTX 40-series graphics14" OLED display for immersive visual experience</p>
              <h5>$799.39</h5>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={GoToLocation4}>Link to Buy</button>
            </div>
          </div>
        </div>
      </div>
        <div className="row">
        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-right">
          <div className="card h-100 text-center">
            <img
              className="card-img-top"
              src={image4}
              alt="Product"
            />
            <div className="card-body">
              <h3 className="card-title">Victus</h3>
              <h6>Discover the power of Copilot in Windows 11</h6>
              <p className="card-text">Windows 11 HomeLatest generation Intel® processorsNVIDIA GeForce RTX 30-series graphics availableLarge high resolution and high refresh rate screen</p>
              <h5>$699.99</h5>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={GoToLocation5}>Link to Buy</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-right">
          <div className="card h-100 text-center">
            <img
              className="card-img-top"
              src={image5}
              alt="Product"
            />
            <div className="card-body">
            <h3 className="card-title">HP Pavillion Plus</h3>
              <h6>Discover the power of Copilot in Windows 11</h6>
              <p className="card-text">Windows 11 HomeAMD Ryzen™ 5 7540U (up to 4.9 GHz, 16 MB L3 cache, 6 cores, 12 threads) + AMD Radeon™ 740M Graphics + 16 GB(Onboard)512 GB PCIe® NVMe™ M.2 SSD</p>
              <h5>$849.99</h5>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={GoToLocation6}>Link to Buy</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-left">
          <div className="card h-100 text-center">
            <img
              className="card-img-top"
              src={image6}
              alt="Product"
            />
            <div className="card-body">
              <h3 className="card-title">HP Chromebook Calmshell</h3>
              <h6>Discover the power of Copilot in Windows 11</h6>
              <p className="card-text">Chrome OS™Intel® Celeron® N4500 (up to 2.8 GHz, 4 MB L3 cache, 2 C/ 2 T) + Intel® UHD Graphics + 4 GB Memory(Onboard) + 64 GB eMMC</p>
              <h5>$399.99</h5>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary"   onClick={GoToLocation7}>Link to Buy</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-left">
          <div className="card h-100 text-center">
            <img
              className="card-img-top"
              src={image7}
              alt="Product"
            />
            <div className="card-body">
              <h3 className="card-title">HP Z-books Workstation</h3>
              <h6>Discover the power of Copilot in Windows 11</h6>
              <p className="card-text">Windows 11 ProIntel® Core™ Ultra 7 155H (up to 4.8 GHz with Intel® Turbo Boost Technology, 24 MB L3 cache, 16 cores, 22 threads)32 GB memory; 1 TB SSD storage16" diagonal</p>
              <h5>$2139.99</h5>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={GoToLocation8}>Link to Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Products;
