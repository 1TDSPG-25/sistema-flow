import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactRedirect = () => {
    navigate("/contato");
  };

  return (
    <section className="min-h-screen flex justify-center items-center py-16 px-4 transition-colors duration-500">
      <div className="w-full max-w-4xl bg-gray-50 dark:bg-slate-900 rounded-3xl shadow-2xl p-10 border border-gray-200 dark:border-slate-700">
        <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10">
          Perguntas Frequentes (FAQ)
        </h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <article
              key={index}
              className="bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 p-5 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h2 className="text-lg md:text-xl font-semibold">
                  {item.question}
                </h2>
                <span className="text-gray-500 dark:text-gray-400 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Botão de suporte */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleContactRedirect}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300 shadow-md"
          >
            Fale com o suporte
          </button>
        </div>
      </div>
    </section>
  );
}
