import React, { useRef, useState } from "react";
import { useSequentialZoomInOut } from "../hooks/useSequentialZoomInOut";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RestaurantFooter from "../components/Footer";
// import home1hero from "../assets/home1hero (1).mp4";
import home1about from "../assets/home1about.mp4";
// MeetOurExperts import removed
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.jpeg";

export default function Home1({ lang = 'en' }) {
  const navigate = useNavigate();
  // --- Language Content ---
  const content = {
    en: {
      heroTitle: 'Where Vision Meets Construction',
      heroDesc: 'We create innovative spaces with precision and excellence. From modern designs to timeless architecture, we bring your vision to life with unmatched quality.',
      readMore: 'Read More',
      ourProjects: 'Our Projects',
      aboutTitle: 'Discover the ArchiBuild Experience',
      aboutDesc: 'At ArchiBuild, we turn visions into reality through innovative design and expert craftsmanship. From modern architecture to classic builds, our team delivers projects with precision, creativity, and unmatched quality. Whether residential, commercial, or industrial, we build structures that stand the test of time.',
      aboutList: [
        'Innovative and sustainable designs',
        'Reliable project delivery',
        'Award-winning architecture',
        'Residential, commercial, and industrial projects',
      ],
      learnMore: 'Learn More',
      recentProjects: 'Recently Completed Projects',
      testimonials: 'What Our Clients Say',
      testimonialsDesc: 'Real feedback from businesses who trust us! See how we bring visions to life with precision and excellence.',
      testimonial1Title: 'Innovative Designs for Modern Spaces',
      testimonial1Text: 'ArchiBuild transformed our old office into a modern workspace that boosted productivity and client satisfaction. Their attention to detail was exceptional.',
      testimonial1Name: 'Adnan Ashraf',
      testimonial1Role: 'CEO, BuildLogic',
      testimonial2Title: 'Reliable Project Delivery',
      testimonial2Text: 'From concept to completion, ArchiBuild delivered our project on time and exceeded expectations with innovative designs and professional craftsmanship.',
      testimonial2Name: 'Sarah Lamine',
      testimonial2Role: 'CMO, HomeWorks',
      testimonial3Title: 'Creative and Sustainable Solutions',
      testimonial3Text: 'Working with ArchiBuild was a great experience! They delivered an amazing, eco-friendly commercial building.',
      testimonial3Name: 'Esther Howard',
      testimonial3Role: 'Founder, GreenBuild',
      readyTitle: 'Ready to Build Your Dream Project?',
      readyDesc: 'Let our experts help you design and build your perfect space with precision and professionalism. Contact us today for a free consultation!',
      getStarted: 'Get Started',
    },
    ar: {
      // ...existing Arabic properties...
      testimonial3Title: 'حلول إبداعية ومستدامة',
      testimonial3Text: 'كان العمل مع ArchiBuild تجربة رائعة! قدموا مبنى تجاريًا مذهلاً وصديقًا للبيئة.',
      testimonial3Name: 'إيستر هوارد',
      testimonial3Role: 'المؤسس، GreenBuild',
      readyTitle: 'هل أنت مستعد لبناء مشروع أحلامك؟',
      readyDesc: 'دع خبراءنا يساعدونك في تصميم وبناء مساحتك المثالية بدقة واحترافية. تواصل معنا اليوم لاستشارة مجانية!',
      getStarted: 'ابدأ الآن',
    },
    he: {
      heroTitle: 'איפה החזון פוגש את הבנייה',
      heroDesc: 'אנחנו יוצרים חללים חדשניים בדיוק ובמצוינות. מעיצובים מודרניים ועד אדריכלות נצחית, אנו מגשימים את החזון שלך באיכות שאין לה תחרות.',
      readMore: 'קרא עוד',
      ourProjects: 'הפרויקטים שלנו',
      aboutTitle: 'גלה את חווית ArchiBuild',
      aboutDesc: 'ב-ArchiBuild, אנו מגשימים חזונות באמצעות עיצוב חדשני ומלאכת יד מדויקת. מאדריכלות מודרנית ועד בנייה קלאסית, הצוות שלנו מספק פרויקטים בדיוק, יצירתיות ואיכות שאין לה תחרות. בין אם מדובר במגורים, מסחר או תעשייה, אנו בונים מבנים שמחזיקים מעמד לאורך זמן.',
      aboutList: [
        'עיצובים חדשניים ובר קיימא',
        'אספקת פרויקטים אמינה',
        'אדריכלות זוכת פרסים',
        'פרויקטים למגורים, מסחר ותעשייה',
      ],
      learnMore: 'למד עוד',
      recentProjects: 'פרויקטים שהושלמו לאחרונה',
      testimonials: 'מה הלקוחות שלנו אומרים',
      testimonialsDesc: 'משוב אמיתי מעסקים שסומכים עלינו! ראו כיצד אנו מגשימים חזונות בדיוק ובמצוינות.',
      testimonial1Title: 'עיצובים חדשניים לחללים מודרניים',
      testimonial1Text: 'ArchiBuild שדרגו את המשרד הישן שלנו לחלל עבודה מודרני שהעלה את התפוקה ושביעות רצון הלקוחות. תשומת הלב שלהם לפרטים הייתה יוצאת דופן.',
      testimonial1Name: 'עדנאן אשרף',
      testimonial1Role: 'מנכ"ל, BuildLogic',
      testimonial2Title: 'אספקת פרויקטים אמינה',
      testimonial2Text: 'מהרעיון ועד הביצוע, ArchiBuild סיפקו את הפרויקט שלנו בזמן וחרגו מהציפיות עם עיצובים חדשניים ועבודת יד מקצועית.',
      testimonial2Name: 'שרה למין',
      testimonial2Role: 'סמנכ"לית שיווק, HomeWorks',
      testimonial3Title: 'פתרונות יצירתיים וברי קיימא',
      testimonial3Text: 'העבודה עם ArchiBuild הייתה חוויה נהדרת! הם סיפקו בניין מסחרי מדהים וידידותי לסביבה.',
      testimonial3Name: 'אסתר הווארד',
      testimonial3Role: 'מייסדת, GreenBuild',
      readyTitle: 'האם אתה מוכן לבנות את פרויקט החלומות שלך?',
      readyDesc: 'תן למומחים שלנו לעזור לך לעצב ולבנות את החלל המושלם שלך בדיוק ובמקצועיות. צור קשר היום לייעוץ חינם!',
      getStarted: 'התחל עכשיו',
    },
  };
  const t = content[lang] || content.en;
  // --- Sequential Zoom Animation for Project Cards ---
  const cardsContent = {
    en: [
      {
        img: "src/assets/party3.avif",
        alt: "Elegant wedding setup",
        label: "WEDDING PLANNING",
        desc: "Elegant wedding setup",
        back: "From intimate ceremonies to grand celebrations, we make your wedding day magical and stress-free."
      },
      {
        img: "src/assets/dine1.avif",
        alt: "Corporate event dinner",
        label: "CORPORATE EVENTS",
        desc: "Corporate event dinner",
        back: "Professional planning for conferences, galas, and business parties that impress and inspire."
      },
      {
        img: "src/assets/take2.avif",
        alt: "Birthday party fun",
        label: "BIRTHDAY PARTIES",
        desc: "Birthday party fun",
        back: "Creative themes, fun activities, and seamless organization for all ages."
      },
      {
        img: "src/assets/w1.avif",
        alt: "Festival celebration",
        label: "FESTIVALS & CUSTOM EVENTS",
        desc: "Festival celebration",
        back: "From cultural festivals to unique celebrations, we bring your vision to life with flair."
      },
    ],
    ar: [
      {
        img: "src/assets/renovation.1.jpg",
        alt: "تصميم داخلي لمكتب عصري",
        label: "تجديد",
        desc: "تصميم داخلي لمكتب عصري",
        back: "تشمل خدمات التجديد تحديث المساحات الداخلية بتصاميم مبتكرة ومواد عالية الجودة."
      },
      {
        img: "src/assets/finishingworks1.jpg",
        alt: "أعمال ديكور في غرفة المعيشة",
        label: "أعمال التشطيب",
        desc: "أعمال ديكور في غرفة المعيشة",
        back: "تشمل أعمال التشطيب لمسات زخرفية لتعزيز الجمال الجمالي للمساحات المعيشية."
      },
      {
        img: "src/assets/redevelopment.jpg",
        alt: "ترميم الشقق",
        label: "إعادة تطوير",
        desc: "ترميم الشقق",
        back: "تركز خدمات إعادة التطوير على إصلاح وترقية الشقق لتواكب المعايير الحديثة."
      },
      {
        img: "src/assets/finishingworks copy.jpg",
        alt: "حمام عصري",
        label: "أعمال التشطيب",
        desc: "حمام عصري",
        back: "تصاميم الحمامات العصرية تجمع بين الوظيفة والفخامة لتجربة منعشة."
      },
    ],
    he: [
      {
        img: "src/assets/renovation.1.jpg",
        alt: "עיצוב פנים למשרד מודרני",
        label: "שיפוץ",
        desc: "עיצוב פנים למשרד מודרני",
        back: "שירותי השיפוץ כוללים חידוש חללים פנימיים עם עיצובים חדשניים וחומרים איכותיים."
      },
      {
        img: "src/assets/finishingworks1.jpg",
        alt: "עבודות דקורטיביות בסלון",
        label: "עבודות גמר",
        desc: "עבודות דקורטיביות בסלון",
        back: "עבודות הגמר כוללות נגיעות דקורטיביות לשיפור המראה האסתטי של חללי המגורים."
      },
      {
        img: "src/assets/redevelopment.jpg",
        alt: "שיפוץ דירות",
        label: "התחדשות עירונית",
        desc: "שיפוץ דירות",
        back: "שירותי ההתחדשות מתמקדים בתיקון ושדרוג דירות בהתאם לסטנדרטים מודרניים."
      },
      {
        img: "src/assets/finishingworks copy.jpg",
        alt: "חדר רחצה מודרני",
        label: "עבודות גמר",
        desc: "חדר רחצה מודרני",
        back: "עיצובי חדרי הרחצה המודרניים משלבים פונקציונליות עם יוקרה לחוויה מרעננת."
      },
    ],
  };
  const cards = cardsContent[lang] || cardsContent.en;
  const sectionRef = useRef(null);
  const [focusedCard, setFocusedCard] = useState(null);
  const activeIndex = useSequentialZoomInOut(
    cards.length,
    sectionRef,
    focusedCard === null // Only animate if no card is focused
  );
  // --- End Sequential Zoom Animation ---
  // Testimonial Carousel Section
  const testimonials = [
    {
      name: "Emily Carter",
      role: "Bride",
      avatar: person1,
      rating: 5,
      text: "Eventify made our wedding day absolutely perfect. Every detail was flawless, and our guests are still talking about it!",
      org: "Wedding Client"
    },
    {
      name: "Michael Lee",
      role: "Marketing Director, TechNova",
      avatar: person2,
      rating: 5,
      text: "Our annual gala was a huge hit thanks to Eventify’s creativity and professionalism. Highly recommended for any business event!",
      org: "Corporate Client"
    },
    {
      name: "Priya Singh",
      role: "Parent",
      avatar: person3,
      rating: 5,
      text: "My son’s birthday party was magical! The team handled everything, and the kids had a blast.",
      org: "Birthday Client"
    },
  ];

  function TestimonialCarousel() {
    const [active, setActive] = React.useState(1);
    const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
    const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
    // Testimonials section removed as requested.
    return null;
  }
  return (
    <div className="flex flex-col min-h-screen">
     
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        {/* Background Video for Hero Only */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src="https://videos.pexels.com/video-files/856192/856192-hd_1920_1080_24fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="metadata"
        />
        {/* Overlay with less opacity for more brightness */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/90 text-center mb-8 max-w-xl drop-shadow">
            {t.heroDesc}
          </p>
          <div className="flex gap-6">
            <button
              className="relative border border-white text-white px-8 py-3 rounded-lg text-lg font-serif flex items-center group bg-transparent hover:bg-white/10 transition"
              onClick={() => navigate("/aboutus")}
            >
              {t.readMore}
              <span className="ml-3 w-8 h-0.5 bg-white block group-hover:bg-red-500 transition-all"></span>
            </button>
            <button
              className="bg-white/90 hover:bg-white text-red-700 font-semibold px-8 py-3 rounded-lg text-lg shadow transition"
              onClick={() => navigate("/contactus")}
            >
              {t.ourProjects}
            </button>
          </div>
        </div>
      </section>
      {/* About/Feature Section */}
      <section className="relative w-full bg-red-50 py-16 px-8 md:px-16 flex flex-col items-center justify-center z-10">
        <div className="max-w-6xl w-full mx-auto flex flex-row gap-10 items-stretch">
          {/* Left: Event Management Image */}
          <div className="flex-1 flex justify-center items-center h-full">
            <img
              src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
              alt="Event Management Hall"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              style={{ height: '100%', maxHeight: '600px' }}
            />
          </div>
          {/* Right: Content - all in one column */}
          <div className="flex-1 flex flex-col justify-center h-full min-w-0">
            <h2 className="text-4xl font-bold text-black mb-4">Who We Are</h2>
            <p className="text-lg text-black mb-8">
              We are a passionate team of event management professionals dedicated to creating unforgettable experiences. Our mission is to deliver seamless planning, creative design, and flawless execution for every event. From corporate conferences to grand expos, we make every occasion easy, enjoyable, and memorable for everyone.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-20 rounded-xl p-6 flex items-start gap-4 shadow">
                <span className="text-2xl text-black mt-1">✓</span>
                <div>
                  <div className="font-bold text-black text-lg mb-1">Expert Team</div>
                  <div className="text-black text-sm">Certified event professionals with years of experience</div>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 flex items-start gap-4 shadow">
                <span className="text-2xl text-black mt-1">✓</span>
                <div>
                  <div className="font-bold text-black text-lg mb-1">Personalized Planning</div>
                  <div className="text-black text-sm">Tailored event solutions for every client</div>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 flex items-start gap-4 shadow">
                <span className="text-2xl text-black mt-1">✓</span>
                <div>
                  <div className="font-bold text-black text-lg mb-1">Holistic Approach</div>
                  <div className="text-black text-sm">End-to-end management for stress-free events</div>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 flex items-start gap-4 shadow">
                <span className="text-2xl text-black mt-1">✓</span>
                <div>
                  <div className="font-bold text-black text-lg mb-1">Proven Results</div>
                  <div className="text-black text-sm">Successful events with measurable outcomes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Meet Our Experts Section */}
  {/* MeetOurExperts section removed as requested */}
      {/* Recent Completed Projects Section */}
      <div>
  <section className="w-full bg-gray-50 py-16 px-4 md:px-0 flex flex-col items-center justify-center">
    <div className="max-w-6xl w-full mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-serif text-center">{t.recentProjects}</h2>
      <div ref={sectionRef} className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card, i) => {
          const isZoomed = focusedCard === i || (focusedCard === null && activeIndex === i);
          return (
            <div
              key={i}
              className={`group perspective w-full h-80 transition-transform duration-500 transform-gpu origin-center ${isZoomed ? 'scale-110 z-20' : 'scale-95 opacity-80'} `}
              style={{ transitionProperty: 'transform, opacity', transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
              onClick={() => setFocusedCard(focusedCard === i ? null : i)}
              tabIndex={0}
              role="button"
              aria-pressed={focusedCard === i}
            >
              <div className={`relative preserve-3d w-full h-full duration-500 ${focusedCard === i ? '' : 'group-hover:rotate-y-180'}`}>
                {focusedCard === i ? (
                  // Show back side if focused
                  <div className="absolute w-full h-full bg-red-100 flex items-center justify-center rounded-lg shadow-lg z-10">
                    <p className="text-gray-700 text-center px-4">{card.back}</p>
                  </div>
                ) : (
                  <>
                    {/* Back Side (for hover/animation) */}
                    <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-red-100 flex items-center justify-center rounded-lg shadow-lg">
                      <p className="text-gray-700 text-center px-4">{card.back}</p>
                    </div>
                    {/* Front Side */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img src={card.img} alt={card.alt} className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                  </>
                )}
              </div>
              <div className="mt-4 text-center">
                <span className="text-red-500 text-lg font-serif">{card.label}</span>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
</div>

      {/* Testimonial Section removed. Use <TestimonialCarousel /> for testimonials. */}
      {/* Ready to Build Your Dream Project? Section */}
      <div>
  <section className="w-full bg-white py-16 px-4 md:px-0 flex flex-col items-center justify-center">
    <div className="max-w-6xl w-full mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 font-serif">{t.readyTitle}</h2>
      <p className="text-lg text-gray-700 mb-8">
        {t.readyDesc}
      </p>
      <button
  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition"
        onClick={() => navigate("/contactus")}
      >
        {t.getStarted}
      </button>
    </div>
  </section>
</div>
  <TestimonialCarousel />
    </div>
  );
}