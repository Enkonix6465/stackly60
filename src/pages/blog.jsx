import React, { useState, useEffect } from "react";
// import blogHero from "../assets/blog.mp4";
import { Brain, Code, BarChart3 } from "lucide-react";
import feature1 from "../assets/article1.jpg"; // re
import feature2 from "../assets/article2.jpg"; // replace with your delivery-related image
import feature3 from "../assets/article3.jpg"; // replace with your cuisine variety image
import { Link } from "react-router-dom";
const content = {
  en: {
    heroTitle: 'Event Management ',
    heroHighlight: 'Insights',
    heroDesc: 'Stay inspired with the latest trends, creative ideas, and best practices in event planning, conferences, celebrations, and experiential marketing. Make every event extraordinary with our expert tips and industry news!',
    featuredTitle: 'Featured Event Articles',
    categoriesTitle: 'Explore by Event Topics',
    categoriesDesc1: 'Our blog is organized to help you easily find articles on event design, technology, project management, and guest experience—everything you need to host a successful event.',
    categoriesDesc2: 'Browse through our categories and discover expert advice, case studies, and the latest industry updates. Whether you’re an event planner, business owner, or party host, our blog has something for you.',
    categories: [
      { name: "Event Design & Decor", desc: "Latest trends, tips, and inspiration for creative event themes and decor." },
      { name: "Event Technology", desc: "Innovations and tools transforming the event industry." },
      { name: "Event Project Management", desc: "Best practices for planning, scheduling, and delivering flawless events." },
      { name: "Guest Experience", desc: "Guides and updates on guest engagement, safety, and satisfaction." },
    ],
    features: [
      { title: "Sustainable Event Solutions", description: "Explore the latest eco-friendly practices that make your events memorable and responsible.", image: feature1, link: "/blog/1" },
      { title: "Smart Event Technology", description: "Discover how apps, AR, and live streaming are revolutionizing event engagement and logistics.", image: feature2, link: "/blog/2" },
      { title: "Modern Event Project Management", description: "Learn about agile methods, digital tools, and best practices for delivering events on time and within budget.", image: feature3, link: "/blog/3" },
    ],
    servicesTitle: 'Service Comparison',
    services: [
      { name: "Venue Selection", features: ["Curated venue options", "Site visits", "Contract negotiation", "Logistics planning"] },
      { name: "Event Planning", features: ["Concept development", "Timeline creation", "Budget management", "Vendor coordination"] },
      { name: "Design & Decor", features: ["Theme design", "Decor setup", "Lighting & AV", "Custom installations"] },
      { name: "Guest Management", features: ["Invitations & RSVPs", "On-site registration", "Guest support", "Feedback collection"] },
      { name: "Live Event Support", features: ["Day-of coordination", "Troubleshooting", "Stage management", "Real-time updates"] },
      { name: "Post-Event Services", features: ["Cleanup & breakdown", "Thank-you follow-ups", "Survey analysis", "Photo/video delivery"] },
    ],
    mythsTitle: 'Event Myths & Facts',
    myths: [
      { myth: "Event planning is always stressful.", fact: "With the right team and tools, planning can be smooth and enjoyable." },
      { myth: "Bigger budgets guarantee better events.", fact: "Creativity and thoughtful planning matter more than budget size." },
      { myth: "Virtual events are less engaging.", fact: "Modern tech and creative formats can make virtual events highly interactive." },
      { myth: "You need a huge team to run a great event.", fact: "A small, skilled team can deliver outstanding results with the right strategy." },
      { myth: "Sustainable events are too expensive.", fact: "Eco-friendly practices can save money and add value for guests and sponsors." },
      { myth: "Only professionals can host memorable events.", fact: "Anyone can create a great event with the right guidance and inspiration." },
    ],
    tipsTitle: 'Event Planning Tips �',
    constructionTips: [
      { tip: "Start planning early to secure the best venues and vendors." },
      { tip: "Create a detailed timeline and checklist for every event." },
      { tip: "Use technology for invitations, RSVPs, and guest engagement." },
      { tip: "Personalize the experience for your guests whenever possible." },
      { tip: "Have a backup plan for outdoor or complex events." },
      { tip: "Communicate clearly with your team and partners." },
      { tip: "Capture memories with professional photography and video." },
      { tip: "Follow up with guests after the event for feedback and appreciation." },
    ],
    readMore: 'Read More →',
  },
  ar: {
    heroTitle: 'مدونة ',
    heroHighlight: 'البناء',
    heroDesc: 'ابقَ على اطلاع بأحدث الاتجاهات والابتكارات وأفضل الممارسات في البناء والهندسة المعمارية وإدارة المشاريع. ابنِ بذكاء مع نصائحنا وخبراتنا!',
    featuredTitle: 'مقالات البناء المميزة',
    categoriesTitle: 'استكشف حسب مواضيع البناء',
    categoriesDesc1: 'مدونتنا منظمة لمساعدتك في العثور بسهولة على مقالات حول الهندسة المعمارية والتكنولوجيا وإدارة المشاريع والسلامة—كل ما تحتاجه للنجاح في البناء.',
    categoriesDesc2: 'تصفح الفئات واكتشف نصائح الخبراء ودراسات الحالة وآخر التحديثات. سواء كنت بنّاءً أو مهندسًا أو مالك مشروع، ستجد ما يفيدك.',
    categories: [
      { name: "الهندسة المعمارية والتصميم", desc: "أحدث الاتجاهات والنصائح والإلهام لتصميم المباني الحديثة." },
      { name: "تكنولوجيا البناء", desc: "الابتكارات والأدوات التي تغير صناعة البناء." },
      { name: "إدارة المشاريع", desc: "أفضل الممارسات للتخطيط والجدولة وتسليم المشاريع في الوقت المحدد." },
      { name: "السلامة والامتثال", desc: "أدلة وتحديثات حول السلامة في الموقع واللوائح والمعايير." },
    ],
    features: [
      { title: "مواد بناء مستدامة", description: "اكتشف أحدث المواد الصديقة للبيئة التي تعزز المتانة وتقلل الأثر البيئي.", image: feature1, link: "/blog/1" },
      { title: "تكنولوجيا البناء الذكية", description: "تعرف على كيف تغير الطائرات بدون طيار وBIM وإنترنت الأشياء إدارة المواقع والسلامة والكفاءة.", image: feature2, link: "/blog/2" },
      { title: "إدارة المشاريع الحديثة", description: "تعلم عن الأساليب الرقمية وأفضل الممارسات لتسليم المشاريع في الوقت المحدد وضمن الميزانية.", image: feature3, link: "/blog/3" },
    ],
    servicesTitle: 'مقارنة الخدمات',
    services: [
      { name: "إشراف الموقع", features: ["تفتيشات يومية", "فحوصات الجودة", "مراقبة الامتثال للسلامة", "توثيق التقدم"] },
      { name: "تخطيط المشروع", features: ["جدولة مفصلة", "تخصيص الموارد", "تقدير الميزانية", "تقييم المخاطر"] },
      { name: "التصميم والهندسة", features: ["رسومات معمارية", "تحليل إنشائي", "تنسيق MEP", "حلول مستدامة"] },
      { name: "المشتريات", features: ["إدارة الموردين", "توفير المواد", "تفاوض التكاليف", "تسليم في الوقت المناسب"] },
      { name: "تقارير العملاء", features: ["تحديثات أسبوعية", "تواصل شفاف", "تتبع المشكلات", "توثيق بالصور"] },
      { name: "ما بعد البناء", features: ["فحوصات نهائية", "وثائق التسليم", "دعم الضمان", "تخطيط الصيانة"] },
    ],
    mythsTitle: 'خرافات وحقائق البناء',
    myths: [
      { myth: "المباني الخضراء دائمًا أغلى تكلفة.", fact: "التصميم المستدام يقلل التكاليف على المدى الطويل والمواد الصديقة للبيئة أصبحت منافسة بالسعر." },
      { myth: "تأخيرات المشاريع أمر لا مفر منه.", fact: "مع التخطيط الجيد وإدارة المخاطر والتواصل، يمكن تجنب معظم التأخيرات أو تقليلها." },
      { myth: "المباني الجاهزة منخفضة الجودة.", fact: "البناء الحديث يستخدم مواد عالية الجودة ومعايير صارمة غالبًا تتفوق على التقليدي." },
      { myth: "معدات السلامة فقط للأعمال عالية الخطورة.", fact: "معدات الحماية ضرورية لجميع أنشطة البناء لمنع الإصابات وحماية الأرواح." },
      { myth: "التكنولوجيا تبطئ العمل.", fact: "الأدوات الرقمية والأتمتة تسرع العمليات وتحسن الدقة والتعاون." },
      { myth: "إدارة المشاريع فقط للشركات الكبيرة.", fact: "إدارة المشاريع تفيد جميع الأحجام وقابلة للتخصيص لأي ميزانية." },
    ],
    tipsTitle: 'نصائح البناء 🏗️',
    constructionTips: [
      { tip: "تحقق دائمًا من ظروف الموقع وجودة التربة قبل بدء الأساسات." },
      { tip: "استخدم معدات الحماية الشخصية دائمًا في الموقع." },
      { tip: "نظم اجتماعات سلامة منتظمة لفريقك." },
      { tip: "راجع القياسات مرتين قبل القص أو الصب لتجنب الأخطاء المكلفة." },
      { tip: "احتفظ بالمستندات والخطط في متناول جميع أعضاء الفريق." },
      { tip: "استثمر في أدوات عالية الجودة واعتنِ بها بانتظام." },
      { tip: "تابع توقعات الطقس لتخطيط الأنشطة الحرجة." },
      { tip: "وثق التقدم بالصور والسجلات اليومية." },
    ],
    readMore: 'اقرأ المزيد →',
  },
  he: {
    heroTitle: 'בלוג ',
    heroHighlight: 'הבנייה',
    heroDesc: 'הישאר מעודכן בטרנדים, חידושים ושיטות עבודה מובילות בבנייה, אדריכלות, הנדסה וניהול פרויקטים. בנה חכם עם הטיפים והחדשות שלנו!',
    featuredTitle: 'מאמרי בנייה נבחרים',
    categoriesTitle: 'חקור לפי נושאי בנייה',
    categoriesDesc1: 'הבלוג שלנו מאורגן כדי לעזור לך למצוא בקלות מאמרים על אדריכלות, טכנולוגיה, ניהול פרויקטים ובטיחות—כל מה שצריך להצלחה בבנייה.',
    categoriesDesc2: 'עיין בקטגוריות וגלה עצות מומחים, מקרי בוחן ועדכונים אחרונים. בין אם אתה בונה, אדריכל, מהנדס או בעל פרויקט, תמצא כאן ערך.',
    categories: [
      { name: "אדריכלות ועיצוב", desc: "טרנדים, טיפים והשראה לעיצוב מבנים מודרניים." },
      { name: "טכנולוגיית בנייה", desc: "חדשנות וכלים שמשנים את ענף הבנייה." },
      { name: "ניהול פרויקטים", desc: "שיטות מובילות לתכנון, תזמון והשלמת פרויקטים בזמן." },
      { name: "בטיחות וציות", desc: "מדריכים ועדכונים על בטיחות, תקנות וסטנדרטים." },
    ],
    features: [
      { title: "חומרי בנייה ברי קיימא", description: "גלה חומרים ידידותיים לסביבה שמחזקים עמידות ומפחיתים השפעה סביבתית.", image: feature1, link: "/blog/1" },
      { title: "טכנולוגיית בנייה חכמה", description: "גלה כיצד רחפנים, BIM ואינטרנט הדברים משנים את ניהול האתר, הבטיחות והיעילות.", image: feature2, link: "/blog/2" },
      { title: "ניהול פרויקטים מודרני", description: "למד על שיטות אג'ייל, כלים דיגיטליים ושיטות עבודה להשלמת פרויקטים בזמן ובתקציב.", image: feature3, link: "/blog/3" },
    ],
    servicesTitle: 'השוואת שירותים',
    services: [
      { name: "פיקוח אתר", features: ["בדיקות יומיות", "בדיקות איכות", "מעקב אחר בטיחות", "תיעוד התקדמות"] },
      { name: "תכנון פרויקט", features: ["תזמון מפורט", "הקצאת משאבים", "הערכת תקציב", "הערכת סיכונים"] },
      { name: "תכנון והנדסה", features: ["שרטוטים אדריכליים", "ניתוח מבני", "תיאום מערכות", "פתרונות ברי קיימא"] },
      { name: "רכש", features: ["ניהול ספקים", "רכש חומרים", "משא ומתן על עלויות", "אספקה בזמן"] },
      { name: "דיווח ללקוח", features: ["עדכונים שבועיים", "תקשורת שקופה", "מעקב בעיות", "תיעוד בצילום"] },
      { name: "לאחר הבנייה", features: ["בדיקות סופיות", "מסמכי מסירה", "תמיכה באחריות", "תכנון תחזוקה"] },
    ],
    mythsTitle: 'מיתוסים ועובדות בבנייה',
    myths: [
      { myth: "מבנים ירוקים תמיד יקרים יותר.", fact: "עיצוב בר קיימא מפחית עלויות לטווח ארוך וחומרים ירוקים תחרותיים במחיר." },
      { myth: "עיכובים בפרויקטים הם בלתי נמנעים.", fact: "עם תכנון נכון, ניהול סיכונים ותקשורת, רוב העיכובים ניתנים למניעה או לצמצום." },
      { myth: "מבנים טרומיים הם באיכות נמוכה.", fact: "בנייה מודרנית משתמשת בחומרים איכותיים וסטנדרטים מחמירים, לעיתים עולים על המסורתי." },
      { myth: "ציוד מגן דרוש רק לעבודות מסוכנות.", fact: "ציוד מגן אישי חיוני לכל פעילות בנייה למניעת פציעות והצלת חיים." },
      { myth: "טכנולוגיה מאטה את העבודה.", fact: "כלים דיגיטליים ואוטומציה מאיצים תהליכים, משפרים דיוק ומשפרים שיתוף פעולה." },
      { myth: "רק חברות גדולות יכולות להרשות לעצמן ניהול פרויקטים.", fact: "ניהול פרויקטים מועיל לכל גודל פרויקט וניתן להתאמה לכל תקציב." },
    ],
    tipsTitle: 'טיפים לבנייה 🏗️',
    constructionTips: [
      { tip: "בדוק תמיד את תנאי האתר ואיכות הקרקע לפני תחילת יסודות." },
      { tip: "השתמש בציוד מגן אישי תמיד באתר." },
      { tip: "ארגן תדריכי בטיחות קבועים לצוות שלך." },
      { tip: "בדוק מידות פעמיים לפני חיתוך או יציקה כדי למנוע טעויות יקרות." },
      { tip: "שמור מסמכים ותוכניות זמינים לכל חברי הצוות." },
      { tip: "השקע בכלים איכותיים ותחזק אותם באופן קבוע." },
      { tip: "בדוק תחזיות מזג אוויר לתכנון פעילויות קריטיות." },
      { tip: "תעד התקדמות בתמונות ודוחות יומיים." },
    ],
    readMore: 'קרא עוד →',
  },
};

