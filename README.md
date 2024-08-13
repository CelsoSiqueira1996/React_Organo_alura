# Organograma em React

Este projeto é uma aplicação de organograma desenvolvida com React. Utiliza `useState` para gerenciar o estado, renderização condicional para exibir diferentes partes do organograma com base no estado, e é estruturado com `create-react-app`. A aplicação é composta por componentes reutilizáveis, usa `props` para passar dados entre eles e emprega a desestruturação para tornar o código mais limpo e legível.

## Funcionalidades

- **Visualização de Organograma**: Permite visualizar a estrutura hierárquica de uma organização.
- **Interatividade**: Usa `useState` para permitir que os usuários interajam com o organograma e atualizem a visualização.
- **Renderização Condicional**: Exibe diferentes partes do organograma com base nas interações do usuário e no estado da aplicação.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface do usuário.
- **create-react-app**: Ferramenta para inicialização e configuração do projeto React.
- **Hooks**: Utilização do hook `useState` para gerenciamento de estado.
- **Componentes**: Estrutura modular com componentes reutilizáveis.
- **Props**: Passagem de dados entre componentes.
- **Desestruturação**: Melhoria da legibilidade e simplificação do código.

## Instalação

Para rodar a aplicação localmente, siga os seguintes passos:

1. **Clone o Repositório**:
    ```bash
    git clone git@github.com:CelsoSiqueira1996/React_Organo_alura.git
    ```

2. **Navegue até o Diretório do Projeto**:
    ```bash
    cd organograma-react
    ```

3. **Instale as Dependências**:
    ```bash
    npm install
    ```

4. **Inicie a Aplicação**:
    ```bash
    npm start
    ```
    A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- **src/**
  - **components/**: Contém todos os componentes React.
  - **App.js**: Componente principal da aplicação.
 
- **public/**
  - **index.js**: Ponto de entrada para a aplicação.
