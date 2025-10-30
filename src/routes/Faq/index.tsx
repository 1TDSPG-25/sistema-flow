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
    <section className="min-h-screen flex justify-center items-center py-16 px-4">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-10">
        <h1 className="text-center text-4xl font-bold text-slate-900 dark:text-white mb-10">
          Perguntas Frequentes (FAQ)
        </h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <article
              key={index}
              className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-5 rounded-xl border border-slate-300 dark:border-slate-700 shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h2 className="text-lg md:text-xl font-semibold">
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
                <p className="text-slate-600 dark:text-slate-300">
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
