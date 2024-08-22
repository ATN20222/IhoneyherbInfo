import i18next, { t } from "i18next";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faCoffee, faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faAppStoreIos, faGooglePlay, faInstagram, faInstagramSquare, faSquareInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const AllLinks = ()=>{

    const links = [
        {
            link:'ihoneyherb.com',
            text:'website',
            icon:faGlobe,
            isLocation:false,
        },
        {
            link:'https://apps.apple.com/eg/app/i-honey-herb/id6502867691?l=ar',
            text:'IosApp',
            icon:faAppStoreIos,
            isLocation:false,

        },
        {
            link:'https://play.google.com/store/apps/details?id=com.mind.i_honey_herb',
            text:'GoogleApp',
            icon:faGooglePlay,
            isLocation:false,

        },
        {
            link:'https://www.instagram.com/ihoneyherbals?igsh=Y2V2MnhwazNkZW54&utm_source=qr',
            text:'Instgram',
            icon:faSquareInstagram,
            isLocation:false,


        },
        {
            link:'https://www.tiktok.com/@honey.herbals?_t=8p3vfpg58P1&_r=1',
            text:'TikTok',
            icon:faTiktok,
            isLocation:false,

        },
        {
            link:'https://youtube.com/@honey.herbals?si=LT_WGipqW376gEbM',
            text:'Youtube',
            icon:faYoutube,
            isLocation:false,

        },
        {
            link:'https://maps.app.goo.gl/fsXcGwoVnKWrebhz8',
            text:'MatarLocation',
            icon:faLocationDot,
            isLocation:true,
        },
        {
            link:'https://maps.app.goo.gl/3Mu3pYBuFXaUrcMu8',
            text:'BenZayedLocation',
            icon:faLocationDot,
            isLocation:true,
        },
        {
            link:'https://maps.app.goo.gl/owhvzFJrvfmUBUs67',
            text:'Ras5ema',
            icon:faLocationDot,
            isLocation:true,
        },
        {
            link: 'tel:+971506655677',  
            text: 'ContactUsOn',
            icon: faPhone,
            isLocation: true,
        },
    ]

    useEffect(()=>{
        AOS.init({
            
            duration: 1000, 
          });
    },[])
    return(
        <section className="AllLinks" >
            <div className="container">
                <div className="row Center">
                    {links.map((item,index)=>(

                    <Link to={item.link} data-aos={index%2===1?'fade-left':'fade-right'} key={index} className="col-lg-5 col-sm-8 col-10 LinkItem "
                        dir={`${i18next.language==='ar'?'rtl':'ltr'}`}
                    >
                        <div className="LinkItemIcon">
                            <FontAwesomeIcon icon={item.icon}/>
                        </div>
                        <div className={`LinkItemText ${item.isLocation?'LocationText':''}`}>

                            {t(item.text)}
                        </div>
                    </Link>
                    ))}
                    
                    {/* <div className="col-lg-5 col-sm-8 col-10"></div> */}
                </div>
            </div>
        </section>

    );
}
export default AllLinks;