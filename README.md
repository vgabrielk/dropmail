>This is a challenge by [Coodesh](https://coodesh.com/)
# Dropmail



## Descrição <a name = "about"></a>

O E-mail Temporário é uma solução projetada para prevenir hackers e spam ao realizar ações que envolvem seu endereço de e-mail pessoal. Com o e-mail gerado, você poderá receber mensagens normalmente e proteger sua privacidade.

![image](https://github.com/vgabrielk/dropmail/assets/76710844/5a4d15cf-4acb-4374-988f-c38867aa3644)



## Tecnologias utilizadas

- React + vite
- Redux
- Axios
- Graphql
- Material UI
- Cors.sh





## Iniciando <a name = "getting_started"></a>

Estas instruções fornecerão uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste.

## Pré-requisitos

O que você precisa ter instalado em sua máquina

```
- Node 14+
- Npm
- Git 
- Docker
```

## Clone o repositório 

```git
ssh >
git clone git@github.com:vgabrielk/dropmail.git
```

```git
https >
git clone https://github.com/vgabrielk/dropmail.git
```

## Variáveis de ambiente

### Para rodar esse projeto, você vai precisar adicionar a seguinte variável de ambiente ao seu arquivo .env

`VITE_APP_CORS_TOKEN=<temp_token>`


### Para obter esse token que é necessário para resolver um problema de Cors presente na API do Dropmail, será preciso acessar o site https://cors.sh/.

### Na página inicial terá um campo e-mail para você receber o token temporário e adicionar a variável de ambiente ao projeto.


## Rodando projeto localmente com docker

### Na pasta raiz do projeto rode o seguinte comando para fazer o build
```shell
  sudo docker compose build
```
### Após terminar o build, rode esse comando :
```shell
  sudo docker compose up -d
```

### Agora precisaremos dos 3 primeiros dígitos do container para que possamos ler os logs e ver o endereço IP que está rodando nosso container
```shell
  sudo docker ps
```
```shell
  sudo docker logs <container_number>
```
### Deverá aparecer um resultado parecido com esse : 
```shell 
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://172.20.0.2:5173/
```
#### Agora só colar um desses links em um browser para acessar o projeto, caso o primeiro não funcione teste o segundo. <br><br>

## Deploy
[![Deploy](https://img.shields.io/badge/coodesh_chalenge-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://dropmail-truckpag.netlify.app/)

## Link do vídeo de apresentação : 
https://github.com/vgabrielk/dropmail
