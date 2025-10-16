import React, { useState, useEffect } from "react";
// import contactVideo from "../assets/contact.mp4"; 
import contact1 from "../assets/contact1.jpg";
import contact2 from "../assets/contact2.jpg";
import contact3 from "../assets/contact3.webp";
import faqImage from "../assets/faq.jpg";

const content = {
  en: {
    heroTitle: 'Contact ',
    heroHighlight: 'Our Event Team',
    heroDesc: 'Let’s make your next event unforgettable! Reach out for event quotes, planning consultations, or any event management inquiries.',
    connectTitle: 'Connect With Us',
    cards: [
      { img: contact1, title: 'Event HQ', text: '456 Celebration Avenue, Suite 200, YourCity' },
      { img: contact2, title: 'Email', text: 'info@youreventco.com' },
      { img: contact3, title: 'Phone', text: '+1 (800) 555-9876' },
    ],
    getInTouch: 'Get in Touch',
    readyTitle: 'Ready to Plan Your Event? ',
    readyHighlight: 'Contact Us',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Write a Message',
      send: 'Send Message',
      submitted: 'Submitted!',
      success: 'Submitted successfully!'
    },
    officeLocation: 'Event HQ Location',
    visitOffice: 'Visit Our Event HQ',
    faqSmall: 'Event FAQs',
    faqTitle: 'Have ',
    faqHighlight: 'Questions?',
    faqSubtitle: ' We Have Answers',
    faqs: [
      { question: 'How do I request an event quote?', answer: 'You can request a quote by filling out our contact form with your event details, or by calling our office directly. Our team will get back to you within 24 hours.' },
      { question: 'What types of events do you manage?', answer: 'We plan and manage corporate events, conferences, weddings, parties, exhibitions, and more.' },
      { question: 'Can I schedule a planning consultation?', answer: 'Yes! Please contact us to schedule a free consultation with our event experts at your convenience.' },
      { question: 'Are you licensed and insured?', answer: 'Absolutely. We are fully licensed, insured, and comply with all local event regulations and safety standards.' },
      { question: 'How do you ensure event quality and safety?', answer: 'We follow strict quality control processes and safety protocols for every event, with regular checks and transparent communication.' },
    ],
    newsTitle: 'Stay Updated on Event News',
    newsDesc: 'Subscribe to our newsletter for the latest event industry updates, success stories, and expert tips.',
    newsletter: {
      email: 'Enter your email',
      subscribe: 'Subscribe',
      subscribed: 'Subscribed!',
      success: 'Subscribed successfully!'
    }
  },
  ar: {
    heroTitle: 'تواصل مع ',
    heroHighlight: 'فريق البناء لدينا',
    heroDesc: 'نبني التميز مشروعًا تلو الآخر. تواصل معنا للحصول على عروض أسعار أو استشارات أو أي استفسارات بناء.',
    connectTitle: 'تواصل معنا',
    cards: [
      { img: contact1, title: 'المكتب الرئيسي', text: '456 شارع البناء، جناح 200، مدينتك' },
      { img: contact2, title: 'البريد الإلكتروني', text: 'info@yourconstructionco.com' },
      { img: contact3, title: 'الهاتف', text: '+1 (800) 555-9876' },
    ],
    getInTouch: 'تواصل معنا',
    readyTitle: 'جاهز لبدء مشروعك؟ ',
    readyHighlight: 'اتصل بنا',
    form: {
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      message: 'اكتب رسالة',
      send: 'إرسال الرسالة',
      submitted: 'تم الإرسال!',
      success: 'تم الإرسال بنجاح!'
    },
    officeLocation: 'موقع المكتب',
    visitOffice: 'زر مكتبنا الرئيسي',
    faqSmall: 'الأسئلة الشائعة للبناء',
    faqTitle: 'هل لديك ',
    faqHighlight: 'أسئلة؟',
    faqSubtitle: ' لدينا الإجابات',
    faqs: [
      { question: 'كيف أطلب عرض سعر لمشروع بناء؟', answer: 'يمكنك طلب عرض سعر من خلال تعبئة نموذج الاتصال أو الاتصال بمكتبنا مباشرة. سنتواصل معك خلال 24 ساعة.' },
      { question: 'ما أنواع خدمات البناء التي تقدمونها؟', answer: 'نقدم خدمات البناء السكني والتجاري والصناعي، بالإضافة إلى التجديد وإدارة المشاريع والتصميم المعماري.' },
      { question: 'هل يمكنني جدولة زيارة ميدانية أو استشارة؟', answer: 'نعم! يرجى التواصل معنا لتحديد موعد زيارة مجانية أو استشارة مع خبرائنا.' },
      { question: 'هل أنتم مرخصون ومؤمنون؟', answer: 'بكل تأكيد. نحن مرخصون بالكامل ومؤمنون ونلتزم بجميع القوانين والمعايير المحلية.' },
      { question: 'كيف تضمنون جودة المشروع والسلامة؟', answer: 'نتبع عمليات صارمة لمراقبة الجودة وبروتوكولات السلامة في كل مشروع، مع فحوصات منتظمة وتواصل شفاف.' },
    ],
    newsTitle: 'ابقَ على اطلاع بأخبار البناء',
    newsDesc: 'اشترك في نشرتنا للحصول على آخر التحديثات وأبرز المشاريع ونصائح الخبراء.',
    newsletter: {
      email: 'أدخل بريدك الإلكتروني',
      subscribe: 'اشترك',
      subscribed: 'تم الاشتراك!',
      success: 'تم الاشتراك بنجاح!'
    }
  },
  he: {
    heroTitle: 'צור קשר עם ',
    heroHighlight: 'צוות הבנייה שלנו',
    heroDesc: 'בונים מצוינות, פרויקט אחר פרויקט. פנו אלינו להצעות מחיר, ייעוץ או כל שאלה בתחום הבנייה.',
    connectTitle: 'צור קשר',
    cards: [
      { img: contact1, title: 'משרד ראשי', text: '456 שדרת הבנייה, סוויטה 200, העיר שלך' },
      { img: contact2, title: 'אימייל', text: 'info@yourconstructionco.com' },
      { img: contact3, title: 'טלפון', text: '+1 (800) 555-9876' },
    ],
    getInTouch: 'צור קשר',
    readyTitle: 'מוכן להתחיל פרויקט?',
    readyHighlight: 'צור קשר',
    form: {
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      email: 'אימייל',
      phone: 'טלפון',
      message: 'כתוב הודעה',
      send: 'שלח הודעה',
      submitted: 'נשלח!',
      success: 'נשלח בהצלחה!'
    },
    officeLocation: 'מיקום המשרד',
    visitOffice: 'בקר במשרד הראשי שלנו',
    faqSmall: 'שאלות נפוצות בבנייה',
    faqTitle: 'יש לך ',
    faqHighlight: 'שאלות?',
    faqSubtitle: ' יש לנו תשובות',
    faqs: [
      { question: 'איך מבקשים הצעת מחיר לפרויקט?', answer: 'ניתן לבקש הצעת מחיר על ידי מילוי טופס יצירת קשר או בטלפון. נחזור אליך תוך 24 שעות.' },
      { question: 'אילו שירותי בנייה אתם מציעים?', answer: 'אנו מספקים בנייה למגורים, מסחר ותעשייה, וכן שיפוצים, ניהול פרויקטים ותכנון אדריכלי.' },
      { question: 'האם אפשר לקבוע פגישה או ייעוץ?', answer: 'כן! פנה אלינו לתיאום פגישה או ייעוץ חינם עם המומחים שלנו.' },
      { question: 'האם אתם מורשים ומבוטחים?', answer: 'בהחלט. אנו מורשים, מבוטחים ופועלים לפי כל התקנות והחוקים המקומיים.' },
      { question: 'איך אתם מבטיחים איכות ובטיחות?', answer: 'אנו פועלים לפי נהלי איכות ובטיחות מחמירים, עם בדיקות שוטפות ותקשורת שקופה.' },
    ],
    newsTitle: 'התעדכן בחדשות הבנייה',
    newsDesc: 'הירשם לניוזלטר שלנו לעדכונים, פרויקטים וטיפים מקצועיים.',
    newsletter: {
      email: 'הזן את האימייל שלך',
      subscribe: 'הירשם',
      subscribed: 'נרשמת!',
      success: 'נרשמת בהצלחה!'
    }
  }
};

