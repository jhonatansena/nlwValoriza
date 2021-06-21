## NLW VALORIZA
Projeto realizado durante a semana do NLW


### DESENVOLVIDO COM

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Yarn](https://yarnpkg.com/)


### Funcionalidades

- Cadastro de usuários
- Cadastro de Tags(elogios possíveis)
- Somente usuário administrador

- Cadastro de elogios
- ID do usuário
- ID da tag
- Data da criação

- Autenticação de usuário
- Gerar token JWT
- Validar usuário logado nas rotas necessárias

- Listagem de usuários
- Listagem de tags
- Listagem de elogios por usuário


### Comandos necessários

> yarn init -y

> yarn add typescript -D (instala o ts apenas em desenvolvimento)

> yarn tsc --init (inicializa o ts)

> yarn add express

> yarn add @types/express -D

> yarn add ts-node-dev -D (converte automaticamente ts para js)

>

### Dicas gerais

1) Comandos úteis:

> yarn tsc (converte ts para js)

> yarn dev (utilizado para rodar o projeto após a instalação do **ts-node-dev**)

2) Configurações package.json para fazer com que o ts-node-dev instalado anteriormente transforme o código ts para js de forma automática

```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
}
```