export default function BlogHero({ lang = 'en' }) {
  const t = content[lang] || content.en;
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
    <div className={theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/854190/854190-hd_1920_1080_25fps.mp4" // Pexels direct .mp4: Creative/Architecture
          autoPlay
          muted
          loop
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center px-6" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t.heroTitle}
            <span style={{ color: '#ff0000' }}>{t.heroHighlight}</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Latest Blogs Section */}
      

      {/* Featured Articles Section */}
  <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#ff00001a]'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
	  {t.featuredTitle}
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <article
                key={index}
                className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-gray-50 text-black'}`}
              >
                {/* Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                 <Link
  to={feature.link}
  className="text-[#ff0000] font-semibold hover:underline"
>
  {t.readMore}
</Link>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
        <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore by <span style={{ color: '#ff0000' }}>Event Topics</span>
            </h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
  Our blog is organized to help you easily find articles on event design, technology, project management, and guest experience—everything you need to host a successful event.
</p>
<p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
  Browse through our categories and discover expert advice, case studies, and the latest industry updates. Whether you’re an event planner, business owner, or party host, our blog has something for you.
</p>

          </div>

          {/* Right Cards Grid */}
          <div className="grid  sm:grid-cols-2 gap-6">
            {t.categories.map((cat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}
              >
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#ff0000' }}>{cat.name}</h3>
                <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




  <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#ff00001a]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              {t.servicesTitle}
            </h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className={`w-full border rounded-lg shadow-md text-left ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <thead className={theme === 'dark' ? 'bg-[#111] text-white' : 'bg-[#ff0000] text-white'}>
              <tr>
                <th className="px-6 py-3">Event Features</th>
                {t.services.map((service, idx) => (
                  <th key={idx} className="px-6 py-3 text-center">
                    {service.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={theme === 'dark' ? 'bg-[#222] divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}>
                  {t.services[0].features.map((_, i) => (
                <tr key={i}>
                  {/* Feature Name */}
                  <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                        {t.services[0].features[i]}
                  </td>
                  {/* Features across services */}
                  {t.services.map((service, j) => (
                    <td
                      key={j}
                      className={`px-6 py-4 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      {service.features[i] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>




  <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
    <div className="max-w-6xl mx-auto px-6">
      {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#22c55e' }}>
  <span style={{ color: '#ff0000' }}>{t.mythsTitle}</span>
      </h2>

      {/* Grid */}

      <div className="grid md:grid-cols-2 gap-10">
        {t.myths.map((item, idx) => (
          <div className="space-y-4" key={idx}>
            <div className="flex gap-2">
              <h3 className="text-[#ff0000] font-bold">Myth:</h3>
              <p className={theme === 'dark' ? 'text-white' : 'text-black'}>{item.myth}</p>
            </div>
            <div className="flex gap-2">
              <h3 className="text-[#ff0000] font-bold">Fact:</h3>
              <p className={theme === 'dark' ? 'text-white' : 'text-black'}>{item.fact}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>

<div className={`py-10 ${theme === 'dark' ? 'bg-[#000]' : 'bg-[#ff00001a]'}`}>
  <h2 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    {t.tipsTitle}
  </h2>

  <div className="grid  md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
    {t.constructionTips.map((item, index) => (
      <div 
        key={index} 
        className="p-4 border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition"
      >
        <p className={theme === 'dark' ? 'text-black' : 'text-black'}>
          {item.tip}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
