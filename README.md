<p align="center">
<img src="./logo.svg" width="50%"><br>
🏡 Renaissance é um web-app de gestão de condomínios, com o objetivo de melhorar a usabilidade do morador, contribuindo assim para a rápida execução de suas tarefas.
</p>
<br>
<img src="mockup.png">

## 🚀 OBJETIVOS
Aprimorar o app existente do condomínio Renaissance Residence Club, corrigindo falhas de segurança, usabilidade, desempenho e design.

## 🎲 DESCRIÇÃO DO PROJETO
Projeto desenvolvido para a cliente Tamires, cuja nossa equipe, denominada <b>A próxima microsoft</b>, é composta pelos seguintes integrantes:
<ul>
    <li>Ana Carolina Clark Roriz (Designer/Revisora)</li>
    <li>Pedro Henrique Pontes Aguiar (Designer/Arquiteto da informação/Atendimento)</li>
    <li>Reinaldo da Silva Nascimento (Desenvolvedor Front-end/Líder)</li>
    <li>Antônio Guilherme do Nascimento Pereira (Desenvolvedor Back-end/Coordenador de testes)</li>
</ul> 

A aplicação no geral seguirá o padrão REST, do contrário ao tipo MVC que estava sendo usada pelos moradores, o qual não estava tendo uma boa performance, além de pouco intuitivo por conta do design. 

## 💻 TECNOLOGIAS

### Protótipo
<ul>
    <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" height="30">
    <p>Link do protótipo: <a href="https://www.figma.com/file/m2kd7e5Q595obgfMw0oyyB/Projeto-Renaissance?node-id=0%3A1 ">Figma</a></p>
</ul>

### Front-end
<ul>
    <img src="https://appmasters.io/static/typescript-logo-26cc95f255ccb936d154b43614f61602.png" height="30">
    <img src="https://appmasters.io/static/47ce6e77f039020ee2e76a10c1e988e9/acf26/react.webp" height="30">
    <img src="https://tusharkandpal.github.io/img/bootstrap.png" height="30">
    <img src="https://andrewsmithdeveloper.com/img/sass-new.4c1dd90f.png" height="30">
    <img src="https://user-images.githubusercontent.com/3025322/87547253-bf050400-c6a2-11ea-950a-280311bc6cc8.png" height="30">
    <img src="https://images.contentful.com/34rjphroaymg/3gzGgvOT8skY6kUaoMUGUq/8e1f2c9d41a9d91baa53ab90b017ea87/webpack.svg" height="30">
</ul>

### Back-end
<ul>
    <img src="https://appmasters.io/static/typescript-logo-26cc95f255ccb936d154b43614f61602.png" height="30">
    <img src="https://cdn.worldvectorlogo.com/logos/knex-1.svg" height="30">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" height="30">
</ul>

### IDE
<ul>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" height="30">
</ul>

### Teste de API
<ul>
    <img src="https://user-images.githubusercontent.com/2575745/67964810-4d9a2980-fbd7-11e9-8cf7-661ded187ee6.png" height="30">
    <img src="https://miro.medium.com/max/1024/0*8mnWon1DYLVV5l_y.png" height="30">
</ul>

### Diagrama de processos
<ul>
    <img src="https://store-images.s-microsoft.com/image/apps.14142.2ec57164-ba5b-42ee-8253-ade72ca74c8d.e8efbcc8-e27f-4682-9321-eb111eb3bc68.950e1c22-0dd9-4079-807b-145ecdb6df9c.png" height="30">
    <p>Link do diagrama: <a href="https://drive.google.com/file/d/1yJaVmnmJD9mrgcHU5X1R0mkqc7WP1q-r/view">Draw.io</a></p>
</ul>

### Deploy
<ul>
    <img src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67" height="30">
    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGmNZMDOpmMQg/company-logo_200_200/0/1519905610801?e=2159024400&v=beta&t=D5lu9rTbQ_aW1ubme8GIq_QhKIm8WTiXTtoBlEHPcA8" height="30">
</ul>

