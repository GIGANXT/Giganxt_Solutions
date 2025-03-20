import Section from "./Section";
import Heading from "./Heading";
import { motion } from "framer-motion";

// Color variations for each card
const cardColors = [
  { primary: "#33CEFF", secondary: "#D633FF" },
  { primary: "#FF3366", secondary: "#FF9933" },
  { primary: "#33FF99", secondary: "#3366FF" },
  { primary: "#9933FF", secondary: "#FF3399" },
  { primary: "#FFCC33", secondary: "#33CCFF" },
  { primary: "#66FF33", secondary: "#FF3366" },
];

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: "🌐"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience and engagement.",
    icon: "🎨"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for your applications.",
    icon: "☁️"
  },
  {
    title: "AI Integration",
    description: "Integration of artificial intelligence and machine learning solutions.",
    icon: "🤖"
  },
  {
    title: "Consulting",
    description: "Expert technical consulting and project management services.",
    icon: "💡"
  }
];

const Services = () => {
  return (
    <Section id="services">
      <div className="container">
        <Heading
          title="Our Services"
          text="Comprehensive solutions for your digital needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-n-7 rounded-3xl p-6 overflow-hidden min-h-[300px]"
              style={{
                border: `1px solid ${cardColors[index].primary}33`,
                background: `linear-gradient(140deg, rgba(20, 20, 22, 0.95) 0%, rgba(20, 20, 22, 0.95) 100%), 
                             radial-gradient(circle at top left, ${cardColors[index].primary}22, transparent 70%),
                             radial-gradient(circle at bottom right, ${cardColors[index].secondary}22, transparent 70%)`,
              }}
            >
              {/* Decorative corner */}
              <div 
                className="absolute top-0 right-0 w-[100px] h-[100px] opacity-20"
                style={{
                  background: `linear-gradient(45deg, transparent 50%, ${cardColors[index].primary} 100%)`,
                }}
              ></div>

              {/* Bottom line accent */}
              <div 
                className="absolute bottom-0 left-0 h-[1px] opacity-30"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cardColors[index].primary}, transparent)`,
                  width: '100%',
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="h4 mb-2">{service.title}</h4>
                <p className="body-2 text-n-3">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
