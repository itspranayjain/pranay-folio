import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution built with React and Node.js, featuring real-time inventory management and payment integration.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "AI Content Generator",
      description: "An intelligent content creation tool powered by machine learning, helping users generate high-quality content in seconds.",
      tags: ["Python", "TensorFlow", "FastAPI", "React"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative productivity platform with real-time updates, drag-and-drop interface, and team analytics.",
      tags: ["TypeScript", "Next.js", "Supabase", "TailwindCSS"],
      link: "#",
    },
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "AWS", "Docker",
    "TailwindCSS", "Next.js", "GraphQL", "REST APIs"
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              PJ
            </h2>
            <div className="flex gap-8">
              <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("work")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-[image:var(--gradient-mesh)] opacity-50"></div>
        
        <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Pranay Jain
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Creative Developer & Designer
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I craft beautiful, functional digital experiences that bridge the gap between design and technology.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("work")}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                View My Work
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-border hover:border-primary transition-colors"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center">
            <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 animate-fade-up">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
                  With over 5 years of experience, I specialize in building scalable web applications that 
                  prioritize user experience and performance.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-primary transition-colors cursor-default"
                      style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 animate-fade-up">Featured Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-elegant)] group cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 animate-fade-up">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex gap-6 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <a 
                href="mailto:pranay@example.com"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p>© 2025 Pranay Jain. Built with React & TailwindCSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
