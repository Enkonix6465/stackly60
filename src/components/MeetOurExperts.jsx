import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.jpeg";

const experts = [
  {
    name: "Priya Sharma",
    title: "Lead Event Planner",
    img: person1,
    bio: "Priya specializes in luxury weddings and corporate galas, bringing creativity and precision to every event.",
  },
  {
    name: "Rahul Mehta",
    title: "Conference Specialist",
    img: person2,
    bio: "Rahul is an expert in large-scale conferences and expos, ensuring seamless logistics and memorable experiences.",
  },
  {
    name: "Sara Lee",
    title: "Creative Director",
    img: person3,
    bio: "Sara leads our decor and theme design, transforming venues into stunning event spaces.",
  },
];

export default function MeetOurExperts() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-amber-900 to-amber-700 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">Meet Our Event Experts</h2>
  <div className="w-full max-w-6xl flex flex-row items-center justify-center gap-8 relative">
        {experts.map((expert, idx) => (
          <div
            key={idx}
            className="relative z-10 bg-black/70 rounded-2xl shadow-2xl p-8 flex flex-col items-center w-full max-w-xs transition-all duration-500"
            style={{
              transform: 'scale(1)',
              filter: 'none',
            }}
          >
            <img
              src={expert.img}
              alt={expert.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-amber-400 mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-white mb-1 text-center">{expert.name}</h3>
            <p className="text-amber-200 text-lg mb-2 text-center">{expert.title}</p>
            <p className="text-white text-base text-center mb-4">{expert.bio}</p>
            <button className="bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold py-2 px-6 rounded-lg shadow hover:from-amber-500 hover:to-amber-700 transition">Connect</button>
          </div>
        ))}
        {/* Carousel arrows (static for now) */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg z-20 hidden md:flex">&#60;</button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg z-20 hidden md:flex">&#62;</button>
      </div>
    </section>
  );
              // Animation state for each card
              const [visible, setVisible] = useState([false, false, false]);

              useEffect(() => {
                experts.forEach((_, idx) => {
                  setTimeout(() => {
                    setVisible((prev) => {
                      const next = [...prev];
                      next[idx] = true;
                      return next;
                    });
                  }, 300 + idx * 350); // 350ms delay between cards
                });
              }, []);

              return (
                <section className="w-full py-20 bg-gradient-to-b from-amber-900 to-amber-700 flex flex-col items-center justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">Meet Our Event Experts</h2>
                  <div className="w-full max-w-6xl flex flex-row items-center justify-center gap-8 relative">
                    {experts.map((expert, idx) => (
                      <div
                        key={idx}
                        className={`relative z-10 bg-black/70 rounded-2xl shadow-2xl p-8 flex flex-col items-center w-full max-w-xs transition-transform duration-500 ${visible[idx] ? 'scale-100' : 'scale-0'}`}
                        style={{
                          transform: visible[idx] ? 'scale(1)' : 'scale(0)',
                          filter: 'none',
                        }}
                      >
                        <img
                          src={expert.img}
                          alt={expert.name}
                          className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-amber-400 shadow-lg"
                        />
                        <h3 className="text-2xl font-bold text-white mb-2">{expert.name}</h3>
                        <p className="text-amber-200 font-semibold mb-4">{expert.title}</p>
                        <p className="text-white text-center text-sm mb-2">{expert.bio}</p>
                      </div>
                    ))}
                  </div>
                </section>
              );
