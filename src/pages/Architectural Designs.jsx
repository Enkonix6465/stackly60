import React, { useState, useEffect } from "react";
// Pexels images for event venue and design
const arch1 = "https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg"; // Modern event venue
const arch2 = "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg"; // Conference room
const arch3 = "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg"; // Event stage
const architecturalHero = "https://videos.pexels.com/video-files/4301618/4301618-hd_1920_1080_30fps.mp4";
import { FaArrowLeft, FaArrowRight, FaRegCheckCircle, FaRegLightbulb, FaRegEdit, FaIndustry, FaTools, FaDraftingCompass, FaHardHat, FaCheckCircle } from "react-icons/fa";

const content = {
  en: {
    heroTitle: 'Expert ',
    heroHighlight: 'Event Venue Designs',
    heroDesc: 'Creative, functional, and inspiring event spaces for conferences, galas, and celebrations. Transforming venues into unforgettable experiences.',
    aboutTitle: 'Why Choose Our Event Venue Design Services?',
    aboutDesc: [
      'Our experienced event designers create innovative spaces that blend functionality with visual impact.',
      'Customized solutions for conferences, corporate events, weddings, and celebrations of all sizes.',
      'From concept to execution, we ensure your event venue exceeds expectations and delights guests.',
      'Perfect for event organizers, businesses, and individuals seeking professional event management expertise.',
      'Advanced 3D modeling and virtual walkthroughs help you visualize your event before the big day.',
      'Sustainable design practices that focus on guest comfort and environmental responsibility.',
      'Expert knowledge in venue logistics, safety codes, and event flow for seamless experiences.',
      'Collaborative approach ensuring your vision is brought to life while maximizing impact and efficiency.',
      'Comprehensive event documentation including layouts, schedules, and decor plans.',
      'Ongoing support during your event to ensure flawless execution and memorable moments.'
    ],
    plansTitle: 'Event Design Packages',
    plansDesc: 'Choose the event design package that best fits your vision and budget.',
    plans: [
      {
        name: "Basic Event Package",
        price: "₹50,000",
        period: "/event",
        features: [
          "Venue layout planning",
          "Basic decor setup",
          "Standard lighting design",
          "Initial consultation",
        ],
        highlighted: false,
      },
      {
        name: "Professional Event Design",
        price: "₹1,50,000",
        period: "/event",
        features: [
          "3D event renderings",
          "Custom theme development",
          "Stage and AV design",
          "Guest flow optimization",
          "Decor and branding",
        ],
        highlighted: true,
      },
      {
        name: "Premium Event Experience",
        price: "₹3,00,000",
        period: "/event",
        features: [
          "Complete event design package",
          "Virtual walkthroughs",
          "VIP lounge and green room setup",
          "On-site event management",
          "Post-event support",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'What Our Clients Say',
    testimonials: [
      { text: "Their event venue design made our conference unforgettable. Every detail was perfect!", name: "Priya S.", role: "Event Organizer" },
      { text: "Creative team with a passion for excellence. Our gala was a huge success.", name: "Michael T.", role: "Corporate Client" },
      { text: "From planning to execution, their expertise ensured our event was seamless.", name: "Amit R.", role: "Wedding Planner" },
    ],
    howTitle: 'How It Works',
    howDesc: 'Designing your event venue is simple and stress-free with our proven process.',
    steps: [
      { icon: <FaRegLightbulb size={28} className="text-white" />, title: "Consultation", description: "Discuss your event vision and requirements with our experts." },
      { icon: <FaTools size={28} className="text-white" />, title: "Venue Analysis", description: "We evaluate your venue and event logistics for optimal planning." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "Design & Planning", description: "Our designers create detailed layouts and 3D visualizations." },
      { icon: <FaRegEdit size={28} className="text-white" />, title: "Documentation", description: "We prepare complete event plans and decor specifications." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "Event Day Execution", description: "Enjoy a flawlessly executed event with our on-site support." },
    ],
    ctaTitle: 'Ready to Design Your Next Event?',
    ctaDesc: 'Get started today and transform your vision into an unforgettable event experience.',
    getStarted: 'Start Your Event',
  },
  ar: {
    heroTitle: 'تصاميم ',
    heroHighlight: 'معمارية رائدة',
    heroDesc: 'حلول معمارية مبتكرة للمعيشة والعمل العصري. تصاميم إبداعية وعملية ومستدامة لكل رؤية.',
    aboutTitle: 'لماذا تختار خدمات التصميم المعماري لدينا؟',
    aboutDesc: [
      'يبتكر مهندسونا المعماريون تصاميم تجمع بين الوظيفة والجمال.',
      'حلول مخصصة للمشاريع السكنية والتجارية والصناعية بجميع الأحجام.',
      'من الفكرة إلى التنفيذ، نضمن مطابقة مشروعك لجميع المتطلبات والمعايير التنظيمية.',
      'مثالي لأصحاب المنازل والمطورين والشركات الباحثين عن خبرة معمارية احترافية.',
      'نمذجة ثلاثية الأبعاد وعروض افتراضية متقدمة تساعدك على تصور مشروعك قبل البناء.',
      'ممارسات تصميم مستدامة تركز على كفاءة الطاقة والمسؤولية البيئية.',
      'معرفة خبيرة بقوانين البناء المحلية وأنظمة التخطيط وإجراءات التصاريح للموافقات السلسة.',
      'نهج تعاوني يضمن تحقيق رؤيتك مع تعظيم الوظائف وكفاءة الميزانية.',
      'توثيق شامل للمشروع يشمل رسومات تفصيلية ومواصفات وجداول المواد.',
      'دعم مستمر أثناء مرحلة البناء لضمان جودة التنفيذ والحفاظ على التصميم.',
    ],
    plansTitle: 'باقات التصميم',
    plansDesc: 'اختر باقة التصميم المعماري التي تناسب متطلبات مشروعك وميزانيتك.',
    plans: [
      {
        name: "باقة التصميم الأساسية",
        price: "₹50,000",
        period: "/مشروع",
        features: [
          "مخططات أرضية ثنائية الأبعاد",
          "واجهات أساسية",
          "قائمة مواد قياسية",
          "استشارة أولية",
        ],
        highlighted: false,
      },
      {
        name: "تصميم احترافي",
        price: "₹1,50,000",
        period: "/مشروع",
        features: [
          "تصوير ثلاثي الأبعاد",
          "مخططات تفصيلية",
          "مفاهيم التصميم الداخلي",
          "رسومات إنشائية",
          "مواصفات المواد",
        ],
        highlighted: true,
      },
      {
        name: "معمارية متميزة",
        price: "₹3,00,000",
        period: "/مشروع",
        features: [
          "حزمة تصميم كاملة",
          "جولات افتراضية",
          "تصميم المناظر الطبيعية",
          "إدارة المشروع",
          "إشراف على البناء",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'آراء العملاء',
    testimonials: [
      { text: "تصاميمهم المعمارية حولت رؤيتنا إلى واقع مذهل. اهتمام استثنائي بالتفاصيل!", name: "راجش ب.", role: "مالك منزل" },
      { text: "فريق محترف بأفكار مبتكرة. تصميم مبنى مكتبنا فاق كل التوقعات.", name: "ميرا س.", role: "صاحبة عمل" },
      { text: "من الفكرة إلى الإنجاز، خبرتهم المعمارية جعلت منزل أحلامنا ممكنًا.", name: "فيكرام ت.", role: "مطور عقاري" },
    ],
    howTitle: 'كيف يعمل',
    howDesc: 'إنشاء تصميمك المعماري بسيط وخالٍ من التوتر مع عمليتنا المجربة.',
    steps: [
      { icon: <FaRegLightbulb size={28} className="text-white" />, title: "استشارة", description: "ناقش رؤيتك المعمارية ومتطلبات المشروع مع خبرائنا." },
      { icon: <FaTools size={28} className="text-white" />, title: "تحليل الموقع", description: "نقيّم ظروف موقعك واللوائح المحلية للبناء." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "تصميم وتخطيط", description: "يعد مهندسونا تصاميم مفصلة وعروض ثلاثية الأبعاد." },
      { icon: <FaRegEdit size={28} className="text-white" />, title: "توثيق", description: "نعد رسومات ومواصفات معمارية كاملة." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "تسليم المشروع", description: "استلم حزمة التصميم المعماري الكاملة الخاصة بك، جاهزة للبناء." },
    ],
    ctaTitle: 'جاهز لبناء مشروع أحلامك؟',
    ctaDesc: 'ابدأ اليوم وحول رؤيتك إلى واقع معماري مذهل.',
    getStarted: 'ابدأ مشروعك',
  },
  he: {
    heroTitle: 'עיצובים ',
    heroHighlight: 'אדריכליים מובילים',
    heroDesc: 'פתרונות אדריכליים חדשניים למגורים ולעבודה מודרניים. עיצובים יצירתיים, פונקציונליים וברי קיימא לכל חזון.',
    aboutTitle: 'למה לבחור בשירותי התכנון האדריכלי שלנו?',
    aboutDesc: [
      'האדריכלים המנוסים שלנו יוצרים עיצובים חדשניים המשלבים פונקציונליות ואסתטיקה.',
      'פתרונות מותאמים אישית לפרויקטים מגורים, מסחריים ותעשייתיים בכל קנה מידה.',
      'מהרעיון ועד הביצוע, אנו מבטיחים שהפרויקט שלך יעמוד בכל הדרישות והתקנים.',
      'מושלם לבעלי בתים, יזמים ועסקים המחפשים מומחיות אדריכלית מקצועית.',
      'הדמיות תלת-ממד ומציאות מדומה מתקדמת עוזרות לך לדמיין את הפרויקט לפני הבנייה.',
      'שיטות תכנון ברות קיימא המתמקדות ביעילות אנרגטית ואחריות סביבתית.',
      'ידע מקצועי בחוקי בנייה מקומיים, דיני תכנון ותהליכי רישוי לאישורים קלים.',
      'גישה שיתופית המבטיחה שהחזון שלך יתממש תוך מקסום פונקציונליות ויעילות תקציבית.',
      'תיעוד פרויקט מקיף הכולל שרטוטים, מפרטים ולוחות חומרים מפורטים.',
      'תמיכה שוטפת במהלך שלב הבנייה להבטחת איכות וביצוע התכנון.',
    ],
    plansTitle: 'חבילות תכנון',
    plansDesc: 'בחר את חבילת התכנון האדריכלי המתאימה ביותר לדרישות ולתקציב שלך.',
    plans: [
      {
        name: "חבילת תכנון בסיסית",
        price: "₹50,000",
        period: "/פרויקט",
        features: [
          "תוכניות קומה דו-ממדיות",
          "חזיתות בסיסיות",
          "רשימת חומרים סטנדרטית",
          "ייעוץ ראשוני",
        ],
        highlighted: false,
      },
      {
        name: "תכנון מקצועי",
        price: "₹1,50,000",
        period: "/פרויקט",
        features: [
          "הדמיות תלת-ממד",
          "תוכניות קומה מפורטות",
          "קונספטים לעיצוב פנים",
          "שרטוטים קונסטרוקטיביים",
          "מפרטי חומרים",
        ],
        highlighted: true,
      },
      {
        name: "אדריכלות פרימיום",
        price: "₹3,00,000",
        period: "/פרויקט",
        features: [
          "חבילת תכנון מלאה",
          "סיורים וירטואליים",
          "עיצוב נוף",
          "ניהול פרויקטים",
          "פיקוח בנייה",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'מה הלקוחות שלנו אומרים',
    testimonials: [
      { text: "העיצובים האדריכליים שלהם הפכו את החזון שלנו למציאות מדהימה. תשומת לב יוצאת דופן לפרטים!", name: "רג'ש פ.", role: "בעל בית" },
      { text: "צוות מקצועי עם רעיונות חדשניים. עיצוב בניין המשרדים שלנו עלה על כל הציפיות.", name: "מירה ס.", role: "בעלת עסק" },
  { text: "מהרעיון ועד להשלמה, המומחיות האדריכלית שלהם הפכה את בית החלומות שלנו לאפשרי.", name: "ויקראם ט.", role: "יזם נדל" + "ן" },
    ],
    howTitle: 'איך זה עובד',
    howDesc: 'יצירת התכנון האדריכלי שלך פשוטה וללא דאגות עם התהליך שלנו.',
    steps: [
      { icon: <FaRegLightbulb size={28} className="text-white" />, title: "ייעוץ", description: "שוחח על החזון האדריכלי ודרישות הפרויקט שלך עם המומחים שלנו." },
      { icon: <FaTools size={28} className="text-white" />, title: "ניתוח אתר", description: "נבצע הערכת תנאי האתר שלך ותקנות בנייה מקומיות." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "תכנון ועיצוב", description: "האדריכלים שלנו יכינו תכניות מפורטות והדמיות תלת-ממד." },
      { icon: <FaRegEdit size={28} className="text-white" />, title: "תיעוד", description: "נכין שרטוטים אדריכליים מלאים ומפרטים." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "מסירת הפרויקט", description: "קבל את חבילת התכנון האדריכלי המלאה שלך, מוכנה לבנייה." },
    ],
    ctaTitle: 'מוכן לבנות את פרויקט החלומות שלך?',
    ctaDesc: 'התחל היום והפוך את החזון שלך למציאות אדריכלית מדהימה.',
    getStarted: 'התחל את הפרויקט',
  },
};

const ArchitecturalDesigns = ({ lang = 'en' }) => {
  const t = content[lang] || content.en;
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    setTestimonialIndex(0);
  }, [lang]);

  const testimonial = t.testimonials[testimonialIndex];

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? t.testimonials.length - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === t.testimonials.length - 1 ? 0 : prev + 1));
  };

  // Step icons for headings
  const stepIcons = [FaRegLightbulb, FaRegEdit, FaDraftingCompass, FaCheckCircle];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={architecturalHero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {t.heroTitle}
            <span className="text-red-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">{t.heroHighlight}</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-100 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {t.heroDesc}
          </p>
        </div>
        {/* Overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5" />
      </section>

      {/* About Section */}
  <section className="py-20 px-6 md:px-20 bg-red-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={arch1}
              alt="Architectural design blueprint"
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

      {/* Plans Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
  <h2 className="text-4xl font-bold text-red-600 mb-4">{t.plansTitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {t.plansDesc}
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
              src={arch2}
              alt="Architectural design showcase"
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
          const stepIcons = [FaRegLightbulb, FaTools, FaDraftingCompass, FaRegEdit, FaCheckCircle];
          return (
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
          );
        })()}
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={arch3}
          alt="Architectural design project"
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
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            {t.getStarted}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ArchitecturalDesigns;
