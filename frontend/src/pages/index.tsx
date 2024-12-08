import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';

const MainPage: React.FC = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
      <h1>Gerencie seus produtos com facilidade e eficiência</h1>

      <br />
      <br />

      <Tabs defaultActiveKey="intro" id="product-management-tabs" className="mb-3 custom-tabs">
        <Tab eventKey="intro" title="Introdução">
          <div className="text-background">
            <p>
              Nosso site de gerenciamento de produtos é uma plataforma poderosa e intuitiva que permite aos usuários gerenciar seu catálogo de produtos de forma fácil e eficiente. Com recursos avançados de organização, você tem controle total de seu inventário. Em nossa página de funcionalidades, você encontrará todos os recursos disponíveis para otimizar ainda mais o gerenciamento do seu inventário.
            </p>
            <p>
              A interface amigável proporciona uma experiência fluida, permitindo que você se concentre no que realmente importa: o crescimento do seu negócio. Tudo isso com segurança, flexibilidade e integração total com suas necessidades.
            </p>
          </div>
        </Tab>

        <Tab eventKey="features" title="Funcionalidades">
          <div className="text-background">
            <p>Com o sistema, você pode:</p>
            <ul>
              <li>Adicionar novos produtos ao seu inventário.</li>
              <li>Editar informações de produtos existentes.</li>
              <li>Excluir produtos obsoletos ou não disponíveis.</li>
              <li>Organizar produtos por categorias e gerenciar preços.</li>
            </ul>
          </div>
        </Tab>

        <Tab eventKey="contact" title="Contato">
          <div className="text-background">
            <p>Para mais informações ou suporte, entre em contato conosco:</p>
            <p>
              Email: <a href="mailto:suporte@produto.com">suporte@produto.com</a>
            </p>
            <p>Telefone: (11) 1234-5678</p>
          </div>
        </Tab>
      </Tabs>

      <style>
        {`
          .custom-tabs .nav-link {
            color: #333 !important;
            font-weight: normal;
            font-size: 1.1rem;
            padding: 10px 20px;
            transition: all 0.3s ease;
          }

          .custom-tabs .nav-link:hover {
            background-color: #f0f0f0;
            border-radius: 5px;
          }

          .custom-tabs .nav-link.active {
            color: #fff !important;
            background-color: #28a745 !important;
            font-weight: bold;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .text-background {
            width: 100%;
            background-color: #ffffff; /* Fundo branco suave */
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra */
            margin-top: 20px;
            border: 1px solid #e0e0e0;
            text-align: left;
          }

          .text-background p, .text-background ul {
            font-size: 1.3rem; /* Tamanho maior do texto */
            line-height: 1.6;
            color: #34495e; /* Texto cinza escuro */
          }

          .text-background a {
            color: #28a745; /* Alterado para verde */
            text-decoration: none;
          }

          .text-background a:hover {
            text-decoration: underline;
          }

          .text-background ul li {
            font-size: 1.3rem;
            line-height: 1.6;
            color: #34495e;
          }
        `}
      </style>
    </Container>
  );
};

export default MainPage;
