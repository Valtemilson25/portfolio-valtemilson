import profilePhoto from "@/assets/profile-photo.jpg";
import { Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Photo */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-2xl" />
              <img
                src={profilePhoto}
                alt="Valtemilson Marques do Nascimento"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-white shadow-[var(--shadow-glow)]"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-2xl animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Valtemilson Marques<br />do Nascimento
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Especialista em Infraestrutura e Comunicações
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="tel:+5561993084630"
                className="flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                +55 (61) 9.9308.4630
              </a>
              <a
                href="mailto:valtemilson@hotmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                valtemilson@hotmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                Cloud Computing
              </span>
              <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                Telecomunicações
              </span>
              <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                Redes & VoIP
              </span>
              <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                Segurança
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
