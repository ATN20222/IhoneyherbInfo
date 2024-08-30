import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
    resources: {
    en: {
        translation: {
            website: "Visit our website",
            HoneyTitle:"Honey & Herbs World",
            IosApp:"Download our App from App Store",
            GoogleApp:"Download our App from Google Play",
            Instgram:'Our Instgram Page',
            TikTok:'Our TikTok Page',
            Youtube:"Our Youtube Page",
            BenZayedLocation:'Abu Dhabi Mohammed Ben Zayed City Branch 025551115',
            MatarLocation:'Abu Dhabi Airport Road Branch 024435671154',
            Ras5ema:'Ras Al Khaimah Branch 072231131',
            ContactUsOn:'Contact us on +971 50 665 5677'
        }
    },
    ar: {
        translation: {
            website: " قم بزيارة موقعنا الالكتروني",
            HoneyTitle:"عالم العسل والاعشاب",
            IosApp:"حمل التطبيق من اب ستور",
            GoogleApp:'حمل التطبيق من جوجل بلاي',
            Instgram:'صفحتنا علي انستغرام',
            TikTok:'صفحتنا علي تيك توك',
            Youtube:"صفحتنا علي يوتيوب ",
            BenZayedLocation:'فرع أبوظبي 2 مدينة محمد بن زايد 025551115',
            MatarLocation:'فرع أبوظبي شارع المطار 024435671',
            Ras5ema:' 072231131 فرع رأس الخيمه',
            ContactUsOn:'تواصل معنا علي الرقم +971 50 665 5677'
        }
    }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',

    interpolation: {
    escapeValue: false
    }
});

export default i18n;
