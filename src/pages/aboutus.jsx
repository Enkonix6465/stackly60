import React from "react";
import { Link } from "react-router-dom";
// import aboutushero from "../assets/aboutushero.mp4";
import vision from "../assets/vision.jpg";
import project1 from "../assets/project1.jpg";
import awards from "../assets/awards.jpg";

export default function AboutUs({ lang = 'en' }) {
  const content = {
    en: {
      heroTitle: "About Us",
      heroDesc: "Crafting Unforgettable Events & Conferences",
      missionTitle: "Our Mission",
      missionDesc: "To deliver exceptional event management solutions that exceed client expectations, combining creativity, precision, and a passion for memorable experiences. We strive to create lasting impressions for our clients and their guests at every event.",
      visionTitle: "Our Vision",
      visionDesc: "To be the region’s most trusted event partner, known for innovation, reliability, and a commitment to making every occasion extraordinary. We envision communities brought together and inspired by our work.",
      uniqueTitle: "What Makes Us Unique",
      unique: [
        { title: "Client-Focused Planning", desc: "We tailor every event to our clients’ unique needs, ensuring personalized service and transparent communication from start to finish." },
        { title: "Creative & Innovative Solutions", desc: "We bring fresh ideas and creative concepts to every event, utilizing the latest trends and technologies for unforgettable experiences." },
        { title: "Experienced Event Professionals", desc: "Our team brings years of expertise in managing events of all sizes, ensuring seamless execution and outstanding results." },
      ],
      awardsTitle: "Awards & Recognition",
      awardsDesc: "Our dedication to excellence in event management has been recognized with numerous industry awards. We are proud of our achievements, which reflect our passion for quality, creativity, and client satisfaction.",
      awardsList: [
        { title: "Best Event Planner 2023", desc: "- National Event Association" },
        { title: "Innovation in Event Design", desc: "for creative and impactful event concepts" },
        { title: "Outstanding Conference Organizer", desc: "for seamless execution of large-scale conferences" },
        { title: "Client Choice Award", desc: "for exceptional service and satisfaction" },
      ],
      coreTitle: "Core Values",
      core: [
        { title: "Creativity & Quality", desc: "We deliver unique, high-quality events that leave a lasting impression on every guest." },
        { title: "Reliability & Precision", desc: "We ensure every detail is managed with care, providing peace of mind for our clients." },
        { title: "Integrity & Collaboration", desc: "We build strong relationships with clients, partners, and our team through honesty and teamwork." },
      ],
      ctaTitle: "Start Planning Your Event!",
      ctaDesc: "Experience the difference with our expert event management team. Contact us to discuss your next event or conference and discover how we can make it truly special.",
      contactUs: "Contact Us",
      ourServices: "Our Services",
    },
    ar: {
      heroTitle: "من نحن",
      heroDesc: "نبني معالم ونشكل المجتمعات",
      missionTitle: "مهمتنا",
      missionDesc: "تقديم حلول بناء استثنائية تتجاوز توقعات العملاء، تجمع بين الحرفية العالية والتكنولوجيا المبتكرة والالتزام بالسلامة. نسعى لخلق قيمة دائمة لعملائنا ومجتمعاتنا في كل مشروع نقوم به.",
      visionTitle: "رؤيتنا",
      visionDesc: "أن نكون الشريك الأكثر ثقة في مجال البناء في المنطقة، معروفين بالابتكار والاستدامة والالتزام ببناء مستقبل أفضل. نتصور مجتمعات تعززها أعمالنا وعملاء يعودون إلينا في كل مشروع جديد.",
      uniqueTitle: "ما الذي يميزنا",
      unique: [
        { title: "نهج يركز على العميل", desc: "نولي احتياجات عملائنا الأولوية، ونقدم حلولاً مخصصة وتواصلاً شفافًا طوال كل مشروع." },
        { title: "تقنية مبتكرة", desc: "نستخدم أحدث تقنيات البناء والممارسات المستدامة لتقديم هياكل فعالة وجاهزة للمستقبل." },
        { title: "فريق ذو خبرة", desc: "يتمتع محترفونا بسنوات من الخبرة، مما يضمن جودة العمل وتسليم المشاريع في الوقت المحدد." },
      ],
      awardsTitle: "פרסים ותעודות",
      awardsDesc: "המחויבות שלנו למצוינות בבנייה זכתה להכרה בפרסים ותעודות רבות. אנו גאים בהישגינו, המשקפים את מסירותנו לאיכות, בטיחות ושביעות רצון הלקוחות.",
      awardsList: [
        { title: "תעודת ISO 9001:", desc: "מערכות ניהול איכות" },
        { title: "חברת הבנייה הטובה ביותר 2022", desc: "- איגוד הבונים האזורי" },
        { title: "פרס הבנייה הירוקה", desc: "על שיטות בנות קיימא" },
        { title: "פרס מצוינות בבטיחות", desc: "על הישגים יוצאי דופן בבטיחות" },
      ],
      coreTitle: "עקרונות יסוד",
      core: [
        { title: "בטיחות ואיכות", desc: "אנו מקפידים על הסטנדרטים הגבוהים ביותר של בטיחות ואיכות בכל אתר, מבטיחים עמידות ובטיחות." },
        { title: "קיימות", desc: "אנו מחויבים לבנייה בת קיימא, תוך שימוש בחומרים ושיטות ידידותיים לסביבה." },
        { title: "יושרה וכבוד", desc: "אנו מתייחסים ללקוחות, שותפים וחברי צוות ביושר וכבוד, מטפחים מערכות יחסים חזקות ורוח שיתופית." },
      ],
      ctaTitle: "התחל את הפרויקט שלך איתנו!",
      ctaDesc: "חווה מצוינות בבנייה, פתרונות חדשניים וצוות שמגשים את החזון שלך. צור קשר כדי לדון בפרויקט הבא שלך ולגלות כיצד נבנה הצלחה יחד.",
      contactUs: "צור קשר",
      ourServices: "השירותים שלנו",
    },
  };
  const t = content[lang] || content.en;
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src="https://videos.pexels.com/video-files/3184408/3184408-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg">{t.heroTitle}</h1>
          <span className="text-xl md:text-2xl text-white/90 text-center mb-8 max-w-2xl drop-shadow">{t.heroDesc}</span>
        </div>
      </section>
      {/* Our Mission & Vision Section */}
      <section className="w-full bg-[#22bb4c1a] py-20 px-4 md:px-0 flex flex-col items-center justify-center">
        {/* Left: Image and Right: Content */}
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="w-full h-full">
            <div className="w-full aspect-[16/10]">
              <img
                src={vision}
                alt={t.heroTitle}
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right: Content */}
          <div className="grid gap-8 content-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-2">{t.missionTitle}</h2>
              <p className="text-lg text-gray-700 max-w-lg">{t.missionDesc}</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-2">{t.visionTitle}</h2>
              <p className="text-lg text-gray-700 max-w-lg">{t.visionDesc}</p>
            </div>
          </div>
        </div>
      </section>
      {/* What Makes Us Unique Section */}
      <section className="w-full relative py-20 px-4 md:px-0 flex flex-col items-center justify-center" style={{ minHeight: '500px' }}>
        <img src={project1} alt="Construction site" className="absolute inset-0 w-full h-full object-cover z-0" style={{ filter: 'brightness(0.5)' }} />
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif text-center">{t.uniqueTitle}</h2>
          <div className="grid md:grid-cols-3 gap-10 w-full">
            {t.unique.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-2 text-[#ff0000]">{item.title}</h3>
                <p className="text-gray-700 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Awards & Certifications Section */}
  <section className="w-full bg-[#ff00001a] py-20 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Awards and Certifications Content */}
          <div className="grid gap-4 content-center order-1 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-serif mb-4">{t.awardsTitle}</h2>
            <p className="text-lg text-black max-w-lg mb-2">{t.awardsDesc}</p>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              {t.awardsList.map((item, idx) => (
                <li key={idx}><span className="font-semibold">{item.title}</span> {item.desc}</li>
              ))}
            </ul>
          </div>
          {/* Right: Image */}
          <div className="w-full h-full order-2 md:order-2 flex justify-center">
            <div className="w-full aspect-[16/10] max-w-md">
              <img
                src={awards}
                alt={t.awardsTitle}
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Core Principles Section */}
      <section className="w-full bg-white py-20 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif text-center">{t.coreTitle}</h2>
          <div className="grid  md:grid-cols-3 gap-10 w-full">
            {t.core.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center bg-[#ff00001a] rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-2 text-[#ff0000]">{item.title}</h3>
                <p className="text-gray-700 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="w-full bg-[#ff00001a] py-16 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#ff0000]">{t.ctaTitle}</h2>
          <p className="text-lg text-center text-gray-700 mb-8">{t.ctaDesc}</p>
          <div className="flex flex-row sm:flex-row gap-4">
            <Link to="/contactus" className="px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition bg-[#ff0000] hover:bg-[#cc0000]">{t.contactUs}</Link>
            <Link to="/services" className="px-10 py-4 rounded-full text-[#ff0000] font-semibold text-lg shadow-lg transition bg-white hover:bg-[#ff00001a] border border-[#ff0000]">{t.ourServices}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
