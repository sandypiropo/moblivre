import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
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
        formData.append('upload_preset', 'salvadores'); // Altere para seu upload preset correto

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dxdtygjnc/image/upload`, {
                method: 'POST',
                body: formData
            });

            // Verificando a resposta da API
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

        // Verifica se todos os campos estão preenchidos
        if (!name.trim() || !email.trim() || !message.trim() || !imageUrl.trim()) {
            alert("Preencha todos os campos, incluindo a imagem.");
            return;
        }

        const templateParams = {
            name: name,
            email: email,
            message: message,
            imageUrl: imageUrl
        };

        emailjs.send('service_gvc2hwm', 'template_gk8gpe5', templateParams, 'zgMjn0TwQAXcc12WI')
            .then((response) => {
                console.log('Email enviado com sucesso!', response.status, response.text);
                setSuccess(true); // Define success como true
            })
            .catch((err) => {
                console.error('Erro ao enviar o email:', err);
                alert('Falha ao enviar o email: ' + (err.text || err.message || 'Erro desconhecido'));
            })
            .finally(() => {
                clearFields();
                setTimeout(() => {
                    navigate('/thank-you');
                }, 2000);
            });
    };

    const clearFields = () => {
        setName('');
        setEmail('');
        setMessage('');
        setImageUrl('');
    };

    return (
        <section>
            <h2>PROJETO SALVADORES</h2>
            <p>RELATE A PRESENÇA DE LIXO E ENTULHO NAS RUAS DE SALVADOR-BA E ANEXE FOTOS!</p>

            <div className="container">
                <h2 className="title">Contato</h2>

                {success && <p className="success-message">Obrigado! Sua mensagem foi enviada com sucesso.</p>}

                <form className="form" onSubmit={handleSubmit}>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    
                    <input 
                        className="input"
                        type="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <textarea 
                        className="textarea"
                        placeholder="Digite sua mensagem..."
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
            </div>

            <p className="credit">Desenvolvido por: Riquelme dos Santos Pimentel Carvalho Silva RU:4848809</p>
        </section>
    );
}

export default App;
