
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

export default function App() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Elvison Victor</h1>
        <p className="text-xl text-gray-600">
          Software Engineer | React | Liferay 7.4
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="mailto:elvisonvictorfc@gmail.com" className="flex items-center gap-1">
            <Mail className="w-4 h-4" /> elvisonvictorfc@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/elvison-victor-a487a1106"
            target="_blank"
            className="flex items-center gap-1"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Sobre Mim</h2>
        <p className="text-gray-700">
          Engenheiro de Software experiente com expertise em Liferay 7.4 e React JS. Com
          forte domínio em JavaScript, TypeScript, Java, PHP e MySQL, desenvolvo soluções sob
          medida que agregam valor ao negócio do cliente.
        </p>
      </section>

      {/* Habilidades */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Habilidades</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>React JS</li>
          <li>JavaScript / TypeScript</li>
          <li>Liferay 7.4</li>
          <li>Java</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>Git & GitHub</li>
          <li>Jira</li>
        </ul>
      </section>

      {/* Experiência */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experiência</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Liferay</h3>
              <p className="text-sm text-gray-600">Engenheiro de Software | Jul 2022 - Atual</p>
              <p className="mt-2 text-gray-700">
                Desenvolvimento de soluções em Liferay e React JS, com foco em aplicações web
                modernas, escaláveis e personalizadas para os clientes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Raj Tecnologia Ltda</h3>
              <p className="text-sm text-gray-600">Desenvolvedor de Software | Ago 2021 - Jul 2022</p>
              <p className="mt-2 text-gray-700">
                Desenvolvimento e manutenção de sistemas ERP com foco em grandes indústrias.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">EspaçoTec EADTec - UFRPE</h3>
              <p className="text-sm text-gray-600">Estagiário | Mar 2021 - Jul 2021</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Colégio Damas</h3>
              <p className="text-sm text-gray-600">Estagiário de TI | Nov 2020 - Mar 2021</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">SEPLAG-PE</h3>
              <p className="text-sm text-gray-600">Estagiário de TI | Mar 2019 - Mar 2021</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Formação */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Formação</h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            <strong>UFRPE</strong> – Ciência da Computação (2016 – 2021)
          </li>
          <li>
            <strong>Fatec-PE</strong> – Ciência da Computação (2015 – 2016)
          </li>
          <li>
            <strong>Senai Santo Amaro</strong> – Técnico em Eletromecânica (2012 – 2013)
          </li>
        </ul>
      </section>
    </main>
  );
}
