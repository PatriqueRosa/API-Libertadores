API de Campeonatos
Esta API permite realizar buscas personalizadas em um banco de dados de campeonatos.

Pré-requisitos
Certifique-se de ter instalado o Node.js e o MySQL no seu ambiente de desenvolvimento.

Instalação
Clone o repositório:
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

Instale as dependências:
npm install

Configure o banco de dados:

Crie um banco de dados MySQL chamado libertadoresdb.
Importe o schema e os dados iniciais usando o arquivo SQL fornecido.
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=**********
DB_DATABASE=libertadoresdb

Uso
A API possui os seguintes endpoints:

GET /campeonatos
Retorna todos os campeonatos cadastrados.
Exemplo:
http://localhost:9000/campeonatos

GET /campeonatos/
Retorna os detalhes de um campeonato específico pelo ID.
Exemplo:
http://localhost:9000/campeonatos/1

GET /campeonatos?ano=xxxx
Retorna os campeonatos de um determinado ano.
Exemplo:
http://localhost:9000/campeonatos?ano=2023

GET /campeonatos?time=nome-do-time
Retorna os campeonatos em que um determinado time foi campeão.
Exemplo:
http://localhost:9000/campeonatos?time=Flamengo

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um PR ou reportar problemas através das issues.

Licença
Este projeto está licenciado sob a MIT License.
