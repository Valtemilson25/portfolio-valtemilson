import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-[var(--gradient-hero)]">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-white/90">
            Estou disponível para novas oportunidades e projetos
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="font-semibold text-white mb-2">Telefone</h3>
            <a
              href="tel:+5561993084630"
              className="text-white/90 hover:text-white transition-colors"
            >
              +55 (61) 9.9308.4630
            </a>
          </Card>

          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="font-semibold text-white mb-2">E-mail</h3>
            <a
              href="mailto:valtemilson@hotmail.com"
              className="text-white/90 hover:text-white transition-colors break-all"
            >
              valtemilson@hotmail.com
            </a>
          </Card>

          <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="font-semibold text-white mb-2">Localização</h3>
            <p className="text-white/90">
              Brasília, DF
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80 text-sm">
            © 2025 Valtemilson Marques do Nascimento. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
