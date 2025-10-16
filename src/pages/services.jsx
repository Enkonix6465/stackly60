import React from "react";
// import servicehero from "../assets/servicehero.mp4";
import { Link } from "react-router-dom";
import dealsImg from "../assets/whychoose.jpg";
import ImpactSection from "../components/ImpactSection"; // adjust path


// Service images
import img1 from "../assets/residential.jpg";
import img2 from "../assets/commercial.jpg";
import img3 from "../assets/industrial.jpg";
import img4 from "../assets/heritage.jpg";
import img5 from "../assets/architectural.jpg";
import img6 from "../assets/ethical.mp4";
import project from "../assets/project.jpg";




 const categories = [
    {
      title: "Breakfast Specials",
      desc: "Start your day with fresh, wholesome, and energy-packed meals.",
    },
    {
      title: "Lunch Combos",
      desc: "Balanced meals with the perfect mix of taste and nutrition.",
    },
    {
      title: "Dinner Feasts",
      desc: "Indulge in hearty dishes made to bring families together.",
    },
    {
      title: "Desserts & Drinks",
      desc: "Sweet treats and refreshing beverages to complete your meal.",
    },
  ];

const services = [
  {
    title: "Architectural Design",
    desc: "Innovative and sustainable architectural designs tailored to meet client needs. Our team of experienced architects creates functional and aesthetically pleasing spaces, ensuring every project is unique and impactful. From residential homes to commercial buildings, we bring your vision to life with precision and creativity.",
    img: img1,
    path: "/Architectural-Design",
  },
  {
    title: "Project Management",
    desc: "Comprehensive project management services to ensure timely and efficient completion of construction projects. We handle planning, coordination, and execution, keeping quality and budget in focus. Our expertise guarantees smooth workflows and successful outcomes for every project.",
    img: project,
    path: "/Project-Management",
  },
  {
    title: "Construction Services",
    desc: "High-quality construction services for residential, commercial, and industrial projects. Our skilled team uses advanced techniques and premium materials to deliver durable and reliable structures. From foundation to finishing, we ensure excellence at every stage of construction.",
    img: img3,
    path: "/Construction-Services",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transform your spaces with our renovation and remodeling services. We specialize in modernizing interiors, upgrading facilities, and enhancing functionality. Whether it’s a single room or an entire building, our team delivers results that exceed expectations.",
    img: img4,
    path: "/Renovation-Remodeling",
  },
  {
    title: "Interior Design",
    desc: "Creative interior design solutions to elevate the look and feel of your spaces. Our designers focus on blending style with functionality, creating environments that inspire and comfort. From furniture selection to lighting, we handle every detail with care.",
    img: img5,
    path: "/Interior-Design",
  },
  {
    title: "Sustainable Building Solutions",
  desc: "Eco-friendly building solutions that prioritize sustainability and energy efficiency. We incorporate green practices and materials to reduce environmental impact while maintaining high standards of quality and performance. Build for the future with our sustainable services.",
    img: img6,
    path: "/Sustainable-Building-Solutions",
  },
];