## 🚧 MAPEAMENTO DE FUNCIONALIDADES / STATUS DO PROJETO(100%)

| Requisitos | Descrição | Função | Arquivo | Status
| --- | --- | --- | --- | --- |
| RF0001 | Autenticação de usuário. Utilizando a autenticação por JWT, o usuário informa seu email e senha de cadastro, em seguida o sistema retorna dados contendo as informações do usuário e um token que será utilizado no cabeçalho de cada requisição, além de fazer a distinção entre administrador e condômino. Este token possui tempo de expiração de 1 hora e, após isso, é necessário fazer uma nova solicitação| handleLogin() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Login/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0002 | Cadastrar usuários. Somente os administradores poderão realizar o cadastro de usuários devendo informar nome, apartamento, cpf, numero de telefone, data de nascimento, email e senha | handleCreateUser() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Admin/RegisterResident/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0003 | Listar usuários. Os administradores poderão observar quais são os usuário cadastrados | listingUsers() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Admin/RegisterResident/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0004 | Listar reservas dos usuários. Os administradores poderão observar todas as reservas e os detalhes de cada reserva como: quem realizou e o apartamento de quem realizou. | listingReserves() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Admin/Reserves/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0005 | Upload de documentos. Os administradores poderão fazer upload de documentos que serão distribuidos para todos os condôminos como: Regras do condomínio, comunicados e atas de reunião | addDocuments() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Admin/Documents/index.tsx">index.tsx</a> | <li align="center">- [x] </li> | 
| RF0006 | Esqueci minha senha. Caso o usuário tenha esquecido sua senha, será solicitado para ele digitar o email de cadastro, ao confirmar, um email contendo um link para redefinição de senha será enviado para seu email e, ao clicar no link, o usuário será redirecionado para uma página de redefinição de senha | handleRedefinePassword() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/ResetPassword/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0007 | Meus dados. Os condôminos poderão consultar os dados fornecidos no momento do cadastro com o administrador. Sendo que, destes, alguns poderão ser editados diretamente pelo usuário como: email, senha e telefone. O restante como: nome, apartamento, cpf e data de nascimento, só podem ser alterados pelo administrador. | useAuth() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Client/MyData/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0008 | Alterar email. Os condôminos poderão alterar o email de cadastro, informando, primeiramente, a senha de acesso, em seguida, redirecionando para uma tela de redefinição de email. | resetEmail() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Client/MyData/Email/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0009 | Alterar número de telefone. Os condôminos poderão alterar o número de telefone, um modal se abre para que a pessoa possa alterar o telefone. | resetPhone() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Client/MyData/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0010 | Fazer reservas. Os condôminos poderão efetuar reservas nos espaços disponiveis no condomínio, cada espaço possui suas regras como horario de inicio e fim, limites de reserva por horário | handleCreateReserve() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Client/Reserves/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0011 | Listar reservas. Os condôminos poderão observar quais reservas eles fizeram e os detalhes como espaço, data e horario. | listingUserReserves() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Client/Reserves/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0012 | Excluir reservas. Os condôminos poderão excluir as reservas que eles realizaram | handleDeleteReserve() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/8ad0d7b0d7/src/contexts/deleteReserveContext.tsx">deleteReserveContext.tsx</a> | <li align="center">- [x] </li> |
| RF0013 | Download de documentos. Os condôminos poderão realizar o download de documentos oficiais como regras do condomínio, comunicados e atas de reunião| getDocuments() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/8ad0d7b0d7/src/pages/Client/Documents/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |

## ✅ COMO UTILIZAR?
Utilize as credenciais a seguir para entrar como administrador:
- email: teste1@gmail.com
- senha: ####56567687879

Ou se preferir entrar como morador utilize:
- email: reinaldosn2016@gmail.com
- senha: 12345678

Para baixar o apk <a href="https://drive.google.com/file/d/11hmCnLAXYwSvpb2P4RUZZ9MjIy7MoLmg/view?usp=sharing">clique aqui</a>

<p>OBS: precisa habilitar a opção <b>manter-me conectado</b> para entrar, por enquanto :)</p>
