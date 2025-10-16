import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Translation object for Footer
const footerTranslations = {
  en: {
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About Us',
    blog: 'Blog',
    contact: 'Contact Us',
    services: 'Services',
    ourServices: 'Our Services',
    residential: 'Residential Projects',
    commercial: 'Commercial Projects',
    industrial: 'Industrial Projects',
    renovation: 'Renovation Services',
    architectural: 'Architectural Designs',
    projectManagement: 'Project Management',
    contactTitle: 'Contact Us',
    address: 'Address',
    addressVal: '456 Build Street, Architect City',
    phone: 'Phone',
    phoneVal: '(987) 654-3210',
    email: 'Email',
    emailVal: 'support@stackly.com',
    hours: 'Hours',
    hoursVal: 'Mon–Fri, 9 AM – 6 PM',
    follow: 'Follow Us',
    buyNow: 'Buy Now',
    buyNowDesc: 'Ready to make your event unforgettable? Contact us today and explore our services for excellence in event management!',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
    copyright: '©️ 2025 Eventify. All rights reserved.',
    slogan: 'Managing Your Events, Every Day!'
  },
  ar: {
    quickLinks: 'روابط سريعة',
    home: 'الرئيسية',
    about: 'معلومات عنا',
    blog: 'مدونة',
    contact: 'اتصل بنا',
    services: 'الخدمات',
    ourServices: 'خدماتنا',
    residential: 'مشاريع سكنية',
    commercial: 'مشاريع تجارية',
    industrial: 'مشاريع صناعية',
    renovation: 'خدمات الترميم',
    architectural: 'تصاميم معمارية',
    projectManagement: 'إدارة المشاريع',
    contactTitle: 'اتصل بنا',
    address: 'العنوان',
    addressVal: '456 شارع البناء، مدينة المعماري',
    phone: 'الهاتف',
    phoneVal: '(987) 654-3210',
    email: 'البريد الإلكتروني',
    emailVal: 'support@stackly.com',
    hours: 'ساعات العمل',
    hoursVal: 'الاثنين-الجمعة، 9 ص – 6 م',
    follow: 'تابعنا',
    buyNow: 'اشترِ الآن',
    buyNowDesc: 'هل ترغب في بدء مشروع أحلامك؟ اتصل بنا اليوم واستكشف خدماتنا لبناء التميز!',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    disclaimer: 'إخلاء المسؤولية',
    copyright: '©️ 2025 ArchiBuild. جميع الحقوق محفوظة.',
    slogan: 'نبني أحلامك كل يوم!'
  },
  he: {
    quickLinks: 'קישורים מהירים',
    home: 'בית',
    about: 'עלינו',
    blog: 'בלוג',
    contact: 'צור קשר',
    services: 'שירותים',
    ourServices: 'השירותים שלנו',
    residential: 'פרויקטים למגורים',
    commercial: 'פרויקטים מסחריים',
    industrial: 'פרויקטים תעשייתיים',
    renovation: 'שירותי שיפוץ',
    architectural: 'עיצובים אדריכליים',
    projectManagement: 'ניהול פרויקטים',
    contactTitle: 'צור קשר',
    address: 'כתובת',
    addressVal: '456 רחוב הבנייה, עיר האדריכלות',
    phone: 'טלפון',
    phoneVal: '(987) 654-3210',
    email: 'אימייל',
    emailVal: 'support@stackly.com',
    hours: 'שעות פעילות',
    hoursVal: 'ב׳–ו׳, 9:00–18:00',
    follow: 'עקוב אחרינו',
    buyNow: 'קנה עכשיו',
    buyNowDesc: 'רוצה להתחיל את פרויקט החלומות שלך? צור קשר עוד היום וחקור את השירותים שלנו למצוינות בבנייה!',
    privacy: 'מדיניות פרטיות',
    terms: 'תנאים והגבלות',
    disclaimer: 'כתב ויתור',
    copyright: '©️ 2025 ArchiBuild. כל הזכויות שמורות.',
    slogan: 'בונים את החלומות שלך, כל יום!'
  }
};

