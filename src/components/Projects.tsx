import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Projects = () => {
  const projects = [
    "Participação expressiva na ativação e homologação da solução de voz do CNJ",
    "Participação expressiva na ativação e homologação da solução de voz do CITEx",
    "Responsável técnico pela implantação do sistema de voz e mensagens unificadas da Azul Linhas Aéreas em Barueri, São Paulo",
    "Responsável técnico pela implantação da solução de voz da CODEVASF e sites remotos no território nacional",
    "Participação na ativação da solução dados e voz do Superior Tribunal de Justiça (STJ)",
    "Participação na ativação da solução de dados e voz da ANATEL e sites remotos",
    "Participação na ativação da solução de dados e voz dos Laboratórios Sabin e unidades",
    "Ativação de diversos sites da rede INFOVIA voz do Governo Federal",
    "Ativação do sistema de escoamento de ligações da INFOVIA voz e dados na Dataprev/RJ",
    "Atualização da solução de voz da Secretaria de Planejamento do Estado de Goiás",
    "Atualização da solução de voz do Tribunal Superior do Trabalho (TST)",
    "Responsável técnico pela atualização do sistema de voz do Ministério Público Militar",
    "Responsável técnico pela atualização da solução de voz do CITEx"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos Destacados
          </h2>
          <p className="text-lg text-muted-foreground">
            Implementações de grande porte em clientes governamentais e privados
          </p>
        </div>

        <Card className="max-w-5xl mx-auto p-8 md:p-12 bg-card border-border/50 shadow-[var(--shadow-soft)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.05}s both`
                }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {project}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