const ServicesPage = ({ lang = 'en' }) => {
  const content = {
    en: {
      heroTitle: 'Elevate Your Event With ',
      heroHighlight: 'Event Excellence',
      heroDesc: 'Discover our full suite of event management services—delivering creativity, precision, and memorable experiences for every occasion. From conferences to galas, we turn your vision into reality with expert planning, seamless execution, and a passion for excellence.',
      servicesTitle: 'Our Event Services',
      residential: {
        title: 'Corporate Events',
        desc: 'We specialize in organizing impactful corporate events, from conferences and seminars to product launches and team-building retreats. Our team ensures every detail is managed with professionalism, creativity, and a focus on your business goals.',
        link: 'Learn More',
      },
      commercial: {
        title: 'Social Celebrations',
        desc: 'From weddings and anniversaries to milestone birthdays and private parties, we create unforgettable social gatherings. Our creative team brings your vision to life, ensuring a personalized and stress-free experience for you and your guests.',
        link: 'Learn More',
      },
      industrial: {
        title: 'Conferences & Summits',
        desc: 'We deliver seamless conference and summit management, handling logistics, speaker coordination, and attendee engagement. Our expertise ensures your event runs smoothly, leaving a lasting impression on all participants.',
        link: 'Learn More',
      },
      renovation: {
        title: 'Exhibitions & Trade Shows',
        desc: 'Showcase your brand with our expert exhibition and trade show services. We manage booth design, logistics, and on-site support, helping you stand out and connect with your audience.',
        link: 'Learn More',
      },
      architectural: {
        title: 'Themed Events',
        desc: 'Our themed event services bring creativity and flair to any occasion. Whether it’s a holiday party, cultural celebration, or custom concept, we design immersive experiences that delight guests and achieve your objectives.',
        link: 'Learn More',
      },
      projectMgmt: {
        title: 'Event Project Management',
        desc: 'Our project management team oversees every aspect of your event, from planning and budgeting to execution and post-event analysis. We ensure clear communication, risk management, and flawless delivery every time.',
        link: 'Learn More',
      },
      whyTitle: 'Why Choose Us?',
      whyList: [
        'Exclusive packages for large-scale conferences and celebrations.',
        'Free initial consultation and event concept proposal for new clients.',
        'Recent highlights: Global Tech Summit, City Gala, and Health Expo 2025.',
        'Dedicated event manager for every project.',
        'Fast-track planning and setup for urgent events.',
        'Sustainable event solutions and eco-friendly practices.',
        '24/7 support throughout your event journey.',
      ],
      howTitle: 'How to Plan Your Event',
      howDesc: 'Ready to host an unforgettable event? Getting started with us is simple and transparent. We guide you through every step, ensuring your vision becomes reality with ease and confidence.',
      howSteps: [
        { title: 'Contact', desc: 'Contact Us: Reach out via our website, phone, or visit our office to discuss your event needs.' },
        { title: 'Consult', desc: 'Consultation & Concept: Our experts will schedule a free consultation to understand your goals and propose creative ideas.' },
        { title: 'Plan', desc: 'Event Proposal: Receive a detailed proposal including concepts, timelines, and transparent cost estimates.' },
        { title: 'Design', desc: 'Agreement & Planning: Finalize the agreement and event plan, tailored to your objectives and budget.' },
        { title: 'Execute', desc: 'Execution: Our skilled team manages logistics, vendor coordination, and on-site support until completion.' },
        { title: 'Celebrate', desc: 'Event Day & Follow-Up: Enjoy your event while we handle every detail, plus post-event review and support.' },
      ],
      readyTitle: 'Ready to Plan Your Event?',
      readyDesc: 'Have questions about planning a conference, celebration, or exhibition? Our experienced team is here to guide you through every step—from initial consultation to event day. Contact us for creative ideas, transparent estimates, and a seamless event experience. Let’s make your event extraordinary!',
      getStarted: 'Get Started',
    },
    ar: {
      heroTitle: 'نبني المستقبل مع ',
      heroHighlight: 'التميز',
      heroDesc: 'اكتشف خدماتنا الشاملة في البناء—نقدم الجودة والسلامة والابتكار في كل مشروع. من السكني إلى التجاري، نحقق رؤيتك من خلال التخطيط الدقيق والتنفيذ الماهر والالتزام بالتميز.',
      servicesTitle: 'خدماتنا الإنشائية',
      residential: {
        title: 'مشاريع سكنية',
        desc: 'نحن متخصصون في بناء المنازل والشقق والمجمعات السكنية الحديثة المصممة وفقًا لأسلوب حياتك. يضمن فريقنا تنفيذ كل مشروع بأعلى معايير الجودة والراحة والسلامة. من التخطيط الأولي إلى التسليم النهائي، نركز على التصميم المبتكر وكفاءة الطاقة والقيمة الدائمة لتحقيق منزل أحلامك.',
        link: 'اعرف المزيد',
      },
      commercial: {
        title: 'مشاريع تجارية',
        desc: 'تشمل خدماتنا الإنشائية التجارية المباني المكتبية والمراكز التجارية والمتاجر والمزيد. نقدم مساحات عملية وجذابة بصريًا، مصممة لدعم نمو أعمالك. مع التركيز على المعايير الحديثة والسلامة والتسليم في الوقت المحدد، نساعدك على خلق بيئات تثير إعجاب العملاء وتعزز الإنتاجية.',
        link: 'اعرف المزيد',
      },
      industrial: {
        title: 'مشاريع صناعية',
        desc: 'نتولى تطوير المصانع والمستودعات والمنشآت الصناعية بتصاميم هندسية قوية وتخطيطات فعالة. تضمن خبرتنا أن كل مشروع صناعي يفي بالمعايير التنظيمية ويحقق أقصى كفاءة تشغيلية ويصمد في البيئات الصعبة. نقدم حلولاً متكاملة من اختيار الموقع إلى التسليم.',
        link: 'اعرف المزيد',
      },
      renovation: {
        title: 'خدمات الترميم',
        desc: 'تمنح خدمات الترميم لدينا حياة جديدة للمساحات القائمة، سواء كانت سكنية أو تجارية. نقدم إعادة تصميم احترافية، وترقيات هيكلية، وتجديدات داخلية لتعزيز الوظائف والراحة والجمال. من التحديثات البسيطة إلى التحولات الكاملة، نضمن عملية سلسة ونتائج رائعة تتجاوز التوقعات.',
        link: 'اعرف المزيد',
      },
      architectural: {
        title: 'تصاميم معمارية',
        desc: 'يقدم فريق التصميم المعماري لدينا الإبداع والدقة والاستدامة في كل مشروع. نتعاون عن كثب مع العملاء لتطوير مفاهيم مبتكرة تعكس رؤيتك وتلبي الاحتياجات العملية. من الرسومات الأولية إلى المخططات التفصيلية، نضمن أن يكون كل تصميم عمليًا وجميلاً وصديقًا للبيئة.',
        link: 'اعرف المزيد',
      },
      projectMgmt: {
        title: 'إدارة المشاريع',
        desc: 'نقدم خدمات إدارة مشاريع شاملة لضمان اكتمال مشروعك في الوقت المحدد وضمن الميزانية وبأعلى معايير الجودة. يشرف مديرونا ذوو الخبرة على كل مرحلة، من التخطيط والمشتريات إلى التنفيذ والتسليم، مع ضمان التواصل الواضح وإدارة المخاطر ورضا العملاء طوال العملية.',
        link: 'اعرف المزيد',
      },
      whyTitle: 'لماذا نحن؟',
      whyList: [
        'خصومات خاصة على المشاريع السكنية والتجارية الكبيرة هذا الموسم.',
        'استشارة موقع مجانية وتقدير المشروع للعملاء الجدد.',
        'مشاريع بارزة جارية: شقق جرين فالي، أبراج تكنو بارك، ومول سيتي سنتر.',
        'ضمان هيكلي لمدة 10 سنوات على جميع الإنشاءات الجديدة.',
        'خيارات تسليم سريعة للمشاريع العاجلة.',
        'مواد بناء صديقة للبيئة وممارسات بناء مستدامة.',
        'دعم عملاء مخصص طوال رحلة مشروعك.',
      ],
      howTitle: 'كيف تبدأ مشروعك',
      howDesc: 'جاهز للبناء أو الترميم أو التوسعة؟ البدء معنا بسيط وشفاف. نرشدك في كل خطوة لضمان تحقيق رؤيتك بسهولة وثقة.',
      howSteps: [
        { title: 'تواصل', desc: 'تواصل معنا: عبر الموقع أو الهاتف أو زيارتنا لمناقشة احتياجات مشروعك.' },
        { title: 'استشارة', desc: 'استشارة وزيارة الموقع: سيحدد خبراؤنا موعدًا لاستشارة مجانية وتقييم الموقع لفهم متطلباتك.' },
        { title: 'تخطيط', desc: 'اقتراح المشروع: استلم اقتراحًا مفصلاً يشمل التصاميم والجداول الزمنية والتكاليف الشفافة.' },
        { title: 'تصميم', desc: 'الاتفاقية والتخطيط: أتمم الاتفاقية وخطة المشروع بما يتناسب مع أهدافك وميزانيتك.' },
        { title: 'بناء', desc: 'التنفيذ: يدير فريقنا الماهر البناء وفحوصات الجودة والتحديثات المنتظمة حتى الاكتمال.' },
        { title: 'تسليم', desc: 'التسليم والدعم: نسلم لك المشروع النهائي ونوفر الدعم المستمر لراحة بالك.' },
      ],
      readyTitle: 'جاهز لبدء مشروعك الإنشائي؟',
      readyDesc: 'هل لديك أسئلة حول البناء أو الترميم أو التوسعة؟ فريقنا ذو الخبرة هنا لإرشادك في كل خطوة—من الاستشارة الأولية إلى إتمام المشروع. تواصل معنا للحصول على نصائح الخبراء وتقديرات شفافة وتجربة بناء سلسة. لنحقق رؤيتك معًا!',
      getStarted: 'ابدأ الآن',
    },
    he: {
      heroTitle: 'בונים את העתיד עם ',
      heroHighlight: 'מצוינות',
      heroDesc: 'גלה את שירותי הבנייה המקיפים שלנו—איכות, בטיחות וחדשנות בכל פרויקט. ממגורים ועד מסחר, נגשים את חזונך עם תכנון מקצועי, ביצוע מיומן ומחויבות למצוינות.',
      servicesTitle: 'שירותי הבנייה שלנו',
      residential: {
        title: 'פרויקטים למגורים',
        desc: 'אנו מתמחים בבניית בתים מודרניים, דירות ומתחמי מגורים המותאמים לאורח חייך. הצוות שלנו מבטיח שכל פרויקט ייבנה בסטנדרטים הגבוהים ביותר של איכות, נוחות ובטיחות. מהתכנון הראשוני ועד למסירה, אנו מתמקדים בעיצוב חדשני, יעילות אנרגטית וערך מתמשך—להגשים את בית חלומותיך.',
        link: 'למידע נוסף',
      },
      commercial: {
        title: 'פרויקטים מסחריים',
        desc: 'שירותי הבנייה המסחריים שלנו כוללים משרדים, מרכזי קניות, חנויות ועוד. אנו מספקים חללים פונקציונליים, אסתטיים ובנויים לתמוך בצמיחת העסק שלך. עם דגש על סטנדרטים מודרניים, בטיחות ומסירה בזמן, ניצור עבורך סביבות שמרשימות לקוחות ומקדמות פרודוקטיביות.',
        link: 'למידע נוסף',
      },
      industrial: {
        title: 'פרויקטים תעשייתיים',
        desc: 'אנו מטפלים בפיתוח מפעלים, מחסנים ומתקנים תעשייתיים עם הנדסה חזקה ותכנון יעיל. הניסיון שלנו מבטיח שכל פרויקט תעשייתי יעמוד בתקנים, ימקסם יעילות תפעולית וייבנה לעמידות. אנו מספקים פתרונות מקצה לקצה מבחירת האתר ועד למסירה.',
        link: 'למידע נוסף',
      },
      renovation: {
        title: 'שירותי שיפוץ',
        desc: 'שירותי השיפוץ שלנו מעניקים חיים חדשים לחללים קיימים, למגורים או למסחר. אנו מציעים שיפוץ מקצועי, שדרוגים מבניים ועיצוב פנים לשיפור פונקציונליות, נוחות ומראה. משיפוצים קטנים ועד שדרוגים מלאים, נבטיח תהליך חלק ותוצאות מצוינות.',
        link: 'למידע נוסף',
      },
      architectural: {
        title: 'עיצובים אדריכליים',
        desc: 'צוות העיצוב האדריכלי שלנו מביא יצירתיות, דיוק וקיימות לכל פרויקט. אנו משתפים פעולה עם הלקוחות לפיתוח רעיונות חדשניים שמשקפים את חזונך ועונים על צרכים מעשיים. מהשרטוטים הראשונים ועד לתוכניות המפורטות, כל עיצוב הוא פונקציונלי, יפה וידידותי לסביבה.',
        link: 'למידע נוסף',
      },
      projectMgmt: {
        title: 'ניהול פרויקטים',
        desc: 'אנו מספקים שירותי ניהול פרויקטים מקיפים להבטחת השלמת הפרויקט שלך בזמן, בתקציב ובאיכות הגבוהה ביותר. המנהלים המנוסים שלנו מפקחים על כל שלב, מהתכנון והרכש ועד לביצוע ומסירה, עם תקשורת ברורה, ניהול סיכונים ושביעות רצון הלקוח.',
        link: 'למידע נוסף',
      },
      whyTitle: 'למה לבחור בנו?',
      whyList: [
        'הנחות מיוחדות על פרויקטים גדולים למגורים ומסחר העונה.',
        'ייעוץ ובדיקת אתר חינם ללקוחות חדשים.',
        'פרויקטים בולטים: דירות גרין ואלי, מגדלי טקנו פארק, וקניון סיטי סנטר.',
        'אחריות מבנית ל-10 שנים על כל הבנייה החדשה.',
        'אפשרויות מסירה מהירה לפרויקטים דחופים.',
        'חומרי בנייה ירוקים ושיטות בנייה בנות קיימא.',
        'תמיכת לקוחות מסורה לאורך כל הדרך.',
      ],
      howTitle: 'איך להתחיל את הפרויקט שלך',
      howDesc: 'מוכן לבנות, לשפץ או להתרחב? ההתחלה איתנו פשוטה ושקופה. נלווה אותך בכל שלב, להגשמת החזון שלך בקלות ובביטחון.',
      howSteps: [
        { title: 'צור קשר', desc: 'צור קשר: באתר, בטלפון או במשרדנו לשיחה על צרכי הפרויקט.' },
        { title: 'ייעוץ', desc: 'ייעוץ וביקור באתר: המומחים שלנו יתאמו פגישה חינם והערכת אתר להבנת הצרכים שלך.' },
        { title: 'תכנון', desc: 'הצעת פרויקט: קבל הצעה מפורטת הכוללת עיצובים, לוחות זמנים ועלויות שקופות.' },
        { title: 'עיצוב', desc: 'הסכם ותכנון: השלם את ההסכם ותוכנית הפרויקט בהתאם למטרותיך ולתקציב.' },
        { title: 'בנייה', desc: 'ביצוע: הצוות המיומן שלנו מנהל את הבנייה, בדיקות האיכות והעדכונים עד לסיום.' },
        { title: 'מסירה', desc: 'מסירה ותמיכה: נסיים את הפרויקט ונספק תמיכה שוטפת לשקט הנפשי שלך.' },
      ],
      readyTitle: 'מוכן להתחיל את פרויקט הבנייה שלך?',
      readyDesc: 'יש לך שאלות על בנייה, שיפוץ או הרחבה? הצוות המנוסה שלנו כאן ללוות אותך בכל שלב—מהייעוץ הראשוני ועד לסיום הפרויקט. פנה אלינו לייעוץ מקצועי, הצעות מחיר שקופות וחוויית בנייה חלקה. נבנה את החזון שלך יחד!',
      getStarted: 'התחל עכשיו',
    },
  };
  const t = content[lang] || content.en;
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/856192/856192-hd_1920_1080_24fps.mp4"
          controls
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t.heroTitle}<span className="text-[#ff0000]">{t.heroHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">{t.heroDesc}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 space-y-12">
  <h2 className="text-3xl font-bold text-[#ff0000] mb-8 text-center">{t.servicesTitle}</h2>
        {/* Service: Residential Projects */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img1} alt={t.residential.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-[#ff0000] mb-2">{t.residential.title}</h3>
            <p className="text-gray-700 mb-2">{t.residential.desc}</p>
            <Link to="/residential-projects" className="text-[#ff0000] hover:underline font-semibold">{t.residential.link}</Link>
          </div>
        </div>
        {/* Service: Commercial Projects */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img2} alt={t.commercial.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-[#ff0000] mb-2">{t.commercial.title}</h3>
            <p className="text-gray-700 mb-2">{t.commercial.desc}</p>
            <Link to="/commercial-projects" className="text-[#ff0000] hover:underline font-semibold">{t.commercial.link}</Link>
          </div>
        </div>
        {/* Service: Industrial Projects */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img3} alt={t.industrial.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-[#ff0000] mb-2">{t.industrial.title}</h3>
            <p className="text-gray-700 mb-2">{t.industrial.desc}</p>
            <Link to="/industrial-projects" className="text-[#ff0000] hover:underline font-semibold">{t.industrial.link}</Link>
          </div>
        </div>
        {/* Service: Renovation Services */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img4} alt={t.renovation.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-[#ff0000] mb-2">{t.renovation.title}</h3>
            <p className="text-gray-700 mb-2">{t.renovation.desc}</p>
            <Link to="/renovation-services" className="text-[#ff0000] hover:underline font-semibold">{t.renovation.link}</Link>
          </div>
        </div>
        {/* Service: Architectural Designs */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img5} alt={t.architectural.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-[#ff0000] mb-2">{t.architectural.title}</h3>
            <p className="text-gray-700 mb-2">{t.architectural.desc}</p>
            <Link to="/architectural-designs" className="text-[#ff0000] hover:underline font-semibold">{t.architectural.link}</Link>
          </div>
        </div>
        {/* Service: Project Management */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={project} alt={t.projectMgmt.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-[#ff0000] mb-2">{t.projectMgmt.title}</h3>
            <p className="text-gray-700 mb-2">{t.projectMgmt.desc}</p>
            <Link to="/project-management" className="text-[#ff0000] hover:underline font-semibold">{t.projectMgmt.link}</Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <img
              src={dealsImg}
              alt="Ongoing Deals"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#ff0000] mb-4">{t.whyTitle}</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
              {t.whyList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

  <section className="max-w-full bg-[#ff00001a] mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Info */}
        <div>
            <h2 className="text-3xl font-bold text-[#ff0000] mb-4">{t.howTitle}</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">{t.howDesc}</p>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
            {t.howSteps.map((step, idx) => (
              <li key={idx}><span className="font-semibold text-[#ff0000]">{step.title}:</span> {step.desc}</li>
            ))}
          </ol>
        </div>

        {/* Right Visuals: 6 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.howSteps.map((step, idx) => (
            <div key={idx} className="bg-white border border-gray-200 shadow-md rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#ff0000]">{step.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#ff0000] mb-4">{t.readyTitle}</h2>
          <p className="text-lg text-gray-700 mb-6">{t.readyDesc}</p>
          <Link
            to="/contactus"
            className="inline-block px-6 py-3 bg-[#ff0000] text-white font-semibold rounded-lg shadow-md hover:bg-[#cc0000] transition"
          >
            {t.getStarted}
          </Link>
        </div>
      </section>


    </div>
  );
};

export default ServicesPage;