export default function RestaurantFooter({ lang = 'en' }) {
  const t = footerTranslations[lang] || footerTranslations['en'];
  // Theme state logic (copied from Blog/other pages)
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
  }, []);
  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem('theme') || 'light';
      setTheme(newTheme);
    };
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);
  return (
    <footer className={theme === 'dark' ? 'bg-[#18181b] border-t mt-0 text-white' : 'bg-white border-t mt-0 text-black'}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-5 gap-8">
        {/* Logo & Brand */}
        <div className="col-span-1 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Stackly Logo" className="h-24 w-24 object-contain" />
          </div>
          <span className="text-red-600 font-semibold mt-2">{t.slogan}</span>
        </div>
        {/* Quick Links */}
        <div>
      <h3 className="text-red-700 font-semibold mb-2">{t.quickLinks}</h3>
          <ul className={theme === 'dark' ? 'space-y-1 text-gray-300' : 'space-y-1 text-gray-700'}>
            <li>
              <Link to="/home1" className="hover:text-red-600">{t.home}</Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-red-600">{t.about}</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-red-600">{t.blog}</Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-red-600">{t.contact}</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-red-600">{t.services}</Link>
            </li>
          </ul>
        </div>
        {/* Explore Services */}
        <div>
      <h3 className="text-red-700 font-semibold mb-2">{t.ourServices}</h3>
          <ul className={theme === 'dark' ? 'space-y-1 text-gray-300' : 'space-y-1 text-gray-700'}>
            <li>
              <Link to="/Residential-Projects" className="hover:text-red-600">Event Residences & Hospitality</Link>
            </li>
            <li>
              <Link to="/Commercial-Projects" className="hover:text-red-600">Event Management Projects</Link>
            </li>
            <li>
              <Link to="/Industrial-Projects" className="hover:text-red-600">Event Expo & Trade Shows</Link>
            </li>
            <li>
              <Link to="/Renovation-Services" className="hover:text-red-600">Event Venue Makeovers</Link>
            </li>
            <li>
              <Link to="/Architectural-Designs" className="hover:text-red-600">Event Venue Designs</Link>
            </li>
            <li>
              <Link to="/Project-Management" className="hover:text-red-600">Project Management</Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
      <h3 className="text-red-700 font-semibold mb-2">{t.contactTitle}</h3>
          <div className={theme === 'dark' ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'}>
            <div><span className="font-semibold">{t.address}:</span> {t.addressVal}</div>
            <div><span className="font-semibold">{t.phone}:</span> {t.phoneVal}</div>
            <div><span className="font-semibold">{t.email}:</span> {t.emailVal}</div>
            <div><span className="font-semibold">{t.hours}:</span> {t.hoursVal}</div>
          </div>
          <div className="mt-3">
        <span className={theme === 'dark' ? 'font-semibold text-gray-300' : 'font-semibold text-gray-700'}>{t.follow}</span>
            <div className={theme === 'dark' ? 'flex gap-3 mt-1 text-xl text-gray-300' : 'flex gap-3 mt-1 text-xl text-gray-600'}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-red-600"><i className="fab fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-red-600"><i className="fab fa-facebook"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-red-600"><i className="fab fa-linkedin"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        {/* Buy Now Section */}
        <div>
      <h3 className="text-red-700 font-semibold mb-2">{t.buyNow}</h3>
      <p className={theme === 'dark' ? 'text-gray-300 text-sm mb-4' : 'text-gray-700 text-sm mb-4'}>{t.buyNowDesc}</p>
      <a href="/contactus" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-red-700 transition">{t.buyNow}</a>
        </div>
      </div>
      <div className={theme === 'dark' ? 'border-t text-center text-gray-400 text-xs py-4' : 'border-t text-center text-gray-500 text-xs py-4'}>
        <div className="flex flex-row md:flex-row justify-center gap-4 mb-2">
      <a href="#" className="hover:text-red-600">{t.privacy}</a>
      <a href="#" className="hover:text-red-600">{t.terms}</a>
      <a href="#" className="hover:text-red-600">{t.disclaimer}</a>
        </div>
      {t.copyright}
      </div>
    </footer>
  );
}