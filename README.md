# Teste_Watson
Para executar esse projeto é necessario inicialmente fazer a instalação do nodeJS pelo link:
https://nodejs.org/en/
Caso esteja usando uma versão do Arch linux como eu, então pode utilizar o comando:
sudo pacman -Sy nodejs-lts-erbium

No caso se estiver feito o download pelo site e instalação pelo site, já virá com o npm. No caso do Arch linux terá que fazer a instalação separadamente, npm se encontra em pacotes AUR, então terá que ter um auxiliar para realizar a instalação, no meu caso gosto de utilizar o yaourt ou pacaur:
pacaur -S npm

Precisamos ter instalado o mysql na maquiná também. No caso do windows é só entrar no site fazer o download do instalador, segue o link:
https://www.mysql.com/downloads/
No caso do Ubuntu, pode ser feito pelo comando:
sudo apt install mysql-server
No caso esteja utilizando Arch Linux existe duas opções, você tem uma versão onde se chama Mariadb, no caso eles fizeram um fork do mysql e melhoraram para rodar no Arch linux, tem a opção de instalar a versão do Oracle que está no AUR:
sudo pacman -Sy mariadb          ou        pacaur -Sy mysql
No caso qualquer um dos dois funciona.

Ao fazer o clone do projeto, é necessario instalar as dependencias utilizadas no projeto, ela pode ser feito de maneira bem simples:
npm install
Esse comando ele vai puxar todas as dependencias que estão listada no nosso arquivo package.json.

Ao finalizar, inicialmente executamos o mysql e criamos um usuario e senha para ser utilizado na nossa aplicação no caso vai ser alterado no em app/config/env.js
No caso de quem estiver no Arch linux, você terá que iniciar o serviço do mysql com o comando:
systemctl start mysqld
Em seguida iremos acessar o banco com o comando:
sudo mysql -u root -p
Para criar um novo usuario com senha, tera que utilizar o comando:
CREATE USER 'novousuario'@'localhost' IDENTIFIED BY 'minhasenha';
Após isso, só deixar em execução o mysql e alterar as credenciais no arquivo env.js

No caso, a função sequelize que utilizei ele cria o database e tabela, toda vez que é iniciado.

Importante que crie uma conta na IBM Watson, ache Text to Speech e pegue a credencial deles, substituindo na pasta app/config/

Para executar nossa aplicação, executamos o arquivo app.js com o comando:
node app.js
ele vai inicialmente criar a tabela de comentário, no caso se tiver alguma já criado, ele irá remover e criar novamente.
Para ver o inicial da página, terá que digitar em um navegador localhost:8081
No caso a porta escolhida pode ser alterado no arquivo app.js
Fiz de um modo que toda vez que inserimos um comentário, ao clicar no botão submit ele alimenta o banco de dados e trás essas informações embaixo da tela com um botão.
Nesse botão é onde colocaremos o Watson para fazer a leitura do texto.

Caso não queira instalar o mysql na maquina, existe a opção de rodar um docker, entra no site do docker baixa ele e cria o docker do mysql com o comando:
""
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql
""
Trocando o some-mysql pelo nome do seu docker e my-secret-pw pelo password do mysql.

Oque está faltando concluir:
Temos a credencial do Watson baixada, porém não foi criado a função para consumir.
Não foi feito o css da página ainda.
