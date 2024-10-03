import React from 'react';
import './ThankYouPage.css'; // Se desejar adicionar estilos

function ThankYouPage() {
    return (
        <div className="thank-you-container">
            <h1 className="text">Obrigado pelo contato</h1>
            <p className="paragrafo">Em breve entraremos em contato!</p>
            <a href="/" className="btn">Home</a>
            <p className="credit">Desenvolvido por: Riquelme dos Santos Pimentel Carvalho Silva RU:4848809</p>
        </div>
    );
}

export default ThankYouPage;
