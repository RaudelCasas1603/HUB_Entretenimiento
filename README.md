# HUB_Entretenimiento# 1. Proyecto de Gestión de Películas y Series

Este proyecto permite gestionar una lista de películas y series, donde el usuario puede agregar a favoritos, ocultar, y ver detalles de cada uno. Los elementos se agrupan por categorías y se almacenan en localStorage para persistencia de datos.

## 2. Requerimientos técnicos

- **HTML**: Para la estructura básica de la aplicación.
- **CSS**: Para la apariencia y diseño (usando Bootstrap para facilitar el diseño responsivo).
- **JavaScript**: Para la interacción y lógica de la aplicación, como la gestión de películas y series.
- **localStorage**: Para almacenar los datos de películas, series y favoritos localmente.
- **Live Server**: Para ejecutar la aplicación en un entorno de desarrollo en tiempo real.

## 3. ¿Cómo instalar?

1. Clona el repositorio en tu máquina:
    
bash
    git clone https://github.com/tu_usuario/nombre_del_repositorio.git


2. Abre el proyecto en tu editor de código preferido.

3. Si tienes **Node.js** instalado, puedes usar **Live Server** para ver el proyecto en el navegador. Solo abre la carpeta del proyecto y ejecuta:
    
bash
    live-server index.html



4. La aplicación debería abrirse en tu navegador y estar lista para usar.

## 4. Mockup 

![Mockup de la aplicación](/imagenes_repositorio/Mockup.png)

## 5. Explicacion del Proyecto

**Inicio:** 
Como pagina de inicio, tenemos una pagina inicial donde le usuario puede ver el catalogo de peliculas y series, donde tiene la opcion de ocultar si no son de su agrado.


![Captura](/imagenes_repositorio/captura1.png)

**Detalles:**
En esta parte tenemos la descripcion de la pelicula a detalle donde se muestra el titulo, descripcion y genero, y en base a eso le genera ciertas recomendaciones al usuario.
![Captura](/imagenes_repositorio/captura2.png)

**Favoritos:**
Por este lado tenemos la seccion de favoritos donde el usuario puede agregar y eliminar las series y peliculas que desee.
![Captura](/imagenes_repositorio/captura3.png)

**Series:**
En este apartado tanto como en el de peliculas se muestran las peliculas y series que hay en el catalogo segun sea la ventana en la cual se encuentre el usuario.

![Captura](/imagenes_repositorio/captura4.png)

**Configuracion:**
Finalmente tenemos el apartado de configuracion donde de manera incial el usuario puede escoger un avatar y cambiar su nombre, pero a futuro se busca que el usuario modifique se contraseña y más datos a detalle.

![Captura](/imagenes_repositorio/captura5.png)

Me gustaria mencionar que como valor agregado la barra de navegacion en todo momento le muestra al usuario en que ventana se muestra, esto con el fin de hacer más comoda su experiencia de usuario. 

## 6. Proceso de desarrollo

1. **Planificación**: Empecé analizando cómo organizar la información de las películas y series en categorías.
2. **Estructura de la página**: Utilicé **HTML** para crear la estructura básica de la página, como el menú y los contenedores para mostrar las películas y series.
3. **Estilo**: Implementé **CSS** para dar estilo a la interfaz, utilizando **Bootstrap** para hacer la página responsiva y fácil de usar.
4. **Funcionalidad**: Programé la lógica en **JavaScript** para manejar las interacciones: ver detalles, agregar a favoritos, ocultar elementos y agrupar por categorías.
5. **Persistencia**: Usé **localStorage** para almacenar las películas, series y sus estados (favoritos, ocultos) para que los datos se mantuvieran incluso después de cerrar el navegador.

## 7. Sprint Review

| Qué salió bien                               | Qué puedo hacer diferente                       | Qué no salió bien                |
|---------------------------------------------|------------------------------------------------|----------------------------------|
| El diseño es limpio y fácil de usar.        | Agregar más funcionalidades interactivas, como filtros o búsquedas. | Hubo un problema con la carga inicial de datos hasta que se interactuó con el enlace. |
| El sistema de favoritos y ocultar funciona bien. | Mejorar el manejo de los estados de favoritos para que se refleje instantáneamente. | Algunas funciones no se actualizan de inmediato en la interfaz después de modificar los datos. |
| El uso de **localStorage** asegura que los datos no se pierdan. | Agregar animaciones o transiciones para mejorar la experiencia de usuario. | La organización de los archivos puede mejorar para hacerla más escalable. |
