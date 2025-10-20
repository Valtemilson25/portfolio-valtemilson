import { Card } from "@/components/ui/card";
import { Award, Cloud, Code, Network, Shield, Wrench } from "lucide-react";

const About = () => {
  const qualifications = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      items: [
        "AWS, Google Cloud Platform, Oracle Cloud, Microsoft Azure",
        "Migração de instâncias e aplicações VPC",
        "Docker Hub, Terraform, Kubernetes, GitBash, Ansible"
      ]
    },
    {
      icon: Award,
      title: "Certificações",
      items: [
        "Unify Certified Implementation & Support Specialist",
        "Unify Certified Implementation & Support Expert",
        "OpenScape Unified Communications Suite"
      ]
    },
    {
      icon: Network,
      title: "Redes & Telecomunicações",
      items: [
        "Especializado em Redes de Computadores",
        "Soluções de IM e VoIP",
        "AudioCodes, Elastix/Issabel (Asterisk)"
      ]
    },
    {
      icon: Shield,
      title: "Segurança & Infraestrutura",
      items: [
        "Firewall UpLince Fortinet (Fortigate)",
        "Gerenciamento CISCO, Enterasys, 3Com",
        "Virtualização VMware vSphere e vCenter"
      ]
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      items: [
        "HTML, PHP, CSS, AJAX, JavaScript",
        "Python, Ruby on Rails",
        "MySQL, MariaDB"
      ]
    },
    {
      icon: Wrench,
      title: "Tecnologias IoT",
      items: [
        "Implementação de projetos IoT",
        "Arduino e Raspberry PI",
        "Técnico em Eletrônica"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiência e Qualificações
          </h2>
          <p className="text-lg text-muted-foreground">
            Profissional com ampla experiência em infraestrutura, telecomunicações e cloud computing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {qualifications.map((qual, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <qual.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {qual.title}
                  </h3>
                  <ul className="space-y-2">
                    {qual.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
