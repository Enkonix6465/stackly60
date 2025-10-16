import React, { useState } from "react";
// Pexels images for residential event projects
const res1 = "https://images.pexels.com/photos/2108865/pexels-photo-2108865.jpeg"; // Home event setup
const res2 = "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"; // Backyard party
const res3 = "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg"; // Residential event
const residentialHero = "https://videos.pexels.com/video-files/5644125/5644125-hd_1920_1080_30fps.mp4";

import { FaUtensils, FaShoppingCart, FaTruck, FaSmile, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const content = {
  en: {
    heroTitle: 'Expert ',
    heroHighlight: 'Event Residences & Hospitality',
    heroDesc: 'Boutique hotels, guest houses, and event accommodations designed for comfort and style. Quality, convenience, and memorable stays for your guests.',
    aboutTitle: 'About Our Event Accommodation Projects',
    aboutDesc: [
      'We specialize in building and renovating modern, comfortable, and guest-focused accommodations for events and conferences.',
      'Whether you need boutique hotels, guest houses, or VIP suites, our experienced team delivers quality craftsmanship and attention to detail in every project.',
      'We use premium materials, innovative techniques, and sustainable practices to ensure your event accommodations exceed expectations.',
    ],
    packagesTitle: 'Our Hospitality Packages',
    packagesDesc: 'Choose a package that fits your event accommodation needs and budget. Upgrade anytime — no hidden costs!',
    plans: [
      {
        name: 'Basic Guest Room',
        price: '$50k+',
        period: '',
        features: ['1-2 rooms', 'Standard amenities', 'Essential comfort'],
        highlighted: false,
      },
      {
        name: 'Event Suite',
        price: '$100k+',
        period: '',
        features: ['2-4 rooms', 'Premium amenities', 'Custom interiors'],
        highlighted: true,
      },
      {
        name: 'Luxury Hospitality',
        price: '$250k+',
        period: '',
        features: ['4+ rooms', 'Luxury finishes', 'VIP services & smart tech'],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'What Our Clients Say',
    testimonials: [
      { name: 'Amit Sharma', role: 'Event Host', text: 'Our guest accommodations were ready on time and impressed every attendee. The team was professional and transparent throughout the process.' },
      { name: 'Priya Verma', role: 'Conference Planner', text: 'The quality of the hospitality and finishing exceeded our expectations. Highly recommended for event stays!' },
      { name: 'Ravi Kumar', role: 'VIP Guest', text: 'Excellent project management and communication. Every milestone was met as promised.' },
      { name: 'Sunita Rao', role: 'Hotel Manager', text: 'The team made the entire process stress-free, from planning to handover. Our guests loved their stay!' },
    ],
    howTitle: 'How It Works',
    howDesc: 'Creating your event accommodation is simple and stress-free with our proven process.',
    steps: [
      { icon: <FaUtensils size={28} className="text-white" />, title: 'Consultation', description: 'Discuss your event accommodation vision and requirements with our experts.' },
      { icon: <FaShoppingCart size={28} className="text-white" />, title: 'Planning', description: 'We create a detailed project plan, timeline, and transparent estimate.' },
      { icon: <FaTruck size={28} className="text-white" />, title: 'Design', description: 'Our designers create your guest spaces with modern amenities and style.' },
      { icon: <FaSmile size={28} className="text-white" />, title: 'Execution', description: 'We build or renovate your accommodations using quality materials and skilled professionals.' },
    ],
    ctaTitle: 'Ready to Build Your Home?',
    ctaDesc: 'Start your residential project with us and experience quality, transparency, and peace of mind. Your dream home is just a step away!',
    getStarted: 'Get Started',
  },
  ar: {
    heroTitle: 'مشاريع ',
    heroHighlight: 'سكنية رائدة',
    heroDesc: 'منازل وشقق وفيلات مخصصة تُبنى بعناية. الجودة والراحة والأناقة لمستقبل عائلتك.',
    aboutTitle: 'حول مشاريعنا السكنية',
    aboutDesc: [
      'نحن متخصصون في بناء منازل حديثة ومريحة وموفرة للطاقة مصممة خصيصًا لاحتياجاتك. يدير فريقنا ذو الخبرة جميع جوانب مشروعك السكني من التصميم والتخطيط إلى البناء والتشطيب.',
      'سواء كنت تبحث عن شقة دافئة أو منزل عائلي واسع أو فيلا فاخرة، نقدم لك جودة عالية واهتمامًا بالتفاصيل في كل مشروع.',
      'نستخدم مواد ممتازة وتقنيات مبتكرة وممارسات مستدامة لضمان أن يكون منزلك متينًا ويلبي أعلى المعايير.',
    ],
    packagesTitle: 'باقات المنازل',
    packagesDesc: 'اختر الباقة التي تناسب نمط حياتك وميزانيتك. يمكنك الترقية في أي وقت — بدون تكاليف خفية!',
    plans: [
      {
        name: 'منزل أساسي',
        price: '$50k+',
        period: '',
        features: ['بناء 1-2 غرفة', 'مواد قياسية', 'وسائل راحة أساسية'],
        highlighted: false,
      },
      {
        name: 'منزل عائلي',
        price: '$100k+',
        period: '',
        features: ['بناء 2-4 غرف', 'مواد فاخرة', 'تصاميم داخلية مخصصة'],
        highlighted: true,
      },
      {
        name: 'فيلا فاخرة',
        price: '$250k+',
        period: '',
        features: ['بناء أكثر من 4 غرف', 'تشطيبات فاخرة', 'تنسيق حدائق وذكاء منزلي'],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'ماذا يقول عملاؤنا',
    testimonials: [
      { name: 'أحمد شرف', role: 'مالك منزل', text: 'تم بناء منزل أحلامنا في الوقت المحدد وباهتمام كبير بالتفاصيل. كان الفريق محترفًا وشفافًا طوال العملية.' },
      { name: 'سارة علي', role: 'مالكة شقة', text: 'جودة البناء والتشطيب فاقت توقعاتنا. أنصح بشدة بمشاريعهم السكنية!' },
      { name: 'خالد يوسف', role: 'مستثمر', text: 'إدارة مشاريع ممتازة وتواصل رائع. تم تحقيق كل مرحلة كما وعدوا.' },
      { name: 'منى حسن', role: 'مقيمة', text: 'جعل الفريق العملية بأكملها خالية من التوتر من التخطيط حتى التسليم. نحن نحب منزلنا الجديد!' },
    ],
    howTitle: 'كيف يعمل',
    howDesc: 'بناء منزلك الحلم بسيط وخالٍ من التوتر مع عمليتنا المجربة.',
    steps: [
      { icon: <FaUtensils size={28} className="text-white" />, title: 'استشارة', description: 'ناقش رؤيتك واحتياجاتك مع خبراء المشاريع السكنية لدينا.' },
      { icon: <FaShoppingCart size={28} className="text-white" />, title: 'تخطيط', description: 'نعد خطة مشروع مفصلة وجدولًا زمنيًا وتقديرًا شفافًا.' },
      { icon: <FaTruck size={28} className="text-white" />, title: 'تصميم', description: 'يصمم مهندسونا المعماريون منزلك بأحدث وسائل الراحة والأناقة.' },
      { icon: <FaSmile size={28} className="text-white" />, title: 'بناء', description: 'نبني منزلك باستخدام مواد عالية الجودة ومحترفين مهرة.' },
    ],
    ctaTitle: 'جاهز لبناء منزلك؟',
    ctaDesc: 'ابدأ مشروعك السكني معنا وتمتع بالجودة والشفافية وراحة البال. منزلك الحلم على بعد خطوة واحدة فقط!',
    getStarted: 'ابدأ الآن',
  },
  he: {
    heroTitle: 'פרויקטים ',
    heroHighlight: 'למגורים מובילים',
    heroDesc: 'בתים, דירות ווילות בהתאמה אישית שנבנים באהבה. איכות, נוחות וסטייל לעתיד המשפחה שלך.',
    aboutTitle: 'על פרויקטי המגורים שלנו',
    aboutDesc: [
      'אנו מתמחים בבניית בתים מודרניים, נוחים וחסכוניים באנרגיה המותאמים לצרכיך. הצוות המנוסה שלנו מנהל כל שלב בפרויקט, מהתכנון והעיצוב ועד לבנייה והגמר.',
      'בין אם אתה מחפש דירה חמימה, בית משפחתי מרווח או וילה יוקרתית, אנו מספקים איכות גבוהה ותשומת לב לפרטים בכל פרויקט.',
      'אנו משתמשים בחומרים מובחרים, טכניקות חדשניות ושיטות בנות קיימא כדי להבטיח שהבית שלך יעמוד בסטנדרטים הגבוהים ביותר.',
    ],
    packagesTitle: 'חבילות הבית שלנו',
    packagesDesc: 'בחר חבילה שמתאימה לאורח החיים והתקציב שלך. ניתן לשדרג בכל עת — ללא עלויות נסתרות!',
    plans: [
      {
        name: 'בית בסיסי',
        price: '$50k+',
        period: '',
        features: ['בנייה של 1-2 חדרים', 'חומרים סטנדרטיים', 'נוחות בסיסית'],
        highlighted: false,
      },
      {
        name: 'בית משפחתי',
        price: '$100k+',
        period: '',
        features: ['בנייה של 2-4 חדרים', 'חומרים יוקרתיים', 'עיצוב פנים מותאם'],
        highlighted: true,
      },
      {
        name: 'וילה יוקרתית',
        price: '$250k+',
        period: '',
        features: ['בנייה של יותר מ-4 חדרים', 'גימורים יוקרתיים', 'גינון ובית חכם'],
        highlighted: false,
      },
    ],
    testimonialsTitle: 'מה הלקוחות שלנו אומרים',
    testimonials: [
      { name: 'עמית שרמה', role: 'בעל בית', text: 'בית החלומות שלנו נבנה בזמן ובתשומת לב רבה לפרטים. הצוות היה מקצועי ושקוף לאורך כל הדרך.' },
      { name: 'פריה ורמה', role: 'בעלת דירה', text: 'איכות הבנייה והגימור עלו על הציפיות שלנו. ממליצה בחום על הפרויקטים שלהם!' },
      { name: 'רבי קומאר', role: 'משקיע', text: 'ניהול פרויקטים מצוין ותקשורת ברורה. כל שלב הושג כפי שהובטח.' },
      { name: 'סוניטה ראו', role: 'דיירת', text: 'הצוות הפך את כל התהליך לחסר דאגות מהתכנון ועד למסירה. אנחנו אוהבים את הבית החדש שלנו!' },
    ],
    howTitle: 'איך זה עובד',
    howDesc: 'בניית בית החלומות שלך פשוטה וללא דאגות עם התהליך שלנו.',
    steps: [
      { icon: <FaUtensils size={28} className="text-white" />, title: 'ייעוץ', description: 'שוחח על החזון והצרכים שלך עם המומחים שלנו.' },
      { icon: <FaShoppingCart size={28} className="text-white" />, title: 'תכנון', description: 'נבנה תוכנית מפורטת, לוח זמנים והצעת מחיר שקופה.' },
      { icon: <FaTruck size={28} className="text-white" />, title: 'עיצוב', description: 'האדריכלים שלנו יעצבו את ביתך עם נוחות וסטייל מודרני.' },
      { icon: <FaSmile size={28} className="text-white" />, title: 'בנייה', description: 'נבנה את הבית שלך עם חומרים איכותיים ואנשי מקצוע מנוסים.' },
    ],
    ctaTitle: 'מוכן לבנות את הבית שלך?',
    ctaDesc: 'התחל את פרויקט המגורים שלך איתנו ותחווה איכות, שקיפות ושקט נפשי. בית החלומות שלך במרחק צעד אחד בלבד!',
    getStarted: 'התחל עכשיו',
  },
};

const ResidentialProjects = ({ lang = 'en' }) => {
  const t = content[lang] || content.en;
  const [index, setIndex] = useState(0);

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
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-yellow-50">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-110 contrast-105 saturate-110"
          src={residentialHero}
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
      {/* About Our Service Section */}
  <section className="py-20 px-6 md:px-20 bg-red-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={res1}
              alt="Our Service"
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

      {/* Home Packages Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
  <h2 className="text-4xl font-bold text-red-600 mb-4">{t.packagesTitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {t.packagesDesc}
        </p>

        <div className="grid  md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              src={res2}
              alt="Residential Project"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-white text-center">
  <h2 className="text-4xl font-bold text-red-600 mb-4">{t.howTitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {t.howDesc}
        </p>

        {/* Define stepIcons array to match steps */}
        {(() => {
          const stepIcons = [FaUtensils, FaShoppingCart, FaTruck, FaSmile];
          return (
            <div className="flex flex-wrap justify-center items-center gap-6">
              {t.steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  {/* Step card */}
                  <div className="flex flex-col  hover:scale-105 transition items-center max-w-[200px]">
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
        {/* Background Image */}
        <img
          src={res3}
          alt="Residential Project"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Green Transparent Overlay */}
  <div className="absolute inset-0 bg-red-600/70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl  font-extrabold mb-6">
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

export default ResidentialProjects;
