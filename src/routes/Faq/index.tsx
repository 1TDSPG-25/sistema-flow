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
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Aceitamos cartões de crédito, débito, Pix e boletos bancários. O pagamento é processado de forma segura por parceiros certificados.",
  },
  {
    question: "Como acompanho minha entrega?",
    answer:
      "Após a confirmação do pagamento, você receberá um código de rastreio por e-mail. É possível acompanhar o status diretamente na área do cliente.",
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
      <div className="w-full max-w-4xl rounded-3xl shadow-2xl p-10 border border-gray-300 dark:border-gray-700">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="url(#gradient)"
              viewBox="0 0 24 24"
              strokeWidth={0}
              className="w-10 h-10 drop-shadow-md"
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
          <h1 className="text-4xl font-extrabold mb-3">Perguntas Frequentes (FAQ)</h1>
          <p className="max-w-2xl mx-auto opacity-80">
            Encontre respostas rápidas para as dúvidas mais comuns sobre o uso da{" "}
            <strong>MegaFarma</strong>.
          </p>
        </div>

        {/* Lista de perguntas */}
        <div className="space-y-5">
          {faqData.map((item, index) => (
            <article
              key={index}
              className="p-6 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2 className="text-lg md:text-xl font-semibold leading-snug">
                  {item.question}
                </h2>
                <span className="text-2xl font-bold select-none opacity-70">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="leading-relaxed opacity-90">{item.answer}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Seção de contato */}
        <div className="text-center mt-16 border-t border-gray-300 dark:border-gray-700 pt-10">
          <h2 className="text-2xl font-semibold mb-3">Ainda precisa de ajuda?</h2>
          <p className="mb-8 max-w-xl mx-auto opacity-80">
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
