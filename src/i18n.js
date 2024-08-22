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
            BenZayedLocation:'Abu Dhabi Branch 2 Mohammed bin Zayed Commercial City, Musaffah, East 10, next to the park',
            MatarLocation:'Abu Dhabi Airport Road Next to the petrol station, before the Al Wahda Mall signal',
            Ras5ema:'Ras Al Khaimah branch Sidora - next to Kuwaiti Market, behind Al Haramain Bookstore',
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
            BenZayedLocation:'فرع أبوظبي 2 مدينة محمد بن زايد المصفح التجارية شرق 10 بجانب الحديقة',
            MatarLocation:'فرع أبوظبي شارع المطار بجانب محطة البترول قبل اشارة الوحدة مول',
            Ras5ema:'فرع رأس الخيمه سدوره_بجانب سوق الكويتي خلف مكتبة الحرمي',
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
