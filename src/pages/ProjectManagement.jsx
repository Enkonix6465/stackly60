import React, { useState, useEffect } from "react";
import { FaShoppingBag, FaClock, FaMobileAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Pexels images for event project management
const pm1 = "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"; // Event planning
const pm2 = "https://images.pexels.com/photos/2108865/pexels-photo-2108865.jpeg"; // Team meeting
const pm3 = "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg"; // Project execution
const pmHero = "https://videos.pexels.com/video-files/7660184/7660184-uhd_1440_2560_25fps.mp4";

const content = {
  en: {
    heroTitle: 'Expert ',
    heroHighlight: 'Event Project Management',
    heroDesc: 'End-to-end event management for seamless, on-time delivery. Transparent, proactive, and tailored to your event goals.',
    aboutTitle: 'Why Choose Our Event Project Management?',
    aboutDesc: [
      'We ensure your events are delivered efficiently, with clear communication and expert coordination at every stage.',
      'Our experienced managers handle planning, execution, and risk mitigation for events of any size or complexity.',
      'Enjoy peace of mind with transparent progress tracking and proactive problem-solving for your event.'
    ],
    plansTitle: 'Event Management Plans',
    plansDesc: 'Select the event management package that matches your needs and scale.',
    plans: [
      {
        name: "Basic Event Plan",
        price: "₹15,000",
        period: "/event",
        features: [
          "Initial event assessment",
          "Timeline & budget planning",
          "Weekly progress reports",
        ],
        highlighted: false,
      },
      {
        name: "Standard Event Plan",
        price: "₹35,000",
        period: "/event",
        features: [
          "All Basic features",
          "Resource allocation",
          "Risk management",
          "Bi-weekly client meetings",
        ],
        highlighted: true,
      },
      {
        name: "Premium Event Plan",
        price: "₹60,000",
        period: "/event",
        features: [
          "All Standard features",
          "On-site supervision",
          "Quality assurance checks",
          "Post-event support",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'Client Testimonials',
    testimonials: [
      { name: "Priya Sharma", role: "Construction Manager", text: "Their project management team kept our build on track and under budget. Communication was excellent!" },
      { name: "Rahul Verma", role: "Business Owner", text: "We launched our new office on time thanks to their detailed planning and proactive risk management." },
      { name: "Anjali Mehta", role: "IT Project Lead", text: "The team handled every challenge with professionalism. Our software rollout was a huge success!" },
      { name: "Vikram Singh", role: "Homeowner", text: "From design to delivery, their project management made my home renovation stress-free." },
      { name: "Sonal Patel", role: "Event Coordinator", text: "Every milestone was met on time. I highly recommend their project management services!" },
    ],
    stepsTitle: 'Our Process',
    stepsDesc: 'Effective project management in three clear steps.',
    steps: [
  { icon: <FaMobileAlt size={28} className="text-white" />, title: "Define Goals", description: "Collaborate to set clear project objectives and deliverables." },
  { icon: <FaClock size={28} className="text-white" />, title: "Plan & Schedule", description: "Develop a detailed timeline, allocate resources, and identify risks." },
  { icon: <FaShoppingBag size={28} className="text-white" />, title: "Execute & Deliver", description: "Monitor progress, communicate updates, and ensure successful completion." },
    ],
    ctaTitle: 'Ready to Start Your Project?',
    ctaDesc: 'Contact us today to discuss your project and experience stress-free management from start to finish.',
    getStarted: 'Get a Free Consultation',
  },
  ar: {
    heroTitle: 'إدارة ',
    heroHighlight: 'مشاريع رائدة',
    heroDesc: 'إدارة مشاريع شاملة لضمان التسليم في الوقت المحدد وضمن الميزانية. شفافية واحترافية وحلول مخصصة لأهدافك.',
    aboutTitle: 'لماذا تختار إدارة مشاريعنا؟',
    aboutDesc: [
      'نضمن تسليم مشاريعك بكفاءة مع تواصل واضح وتنسيق احترافي في كل مرحلة.',
      'مديرونا ذوو الخبرة يديرون التخطيط والتنفيذ وإدارة المخاطر لأي مشروع مهما كان حجمه أو تعقيده.',
      'استمتع براحة البال مع تتبع شفاف للتقدم وحلول استباقية للمشكلات.'
    ],
    plansTitle: 'خطط المشاريع',
    plansDesc: 'اختر باقة إدارة المشاريع التي تناسب احتياجاتك وحجم مشروعك.',
    plans: [
      {
        name: "خطة المشروع الأساسية",
        price: "₹15,000",
        period: "/مشروع",
        features: [
          "تقييم أولي للمشروع",
          "تخطيط الجدول الزمني والميزانية",
          "تقارير تقدم أسبوعية",
        ],
        highlighted: false,
      },
      {
        name: "خطة المشروع القياسية",
        price: "₹35,000",
        period: "/مشروع",
        features: [
          "جميع ميزات الأساسية",
          "تخصيص الموارد",
          "إدارة المخاطر",
          "اجتماعات عميل نصف شهرية",
        ],
        highlighted: true,
      },
      {
        name: "خطة المشروع المميزة",
        price: "₹60,000",
        period: "/مشروع",
        features: [
          "جميع ميزات القياسية",
          "إشراف ميداني",
          "فحوصات ضمان الجودة",
          "دعم بعد المشروع",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'آراء العملاء',
    testimonials: [
      { name: "برية شارما", role: "مديرة بناء", text: "فريق إدارة المشاريع أبقى البناء على المسار الصحيح وضمن الميزانية. التواصل كان ممتازًا!" },
      { name: "راهول فيرما", role: "صاحب عمل", text: "أطلقنا مكتبنا الجديد في الوقت المحدد بفضل التخطيط الدقيق وإدارة المخاطر الاستباقية." },
      { name: "أنجالي ميهتا", role: "قائدة مشروع تقنية المعلومات", text: "تعامل الفريق مع كل تحدٍ باحترافية. تنفيذ البرمجيات كان ناجحًا للغاية!" },
      { name: "فيكرام سينغ", role: "مالك منزل", text: "من التصميم إلى التسليم، جعلت إدارة المشروع تجديد منزلي خاليًا من التوتر." },
      { name: "سونال باتيل", role: "منسقة فعاليات", text: "تم تحقيق كل مرحلة في الوقت المحدد. أوصي بشدة بخدمات إدارة المشاريع!" },
    ],
    stepsTitle: 'خطواتنا',
    stepsDesc: 'إدارة مشاريع فعالة في ثلاث خطوات واضحة.',
    steps: [
  { icon: <FaMobileAlt size={28} className="text-white" />, title: "تحديد الأهداف", description: "تعاون لوضع أهداف ومخرجات واضحة للمشروع." },
  { icon: <FaClock size={28} className="text-white" />, title: "التخطيط والجدولة", description: "تطوير جدول زمني مفصل وتخصيص الموارد وتحديد المخاطر." },
  { icon: <FaShoppingBag size={28} className="text-white" />, title: "التنفيذ والتسليم", description: "مراقبة التقدم وتحديثات التواصل وضمان الإنجاز الناجح." },
    ],
    ctaTitle: 'جاهز لبدء مشروعك؟',
    ctaDesc: 'تواصل معنا اليوم لمناقشة مشروعك واستمتع بإدارة خالية من التوتر من البداية للنهاية.',
    getStarted: 'احصل على استشارة مجانية',
  },
  he: {
    heroTitle: 'ניהול ',
    heroHighlight: 'פרויקטים מוביל',
    heroDesc: 'ניהול פרויקטים מקצה לקצה לאספקה בזמן ובתקציב. שקיפות, יוזמה והתאמה אישית למטרותיך.',
    aboutTitle: 'למה לבחור בניהול הפרויקטים שלנו?',
    aboutDesc: [
      'אנו מבטיחים שהפרויקטים שלך יבוצעו ביעילות, עם תקשורת ברורה ותיאום מקצועי בכל שלב.',
      'המנהלים המנוסים שלנו מטפלים בתכנון, ביצוע וניהול סיכונים לכל פרויקט בכל גודל או מורכבות.',
      'שקט נפשי עם מעקב שקוף אחר התקדמות ופתרון בעיות יזום.'
    ],
    plansTitle: 'תוכניות פרויקט',
    plansDesc: 'בחר את חבילת ניהול הפרויקטים המתאימה לצרכיך ולגודל הפרויקט.',
    plans: [
      {
        name: "תוכנית פרויקט בסיסית",
        price: "₹15,000",
        period: "/פרויקט",
        features: [
          "הערכת פרויקט ראשונית",
          "תכנון לוח זמנים ותקציב",
          "דוחות התקדמות שבועיים",
        ],
        highlighted: false,
      },
      {
        name: "תוכנית פרויקט סטנדרטית",
        price: "₹35,000",
        period: "/פרויקט",
        features: [
          "כל תכונות הבסיס",
          "הקצאת משאבים",
          "ניהול סיכונים",
          "פגישות לקוח דו-שבועיות",
        ],
        highlighted: true,
      },
      {
        name: "תוכנית פרויקט פרימיום",
        price: "₹60,000",
        period: "/פרויקט",
        features: [
          "כל תכונות הסטנדרט",
          "פיקוח באתר",
          "בדיקות אבטחת איכות",
          "תמיכה לאחר הפרויקט",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'המלצות לקוחות',
    testimonials: [
      { name: "פריה שארמה", role: "מנהלת בנייה", text: "צוות ניהול הפרויקטים שמר על הבנייה שלנו במסלול ועמד בתקציב. התקשורת הייתה מצוינת!" },
      { name: "רהול ורמה", role: "בעל עסק", text: "השקנו את המשרד החדש בזמן בזכות תכנון מדויק וניהול סיכונים יזום." },
      { name: "אנג'לי מהטה", role: "מנהלת פרויקט IT", text: "הצוות התמודד עם כל אתגר במקצועיות. ההשקה הייתה הצלחה גדולה!" },
      { name: "ויקראם סינג", role: "בעל בית", text: "מהעיצוב ועד המסירה, ניהול הפרויקט הפך את שיפוץ הבית שלי לחסר דאגות." },
      { name: "סונאל פאטל", role: "רכזת אירועים", text: "כל אבן דרך הושגה בזמן. ממליצה בחום על שירותי ניהול הפרויקטים!" },
    ],
    stepsTitle: 'התהליך שלנו',
    stepsDesc: 'ניהול פרויקטים יעיל בשלושה שלבים ברורים.',
    steps: [
  { icon: <FaMobileAlt size={28} className="text-white" />, title: "הגדרת מטרות", description: "שתף פעולה לקביעת מטרות ותוצרים ברורים לפרויקט." },
  { icon: <FaClock size={28} className="text-white" />, title: 'תכנון ולו"ז', description: "פיתוח לוח זמנים מפורט, הקצאת משאבים וזיהוי סיכונים." },
  { icon: <FaShoppingBag size={28} className="text-white" />, title: "ביצוע ומסירה", description: "ניטור התקדמות, עדכונים שוטפים והבטחת השלמה מוצלחת." },
    ],
    ctaTitle: 'מוכן להתחיל את הפרויקט שלך?',
    ctaDesc: 'צור קשר עוד היום לשיחה על הפרויקט שלך ולקבלת ניהול ללא דאגות מההתחלה ועד הסוף.',
    getStarted: 'קבל ייעוץ חינם',
  },
};

const ProjectManagement = ({ lang = 'en' }) => {
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
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={pmHero}
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
              src={pm1}
              alt="Project management team"
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
            <h2 className="text-4xl font-bold text-white mb-6">{t.testimonialsTitle}</h2>
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
              src={pm2}
              alt="Project management success"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
  <h2 className="text-4xl font-bold text-red-600 mb-4">{t.stepsTitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {t.stepsDesc}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {t.steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  {step.icon}
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
          src={pm3}
          alt="Project management call to action"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
  <div className="absolute inset-0 bg-red-600/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">{t.ctaTitle}</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            {t.ctaDesc}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            {t.getStarted}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectManagement;
