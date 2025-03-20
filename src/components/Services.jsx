import Section from "./Section";
import Heading from "./Heading";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: "🌐",
    background: "/assets/benefits/card-1.svg"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    background: "/assets/benefits/card-2.svg"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience and engagement.",
    icon: "🎨",
    background: "/assets/benefits/card-3.svg"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for your applications.",
    icon: "☁️",
    background: "/assets/benefits/card-4.svg"
  },
  {
    title: "AI Integration",
    description: "Integration of artificial intelligence and machine learning solutions.",
    icon: "🤖",
    background: "/assets/benefits/card-5.svg"
  },
  {
    title: "Consulting",
    description: "Expert technical consulting and project management services.",
    icon: "💡",
    background: "/assets/benefits/card-6.svg"
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
              className="relative bg-n-7 rounded-3xl p-6 border border-n-1/10 hover:border-n-1/20 transition-all duration-300 overflow-hidden"
            >
              {/* Background SVG */}
              <div 
                className="absolute inset-0 w-full h-full opacity-10"
                style={{
                  backgroundImage: `url(${service.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              
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
