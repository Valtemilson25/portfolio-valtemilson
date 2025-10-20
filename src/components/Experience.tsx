import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Central IT Governança e TI",
      position: "Analista de Infraestrutura e Segurança Pleno",
      period: "Janeiro de 2022 – Abril de 2024",
      description: "Consultor técnico em clientes de Infraestrutura, Segurança e Telefonia dentro do território nacional, em regime de teletrabalho. Atuando em soluções de switchs, roteadores, firewalls de diversos fabricantes e tecnologias."
    },
    {
      company: "Itscon Tecnologia",
      position: "Analista de Redes e Comunicação de Dados",
      period: "Dezembro de 2018 a Abril de 2020",
      description: "Gerenciamento de sistemas de Telecomunicações e dados em clientes diversos. Responsável técnico nos clientes de governo em Brasília, em especial, Exército Brasileiro."
    },
    {
      company: "Avanti Teleinformática",
      position: "Analista de Desenvolvimento de Sistemas",
      period: "Abril de 2015 a Janeiro de 2017",
      description: "Gerenciamento de sistemas de Telecomunicações e dados em clientes diversos. Responsável técnico pela implementação dos sistemas de IM e Voz da empresa Azul Linhas aéreas e gerenciamento de sistemas de clientes diversos."
    },
    {
      company: "Mahvla Telecomm",
      position: "Analista de Desenvolvimento de Sistemas",
      period: "Janeiro de 2014 a Março de 2015",
      description: "Gerenciamento à sistemas de Telecomunicações e Dados em clientes diversos, atuando ativamente no projeto de voz e dados dos clientes CITEx, CNJ e DPU."
    },
    {
      company: "Unify",
      position: "Analista de Telecom",
      period: "Outubro de 2010 a Dezembro de 2013",
      description: "Gerenciamento à sistemas de Telecomunicações e Dados em clientes diversos, atuando ativamente no projeto de Infovia voz do Ministério do Planejamento, utilizando-se de sistemas OpenScape, Enterasys, 3Com e AudioCodes."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-muted-foreground">
            Trajetória de sucesso em empresas de tecnologia e telecomunicações
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-l-4 border-l-primary bg-card"
              style={{
                animation: `slide-in-right 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {exp.company}
                  </h4>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
