/**
 * PRANAY JAIN - CYBER SECURITY PORTFOLIO
 * A modern, terminal-inspired portfolio for a cyber security expert
 * 
 * Features:
 * - Hacker/terminal aesthetic with neon green accents
 * - Custom cursor and scan line effects
 * - Responsive design
 * - Smooth animations
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Terminal, Shield, Lock, Code2, Search, AlertTriangle } from "lucide-react";

const Index = () => {
  // State for typing effect
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "root@security:~$ whoami";

  // Initialize visibility on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    if (!isVisible) return;
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Security projects with hacker theme
  const projects = [
    {
      title: "PenTest Automation Suite",
      description: "Automated penetration testing framework for web applications. Scans for OWASP Top 10 vulnerabilities, generates detailed reports, and integrates with CI/CD pipelines.",
      tags: ["Python", "Metasploit", "Burp Suite", "Docker"],
      link: "#",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Zero-Day Vulnerability Scanner",
      description: "Custom-built scanner for identifying zero-day exploits in network infrastructure. Real-time threat detection with machine learning-based anomaly detection.",
      tags: ["C++", "TensorFlow", "Wireshark", "Kali Linux"],
      link: "#",
      icon: <Search className="h-5 w-5" />,
    },
    {
      title: "Encrypted Communication Platform",
      description: "End-to-end encrypted messaging system with perfect forward secrecy. Implements military-grade encryption protocols for secure communications.",
      tags: ["Rust", "WebRTC", "AES-256", "RSA"],
      link: "#",
      icon: <Lock className="h-5 w-5" />,
    },
    {
      title: "Security Audit Dashboard",
      description: "Real-time security monitoring and threat intelligence platform. Aggregates data from multiple sources to provide comprehensive security insights.",
      tags: ["React", "Node.js", "ELK Stack", "Redis"],
      link: "#",
      icon: <Terminal className="h-5 w-5" />,
    },
    {
      title: "Ransomware Analysis Tool",
      description: "Reverse engineering toolkit for analyzing ransomware behavior in isolated sandbox environments. Helps organizations understand and prevent attacks.",
      tags: ["Assembly", "IDA Pro", "Ghidra", "Python"],
      link: "#",
      icon: <AlertTriangle className="h-5 w-5" />,
    },
    {
      title: "API Security Gateway",
      description: "Intelligent API gateway with rate limiting, authentication, and threat protection. Prevents injection attacks and API abuse.",
      tags: ["Go", "Kong", "OAuth2", "JWT"],
      link: "#",
      icon: <Code2 className="h-5 w-5" />,
    },
  ];

  // Security skills and certifications
  const skills = [
    "Penetration Testing",
    "Ethical Hacking",
    "Network Security",
    "Cryptography",
    "OSINT",
    "Malware Analysis",
    "Reverse Engineering",
    "Cloud Security",
    "SIEM",
    "Incident Response",
    "Python",
    "Bash/Shell",
    "C/C++",
    "Assembly",
    "Metasploit",
    "Burp Suite",
    "Wireshark",
    "Nmap",
    "CEH",
    "OSCP",
    "CISSP",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Matrix-style background effect */}
      <div className="fixed inset-0 bg-[image:var(--gradient-mesh)] opacity-30 pointer-events-none"></div>
      
      {/* Navigation - Terminal style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b terminal-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-primary text-glow flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              <span className="font-mono">[PJ@security]</span>
            </h2>
            <div className="flex gap-8">
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono hover:text-glow"
              >
                $ ./about.sh
              </button>
              <button 
                onClick={() => scrollToSection("work")} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono hover:text-glow"
              >
                $ ./projects.sh
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono hover:text-glow"
              >
                $ ./contact.sh
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Terminal welcome */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            {/* Terminal window */}
            <Card className="bg-terminal border-primary/30 terminal-border p-8 mb-8">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="ml-4 text-sm text-muted-foreground font-mono">terminal@pranay-jain:~</span>
              </div>
              
              <div className="space-y-4 font-mono">
                <div className="text-primary text-glow">
                  {typedText}<span className="animate-terminal-blink">▮</span>
                </div>
                {typedText === fullText && (
                  <div className="text-foreground animate-fade-in space-y-2">
                    <div className="text-2xl md:text-4xl font-bold text-glow">
                      &gt; Pranay Jain
                    </div>
                    <div className="text-xl md:text-2xl text-primary-dim">
                      &gt; Cyber Security Expert | Ethical Hacker
                    </div>
                    <div className="text-muted-foreground pt-4">
                      &gt; Specializing in penetration testing, vulnerability assessment,
                      <br />
                      &gt; and securing digital infrastructure from evolving threats.
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* CTA Buttons */}
            {typedText === fullText && (
              <div className="flex gap-4 justify-center animate-fade-up">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("work")}
                  className="bg-primary text-primary-foreground hover:bg-primary-glow neon-glow font-mono"
                >
                  <Code2 className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-primary text-primary hover:bg-primary/10 font-mono terminal-border"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse-glow"></div>
          </div>
        </div>
      </section>

      {/* About Section - Security Profile */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 animate-fade-up font-mono text-primary text-glow">
              <span className="text-foreground">&gt; </span>whoami
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* About text */}
              <Card className="p-8 bg-terminal terminal-border animate-fade-up space-y-6" style={{ animationDelay: '0.1s' }}>
                <div className="font-mono text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    <span className="text-primary">&gt;</span> Security researcher with 7+ years of experience in 
                    offensive security, threat hunting, and infrastructure hardening.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <span className="text-primary">&gt;</span> Certified Ethical Hacker (CEH), OSCP, and CISSP 
                    holder with expertise in identifying and exploiting vulnerabilities before malicious actors can.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <span className="text-primary">&gt;</span> Passionate about reverse engineering, cryptography, 
                    and building secure systems that withstand modern cyber threats.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <span className="text-primary">&gt;</span> Active CTF competitor and open-source security 
                    tool contributor. When not breaking things, I'm teaching others how to defend them.
                  </p>
                </div>
              </Card>

              {/* Skills grid */}
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <Card className="p-8 bg-terminal terminal-border">
                  <h3 className="text-xl font-semibold mb-6 font-mono text-primary text-glow">
                    <span className="text-foreground">&gt; </span>cat skills.txt
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-background/50 border border-primary/30 rounded text-sm font-mono text-primary-dim hover:border-primary hover:text-primary hover:neon-glow transition-all cursor-default"
                        style={{ animationDelay: `${0.3 + index * 0.03}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - Security Projects */}
      <section id="work" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 animate-fade-up font-mono text-primary text-glow">
              <span className="text-foreground">&gt; </span>ls -la /projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="p-6 bg-terminal terminal-border hover:border-primary transition-all duration-300 neon-glow group cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 border border-primary/30 rounded">
                      {project.icon}
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 font-mono text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded text-xs font-mono"
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

      {/* Contact Section - Communication channels */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 animate-fade-up font-mono text-primary text-glow text-center">
              <span className="text-foreground">&gt; </span>./connect.sh
            </h2>
            
            <Card className="p-12 bg-terminal terminal-border animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-center mb-12">
                <p className="text-xl text-foreground mb-4 font-mono">
                  <span className="text-primary">&gt;</span> Available for security consulting, penetration testing,
                </p>
                <p className="text-xl text-foreground font-mono">
                  <span className="text-primary">&gt;</span> and vulnerability assessments. Let's secure your infrastructure.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:pranay.jain@security.com"
                  className="flex items-center gap-3 px-6 py-3 bg-background/50 border border-primary/30 rounded hover:border-primary neon-glow transition-all duration-300 font-mono text-primary-dim hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
                <a 
                  href="https://github.com/pranayjain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-background/50 border border-primary/30 rounded hover:border-primary neon-glow transition-all duration-300 font-mono text-primary-dim hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/pranayjain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-background/50 border border-primary/30 rounded hover:border-primary neon-glow transition-all duration-300 font-mono text-primary-dim hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Security notice */}
              <div className="mt-12 p-4 bg-primary/5 border border-primary/20 rounded font-mono text-sm text-muted-foreground text-center">
                <span className="text-primary">[NOTICE]</span> All communications are encrypted end-to-end. 
                For sensitive matters, use PGP encryption.
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Terminal style */}
      <footer className="py-12 border-t terminal-border relative">
        <div className="container mx-auto px-6">
          <div className="text-center font-mono">
            <p className="text-muted-foreground mb-2">
              <span className="text-primary">&gt;</span> Built with React, TypeScript & TailwindCSS
            </p>
            <p className="text-muted-foreground">
              <span className="text-primary">&gt;</span> © 2025 Pranay Jain | Cyber Security Expert
            </p>
            <p className="text-muted-foreground text-xs mt-4">
              [root@security]# exit
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
