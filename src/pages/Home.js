
import banner from '../assets/bann1.jpg'
import Background from '../assets/header-hero.jpg';

const Home = () => {
    return ( 
<>
<div id="home" className="header-hero bg_cover d-lg-flex align-items-center" style={{backgroundImage:`url(${Background})`}} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="header-hero-content">
                            <h1 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s"><b>Audidable</b> <span>Book</span></h1>
                            <p className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Phasellus vel elit efficitur, gravida libero sit amet, scelerisque  tortor arcu, commodo sit amet nulla sed.</p>
                            <div className="header-singup wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                                <input type="text" placeholder="username@yourdomain.com"/>
                                <button className="main-btn">Sign Up</button>
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-5">
<img src={banner} alt="123"/>

                    </div>

                </div> 
            </div> 
           
        </div> 
       
</>


     );
}
 
export default Home;