
# <img width="585" height="129" alt="logoium" src="https://github.com/user-attachments/assets/79f683b0-5fc4-4c98-9a37-8a1abae7facc" />

## 🌐 [ACESSE NOSSO MVP](https://moblivre.vercel.app)

**Projeto de Hackathon**  
**Equipe:** Edenilson Oliveira, Priscila Simas e Sandy Piropo  

---

## Resumo
O **MOBLIVRE** é uma iniciativa para **melhorar a acessibilidade urbana em Salvador**, especialmente para pessoas com deficiência (PCDs). A plataforma permite que cidadãos reportem obstáculos urbanos, como calçadas inadequadas, falta de rampas e ausência de piso tátil, de forma **rápida e prática**, utilizando **fotos, descrição e endereço do local**.

<img width="1297" height="632" alt="imggg" src="https://github.com/user-attachments/assets/461bc8ab-9218-4667-b2cc-6cdad2cd74bd" />


As denúncias são armazenadas em um banco de dados e podem ser utilizadas para gerar **relatórios de prioridade**, aumentar a **visibilidade do problema** e pressionar o poder público por melhorias.

O projeto beneficia também **idosos, gestantes, crianças, pessoas com mobilidade temporária reduzida** e outros grupos que dependem de ambientes acessíveis.

---

## Funcionalidades Principais
- **Formulário interativo:** coleta nome, email, endereço do local, descrição do relato e imagem do obstáculo.  
- **Upload de imagens:** integração com **Cloudinary** para armazenar fotos de forma segura e gerar URLs públicas.  
- **Envio de email automatizado:** utiliza **EmailJS** para enviar as denúncias diretamente para a equipe ou autoridades.  
- **Feedback ao usuário:** mensagem de confirmação após envio bem-sucedido.  
- **Classificação de dados:** permite futura análise de risco e priorização das denúncias.  
- **Design responsivo:** layout em duas colunas com background esmaecido, adequado para desktops e dispositivos móveis.  

---

## Tecnologias Utilizadas
- **ReactJS**: interface do usuário e gerenciamento de estado com `useState`.  
- **EmailJS**: envio de emails sem backend próprio.  
- **Cloudinary**: upload e armazenamento de imagens.  
- **React Router (`useNavigate`)**: redirecionamento após envio do formulário.  
- **CSS moderno**: layout em duas colunas, background com gradiente, campos estilizados e responsivos.
- <img width="1321" height="281" alt="exemplo" src="https://github.com/user-attachments/assets/e8640ee5-614c-4146-ba68-00d1181db25f" />
- <img width="394" height="343" alt="image" src="https://github.com/user-attachments/assets/9d16035e-9d59-4d05-9dea-bd7ed340f8b3" />

Exemplo de imagem: 
![falta-de-acessibilidade-na-cidade](https://github.com/user-attachments/assets/b39f2bac-fbfe-4a0d-8615-21afd6e131dc)

---

## Como Funciona
1. O usuário preenche todos os campos do formulário:
   - Nome
   - Email
   - Endereço do local relatado
   - Descrição do relato
   - Foto do obstáculo
2. Ao enviar o formulário:
   - A imagem é enviada para o Cloudinary.
   - A URL gerada é incluída nos parâmetros do email.
   - EmailJS envia a denúncia para os destinatários definidos.
3. Após envio, o usuário recebe uma mensagem de **confirmação** e é redirecionado para uma página de agradecimento.

---

## Diferenciais
- **Coleta de endereço e foto:** permite georreferenciamento futuro e maior precisão nos relatos.  
- **Sistema de feedback em tempo real:** o usuário sabe imediatamente que a denúncia foi enviada.  
- **Pronto para análise de dados:** possibilita classificação de risco e priorização de intervenções.  
- **Foco social e inclusivo:** atende PCDs, idosos, gestantes, crianças e qualquer pessoa que dependa de acessibilidade.  

---

## Estágio Atual
- Protótipo funcional implementado em ReactJS.
- Testes preliminares com usuários confirmam **usabilidade e relevância** da ferramenta.
- Layout responsivo e formulário totalmente funcional, integrado com Cloudinary e EmailJS.

---

## Equipe
- **Desenvolvimento e Frontend:** Sandy Piropo  
- **Negócio e Design:** Edenilson Oliveira e Priscila Simas  

---
