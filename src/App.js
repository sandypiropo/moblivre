import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './Footer'
import emailjs from 'emailjs-com';
import background from './background.jpg';


function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [address, setAddress] = useState(''); // Novo estado para o endereço
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) {
            alert('Por favor, selecione uma imagem para enviar.');
            return;
        }

        console.log('Arquivo selecionado:', file.name);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'moblivre');

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dnbrq7qvo/image/upload`, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Resposta de erro do Cloudinary:', errorData);
                throw new Error('Falha ao fazer upload da imagem: ' + errorData.message);
            }

            const data = await response.json();
            if (data.secure_url) {
                setImageUrl(data.secure_url);
                console.log('URL da imagem:', data.secure_url);
            } else {
                throw new Error('URL da imagem não encontrada na resposta.');
            }
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
            alert('Erro ao fazer upload da imagem: ' + (error.message || 'Erro desconhecido'));
            setImageUrl('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim() || !imageUrl.trim() || !address.trim()) {
            alert("Preencha todos os campos, incluindo a imagem.");
            return;
        }

        const templateParams = {
            name: name,
            email: email,
            address: address,
            message: message,
            imageUrl: imageUrl
        };


        emailjs.send(
            'service_qr25ygs',
            'template_a2cp05n',
            templateParams,
            'dS3uD5ibw4sM9lpsG'
        )
            .then((response) => {
                console.log('Email enviado com sucesso!', response.status, response.text);
                setSuccess(true); // Mostra mensagem de sucesso na tela
            })
            .catch((err) => {
                console.error('Erro ao enviar o email:', err);
                alert('Falha ao enviar o email: ' + (err.text || err.message || 'Erro desconhecido'));
            })
            .finally(() => {
                clearFields(); // Limpa o formulário
                setTimeout(() => {
                    navigate('/thank-you'); // Redireciona após 2s
                }, 2000);
            });
    };


    const clearFields = () => {
        setName('');
        setEmail('');
        setMessage('');
        setImageUrl('');
        setAddress(''); // Limpa o campo de endereço
    };

    return (
        <section className="main-section" style={{
            backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.54), rgba(92, 92, 92, 0.73)), url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
        }}>
            <div className="left-side">
                <h2 className="subtitle">Juntos por uma cidade mais acessível e conectada!</h2>
                <p>Relate a presença de obstáculos e problemas de mobilidade em Salvador-BA.</p>
                <Footer />
            </div>

            <div className="right-side container">
                {/* Logo dentro do formulário */}
                <img src="/logoium.png" alt="Moblivre Logo" className="form-logo" />

                {success && <p className="success-message">Obrigado! Sua mensagem foi enviada com sucesso.</p>}

                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        style={{ flex: 1 }}
                    />

                    <input
                        className="input"
                        type="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite o endereço do local relatado"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                    <textarea
                        className="textarea"
                        placeholder="Descreva o relato..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <input
                        className="input"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <input className="button" type="submit" value="Enviar" />
                </form>

                <p className="credit">Desenvolvido por: Sandy Piropo<br></br>
                    Negócio e Design: Edenilson Oliveira e Priscila Simas</p>
            </div>

        </section>


    );
}

export default App;
