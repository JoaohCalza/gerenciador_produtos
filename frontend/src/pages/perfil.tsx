import React from 'react';
import { Container } from 'react-bootstrap';

const MainPage: React.FC = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
      <h1>Sobre Mim</h1>
      <br />
      <br />

      <div className="text-background">
        <p><strong>Nome:</strong> João Henrique Calza</p>
        <p><strong>Email:</strong> 198069@upf.br</p>
        <p><strong>LinkedIn:</strong> joaohcalza</p>
        <p><strong>Natural de:</strong> Rodinha, RS</p>

        <p>Estudante de Ciências da computação, estou no 4º semestre. Gosto de programar em backend e estou melhorando minhas habilidades em frotend.
        </p>

        <p>
          O trabalho feito é um aplicativo web e mobile para listar produtos
          organizando em categorias. O aplicativo web possibilita fazer
          operações CRUD em categorias e produtos, também produtos pertencendo
          a cada categoria. O aplicativo mobile possibilita somente operações
          CRUD em produtos sem a opção de categoria.
        </p>
      </div>

      <style>
        {`
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
