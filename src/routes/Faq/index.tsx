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
    question: "Qual é o prazo de entrega dos pedidos?",
    answer:
      "O prazo de entrega pode variar de acordo com a sua região. Normalmente, as entregas são realizadas entre 3 e 7 dias úteis após a confirmação do pagamento.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartões de crédito, débito, Pix e boleto bancário. Todas as transações são processadas com segurança.",
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
    <section className="min-h-screen flex justify-center items-center py-20 px-4 transition-colors duration-500">
      <div className="w-full max-w-4xl bg-gray-50 dark:bg-slate-900 rounded-3xl shadow-2xl p-10 border border-gray-200 dark:border-slate-700">
        {/* Cabeçalho principal da FAQ */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            {/* Ícone SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="url(#gradient)"
              viewBox="0 0 24 24"
              strokeWidth={0}
              className="w-10 h-10"
            >
              <defs>
                <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#4338ca" />
                </linearGradient>
              </defs>
              <path
                fillRule="evenodd"
                d="M4.5 4.5a9 9 0 0114.79 10.36l1.16 3.49a.75.75 0 01-.95.95l-3.49-1.16A9 9 0 114.5 4.5zm5.25 6.75a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Perguntas Frequentes (FAQ)
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Encontre respostas rápidas para as dúvidas mais comuns sobre o uso da <strong>MegaFarma</strong>.
          </p>
        </div>

        {/* Lista de perguntas */}
        <div className="space-y-5">
          {faqData.map((item, index) => (
            <article
              key={index}
              className="bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2 className="text-lg md:text-xl font-semibold">
                  {item.question}
                </h2>
                <span className="text-gray-500 dark:text-gray-400 text-2xl font-bold select-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Seção final de contato (mantida) */}
        <div className="text-center mt-16 border-t border-gray-200 dark:border-slate-700 pt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Ainda precisa de ajuda?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida.
            Entre em contato conosco e retornaremos o mais rápido possível.
          </p>
          <button
            onClick={handleContactRedirect}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Entrar em contato
          </button>
        </div>
      </div>
    </section>
  );
}
