import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Pós-Graduação em Tecnologia de Redes de Computadores",
      institution: "CISCO Networking Academy – UNEB",
      icon: "🎓"
    },
    {
      degree: "Graduação em Análise de Sistemas",
      institution: "IESB",
      icon: "💻"
    },
    {
      degree: "Técnico em Eletrônica",
      institution: "Formação Técnica",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-lg text-muted-foreground">
            Base sólida em tecnologia e sistemas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-4xl mb-4">{edu.icon}</div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                {edu.degree}
              </h3>
              <p className="text-muted-foreground">
                {edu.institution}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
