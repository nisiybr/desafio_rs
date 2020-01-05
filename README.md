# Instruções para executar a aplicação
Entrega de Desafio Final do Bootcamp com Node.js, React JS e React Native

Desenvolvido no SO: Windows 10 Home
App Mobile desenvolvido somente para Android, homologado com o emulador Genymotion.

## PostGres SQL no Docker

1 - Iniciar uma instancia do PostGres SQL no Docker:  
```docker run --name gympoint -e POSTGRES_PASSWORD=gympoint -p 5433:5432 -d postgres:11```  
2 - Iniciando o Container: ```docker start gympoint```


## Backend

OBS: Porta utilizada pela API: http://localhost:3151  

1 - Com o console na pasta ../backend/  
2 - Executar o comando ```yarn```, para assim obter a pasta node_modules.  
3 - Executar as migrations do Sequelize : ```yarn sequelize db:migrate```  
4 - Executar os seeds do Sequelize: ```yarn sequelize db:seed:all```  
5 - Inicializar a aplicação backend: ```yarn dev```    


## Front End

1 - Com o console na pasta ../frontend/  
2 - Executar o comando ```yarn```, para assim obter a pasta node_modules.  

## Mobile

1 - Com o console na pasta ../mobile/  
2 - Executar o comando ```yarn```, para assim obter a pasta node_modules.  