export default function ContactHero({ lang = 'en' }) {
  const t = content[lang] || content.en;
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Theme state synced with Header (live update)
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
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
    }
  }, []);

  return (
    <div className={theme === 'dark' ? 'min-h-screen text-white' : 'min-h-screen  text-black'}>
      {/* Hero Section */}
      <section className={`relative h-screen flex items-center justify-center ${theme === 'dark' ? '' : ''}`}> 
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="https://videos.pexels.com/video-files/1181676/1181676-hd_1920_1080_24fps.mp4"
          controls
          preload="metadata"
        >
          Your browser does not support HTML5 video.
        </video>

        {/* Optional dark overlay for readability */}
        <div className={theme === 'dark' ? 'absolute inset-0 bg-black/60 -z-10' : 'absolute inset-0 bg-black/40 -z-10'}></div>

        {/* Content */}
        <div className={`relative text-center px-4 max-w-2xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}> 
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            {t.heroTitle}
            <span className="text-[#ff0000]">{t.heroHighlight}</span>
          </h1>
          <p className="text-lg md:text-2xl font-light mb-6">
            {t.heroDesc}
          </p>

        </div>
      </section>

      {/* Contact Cards Section */}
  <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#ff00001a]'}`}> 
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
  <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-[#ff0000]' : 'text-black'}`}> 
          {t.connectTitle}
        </h2>
        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {t.cards.map((card, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'} rounded-2xl shadow-md hover:shadow-xl transition text-center p-6`}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-56 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold mb-2 text-[#ff0000]">
                {card.title}
              </h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



      <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Small Heading */}
      <p className="text-[#ff0000] font-semibold uppercase mb-2">
          {t.getInTouch}
        </p>
        {/* Main Heading */}
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}` }>
            {t.readyTitle}<span className="text-[#ff0000]">{t.readyHighlight}</span>
        </h2>

        {/* Contact Form */}
        <form
          className={`${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'} rounded-2xl shadow-lg p-8 space-y-6`}
          onSubmit={e => {
            e.preventDefault();
            setFormSubmitted(true);
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder={t.form.firstName}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
            />
            <input
              type="text"
              placeholder={t.form.lastName}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
            />
          </div>
          <input
            type="email"
            placeholder={t.form.email}
            className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
          />
          <input
            type="tel"
            placeholder={t.form.phone}
            className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
          />
          <textarea
            rows="5"
            placeholder={t.form.message}
            className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition"
            disabled={formSubmitted}
          >
            {formSubmitted ? t.form.submitted : t.form.send}
          </button>
          {formSubmitted && (
            <div className="text-green-500 text-center font-semibold mt-4">{t.form.success}</div>
          )}
        </form>
      </div>
    </section>


  <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-green-50'}`}> 
      <div className="max-w-6xl mx-auto px-6">
        {/* Small heading */}
  <p className="text-green-900 font-semibold uppercase mb-2">
          {t.officeLocation}
        </p>

        {/* Main heading */}
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {t.visitOffice}
        </h2>

        {/* Map embed */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019826876137!2d-122.40081358468178!3d37.79361197975621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ebcc65e9%3A0x34b3b70f6a64a96f!2s456%20Market%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1692225939182!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>



      <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
      <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
        {/* Left: Image and Heading */}
        <div>
          <p className="text-green-500 font-semibold uppercase mb-2">
            {t.faqSmall}
          </p>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {t.faqTitle}<span className="text-[#ff0000]">{t.faqHighlight}</span>{t.faqSubtitle}
          </h2>
          <img 
            src={faqImage} 
            alt="FAQ illustration" 
            className="rounded-xl shadow-lg"
            
          />
        </div>

        {/* Right: Accordion */}
        <div className="space-y-4">
          {t.faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${theme === 'dark' ? 'bg-[#222] border-gray-700' : 'bg-gray-50 border-gray-100'} rounded-xl shadow-sm border`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-left ${theme === 'dark' ? 'text-white' : ''}`}
              >
                <span className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className="text-green-500 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className={`px-6 pb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


  <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-green-50'}`}> 
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
  <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${theme === 'dark' ? 'text-[#ff0000]' : 'text-gray-900'}`}>
          {t.newsTitle}
        </h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}>
          {t.newsDesc}
        </p>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          onSubmit={e => {
            e.preventDefault();
            setNewsletterSubmitted(true);
          }}
        >
          <input 
            type="email" 
            placeholder={t.newsletter.email} 
            className={`flex-1 px-6 py-4 rounded-xl border w-full sm:w-auto focus:outline-none focus:border-[#ff0000] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-300 text-gray-800 bg-white'}`}
            disabled={newsletterSubmitted}
          />
          <button 
            type="submit" 
            className="bg-[#ff0000] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#cc0000] transition duration-300 w-full sm:w-auto"
            disabled={newsletterSubmitted}
          >
            {newsletterSubmitted ? t.newsletter.subscribed : t.newsletter.subscribe}
          </button>
        </form>
        {newsletterSubmitted && (
          <div className="text-[#ff0000] text-center font-semibold mt-4">{t.newsletter.success}</div>
        )}
      </div>
    </section>
  
    </div>
  );
}
