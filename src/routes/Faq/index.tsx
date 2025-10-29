import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como posso redefinir minha senha?",
    answer:
      "Você pode redefinir sua senha acessando a página de login e clicando em 'Esqueci minha senha'. Um link de redefinição será enviado ao seu e-mail.",
  },
  {
    question: "Posso alterar meu e-mail de cadastro?",
    answer:
      "Sim, basta acessar as configurações da sua conta e atualizar o endereço de e-mail cadastrado.",
  },
  {
    question: "O sistema funciona em dispositivos móveis?",
    answer:
      "Sim, o sistema é totalmente responsivo e pode ser acessado em smartphones e tablets.",
  },
  {
    question: "Como entro em contato com o suporte?",
    answer:
      "Você pode entrar em contato com o suporte através da página de contato ou enviando um e-mail para suporte@sistemaflow.com.",
  },
];

export default function FaqPage() {
  return (
    <section className="w-full max-w-5xl block m-auto min-h-screen py-10 px-5">
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        Perguntas Frequentes (FAQ)
      </h1>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <article
            key={index}
            className="bg-slate-800 text-white/80 p-5 rounded-lg border border-slate-700 shadow-lg"
          >
            <h2 className="text-lg md:text-xl font-semibold text-white">
              {item.question}
            </h2>
            <p className="text-slate-300 mt-2">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}