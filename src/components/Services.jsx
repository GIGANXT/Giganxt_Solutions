import Section from "./Section";
import Heading from "./Heading";
import { motion } from "framer-motion";

const CardBackground = () => (
  <svg 
    className="absolute inset-0 w-full h-full opacity-10" 
    preserveAspectRatio="none" 
    width="384" 
    height="366" 
    viewBox="0 0 384 366" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      vectorEffect="non-scaling-stroke" 
      d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" 
      stroke="white" 
      strokeOpacity="0.15" 
      strokeWidth="2"
    />
    <path 
      vectorEffect="non-scaling-stroke" 
      d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" 
      stroke="url(#paint0_linear_333_9188)" 
      strokeOpacity="0.85" 
      strokeWidth="2"
    />
    <defs>
      <linearGradient id="paint0_linear_333_9188" x1="192" y1="0" x2="192" y2="366" gradientUnits="userSpaceOnUse">
        <stop stopColor="#33CEFF"/>
        <stop offset="0.562842" stopColor="#D633FF" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

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
              className="relative bg-n-7 rounded-3xl p-6 border border-n-1/10 hover:border-n-1/20 transition-all duration-300 overflow-hidden"
            >
              <CardBackground />
              
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
