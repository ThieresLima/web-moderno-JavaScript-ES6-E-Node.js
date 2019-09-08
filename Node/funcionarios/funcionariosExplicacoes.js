// npm init    : vai habilitar um wizard de perguntas, para difinir como vai ser o meu arquivo package.json

// nmp init -y  : vai responder sim para todas as perguntas e automaticamente cria o package.json

/* Para instalar uma área de dependência no package.json utiliza o npm i --save + o nome da dependência,
  npm i --save axios
*/

// Instalado na aula package.json o axios: npm i --save axios

/* 1° npm init -y
   2° npm --save axios

/* "axios": "^0.19.0" : ^ (circunflexo) indica que pode ir para próxima versão do "meio".
 Ex: "^0.19.0" para "^0.20.0". Mas so vai ate "^0.99.0". Não permite que vá para Ex: "^1.0.1" ".  (Só permite que aumente o meio)

   "axios": "~0.19.0" : ~ (Til) indica que so pode ir para próxima versão do "final".
    Ex: "axios": "~0.19.0" para "^0.19.9". Não permite que vá para Ex: "~0.20.0".  (Só permite que aumente o final)

    "axios": "0.19.0" : Se tiar o ^ e o ~ . Significa que só vai permitir essa versão. Também poderia ser como está abaixo ->
     ( poderia fazer isso colocando (npm install --save-dev axios@0.19.0 -E) : Dependencia que são necessária apenas em desenvolvimento; e não em produção.

O arquivo: package-lock.json, deve ir para o repositório. Ele descreve de forma precisa a versão que foi baixa. ->
 Se este arquivo estiver presente ele não vai atualizar. Ele vai pegar exatamente a versao que foi baixada.
 (É uma forma de garantir que vai pegar a mesma versão)
*/