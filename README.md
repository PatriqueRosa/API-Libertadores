# API de Campeonatos - Documentação

Esta API permite realizar buscas personalizadas em um banco de dados de campeonatos. Abaixo estão os campeonatos disponíveis para consulta:

## Dados Disponíveis

| ID  | Campeão              | Vice                    | Ano  |
|----:|----------------------|-------------------------|------|
| 1   | Boca Juniors         | Palmeiras               | 2000 |
| 2   | Boca Juniors         | São Caetano             | 2001 |
| 3   | Olimpia              | Santos                  | 2002 |
| 4   | Boca Juniors         | Santos                  | 2003 |
| 5   | Once Caldas          | Boca Juniors            | 2004 |
| 6   | São Paulo            | Atlético Paranaense     | 2005 |
| 7   | Internacional        | São Paulo               | 2006 |
| 8   | Boca Juniors         | Grêmio                  | 2007 |
| 9   | Liga de Quito        | Fluminense              | 2008 |
| 10  | Estudiantes          | Cruzeiro                | 2009 |
| 11  | Internacional        | Guadalajara             | 2010 |
| 12  | Santos               | Peñarol                 | 2011 |
| 13  | Corinthians          | Boca Juniors            | 2012 |
| 14  | Atlético Mineiro     | Olimpia                 | 2013 |
| 15  | River Plate          | Tigres UANL             | 2015 |
| 16  | Atlético Nacional    | Independiente del Valle | 2016 |
| 17  | Grêmio               | Lanús                   | 2017 |
| 18  | River Plate          | Boca Juniors            | 2018 |
| 19  | Flamengo             | River Plate             | 2019 |
| 20  | Palmeiras            | Santos                  | 2020 |
| 21  | Palmeiras            | Santos                  | 2021 |
| 22  | Flamengo             | Palmeiras               | 2022 |
| 23  | Flamengo             | Atlético Mineiro        | 2023 |

## Uso da API

A API oferece os seguintes endpoints para consulta:

### GET /campeonatos

- Retorna todos os campeonatos cadastrados.

Exemplo de requisição:
http://localhost:9000/campeonatos

GET /campeonatos/
Retorna os detalhes de um campeonato específico pelo ID.
Exemplo de requisição:
http://localhost:9000/campeonatos/1

GET /campeonatos?ano=xxxx
Retorna os campeonatos de um determinado ano.
Exemplo de requisição:
http://localhost:9000/campeonatos?ano=2023

GET /campeonatos?time=nome-do-time
Retorna os campeonatos em que um determinado time foi campeão.
Exemplo de requisição:
http://localhost:9000/campeonatos?time=Flamengo

Configuração do Ambiente
Para configurar o ambiente de desenvolvimento local e usar a API, siga as instruções abaixo:

Clone o repositório:
git clone https://github.com/PatriqueRosa/API-Libertadores
cd nome-do-repositorio

Instale as dependências:
npm install

Configure o banco de dados:

Crie um banco de dados MySQL chamado libertadoresdb.
Importe o esquema do banco de dados e os dados iniciais usando o arquivo SQL fornecido (database.sql).
Configure as variáveis de ambiente no arquivo .env na raiz do projeto:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=********
DB_DATABASE=libertadoresdb

Inicie o servidor da API:
npm start
Agora você pode acessar os endpoints da API para realizar buscas personalizadas no banco de dados de campeonatos.

Este documento fornece uma visão geral dos dados disponíveis, exemplos práticos de como usar a API e instruções detalhadas para configurar o ambiente de desenvolvimento local. Certifique-se de ajustar os detalhes conforme necessário para corresponder ao seu projeto específico.


### Explicação do Documento Combinado

- **Dados Disponíveis**: Tabela que lista os campeonatos armazenados no banco de dados.
- **Uso da API**: Descrição dos endpoints disponíveis com exemplos de como fazer requisições para cada um deles.
- **Configuração do Ambiente**: Instruções detalhadas para configurar o ambiente de desenvolvimento local, incluindo a instalação de dependências, configuração do banco de dados e variáveis de ambiente.

Este README.md combinado proporcionará aos usuários uma compreensão clara dos dados disponíveis e como interagir com sua API para consultar informações sobre campeonatos de futebol. Certifique-se de manter o documento atualizado conforme o desenvolvimento do projeto avança.
