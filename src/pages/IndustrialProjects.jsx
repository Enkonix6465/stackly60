import React, { useState, useEffect } from "react";
// Pexels images for industrial event projects
const ind1 = "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg"; // Large event hall
const ind2 = "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"; // Expo center
const ind3 = "https://images.pexels.com/photos/2108865/pexels-photo-2108865.jpeg"; // Conference setup
const industrialHero = "https://videos.pexels.com/video-files/4184418/4184418-hd_1920_1080_25fps.mp4";

import { FaIndustry, FaClipboardList, FaDraftingCompass, FaHardHat, FaCheckCircle, FaArrowLeft, FaArrowRight, FaRegLightbulb } from "react-icons/fa";

const content = {
  en: {
    heroTitle: 'Expert ',
    heroHighlight: 'Event Expo & Trade Shows',
    heroDesc: 'Professional design and management of expos, trade shows, and large-scale event venues. Quality, safety, and efficiency for your event success.',
    aboutTitle: 'About Our Expo & Trade Show Services',
    aboutDesc: [
      'We specialize in creating robust expo halls, trade show venues, and event logistics tailored to your needs.',
      'Our experienced team manages every aspect of your event project, from design and planning to execution and support.',
      'We use premium materials, innovative layouts, and sustainable practices to ensure your event is memorable and efficient.',
      'Our transparent process keeps you informed and involved at every stage, so you can watch your event vision come to life with confidence.',
      'Contact us today to start your expo or trade show project and experience a seamless, stress-free event journey.'
    ],
    packagesTitle: 'Our Expo Packages',
    packagesDesc: 'Choose a package that fits your event needs and budget. Upgrade anytime — no hidden costs!',
    plans: [
      {
        name: "Basic Expo Hall",
        price: "$200k+",
        period: "",
        features: [
          "Large open space",
          "Standard safety features",
          "Efficient guest flow",
        ],
        highlighted: false,
      },
      {
        name: "Trade Show Venue",
        price: "$500k+",
        period: "",
        features: [
          "Custom booth layouts",
          "Advanced AV systems",
          "Branding & signage",
        ],
        highlighted: true,
      },
      {
        name: "Event Logistics Hub",
        price: "$1M+",
        period: "",
        features: [
          "Integrated transport access",
          "Smart event management",
          "Scalable infrastructure",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'Client Reviews',
    testimonials: [
      { name: "Suresh Patel", role: "Factory Owner", text: "Our new manufacturing plant was delivered on time and exceeded all safety standards. The team was professional and efficient throughout the project." },
      { name: "Meena Gupta", role: "Warehouse Manager", text: "The industrial facility is robust, well-designed, and perfectly suited for our logistics needs. Highly recommended for industrial construction!" },
      { name: "Ravi Singh", role: "Operations Head", text: "Excellent project management and quality construction. Every milestone was met as promised." },
      { name: "Anil Rao", role: "Plant Supervisor", text: "The team made the entire process stress-free, from planning to handover. Our new facility is top-notch!" },
    ],
    howTitle: 'How It Works',
    howDesc: 'Building your industrial project is simple and stress-free with our proven process.',
    steps: [
      { icon: <FaIndustry size={28} className="text-white" />, title: "Consultation", description: "Discuss your industrial project requirements with our experts." },
      { icon: <FaClipboardList size={28} className="text-white" />, title: "Planning", description: "We create a detailed project plan, timeline, and transparent estimate." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "Design", description: "Our engineers design your facility for maximum efficiency and safety." },
      { icon: <FaHardHat size={28} className="text-white" />, title: "Construction", description: "We build your project using quality materials and skilled professionals." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "Handover", description: "Move into your new industrial facility, ready for operations." },
    ],
    ctaTitle: 'Ready to Start Your Industrial Project?',
    ctaDesc: 'Let us help you build your next factory, warehouse, or logistics hub. Contact us today to get started!',
    getStarted: 'Get Started',
  },
  ar: {
    heroTitle: 'مشاريع ',
    heroHighlight: 'صناعية رائدة',
    heroDesc: 'بناء المصانع والمخازن ومراكز الخدمات اللوجستية باحترافية. الجودة والسلامة والكفاءة لنموك الصناعي.',
    aboutTitle: 'حول مشاريعنا الصناعية',
    aboutDesc: [
      'نحن متخصصون في بناء مصانع قوية ومستودعات ومراكز لوجستية مصممة خصيصًا لاحتياجاتك التشغيلية.',
      'يدير فريقنا ذو الخبرة جميع جوانب مشروعك الصناعي من التصميم والتخطيط إلى البناء والتشطيب.',
      'نستخدم مواد ممتازة وتقنيات مبتكرة وممارسات مستدامة لضمان أن يكون منشأتك متينة وتلبي أعلى المعايير.',
      'نحافظ على الشفافية في كل مرحلة، لتكون على اطلاع ومشاركة في كل خطوة من خطوات المشروع الصناعي.',
      'تواصل معنا اليوم لبدء مشروعك الصناعي واستمتع بتجربة بناء سلسة وخالية من التوتر.'
    ],
    packagesTitle: 'باقات المشاريع الصناعية',
    packagesDesc: 'اختر الباقة التي تناسب احتياجاتك التشغيلية وميزانيتك. يمكنك الترقية في أي وقت — بدون تكاليف خفية!',
    plans: [
      {
        name: "منشأة تخزين",
        price: "$200k+",
        period: "",
        features: [
          "سعة تخزين كبيرة",
          "ميزات أمان قياسية",
          "تصميم فعال",
        ],
        highlighted: false,
      },
      {
        name: "مصنع إنتاج",
        price: "$500k+",
        period: "",
        features: [
          "خطوط إنتاج مخصصة",
          "أنظمة أمان متقدمة",
          "تصميم موفر للطاقة",
        ],
        highlighted: true,
      },
      {
        name: "مركز لوجستي",
        price: "$1M+",
        period: "",
        features: [
          "وصول نقل متكامل",
          "إدارة منشأة ذكية",
          "بنية تحتية قابلة للتوسع",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'آراء العملاء',
    testimonials: [
      { name: "سوراش باتيل", role: "مالك مصنع", text: "تم تسليم مصنعنا الجديد في الوقت المحدد وتجاوز جميع معايير السلامة. كان الفريق محترفًا وفعالًا طوال المشروع." },
      { name: "مينا جوبتا", role: "مديرة مستودع", text: "المنشأة الصناعية قوية ومصممة جيدًا ومناسبة تمامًا لاحتياجاتنا اللوجستية. أوصي بشدة بالبناء الصناعي!" },
      { name: "رافي سينغ", role: "رئيس العمليات", text: "إدارة مشاريع ممتازة وجودة بناء عالية. تم تحقيق كل مرحلة كما وعدوا." },
      { name: "أنيل راو", role: "مشرف مصنع", text: "جعل الفريق العملية بأكملها خالية من التوتر من التخطيط حتى التسليم. منشأتنا الجديدة من الطراز الأول!" },
    ],
    howTitle: 'كيف يعمل',
    howDesc: 'بناء مشروعك الصناعي بسيط وخالٍ من التوتر مع عمليتنا المجربة.',
    steps: [
      { icon: <FaIndustry size={28} className="text-white" />, title: "استشارة", description: "ناقش متطلبات مشروعك الصناعي مع خبرائنا." },
      { icon: <FaClipboardList size={28} className="text-white" />, title: "تخطيط", description: "نعد خطة مشروع مفصلة وجدولًا زمنيًا وتقديرًا شفافًا." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "تصميم", description: "يصمم مهندسونا منشأتك لتحقيق أقصى قدر من الكفاءة والسلامة." },
      { icon: <FaHardHat size={28} className="text-white" />, title: "بناء", description: "نبني مشروعك باستخدام مواد عالية الجودة ومحترفين مهرة." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "تسليم", description: "انتقل إلى منشأتك الصناعية الجديدة، جاهزة للتشغيل." },
    ],
    ctaTitle: 'جاهز لبدء مشروعك الصناعي؟',
    ctaDesc: 'دعنا نساعدك في بناء مصنعك أو مستودعك أو مركزك اللوجستي القادم. تواصل معنا اليوم للبدء!',
    getStarted: 'ابدأ الآن',
  },
  he: {
    heroTitle: 'פרויקטים ',
    heroHighlight: 'תעשייתיים מובילים',
    heroDesc: 'בנייה מקצועית של מפעלים, מחסנים ומרכזי לוגיסטיקה. איכות, בטיחות ויעילות לצמיחה התעשייתית שלך.',
    aboutTitle: 'על פרויקטי התעשייה שלנו',
    aboutDesc: [
      'אנו מתמחים בבניית מפעלים חזקים, מחסנים ומרכזי לוגיסטיקה המותאמים לצרכים התפעוליים שלך.',
      'הצוות המנוסה שלנו מנהל כל שלב בפרויקט, מהתכנון והעיצוב ועד לבנייה והגמר.',
      'אנו משתמשים בחומרים מובחרים, טכניקות חדשניות ושיטות בנות קיימא כדי להבטיח שהמתקן שלך יעמוד בסטנדרטים הגבוהים ביותר.',
      'התהליך השקוף שלנו שומר אותך מעורב ומעודכן בכל שלב, כך שתוכל לראות את חזון התעשייה שלך מתגשם בביטחון.',
      'צור קשר עוד היום כדי להתחיל את הפרויקט שלך וליהנות מתהליך בנייה חלק וללא דאגות.'
    ],
    packagesTitle: 'חבילות התעשייה שלנו',
    packagesDesc: 'בחר חבילה שמתאימה לצרכים התפעוליים והתקציב שלך. ניתן לשדרג בכל עת — ללא עלויות נסתרות!',
    plans: [
      {
        name: "מתקן אחסון",
        price: "$200k+",
        period: "",
        features: [
          "קיבולת אחסון גדולה",
          "מאפייני בטיחות סטנדרטיים",
          "תכנון יעיל",
        ],
        highlighted: false,
      },
      {
        name: "מפעל ייצור",
        price: "$500k+",
        period: "",
        features: [
          "קווי ייצור מותאמים אישית",
          "מערכות בטיחות מתקדמות",
          "עיצוב חסכוני באנרגיה",
        ],
        highlighted: true,
      },
      {
        name: "מרכז לוגיסטי",
        price: "$1M+",
        period: "",
        features: [
          "גישה משולבת לתחבורה",
          "ניהול מתקן חכם",
          "תשתית ניתנת להרחבה",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'ביקורות לקוחות',
    testimonials: [
      { name: "סורש פאטל", role: "בעל מפעל", text: "מפעל הייצור החדש שלנו נמסר בזמן ועלה על כל תקני הבטיחות. הצוות היה מקצועי ויעיל לאורך כל הפרויקט." },
      { name: "מינה גופטה", role: "מנהלת מחסן", text: "המתקן התעשייתי חזק, מתוכנן היטב ומותאם בדיוק לצרכים הלוגיסטיים שלנו. ממליצה בחום על בנייה תעשייתית!" },
      { name: "רבי סינג", role: "ראש תפעול", text: "ניהול פרויקטים מצוין ובנייה איכותית. כל שלב הושג כפי שהובטח." },
      { name: "אניל ראו", role: "מפקח מפעל", text: "הצוות הפך את כל התהליך לחסר דאגות מהתכנון ועד למסירה. המתקן החדש שלנו ברמה הגבוהה ביותר!" },
    ],
    howTitle: 'איך זה עובד',
    howDesc: 'בניית הפרויקט התעשייתי שלך פשוטה וללא דאגות עם התהליך שלנו.',
    steps: [
      { icon: <FaIndustry size={28} className="text-white" />, title: "ייעוץ", description: "שוחח על דרישות הפרויקט התעשייתי שלך עם המומחים שלנו." },
      { icon: <FaClipboardList size={28} className="text-white" />, title: "תכנון", description: "נבנה תוכנית מפורטת, לוח זמנים והצעת מחיר שקופה." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "עיצוב", description: "המהנדסים שלנו יעצבו את המתקן שלך ליעילות ובטיחות מרבית." },
      { icon: <FaHardHat size={28} className="text-white" />, title: "בנייה", description: "נבנה את הפרויקט שלך עם חומרים איכותיים ואנשי מקצוע מנוסים." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "מסירה", description: "היכנס למתקן התעשייתי החדש שלך, מוכן לפעולה." },
    ],
    ctaTitle: 'מוכן להתחיל את הפרויקט התעשייתי שלך?',
    ctaDesc: 'תן לנו לעזור לך לבנות את המפעל, המחסן או מרכז הלוגיסטיקה הבא שלך. צור קשר עוד היום כדי להתחיל!',
    getStarted: 'התחל עכשיו',
  },
};

const IndustrialProjects = ({ lang = 'en' }) => {
  const t = content[lang] || content.en;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [lang]);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % t.testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + t.testimonials.length) % t.testimonials.length);
  };

  const testimonial = t.testimonials[index];

  // Step icons for headings
  const stepIcons = [FaRegLightbulb, FaClipboardList, FaIndustry, FaCheckCircle];

  return (
    <div>
      {/* Hero Section */}
  <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-red-50">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-110 contrast-105 saturate-110"
          src={industrialHero}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ filter: 'brightness(1.1) contrast(1.05) saturate(1.1)' }}
        />
        {/* Overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {t.heroTitle}
            <span className="text-red-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">{t.heroHighlight}</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-100 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* About Section */}
  <section className="py-20 px-6 md:px-20 bg-red-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={ind1}
              alt="Our Industrial Project"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              {t.aboutTitle}
            </h2>
            {t.aboutDesc.map((desc, i) => (
              <p className="text-black mb-4" key={i}>{desc}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
  <h2 className="text-4xl font-bold text-red-600 mb-4">{t.packagesTitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {t.packagesDesc}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-lg border 
                ${plan.highlighted ? "bg-red-600 text-white scale-105" : "bg-white text-gray-800"}`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-extrabold mb-2">
                {plan.price} <span className="text-lg font-medium">{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-full font-semibold transition 
                  ${plan.highlighted 
                    ? "bg-white text-red-600 hover:bg-gray-100" 
                    : "bg-red-600 text-white hover:bg-red-700"}`}
              >
                {t.getStarted}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
  <section className="py-10 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Card */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-black mb-6">
              {t.testimonialsTitle}
            </h2>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-red-600 text-sm">{testimonial.role}</p>
            </div>

            {/* Arrows */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src={ind2}
              alt="Industrial Facility"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
  <h2 className="text-4xl font-bold text-red-600 mb-4">{t.howTitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {t.howDesc}
        </p>

        {/* Define stepIcons array to match steps */}
        {(() => {
          const stepIcons = [FaIndustry, FaClipboardList, FaDraftingCompass, FaHardHat, FaCheckCircle];
          return (
            <div className="flex flex-wrap justify-center items-center gap-6">
              {t.steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                    <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                      {React.createElement(stepIcons[index])}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  {index < t.steps.length - 1 && (
                    <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          );
        })()}
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={ind3}
          alt="Industrial Project"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
  <div className="absolute inset-0 bg-red-600/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            {t.ctaDesc}
          </p>
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-red-600 py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            {t.getStarted}
          </button>
        </div>
      </section>
    </div>
  );
};

export default IndustrialProjects;
