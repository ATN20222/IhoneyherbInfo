import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Logo from '../Assets/Images/I_H_H_LOGO.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = ()=>{
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); 
        window.location.reload();
    };
    useEffect(()=>{
        AOS.init({
            
            duration: 1000, 
          });
    },[])
    

    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 LangBtnsCol" data-aos='fade-down'>
                        <button className="btn btn-warning" onClick={() => changeLanguage('ar')}>AR</button>
                        <button className="btn btn-warning" onClick={() => changeLanguage('en')}>EN</button>
                    </div>
                    <div className="col-lg-12" data-aos="fade-up">
                        <div className="ImageContainer">
                            <img src={Logo} width="100px" alt="" />
                            <span class="LogoWords Center"><span class="Word-1">I</span> <span class="Word-2">HONEY</span><span class="Word-3">HERB</span></span>
                            <span className="HoneyTitle">{t('HoneyTitle')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;