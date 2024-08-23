import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import videofile from './image/laptopVideo.mp4';
import Pic from './image/Communication.png';
import Aos from "aos";

export default function About() {
    useEffect( () =>{
        Aos.init({
            duration: 2000,
            mirror: true,
            once: false
        })
    })
    return (
        <div className="About-Main">
            <div className="header">
                <video src={videofile} autoPlay loop muted id="Video" />
                <h1 data-aos="fade-up">About Us</h1>
                <p data-aos="fade-bottom">Explore the world of laptops with our latest products.</p>
            </div>
            <div className="container-22">
                <div className="About-row">
                    <div className="About-col col-lg-12 col-md-12 col-sm-12">
                        <h1 id="About-h" data-aos="fade-left">What we Offer!</h1>
                        <p id="About-text" data-aos="fade-right">
                            Our company is dedicated to revolutionizing the laptop industry by
                            offering cutting-edge technology and innovative designs. We prioritize
                            quality, performance, and customer satisfaction, ensuring that every
                            product meets the highest standards. Whether you're a student, professional,
                            or tech enthusiast, our diverse range of laptops is designed to cater to your unique needs.
                            Explore our collection and discover the future of computing with us.
                        </p>
                        <a href="#Testimonials"><button className="btn btn-primary btn-outline-dark btn-lg" id="btn" data-aos="fade-up">Testimonials</button></a>
                    </div>
                </div>
                <div className="AboutRow">
                    <div className="aboutcol2 col-lg-6 col-md-6 col-sm-12">
                        <h1 id="About-h" data-aos="fade-right">Who We are</h1>
                        <p id="About-text1" data-aos="fade-left">
                            We are a team of tech enthusiasts committed to pushing the boundaries of
                            innovation in the laptop industry. Our mission is to deliver high-performance,
                            reliable, and stylish laptops that cater to the needs of professionals,
                            students, and everyday users alike. With a focus on quality and customer satisfaction,
                            we strive to make cutting-edge technology accessible to everyone.
                            Discover who we are through our dedication to
                            excellence and passion for creating the best computing experience possible.
                        </p>
                    </div>
                    <div className="col3 col-lg-6 col-md-6 col-sm-12">
                        <img src={Pic} alt="comm" id="pic" data-aos="fade-right" data-aos-delay="1000"/>
                    </div>
                </div>
                <h1 id="About-h1" data-aos="fade-up">Testimonials</h1>
                <div className="testimonial-section" id="Testimonials">
  <div className="testimonial-container">
    <div className="testimonial-item div1" data-aos='fade-left'>
      <div className="user-details">
        <div className="imgbox">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User-Image" />
        </div>
        <div className="detbox">
          <p className="name">John Doe</p>
          <p className="designation">CEO, Company</p>
        </div>
      </div>
      <div className="review">
        <h4>"This product has completely changed the way I work. It's amazing!"</h4>
        <p>
        I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here.I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
        </p>
      </div>
    </div>

    <div className="testimonial-item div2" data-aos='fade-up'>
      <div className="user-details">
        <div className="imgbox">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User-Image" />
        </div>
        <div className="detbox">
          <p className="name">Jane Smith</p>
          <p className="designation">Marketing Head, Company</p>
        </div>
      </div>
      <div className="review">
        <h4>"I've seen a significant improvement in my team's productivity."</h4>
        <p> I started as a total newbie with virtually no coding skills.</p>
      </div>
    </div>

    <div className="testimonial-item div3" data-aos='fade-right'>
      <div className="user-details">
        <div className="imgbox">
          <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="User-Image" />
        </div>
        <div className="detbox">
          <p className="name">Mike Johnson</p>
          <p className="designation">Developer, Company</p>
        </div>
      </div>
      <div className="review">
        <h4>"The support team is incredibly responsive and helpful!"</h4>
        <p> Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program.The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. </p>
      </div>
    </div>

    <div className="testimonial-item div4" data-aos='fade-left'>
      <div className="user-details">
        <div className="imgbox">
          <img src="https://randomuser.me/api/portraits/women/48.jpg" alt="User-Image" />
        </div>
        <div className="detbox">
          <p className="name">Sara Williams</p>
          <p className="designation">Designer, Company</p>
        </div>
      </div>
      <div className="review">
        <h4>"Beautiful design and fantastic user experience."</h4>
        <p>
        Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.
        </p>
      </div>
    </div>

    <div className="testimonial-item div5" data-aos='fade-right'>
      <div className="user-details">
        <div className="imgbox">
          <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="User-Image" />
        </div>
        <div className="detbox">
          <p className="name">Alex Brown</p>
          <p className="designation">Project Manager, Company</p>
        </div>
      </div>
      <div className="review">
        <h4>"I can't imagine going back to the way we worked before."</h4>
        <p>
        The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer.
        </p>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>
    );
}
