import React, { useState, useEffect } from "react";
// Pexels images for commercial event projects
const comm1 = "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg"; // Conference room
const comm2 = "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg"; // Event stage
const comm3 = "https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg"; // Modern event venue
const commercialHero = "https://videos.pexels.com/video-files/857151/857151-hd_1920_746_30fps.mp4";
import { FaBuilding, FaClipboardList, FaDraftingCompass, FaHardHat, FaCheckCircle, FaArrowLeft, FaArrowRight, FaRegLightbulb } from "react-icons/fa";

const content = {
  en: {
    heroTitle: 'Expert ',
    heroHighlight: 'Event Management Projects',
    heroDesc: 'Conference halls, expo centers, and event venues designed for success. Modern, inspiring, and tailored to your event needs.',
    aboutTitle: 'About Our Event Management Projects',
    aboutDesc: [
      'We specialize in creating modern event venues, conference halls, and expo centers tailored to your event vision.',
      'Our experienced team manages every aspect of your event project, from design and planning to execution and support.',
      'We use premium materials, innovative layouts, and creative decor to ensure your venue is memorable and functional.',
      'Our transparent process keeps you informed and involved at every stage, so you can watch your event vision come to life with confidence.',
      'Contact us today to start your event project and experience a seamless, stress-free planning journey.'
    ],
    packagesTitle: 'Our Event Packages',
    packagesDesc: 'Choose a package that fits your event needs and budget. Upgrade anytime — no hidden costs!',
    plans: [
      {
        name: "Conference Venue",
        price: "$100k+",
        period: "",
        features: [
          "Modern conference hall setup",
          "Standard AV equipment",
          "Essential amenities",
        ],
        highlighted: false,
      },
      {
        name: "Expo Center",
        price: "$200k+",
        period: "",
        features: [
          "Custom expo layout",
          "Premium branding",
          "Flexible booth design",
        ],
        highlighted: true,
      },
      {
        name: "Event Complex",
        price: "$500k+",
        period: "",
        features: [
          "Large-scale event venue",
          "Luxury amenities",
          "Smart event solutions",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'What Our Clients Say',
    testimonials: [
      { name: "Priya S.", role: "Event Organizer", text: "Our new conference venue was delivered on time and exceeded our expectations. The team was professional and responsive throughout the project." },
      { name: "Amit R.", role: "Expo Manager", text: "The event space is modern, efficient, and perfectly suited for our needs. Highly recommended for event management!" },
      { name: "Michael T.", role: "Corporate Client", text: "Excellent project management and creative design. Every milestone was met as promised." },
      { name: "Sunita Rao", role: "Festival Director", text: "The team made the entire process stress-free, from planning to event day. Our expo looked fantastic!" },
    ],
    howTitle: 'How It Works',
    howDesc: 'Building your event venue is simple and stress-free with our proven process.',
    steps: [
      { icon: <FaBuilding size={28} className="text-white" />, title: "Consultation", description: "Discuss your event goals and requirements with our experts." },
      { icon: <FaClipboardList size={28} className="text-white" />, title: "Planning", description: "We create a detailed event plan, timeline, and transparent estimate." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "Design", description: "Our designers create your event space for maximum impact and flow." },
      { icon: <FaHardHat size={28} className="text-white" />, title: "Execution", description: "We set up your event using quality materials and skilled professionals." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "Event Day", description: "Enjoy your new event venue, ready for guests." },
    ],
    ctaTitle: 'Ready to Start Your Event Project?',
    ctaDesc: 'Let us help you create your next conference, expo, or event space. Contact us today to get started!',
    getStarted: 'Get Started',
  },
  ar: {
    heroTitle: 'مشاريع ',
    heroHighlight: 'تجارية رائدة',
    heroDesc: 'مكاتب ومساحات تجارية ومراكز أعمال مبنية للنجاح. حديثة ومستدامة ومصممة خصيصًا لاحتياجاتك التجارية.',
    aboutTitle: 'حول مشاريعنا التجارية',
    aboutDesc: [
      'نحن متخصصون في بناء مكاتب حديثة ومحلات تجارية ومراكز أعمال مصممة خصيصًا لاحتياجات عملك.',
      'يدير فريقنا ذو الخبرة جميع جوانب مشروعك التجاري من التصميم والتخطيط إلى البناء والتشطيب.',
      'نستخدم مواد ممتازة وتقنيات مبتكرة وممارسات مستدامة لضمان أن يكون مشروعك متينًا ويلبي أعلى المعايير.',
      'نحافظ على الشفافية في كل مرحلة، لتكون على اطلاع ومشاركة في كل خطوة من خطوات المشروع.',
      'تواصل معنا اليوم لبدء مشروعك التجاري واستمتع بتجربة بناء سلسة وخالية من التوتر.'
    ],
    packagesTitle: 'باقات المشاريع التجارية',
    packagesDesc: 'اختر الباقة التي تناسب احتياجات عملك وميزانيتك. يمكنك الترقية في أي وقت — بدون تكاليف خفية!',
    plans: [
      {
        name: "مساحة مكتبية",
        price: "$100k+",
        period: "",
        features: [
          "بناء مكاتب حديثة",
          "تشطيبات قياسية",
          "وسائل راحة أساسية",
        ],
        highlighted: false,
      },
      {
        name: "محل تجاري",
        price: "$200k+",
        period: "",
        features: [
          "بناء محلات مخصصة",
          "تشطيبات فاخرة",
          "تصميم يركز على العلامة التجارية",
        ],
        highlighted: true,
      },
      {
        name: "مركز أعمال",
        price: "$500k+",
        period: "",
        features: [
          "مشروع تجاري واسع النطاق",
          "وسائل راحة فاخرة",
          "حلول مباني ذكية",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'ماذا يقول عملاؤنا',
    testimonials: [
      { name: "راجش ميهتا", role: "صاحب عمل", text: "تم تسليم مجمع مكاتبنا الجديد في الوقت المحدد وتجاوز توقعاتنا. كان الفريق محترفًا ومتجاوبًا طوال المشروع." },
      { name: "أنيتا ديساي", role: "مديرة متجر", text: "المساحة التجارية حديثة وفعالة ومناسبة تمامًا لاحتياجاتنا. أوصي بشدة بالبناء التجاري!" },
      { name: "فيكرام سينغ", role: "مستثمر", text: "إدارة مشاريع ممتازة وجودة بناء عالية. تم تحقيق كل مرحلة كما وعدوا." },
      { name: "سنيتا راو", role: "مالكة امتياز", text: "جعل الفريق العملية بأكملها خالية من التوتر من التخطيط حتى التسليم. متجرنا الجديد يبدو رائعًا!" },
    ],
    howTitle: 'كيف يعمل',
    howDesc: 'بناء مشروعك التجاري بسيط وخالٍ من التوتر مع عمليتنا المجربة.',
    steps: [
      { icon: <FaBuilding size={28} className="text-white" />, title: "استشارة", description: "ناقش أهداف عملك ومتطلبات المشروع مع خبرائنا." },
      { icon: <FaClipboardList size={28} className="text-white" />, title: "تخطيط", description: "نعد خطة مشروع مفصلة وجدولًا زمنيًا وتقديرًا شفافًا." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "تصميم", description: "يصمم مهندسونا المعماريون مساحتك التجارية بكفاءة وجاذبية قصوى." },
      { icon: <FaHardHat size={28} className="text-white" />, title: "بناء", description: "نبني مشروعك باستخدام مواد عالية الجودة ومحترفين مهرة." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "تسليم", description: "انتقل إلى مساحتك التجارية الجديدة، جاهزة للعمل." },
    ],
    ctaTitle: 'جاهز لبدء مشروعك التجاري؟',
    ctaDesc: 'دعنا نساعدك في بناء مكتبك أو متجرك أو مركز أعمالك القادم. تواصل معنا اليوم للبدء!',
    getStarted: 'ابدأ الآن',
  },
  he: {
    heroTitle: 'פרויקטים ',
    heroHighlight: 'מסחריים מובילים',
    heroDesc: 'משרדים, חנויות ומרכזי עסקים שנבנים להצלחה. מודרניים, ברי קיימא ומותאמים לצרכים העסקיים שלך.',
    aboutTitle: 'על פרויקטי המסחר שלנו',
    aboutDesc: [
      'אנו מתמחים בבניית משרדים מודרניים, חנויות ומרכזי עסקים המותאמים במיוחד לעסק שלך.',
      'הצוות המנוסה שלנו מנהל כל שלב בפרויקט, מהתכנון והעיצוב ועד לבנייה והגמר.',
      'אנו משתמשים בחומרים מובחרים, טכניקות חדשניות ושיטות בנות קיימא כדי להבטיח שהפרויקט שלך יעמוד בסטנדרטים הגבוהים ביותר.',
      'התהליך השקוף שלנו שומר אותך מעורב ומעודכן בכל שלב, כך שתוכל לראות את חזון העסק שלך מתגשם בביטחון.',
      'צור קשר עוד היום כדי להתחיל את הפרויקט שלך וליהנות מתהליך בנייה חלק וללא דאגות.'
    ],
    packagesTitle: 'חבילות המסחר שלנו',
    packagesDesc: 'בחר חבילה שמתאימה לצרכי העסק והתקציב שלך. ניתן לשדרג בכל עת — ללא עלויות נסתרות!',
    plans: [
      {
        name: "משרד",
        price: "$100k+",
        period: "",
        features: [
          "בנייה של משרד מודרני",
          "גימורים סטנדרטיים",
          "נוחות בסיסית",
        ],
        highlighted: false,
      },
      {
        name: "חנות קמעונאית",
        price: "$200k+",
        period: "",
        features: [
          "בנייה מותאמת לחנות",
          "גימורים יוקרתיים",
          "עיצוב ממוקד מותג",
        ],
        highlighted: true,
      },
      {
        name: "מרכז עסקים",
        price: "$500k+",
        period: "",
        features: [
          "פרויקט מסחרי רחב היקף",
          "נוחות יוקרתית",
          "פתרונות בניין חכמים",
        ],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'מה הלקוחות שלנו אומרים',
    testimonials: [
      { name: "רג'ש מהטה", role: "בעל עסק", text: "מתחם המשרדים החדש שלנו נמסר בזמן ועלה על כל הציפיות. הצוות היה מקצועי וזמין לאורך כל הפרויקט." },
      { name: "אניטה דסאי", role: "מנהלת חנות", text: "המרחב המסחרי מודרני, יעיל ומותאם בדיוק לצרכים שלנו. ממליצה בחום על בנייה מסחרית!" },
      { name: "ויקראם סינג", role: "משקיע", text: "ניהול פרויקטים מצוין ובנייה איכותית. כל שלב הושג כפי שהובטח." },
      { name: "סוניטה ראו", role: "בעלת זיכיון", text: "הצוות הפך את כל התהליך לחסר דאגות מהתכנון ועד למסירה. החנות החדשה שלנו נראית נהדר!" },
    ],
    howTitle: 'איך זה עובד',
    howDesc: 'בניית הפרויקט המסחרי שלך פשוטה וללא דאגות עם התהליך שלנו.',
    steps: [
      { icon: <FaBuilding size={28} className="text-white" />, title: "ייעוץ", description: "שוחח על מטרות העסק ודרישות הפרויקט עם המומחים שלנו." },
      { icon: <FaClipboardList size={28} className="text-white" />, title: "תכנון", description: "נבנה תוכנית מפורטת, לוח זמנים והצעת מחיר שקופה." },
      { icon: <FaDraftingCompass size={28} className="text-white" />, title: "עיצוב", description: "האדריכלים שלנו יעצבו את המרחב המסחרי שלך ביעילות ובאטרקטיביות מקסימלית." },
      { icon: <FaHardHat size={28} className="text-white" />, title: "בנייה", description: "נבנה את הפרויקט שלך עם חומרים איכותיים ואנשי מקצוע מנוסים." },
      { icon: <FaCheckCircle size={28} className="text-white" />, title: "מסירה", description: "היכנס למרחב המסחרי החדש שלך, מוכן לעסק." },
    ],
    ctaTitle: 'מוכן להתחיל את הפרויקט המסחרי שלך?',
    ctaDesc: 'תן לנו לעזור לך לבנות את המשרד, החנות או מרכז העסקים הבא שלך. צור קשר עוד היום כדי להתחיל!',
    getStarted: 'התחל עכשיו',
  },
};

const CommercialProjects = ({ lang = 'en' }) => {
  const t = content[lang] || content.en;

  const [index, setIndex] = useState(0);

  // Reset testimonial index when language changes (for full reactivity)
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
  const stepIcons = [FaRegLightbulb, FaClipboardList, FaBuilding, FaCheckCircle];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-blue-50">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-110 contrast-105 saturate-110"
          src={commercialHero}
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
              src={comm1}
              alt="Our Commercial Project"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="text-black">
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
              src={comm2}
              alt="Commercial Project"
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
          const stepIcons = [FaBuilding, FaClipboardList, FaDraftingCompass, FaHardHat, FaCheckCircle];
          return (
            <div className="flex flex-wrap justify-center items-center gap-6">
              {t.steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  {/* Step card */}
                  <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                    <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                      {React.createElement(stepIcons[index])}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  {/* Arrow (between steps only, hidden on small screens) */}
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
          src={comm3}
          alt="Commercial Project"
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

export default CommercialProjects;
