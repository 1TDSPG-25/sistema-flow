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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-5xl block m-auto min-h-screen py-10 px-5">
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        Perguntas Frequentes (FAQ)
      </h1>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <article
            key={index}
            className="bg-slate-800 text-white/80 p-5 rounded-lg border border-slate-700 shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {item.question}
              </h2>
              <span className="text-slate-400 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-slate-300">{item.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
