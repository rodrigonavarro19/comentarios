# Crud Comentarios Angular - SpringBoot


## Requerimientos

Para compilar y levantar la aplicación se necesita:

- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Maven 3](https://maven.apache.org)
- [Node JS](https://nodejs.org/es/)
- [Angular 13](https://angular.io/)
- Contar con internet para la conexión a la base de datos.  

## Levantar Backend localmente

Existen varias opciones para levantar el back de forma local. Lo más recomendanble es abrir el proyecto con un IDE (eclipse, netbeans, etc...), actualizar las dependencias de Maven y levantar localmente el sistema.

Tiene una conexión a una base de datos MySql que está alojada en [remotemysql.com](https://remotemysql.com). Por lo tanto, no se requiere ninguna configuración adicional.

## Levantar Frontend localmente

Para levantar el proyecto, lo primero que se debe hacer es instalar las dependencias del package.json, Para ello, debe abrir la terminal o ventana de comandos, posicionarse en el directorio del proyecto del Frontend (comentariosFront) y ejecutar el comando:
```shell
npm install
```
Una vez finalizada el proceso anterior, para levantar el proyecto debe ejecutar:
```shell
ng serve -o
```
Cabe destacar que tanto el Backend como el Frontrnd deben estar en el mismo equipo. Si se quiere dejar en diferentes equipos o servidores, se debe configurar los CORS en el Backend y la URL de conexión del Fronend.


