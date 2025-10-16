import React from "react";
import feature1 from "../assets/article1.jpg"; 
import feature2 from "../assets/article2.jpg"; 
import feature3 from "../assets/article3.jpg"; 
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  // Theme state synced with Header
  
const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);

      const handleThemeChange = () => {
        const newTheme = localStorage.getItem("theme") || "light";
        setTheme(newTheme);
      };

      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);

      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
      };
    }
  }, []);
  const { id } = useParams();

  // Example blog data
  const blogs = [
  {
    id: "1",
    title: "Sustainable Building Materials",
    image: feature1,
    intro:
      "Explore the latest eco-friendly materials that improve durability and reduce environmental impact in construction projects.",
    sections: [
      {
        heading: "What Are Sustainable Materials?",
        content:
          "Sustainable building materials are sourced, manufactured, and used in ways that minimize environmental harm. Examples include recycled steel, bamboo, fly ash bricks, and low-VOC paints. These materials help reduce waste, conserve resources, and often improve building performance."
      },
      {
        heading: "Benefits for Construction",
        content:
          "Using sustainable materials can lower energy costs, improve indoor air quality, and increase the lifespan of structures. They also help builders meet green certification standards and appeal to environmentally conscious clients."
      },
      {
        heading: "Popular Eco-Friendly Options",
        content:
          "Bamboo, recycled concrete, reclaimed wood, and solar-reflective roofing are just a few popular choices. Each offers unique advantages in terms of strength, insulation, and sustainability."
      },
      {
        heading: "How to Source Responsibly",
        content:
          "Work with suppliers who provide certifications and transparent sourcing. Consider the full lifecycle of materials, from extraction to disposal, to ensure true sustainability."
      },
      {
        heading: "Case Studies",
        content:
          "Many modern buildings now showcase the use of sustainable materials, resulting in lower operational costs and a reduced carbon footprint. Look for LEED or IGBC certified projects for inspiration."
      },
    ],
  },
  {
    id: "2",
    title: "Smart Construction Technology",
    image: feature2,
    intro:
      "Discover how drones, BIM, and IoT are revolutionizing site management, safety, and efficiency.",
    sections: [
      {
        heading: "Drones in Construction",
        content:
          "Drones provide real-time aerial views, progress tracking, and site surveys. They improve accuracy, reduce manual labor, and enhance safety by monitoring hazardous areas remotely."
      },
      {
        heading: "Building Information Modeling (BIM)",
        content:
          "BIM allows for 3D modeling and digital collaboration among architects, engineers, and contractors. It helps identify design conflicts early, streamlines workflows, and reduces costly errors."
      },
      {
        heading: "Internet of Things (IoT)",
        content:
          "IoT sensors monitor equipment, track material usage, and ensure site safety. Data from IoT devices enables predictive maintenance and real-time decision-making."
      },
      {
        heading: "Project Management Software",
        content:
          "Modern software platforms centralize scheduling, budgeting, and communication. They help teams stay on track, share updates instantly, and manage resources efficiently."
      },
      {
        heading: "Future Trends",
        content:
          "Emerging technologies like robotics, AR/VR, and AI are set to further transform construction, making sites safer, faster, and more cost-effective."
      },
    ],
  },
  {
    id: "3",
    title: "Modern Project Management",
    image: feature3,
    intro:
      "Learn about agile methods, digital tools, and best practices for delivering projects on time and within budget.",
    sections: [
      {
        heading: "Agile Construction Management",
        content:
          "Agile methods break projects into manageable phases, allowing for flexibility and quick adaptation to changes. This approach improves collaboration and client satisfaction."
      },
      {
        heading: "Digital Collaboration Tools",
        content:
          "Cloud-based platforms enable real-time document sharing, task tracking, and communication among all stakeholders. This reduces delays and keeps everyone aligned."
      },
      {
        heading: "Cost and Schedule Control",
        content:
          "Modern project management tools help monitor budgets, track progress, and forecast potential overruns. Early detection of issues allows for timely corrective action."
      },
      {
        heading: "Quality and Safety Assurance",
        content:
          "Best practices include regular site inspections, digital checklists, and automated reporting. These measures ensure high standards and regulatory compliance."
      },
      {
        heading: "Continuous Improvement",
        content:
          "Post-project reviews and feedback loops help teams learn from each project, driving ongoing improvement and innovation."
      },
    ],
  },
];

  // Find blog by id
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className={`text-center py-20 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <h2 className="text-2xl font-bold">Blog Not Found</h2>
        <Link to="/blog" className="text-green-400 underline mt-4 block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className={theme === "dark" ? "pt-20 min-h-screen bg-black text-white" : "pt-20 min-h-screen bg-white text-black"}>
      {/* Back Link */}
      <Link to="/blog" className="text-green-400 underline mt-4 block">
        Back to Blogs
      </Link>

      {/* Blog Hero */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>
        <p className={`text-lg md:text-xl max-w-5xl text-center mx-auto mb-12 ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
          {blog.intro}
        </p>

        {blog.sections.map((sec, index) => {
          // Generate slug id from heading
          const sectionId = sec.heading.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

          return (
            <div key={index} id={sectionId} className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#22c55e" }}>
                {sec.heading}
              </h2>
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                {sec.content}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
