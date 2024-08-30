![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

Este projeto é uma aplicação web desenvolvida com Next.js, utilizando Redux para o gerenciamento de estado e Jest para testes unitários.

### Desktop

| Login           | Lista de Tarefas           | Lista de tarefas com outros status               |
|-------------------------|----------------------------|---------------------------|
| <img width="770" alt="01-Desktop" src="https://github.com/user-attachments/assets/d26cbf6b-b998-421d-be01-9039d06f7b42"> | <img width="768" alt="03-Desktop" src="https://github.com/user-attachments/assets/f83df473-3400-4094-8c1e-a130d0d8a131"> | <img width="770" alt="04-Desktop" src="https://github.com/user-attachments/assets/69fe7512-a6c8-4fa7-99ff-d8f0c806e341"> |

### Mobile

| Login com erro          | Lista de tarefas Concluídas          | Tarefa com status alterado              |
|-------------------------|----------------------------|---------------------------|
| <img width="424" alt="Captura de Tela 2024-08-29 às 22 45 38" src="https://github.com/user-attachments/assets/0d4cc82f-e0ab-4168-9a9b-e46775ebc21f"> | <img width="426" alt="05-Mobile" src="https://github.com/user-attachments/assets/bfd4cc83-bf8e-411f-9428-782133aab162"> | <img width="424" alt="06-Mobile" src="https://github.com/user-attachments/assets/76bbc484-0d4e-4baa-bb70-6b5a55319972"> |


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
