// Trabalhando em cima da pasta funcionário

/* Apagando o arquivo node-mudules, temos o descritor, que é o arquivo package.json e dentro dele tem a definição daquilo que é dependência do projeto.
No caso, usado na aula funcionarios o "axios".

Dentro do package.json, no main(principal), mudamos de index.js para a pasta que queremos trabalhar, nesse caso funcionarios.js.

Dentro do package.json, no objeto "scripts", criamos um script com o nome start(é uma palavra reservada). No start passamos "nodemon". ( "start": "nodemon")
obs:(nodemon já foi instalado global ( npm i -g nodemon), estará acessível em todo o projeto).

No terminal, para recriar a pasta node_modules, é so fazer os passos acima e no terminal digitar o comando npm i ( npm i ).
Instalará a pasta node_modules, axios e recriar as dependências. Por isso que não é necessário salvar ou persistir node_modules no repsitório.

Para startar meus scripts que não tem atributos/palavras reservadas e so colocar " run ": npm run MeuScript Ex:( "Meuscript": "ExExEx") npm run MeuScript.
*/