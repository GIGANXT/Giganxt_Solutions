import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: "🌐",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    gradient: "from-pink-500 to-orange-500"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience and engagement.",
    icon: "🎨",
    gradient: "from-green-400 to-blue-500"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for your applications.",
    icon: "☁️",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Integration",
    description: "Integration of artificial intelligence and machine learning solutions.",
    icon: "🤖",
    gradient: "from-yellow-400 to-blue-500"
  },
  {
    title: "Consulting",
    description: "Expert technical consulting and project management services.",
    icon: "💡",
    gradient: "from-green-500 to-rose-400"
  }
];

const GradientBorderCard = ({ children, gradientClass }) => {
  return (
    <div className="relative rounded-3xl p-[1px] overflow-hidden">
      {/* Gradient Border */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-70`}></div>
      
      {/* Card Content */}
      <div className="relative bg-black rounded-3xl p-6 min-h-[300px]">
        {children}
      </div>
    </div>
  );
};

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
            >
              <GradientBorderCard gradientClass={service.gradient}>
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-2xl font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </GradientBorderCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
