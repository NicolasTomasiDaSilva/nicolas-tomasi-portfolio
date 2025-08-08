"use client";

import emailjs from "emailjs-com";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaWhatsapp } from "react-icons/fa";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Layers,
  Monitor,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;
    try {
      await emailjs.sendForm(
        "service_suj4kj9",
        "template_83irdif",
        formRef.current,
        "fsJ-aFAClsuBz53lb"
      );
      alert("E-mail enviado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao enviar email.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 font-bold text-xl">Nicolas Tomasi</div>
          <nav className="hidden md:flex flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Sobre
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Habilidades
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projetos
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contato
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Button asChild>
              <Link href={"https://wa.me/5551981615718"} target="_blank">
                Contrate-me
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Desenvolvedor Full-Stack
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transformando ideias em soluções digitais com expertise em
                    Node.js, .NET, Next.js, Flutter e bancos de dados SQL &
                    NoSQL.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="inline-flex gap-1">
                    <Link href={"#projects"}>Ver Projetos</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="inline-flex gap-1"
                    asChild
                  >
                    <Link href={"https://wa.me/5551981615718"} target="_blank">
                      Entre em Contato
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://wa.me/5551981615718"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    <span className="sr-only">WhatsApp</span>
                  </Link>
                  <Link
                    href="mailto:tomasitrabalho@gmail.com"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                  <Link
                    href="https://github.com/NicolasTomasiDaSilva"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nicolastomasidasilva"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <img
                  alt="Avatar de Nicolas Tomasi"
                  className="object-contain w-full h-full"
                  src="/avatar-nicolas-tomasi.png?height=600&width=800"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Sobre Mim
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Quem sou eu
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sou um desenvolvedor full-stack apaixonado por criar soluções
                  digitais completas e eficientes. Com experiência em diversas
                  tecnologias front-end e back-end, posso transformar sua ideia
                  em um produto digital de alta qualidade.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Desenvolvimento Web</h3>
                      <p className="text-muted-foreground">
                        Especializado em criar aplicações web modernas,
                        responsivas e de alto desempenho utilizando Next.js e
                        Node.js.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Desenvolvimento Mobile
                      </h3>
                      <p className="text-muted-foreground">
                        Criação de aplicativos móveis multiplataforma com
                        Flutter, oferecendo experiências nativas para iOS e
                        Android.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Soluções Empresariais
                      </h3>
                      <p className="text-muted-foreground">
                        Desenvolvimento de aplicações robustas e escaláveis com
                        .NET, ideal para soluções empresariais.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full">
                <img
                  alt="Foto de Nicolas Tomasi"
                  className="object-cover w-full h-full"
                  src="/nicolas-tomasi.jpg?height=600&width=600"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                  Habilidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tecnologias
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Domino diversas tecnologias e frameworks para criar soluções
                  completas e eficientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-center text-center p-4">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Front-end</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge>Next.js</Badge>
                    <Badge>Flutter</Badge>
                    <Badge>Figma</Badge>
                    <Badge variant={"secondary"}>Tailwind CSS</Badge>
                    <Badge variant={"secondary"}>Shadcn</Badge>
                    <Badge variant={"secondary"}>Lucide</Badge>
                    <Badge variant={"secondary"}>React</Badge>
                    <Badge variant={"secondary"}>Typescript</Badge>
                    <Badge variant={"secondary"}>Javascript</Badge>
                    <Badge variant={"secondary"}>Zod</Badge>
                    <Badge variant={"secondary"}>HTML</Badge>
                    <Badge variant={"secondary"}>CSS</Badge>
                    <Badge variant={"secondary"}>Dart</Badge>
                    <Badge variant={"secondary"}>MobX</Badge>
                    <Badge variant={"secondary"}>Modular</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-4">
                <CardContent className="p-6">
                  <Layers className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Back-end</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge>Node.js</Badge>
                    <Badge>.NET</Badge>
                    <Badge variant={"secondary"}>Express</Badge>
                    <Badge variant={"secondary"}>Sequelize</Badge>
                    <Badge variant={"secondary"}>Mongoose</Badge>
                    <Badge variant={"secondary"}>Jest</Badge>
                    <Badge variant={"secondary"}>ws</Badge>
                    <Badge variant={"secondary"}>Typescript</Badge>
                    <Badge variant={"secondary"}>Javascript</Badge>
                    <Badge variant={"secondary"}>C#</Badge>
                    <Badge variant={"secondary"}>Entity Framework</Badge>
                    <Badge variant={"secondary"}>AutoMapper</Badge>
                    <Badge variant={"secondary"}>FluentValidation</Badge>
                    <Badge variant={"secondary"}>SignalR</Badge>
                    <Badge variant={"secondary"}>JWT</Badge>
                    <Badge variant={"secondary"}>Swagger</Badge>
                    <Badge variant={"secondary"}>Postman</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-4">
                <CardContent className="p-6">
                  <Database className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Bancos de Dados</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge>PostgreSQL</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>SQLite</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-4">
                <CardContent className="p-6">
                  <Monitor className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">DevOps</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge>Docker</Badge>
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Amazon S3</Badge>
                    <Badge>Amazon EC2</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Projetos Recentes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira alguns dos meus trabalhos mais recentes e relevantes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/em-construção.png?height=400&width=600"
                    alt="Em construção"
                    className="object-cover w-full h-full transition-all hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Back-end Avaliar</h3>
                  <p className="text-muted-foreground mb-4">
                    Projeto pessoal em desenvolvimento, sistema de avaliações,
                    API desenvolvida utilizando Clean Architecture e SOLID.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Node.js</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/controle-de-fila-frontend.png?height=400&width=600"
                    alt="Front-end Controle de fila"
                    className="object-cover w-full h-full transition-all hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Front-end Controle de fila
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Front-end do sistema de controle de filas desenvolvido para
                    empresa Cervantes Tecnologia, UI responsiva e customizável
                    feita apartir do conceito Mobile First, UI possui components
                    do Shadcn, validações com o Zod, autenticação por JWTs,
                    comunicação em tempo real via SignalR e scaneamento de QR
                    Code.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Next.js</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/controle-de-fila-backend.png?height=400&width=600"
                    alt="Back-end Controle de fila"
                    className="object-cover w-full h-full transition-all hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Back-end Controle de fila
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Back-end do sistema de controle de filas desenvolvido para
                    empresa Cervantes Tecnologia, API possui comunicação em
                    tempo real via SignalR, autenticação por JWTs, integração
                    com a api-não oficial do WhatsApp(WuzAPI), envio de e-mails
                    e upload de imagens com o Amazon S3.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">.NET</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://github.com/NicolasTomasiDaSilva?tab=repositories"
                  target="_blank"
                >
                  Ver Mais Projetos
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                  Contato
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Vamos Trabalhar Juntos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estou disponível para projetos freelance. Entre em contato
                  para discutirmos sua ideia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Informações de Contato</h3>
                <p className="text-muted-foreground">
                  Preencha o formulário ou entre em contato diretamente pelos
                  canais abaixo.
                </p>
                <div className="grid gap-4 mt-4">
                  <Link href="https://wa.me/5551981615718" target="_blank">
                    <div className="flex items-center gap-2">
                      <FaWhatsapp className="h-5 w-5 text-primary" />
                      <span>(51) 98161-5718</span>
                    </div>
                  </Link>
                  <Link href="mailto:tomasitrabalho@gmail.com">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>tomasitrabalho@gmail.com</span>
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/nicolastomasidasilva"
                    target="_blank"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-primary" />
                      <span>github.com/nicolastomasidasilva</span>
                    </div>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/nicolastomasidasilva"
                    target="_blank"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span>linkedin.com/in/nicolastomasidasilva</span>
                    </div>
                  </Link>
                </div>
              </div>
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="flex flex-col gap-4 rounded-xl border bg-background p-6">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Descreva seu projeto ou ideia"
                      required
                    />
                  </div>
                  <Button size="lg" type="submit">
                    Enviar Mensagem
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 Nicolas Tomasi. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://wa.me/5551981615718"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <FaWhatsapp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="mailto:tomasitrabalho@gmail.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://www.github.com/nicolastomasidasilva"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nicolastomasidasilva"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
