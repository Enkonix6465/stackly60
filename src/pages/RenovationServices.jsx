import React, { useState, useEffect } from "react";
// Pexels images for renovation event projects
const ren1 = "https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg"; // Event venue before
const ren2 = "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg"; // Event venue after
const ren3 = "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg"; // Renovated event space
const renovationHero = "https://videos.pexels.com/video-files/5501226/5501226-uhd_2732_1440_24fps.mp4";

import { FaIndustry, FaTools, FaDraftingCompass, FaHardHat, FaCheckCircle, FaArrowLeft, FaArrowRight, FaRegLightbulb, FaClipboardList } from "react-icons/fa";

// Step icons for headings
const stepIcons = [FaRegLightbulb, FaClipboardList, FaTools, FaCheckCircle];

const content = {
  en: {
    heroTitle: 'Expert ',
    heroHighlight: 'Event Venue Makeovers',
    heroDesc: 'Transforming event spaces with modern designs, creative decor, and seamless upgrades. Breathe new life into your venue for unforgettable experiences.',
    aboutTitle: 'Why Choose Our Event Venue Renovation Services?',
    aboutDesc: [
      'We specialize in upgrading and modernizing event venues for improved ambiance, guest experience, and functionality.',
      'Our experienced team manages every aspect of your venue makeover, from assessment and planning to decor and finishing.',
      'We use premium materials, innovative techniques, and creative design to ensure your venue stands out and delights guests.',
      'Our transparent process keeps you informed and involved at every stage, so you can watch your event space transform with confidence.',
      'Contact us today to start your event venue renovation and experience a seamless, stress-free upgrade journey.'
    ],
    packagesTitle: 'Our Venue Makeover Packages',
    packagesDesc: "Choose a package that fits your event venue's needs and budget. Upgrade anytime — no hidden costs!",
    plans: [
      {
        name: "Basic Refresh",
        price: "$50k+",
        period: "",
        features: [
          "Essential repairs & decor upgrades",
          "Quick turnaround",
          "Minimal downtime",
        ],
        highlighted: false,
      },
      {
        name: "Modern Makeover",
        price: "$150k+",
        period: "",
        features: [
          "Venue redesign",
          "Lighting & AV enhancements",
          "Guest flow optimization",
        ],
        highlighted: true,
      },
      {
        name: "Full Transformation",
        price: "$300k+",
        period: "",
        features: [
          "Complete venue overhaul",
          "Custom decor & branding",
          "Smart event integration",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'Client Reviews',
    testimonials: [
      { name: "Ramesh Kumar", role: "Factory Owner", text: "Our industrial renovation was completed on time and with minimal disruption. The facility is now safer and more efficient!" },
      { name: "Priya Shah", role: "Warehouse Manager", text: "The team modernized our warehouse and improved workflow. Highly recommended for industrial upgrades!" },
      { name: "Vikram Patel", role: "Operations Head", text: "Excellent project management and quality work. Every milestone was met as promised." },
      { name: "Anita Rao", role: "Plant Supervisor", text: "The renovation process was smooth and the results exceeded our expectations. Our facility looks brand new!" },
    ],
    howTitle: 'How It Works',
    howDesc: 'Renovating your industrial facility is simple and stress-free with our proven process.',
    steps: [
      { icon: <FaIndustry size={28} className="text-white" />, title: "Consultation", description: "Discuss your renovation needs and goals with our experts." },
      { icon: <FaTools size={28} className="text-white" />, title: "Assessment", description: "We evaluate your facility and recommend the best solutions." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "Design & Planning", description: "Our engineers create a detailed renovation plan and timeline." },
      { icon: <FaHardHat size={28} className="text-white" />, title: "Renovation", description: "We upgrade your facility with minimal disruption to operations." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "Handover", description: "Move into your improved industrial space, ready for business." },
    ],
    ctaTitle: 'Ready to Renovate Your Facility?',
    ctaDesc: 'Upgrade your industrial space for the future. Contact us today to get started!',
    getStarted: 'Get Started',
  },
  ar: {
    heroTitle: 'خدمات ',
    heroHighlight: 'تجديد رائدة',
    heroDesc: 'تحويل المساحات بتصاميم عصرية ومواد عالية الجودة وحرفية خبيرة. أضف حياة جديدة لممتلكاتك.',
    aboutTitle: 'لماذا تختار خدماتنا للتجديد؟',
    aboutDesc: [
      'نحن متخصصون في ترقية وتحديث المنشآت الصناعية لتحسين السلامة والكفاءة والإنتاجية.',
      'يدير فريقنا ذو الخبرة جميع جوانب التجديد من التقييم والتخطيط إلى التنفيذ والتشطيب.',
      'نستخدم مواد ممتازة وتقنيات مبتكرة وممارسات مستدامة لضمان أن يكون منشأتك متينة وتلبي أعلى المعايير.',
      'نحافظ على الشفافية في كل مرحلة، لتكون على اطلاع ومشاركة في كل خطوة من خطوات التجديد.',
      'تواصل معنا اليوم لبدء تجديد منشأتك الصناعية واستمتع بتجربة تطوير سلسة وخالية من التوتر.'
    ],
    packagesTitle: 'باقات التجديد',
    packagesDesc: 'اختر الباقة التي تناسب احتياجات منشأتك وميزانيتك. يمكنك الترقية في أي وقت — بدون تكاليف خفية!',
    plans: [
      {
        name: "ترقية أساسية",
        price: "$50k+",
        period: "",
        features: [
          "إصلاحات أساسية وترقيات أمان",
          "تنفيذ سريع",
          "أقل وقت توقف ممكن",
        ],
        highlighted: false,
      },
      {
        name: "تحديث شامل",
        price: "$150k+",
        period: "",
        features: [
          "إعادة تصميم المنشأة",
          "أنظمة موفرة للطاقة",
          "تحسين سير العمل",
        ],
        highlighted: true,
      },
      {
        name: "تجديد كامل",
        price: "$300k+",
        period: "",
        features: [
          "تجديد شامل",
          "هندسة مخصصة",
          "دمج منشأة ذكية",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'آراء العملاء',
    testimonials: [
      { name: "راميش كومار", role: "مالك مصنع", text: "تم الانتهاء من تجديد منشأتنا الصناعية في الوقت المحدد وبأقل قدر من التعطيل. المنشأة الآن أكثر أمانًا وكفاءة!" },
      { name: "بريا شاه", role: "مديرة مستودع", text: "قام الفريق بتحديث مستودعنا وتحسين سير العمل. أوصي بشدة بالتجديد الصناعي!" },
      { name: "فيكرام باتيل", role: "رئيس العمليات", text: "إدارة مشاريع ممتازة وجودة عمل عالية. تم تحقيق كل مرحلة كما وعدوا." },
      { name: "أنيتا راو", role: "مشرفة مصنع", text: "كانت عملية التجديد سلسة والنتائج فاقت توقعاتنا. منشأتنا تبدو جديدة تمامًا!" },
    ],
    howTitle: 'كيف يعمل',
    howDesc: 'تجديد منشأتك الصناعية بسيط وخالٍ من التوتر مع عمليتنا المجربة.',
    steps: [
      { icon: <FaIndustry size={28} className="text-white" />, title: "استشارة", description: "ناقش احتياجاتك وأهدافك في التجديد مع خبرائنا." },
      { icon: <FaTools size={28} className="text-white" />, title: "تقييم", description: "نقيّم منشأتك ونوصي بأفضل الحلول." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "تصميم وتخطيط", description: "يعد مهندسونا خطة وتجديدًا مفصلًا وجدولًا زمنيًا." },
      { icon: <FaHardHat size={28} className="text-white" />, title: "تجديد", description: "نقوم بترقية منشأتك مع أقل قدر من التعطيل للتشغيل." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "تسليم", description: "انتقل إلى منشأتك الصناعية المحسنة، جاهزة للعمل." },
    ],
    ctaTitle: 'جاهز لتجديد منشأتك؟',
    ctaDesc: 'قم بترقية مساحتك الصناعية للمستقبل. تواصل معنا اليوم للبدء!',
    getStarted: 'ابدأ الآن',
  },
  he: {
    heroTitle: 'שירותי ',
    heroHighlight: 'שיפוץ מובילים',
    heroDesc: 'שדרוג חללים עם עיצובים מודרניים, חומרים איכותיים ומומחיות מקצועית. נשום חיים חדשים בנכס שלך.',
    aboutTitle: 'למה לבחור בשירותי השיפוץ שלנו?',
    aboutDesc: [
      'אנו מתמחים בשדרוג וחידוש מתקנים תעשייתיים לשיפור בטיחות, יעילות ופרודוקטיביות.',
      'הצוות המנוסה שלנו מנהל כל שלב בשיפוץ, מההערכה והתכנון ועד לביצוע ולגמר.',
      'אנו משתמשים בחומרים מובחרים, טכניקות חדשניות ושיטות בנות קיימא כדי להבטיח שהמתקן שלך יעמוד בסטנדרטים הגבוהים ביותר.',
      'התהליך השקוף שלנו שומר אותך מעורב ומעודכן בכל שלב, כך שתוכל לראות את המתקן שלך משתנה בביטחון.',
      'צור קשר עוד היום כדי להתחיל את השיפוץ וליהנות מתהליך שדרוג חלק וללא דאגות.'
    ],
    packagesTitle: 'חבילות השיפוץ שלנו',
    packagesDesc: 'בחר חבילה שמתאימה לצרכי המתקן והתקציב שלך. ניתן לשדרג בכל עת — ללא עלויות נסתרות!',
    plans: [
      {
        name: "שדרוג בסיסי",
        price: "$50k+",
        period: "",
        features: [
          "תיקונים חיוניים ושדרוגי בטיחות",
          "ביצוע מהיר",
          "מינימום השבתה",
        ],
        highlighted: false,
      },
      {
        name: "מודרניזציה",
        price: "$150k+",
        period: "",
        features: [
          "עיצוב מחדש של המתקן",
          "מערכות חסכוניות באנרגיה",
          "אופטימיזציית זרימת עבודה",
        ],
        highlighted: true,
      },
      {
        name: "שיפוץ מלא",
        price: "$300k+",
        period: "",
        features: [
          "שיפוץ כולל",
          "הנדסה מותאמת אישית",
          "שילוב מתקן חכם",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'ביקורות לקוחות',
    testimonials: [
      { name: "רמש קומאר", role: "בעל מפעל", text: "השיפוץ התעשייתי שלנו הושלם בזמן ועם מינימום הפרעה. המתקן כעת בטוח ויעיל יותר!" },
      { name: "פריה שאה", role: "מנהלת מחסן", text: "הצוות שדרג את המחסן שלנו ושיפר את זרימת העבודה. ממליצה בחום על שדרוג תעשייתי!" },
      { name: "ויקראם פאטל", role: "ראש תפעול", text: "ניהול פרויקטים מצוין ועבודה איכותית. כל שלב הושג כפי שהובטח." },
      { name: "אניטה ראו", role: "מפקחת מפעל", text: "תהליך השיפוץ היה חלק והתוצאות עלו על הציפיות. המתקן שלנו נראה חדש לגמרי!" },
    ],
    howTitle: 'איך זה עובד',
    howDesc: 'שיפוץ המתקן התעשייתי שלך פשוט וללא דאגות עם התהליך שלנו.',
    steps: [
      { icon: <FaIndustry size={28} className="text-white" />, title: "ייעוץ", description: "שוחח על צרכי השיפוץ והמטרות שלך עם המומחים שלנו." },
      { icon: <FaTools size={28} className="text-white" />, title: "הערכה", description: "נבצע הערכה של המתקן שלך ונמליץ על הפתרונות הטובים ביותר." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "תכנון ועיצוב", description: "המהנדסים שלנו יכינו תוכנית שיפוץ מפורטת ולוח זמנים." },
      { icon: <FaHardHat size={28} className="text-white" />, title: "שיפוץ", description: "נשדרג את המתקן שלך עם מינימום הפרעה לפעילות." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "מסירה", description: "היכנס למתקן התעשייתי המשודרג שלך, מוכן לעבודה." },
    ],
    ctaTitle: 'מוכן לשפץ את המתקן שלך?',
    ctaDesc: 'שדרג את המתקן התעשייתי שלך לעתיד. צור קשר עוד היום כדי להתחיל!',
    getStarted: 'התחל עכשיו',
  },
};

const RenovationServices = ({ lang = 'en' }) => {
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

  return (
    <div>
      {/* Hero Section */}
  <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-red-50">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={renovationHero}
          autoPlay
          loop
          muted
          playsInline
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
          <div>
            <img
              src={ren1}
              alt="Industrial Renovation"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
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
          {t.plans.map((plan, idx) => (
            <div
              key={idx}
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
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-black mb-6">{t.testimonialsTitle}</h2>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-red-600 text-sm">{testimonial.role}</p>
            </div>
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
          <div className="flex justify-center">
            <img
              src={ren2}
              alt="Renovation Facility"
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

        <div className="flex flex-wrap justify-center items-center gap-6">
          {t.steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  {React.createElement(stepIcons[idx])}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {idx < t.steps.length - 1 && (
                <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={ren3}
          alt="Renovation Project"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
  <div className="absolute inset-0 bg-red-600/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">{t.ctaTitle}</h2>
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

export default RenovationServices;
