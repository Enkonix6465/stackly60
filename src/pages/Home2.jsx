import sustainable from "../assets/sustainable.jpg";
import expert from "../assets/expert.jpg";
import quality from "../assets/quality.png";
import React from "react";
import { Link } from "react-router-dom";
import { useCountUp } from "../hooks/useCountUp";
import { useRef, useState, useEffect } from "react";
import special1 from "../assets/special1.jpg";
import special2 from "../assets/special2.jpg";
import special3 from "../assets/special3.jpg";
import special4 from "../assets/special4.jpg";
import heritage from "../assets/heritage.jpg";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.jpeg";
// import home2hero from "../assets/home2hero.mp4";

export default function Home2({ lang = 'en' }) {
    const content = {
      en: {
        heroTitle: 'Celebrate Life’s Moments With Us',
        heroDesc: 'Welcome to Eventify! We create unforgettable weddings, parties, and corporate events. Discover our creative planning, stunning designs, and seamless coordination for every celebration.',
        learnMore: 'Learn More',
        heritageTitle: 'Our Story & Passion',
        heritageDesc: 'Eventify was founded from a love of celebration and a passion for bringing people together. From small gatherings to grand galas, our legacy is built on creativity, trust, and a commitment to making every event extraordinary. Every celebration we plan tells a story—of joy, connection, and unforgettable memories.',
        heritageList: [
          'Over a decade of event excellence',
          'Family-owned, client-focused',
          'Creative themes & personalized touches',
          'Award-winning event planners',
        ],
        stats: ['Happy clients', 'Cities served', 'Event types', 'Events hosted'],
        professionalsTitle: 'Meet Our Event Experts',
        professionals: [
          { name: 'Maya Johnson', role: 'Lead Event Planner' },
          { name: 'Carlos Rivera', role: 'Creative Director' },
          { name: 'Aisha Patel', role: 'Logistics Manager' },
        ],
        whyTitle: 'Why Celebrate With Us',
        whyList: [
          { title: 'Creative Concepts', desc: 'We design unique, personalized events that reflect your style and vision.' },
          { title: 'Expert Team', desc: 'Our experienced planners and coordinators ensure every detail is perfect.' },
          { title: 'Stress-Free Experience', desc: 'Relax and enjoy your event—we handle everything from start to finish.' },
        ],
        ctaTitle: 'Ready to Plan Your Next Event?',
        ctaDesc: 'Let’s make your next celebration unforgettable! Contact us to discover our services and start planning with Eventify.',
        contactUs: 'Contact Us',
        exploreServices: 'Explore Services',
      },
		ar: {
			heroTitle: 'نبني الأحلام، طوبة تلو الأخرى',
			heroDesc: 'مرحبًا بكم في آركي بيلد، حيث يلتقي الابتكار بالحرفية. استكشف تصاميمنا المعمارية وخدمات إدارة المشاريع والتزامنا بالتميز في كل هيكل نقوم بإنشائه.',
			learnMore: 'اعرف المزيد',
			heritageTitle: 'الإرث والتقاليد',
			heritageDesc: 'بدأت رحلة شركتنا منذ عقود، تأسست على الالتزام بالجودة ورضا العملاء. من المشاريع الصغيرة إلى الإنجازات الكبرى، إرثنا مبني على الثقة والابتكار والتفاني في التميز. كل مبنى نبنيه يروي قصة عن العمل الجماعي والخبرة والرؤية لبناء المجتمعات.',
			heritageList: [
				'تأسست عام 1985، نبني للأجيال',
				'شركة عائلية تدار بنزاهة',
				'نحترم الأساليب التقليدية مع التكنولوجيا الحديثة',
				'حاصلون على جوائز في البناء والخدمة',
			],
			stats: ['عميل راضٍ', 'مكتب تمثيلي', 'أنواع خدمات الإصلاح', 'مشروع مكتمل'],
			professionalsTitle: 'تعرف على محترفينا',
			professionals: [
				{ name: 'أنيتا كابور', role: 'كبير المهندسين المعماريين' },
				{ name: 'راهول ميهتا', role: 'مهندس إنشائي' },
				{ name: 'سارة باتيل', role: 'مديرة المشروع' },
			],
			whyTitle: 'لماذا نحن',
			whyList: [
				{ title: 'مواد عالية الجودة', desc: 'نستخدم فقط أفضل المواد في كل مشروع لضمان المتانة والجمال.' },
				{ title: 'فريق خبراء', desc: 'فريقنا من المهندسين المعماريين والمهندسين ملتزمون بتقديم تصاميم مبتكرة ومستدامة.' },
				{ title: 'ممارسات مستدامة', desc: 'نولي الأولوية للحلول الصديقة للبيئة لضمان مساهمة مشاريعنا في مستقبل أكثر خضرة.' },
			],
			ctaTitle: 'ابدأ مشروع أحلامك اليوم!',
			ctaDesc: 'اختبر التميز في البناء والتصميم المعماري. تواصل معنا لاستكشاف خدماتنا وتحقيق رؤيتك بدقة وابتكار.',
			contactUs: 'تواصل معنا',
			exploreServices: 'استكشف الخدمات',
		},
		he: {
			heroTitle: 'בונים חלומות, לבנה אחר לבנה',
			heroDesc: 'ברוכים הבאים ל-ArchiBuild, המקום בו חדשנות פוגשת אומנות. חקרו את עיצובינו האדריכליים, שירותי ניהול הפרויקטים והמחויבות שלנו למצוינות בכל מבנה שאנו יוצרים.',
			learnMore: 'למידע נוסף',
			heritageTitle: 'מורשת והיסטוריה',
			heritageDesc: 'המסע של חברתנו החל לפני עשרות שנים, מתוך מחויבות לאיכות ולשביעות רצון הלקוחות. מפרויקטים צנועים ועד הישגים בולטים, המורשת שלנו מבוססת על אמון, חדשנות ומסירות למצוינות. כל מבנה שאנו בונים מספר סיפור של עבודת צוות, מומחיות וחזון לעצב קהילות.',
			heritageList: [
				'הוקמה ב-1985, בונים לדורות',
				'חברה משפחתית המנוהלת ביושרה',
				'מכבדים שיטות בנייה מסורתיות עם טכנולוגיה מודרנית',
				'זכו להכרה על מצוינות בבנייה ובשירות',
			],
			stats: ['לקוחות מרוצים', 'משרדים מייצגים', 'סוגי שירותי תיקון', 'פרויקטים שהושלמו'],
			professionalsTitle: 'הכירו את המקצוענים שלנו',
			professionals: [
				{ name: 'אניטה קפור', role: 'אדריכלית ראשית' },
				{ name: 'רהול מהטה', role: 'מהנדס מבנים' },
				{ name: 'שרה פאטל', role: 'מנהלת פרויקטים' },
			],
			whyTitle: 'למה לבחור בנו',
			whyList: [
				{ title: 'חומרים איכותיים', desc: 'אנו משתמשים רק בחומרים האיכותיים ביותר בכל פרויקט לעמידות ואסתטיקה שאין כמותם.' },
				{ title: 'צוות מומחים', desc: 'הצוות שלנו של אדריכלים ומהנדסים מחויב לספק עיצובים חדשניים וברי קיימא.' },
				{ title: 'שיטות בנות קיימא', desc: 'אנו נותנים עדיפות לפתרונות ידידותיים לסביבה כדי להבטיח שהפרויקטים שלנו תורמים לעתיד ירוק יותר.' },
			],
			ctaTitle: 'התחל את פרויקט החלומות שלך היום!',
			ctaDesc: 'חווה מצוינות בבנייה ובעיצוב אדריכלי. צור קשר כדי לחקור את השירותים שלנו ולהגשים את החזון שלך בדיוק ובחדשנות.',
			contactUs: 'צור קשר',
			exploreServices: 'גלה שירותים',
		},
	};
	const t = content[lang] || content.en;
		// Animated counters for statistics section
		const sectionRef = useRef();
		const [inView, setInView] = useState(false);
		useEffect(() => {
			let observer;
			if (sectionRef.current) {
				observer = new window.IntersectionObserver(
					([entry]) => setInView(entry.isIntersecting),
					{ threshold: 0.3 }
				);
				observer.observe(sectionRef.current);
			}
			return () => observer && observer.disconnect();
		}, []);
		const count1 = useCountUp(1200, 2000, inView);
		const count2 = useCountUp(19, 2000, inView);
		const count3 = useCountUp(34, 2000, inView);
		const count4 = useCountUp(800, 2000, inView);
		return (
			<div className="flex flex-col min-h-screen">
			
			{/* Hero Section */}
			<section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
				{/* Background Video for Hero Only */}
				   <video
					   className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
					   src="https://videos.pexels.com/video-files/2065120/2065120-hd_1920_1080_25fps.mp4"
					   autoPlay
					   loop
					   muted
					   playsInline
					   controls
					   preload="metadata"
				   />
				{/* Overlay for readability */}
				<div className="absolute inset-0 bg-black/50 z-10" />
				<div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
								<h1 className="text-5xl md:text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg">
									{t.heroTitle}
								</h1>
								<p className="text-lg md:text-xl text-white/90 text-center mb-8 max-w-2xl drop-shadow">
									{t.heroDesc}
								</p>
								   <Link to="/aboutus" className="relative bg-red-600 border border-red-600 text-white px-8 py-3 rounded-lg text-lg font-serif flex items-center group hover:bg-red-700 transition">
									   {t.learnMore}
									   <span className="ml-3 w-8 h-0.5 bg-white block group-hover:bg-red-300 transition-all"></span>
								   </Link>
				</div>
			</section>


			{/* Heritage & Legacy Section */}
			<section className="w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center">
  <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center rounded-xl shadow-lg p-8">
    <div className="md:w-1/2 w-full order-2 md:order-1 flex flex-col justify-center">
			<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t.heritageTitle}</h2>
			<p className="text-lg text-gray-700 mb-4">
				{t.heritageDesc}
			</p>
			<ul className="text-gray-700 mb-6 list-disc list-inside">
				{t.heritageList.map((item, idx) => <li key={idx}>{item}</li>)}
			</ul>
		<Link to="/aboutus" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition">{t.learnMore}</Link>
    </div>
		<div className="md:w-1/2 w-full order-1 md:order-2 flex justify-center mb-8 md:mb-0">
			<img src={heritage} alt="Heritage & Legacy" className="rounded-xl shadow-lg object-cover w-full h-[450px] md:h-[550px]" />
		</div>
  </div>
</section>


			{/* Statistics Section */}
												   <section className="w-full bg-red-100 py-24 px-6 md:px-0 flex items-center justify-center" ref={sectionRef}>
							<div className="max-w-7xl w-full mx-auto flex flex-wrap md:flex-nowrap gap-12 text-center">
												<div className="flex-1 text-gray-800">
													<h3 className="text-5xl font-bold">{count1}+</h3>
													<p className="text-xl">{t.stats[0]}</p>
												</div>
												<div className="flex-1 text-gray-800">
													<h3 className="text-5xl font-bold">{count2}+</h3>
													<p className="text-xl">{t.stats[1]}</p>
												</div>
												<div className="flex-1 text-gray-800">
													<h3 className="text-5xl font-bold">{count3}+</h3>
													<p className="text-xl">{t.stats[2]}</p>
												</div>
												<div className="flex-1 text-gray-800">
													<h3 className="text-5xl font-bold">{count4}+</h3>
													<p className="text-xl">{t.stats[3]}</p>
												</div>
							</div>
						</section>

			{/* Meet Our Professionals Section */}
			<section className="w-full bg-white py-20 px-4 md:px-0 flex flex-col items-center justify-center">
			<h2 className="text-5xl md:text-6xl font-serif font-bold text-black text-center mb-16">{t.professionalsTitle}</h2>
				<div className="max-w-6xl w-full mx-auto grid  md:grid-cols-3 gap-12">
					{/*  */}
							{t.professionals.map((pro, idx) => (
								<div className="flex flex-col items-center" key={idx}>
									<img src={idx === 0 ? person2 : idx === 1 ? person1 : person3} alt={pro.name} className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
									{/* Social icons */}
									{idx < 2 && (
										<div className="absolute left-4 top-10 flex flex-col gap-4 z-10">
											<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-twitter"></i></a>
											<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-facebook"></i></a>
											<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-instagram"></i></a>
											<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-whatsapp"></i></a>
										</div>
									)}
									<h3 className="text-2xl font-serif font-semibold text-black mb-1">{pro.name}</h3>
									<span className="text-lg text-black font-serif mb-2">{pro.role}</span>
								</div>
							))}
				</div>
			</section>

			{/* Why Choose Us Section */}
			   <section className="w-full bg-red-50 py-16 px-4 md:px-0 flex flex-col items-center justify-center">
	<div className="max-w-6xl w-full mx-auto text-center">
				<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
					{t.whyTitle}
				</h2>
				   <p className="text-lg text-red-600 mb-8">{t.whyTitle}</p>
				<div className="flex flex-wrap md:flex-nowrap gap-8">
					{t.whyList.map((item, idx) => (
						   <div className="border border-red-300 p-6 rounded-lg shadow-lg bg-white flex-1" key={idx}>
							<div className="flex justify-center mb-4">
								<img src={idx === 0 ? quality : idx === 1 ? expert : sustainable} alt={item.title} className={`w-20 h-20 object-${idx === 0 ? 'contain' : 'cover'}${idx > 0 ? ' rounded-full' : ''}`} />
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
							<p className="text-gray-600">{item.desc}</p>
						</div>
					))}
				</div>
	</div>
</section>

			{/* CTA Section */}
			<section className="w-full bg-gray-100 py-16 px-4 md:px-0 flex flex-col items-center justify-center">
	<div className="max-w-6xl w-full mx-auto text-center">
				<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
					{t.ctaTitle}
				</h2>
				<p className="text-lg md:text-xl text-gray-600 mb-8">
					{t.ctaDesc}
				</p>
				<div className="flex justify-center gap-4">
					<Link to="/contactus" className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition">
						   {t.contactUs}
					   </Link>
					<Link to="/services" className="border border-red-300 text-red-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-300 hover:text-white transition">
						   {t.exploreServices}
					   </Link>
				</div>
	</div>
</section>
			
		</div>
	);
}