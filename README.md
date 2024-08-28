# Todolist APP - Next.js Redux Saga Project

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

Este projeto é uma aplicação web desenvolvida com Next.js, utilizando Redux para o gerenciamento de estado e Jest para testes unitários.

## Sobre

Este projeto foi criado para demonstrar uma arquitetura moderna de frontend usando Next.js Redux-Saga.

## Instalação

1. Clone o repositório:
    ```bash
    cd todo-list
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o projeto:
    ```bash
    npm run dev
    ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Estrutura dos componentes

O padrão do projeto é MVVM, então cada camada é dividida entre layout e lógica.

Ao gerar um Componente, a estrutura básica é esta:
```
├ index.tsx       … camada de layout.
├ Name.model.ts   … camada de lógica. 
├ Name.styles.ts  … camada de estilos.
├ Name.test.ts    … camada de testes.
├ Name.types.ts   … arquivos de interface do componente.
```

## Testes

1. Execute o comando:
    ```bash
    npm run test
    # ou
    npm run test:full
    ```

![image](https://github.com/user-attachments/assets/c4ea11c1-d1d3-482b-91cc-397930ddc04a)

## Notas

- **Variáveis de Ambiente**: Certifique-se de adicionar as variáveis de ambiente reais que sua aplicação requer.
- **Imagens**: Adicione suas imagens de captura de tela no diretório `screenshots` e ajuste os caminhos conforme necessário.
- **Instruções de Contribuição**: Adapte as instruções de contribuição conforme suas necessidades específicas.

Esse `README.md` fornece uma visão geral abrangente do projeto e deve ser útil tanto para desenvolvedores que desejam contribuir quanto para novos usuários que desejam entender e utilizar o projeto.
