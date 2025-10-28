export default function Faq() {
return (
<main className="p-6 max-w-2xl mx-auto">
<h1 className="text-2xl font-semibold mb-4 text-center">FAQ da Farmácia</h1>


<section className="space-y-4">
<div>
<h2 className="font-medium text-lg">📅 Qual é o horário de funcionamento?</h2>
<p className="text-gray-700">De segunda a sábado das 8h às 20h, e domingos das 9h às 14h.</p>
</div>


<div>
<h2 className="font-medium text-lg">💊 Vocês fazem entrega?</h2>
<p className="text-gray-700">Sim! Fazemos entregas para toda a cidade. Peça pelo telefone ou WhatsApp.</p>
</div>


<div>
<h2 className="font-medium text-lg">💳 Quais formas de pagamento aceitam?</h2>
<p className="text-gray-700">Aceitamos cartões de crédito, débito, PIX e dinheiro.</p>
</div>


<div>
<h2 className="font-medium text-lg">🧾 Posso comprar com receita?</h2>
<p className="text-gray-700">Sim, aceitamos receitas médicas válidas, inclusive controladas (tarja preta) conforme as normas da Anvisa.</p>
</div>


<div>
<h2 className="font-medium text-lg">📞 Como entro em contato?</h2>
<p className="text-gray-700">Telefone: (11) 4000-1234<br />WhatsApp: (11) 90000-0000<br />Email: contato@farmaciaexemplo.com</p>
</div>
</section>


<footer className="mt-8 text-center text-gray-500 text-sm">
<p>Farmácia Exemplo — Cuidando da sua saúde todos os dias ❤️</p>
</footer>
</main>
);
}