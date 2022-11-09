# TimeWeb-Frontend-Template
​
_Template para la generación de Proyectos de FrontEnd de TimeWeb_
​
## Comenzando
​
_Todos los proyectos de FrontEnd son desarrollados utilizando react y typescript._

_Mira **Deployment** para conocer como desplegar el proyecto._
​
​
###
​
### Pre-requisitos 
​
_Instalaciones necesarias_
​
```
Docker: https://docs.docker.com/
```
​
### Comandos
​
_Comandos a ejecutar_
​​
```
yarn
yarn dev
yarn build
```

​
## Ejecutando las pruebas ⚙️
​
_La pruebas de Frontend a utilizar son E2E y se usa la herramienta **Cypress**._
​
​_Comandos para ejecutar pruebas_ 

```
yarn run cypress-open
```

​
## Construido con ��️

​
* [React](https://es.reactjs.org/docs/getting-started.html)
* [Vite](https://vitejs.dev/guide/)
​
​
## Autores ✒️
​
_Desarrolladores de Templates y FrontEnd_
​
Departamento de desarrollo de TimeWeb. 

_Desarolladores Front End_
* **Karol Olguín** - [KarolOlHe](https://github.com/KarolOlHe)
* **Eduardo Acosta** - [EduDAC](https://github.com/EduDAC)
​
 
​
## Comandos para dockerizar el proyecto 
 
 ```
  docker build -t reactapp .
  docker run -d -p 8080:80 --name myreactapp reactapp
 ``` 