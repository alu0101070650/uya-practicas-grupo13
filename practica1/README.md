# Práctica 1: Protocolo HTTP

|                                            | http://www.gobiernodecanarias.org/istac/api/ | http://www3.gobiernodecanarias.org/sanidad/scs/gc/18/Cita_Previa/index.html                                        |
|--------------------------------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| ¿Qué peticiones desencadena la consulta?   | ![peticiones](https://github.com/alu0101070650/uya-practicas-grupo13/blob/master/practica1/peticiones-istac.png) | ![peticiones](https://github.com/alu0101070650/uya-practicas-grupo13/blob/master/practica1/peticiones-sanidad.png) |
| ¿Qué tipo de petición estás realizando?    | Una petición GET a http://www.gobiernodecanarias.org/istac/api/ | Una petición GET a http://www3.gobiernodecanarias.org/sanidad/scs/gc/18/Cita_Previa/index.html                     |
| ¿Qué código de estatus devuelve?           | 200                                          | 200                                                                                                                |
| ¿Qué DNS tiene el servidor?                | www.gobiernodecanarias.org                   | www3.gobiernodecanarias.org                                                                                        |
| ¿Qué IP tiene tiene el servidor?           | 93.188.136.129                               | 93.188.137.126                                                                                                     |
| ¿La página tiene alguna cookie?, ¿Cuáles?  | No establece ninguna cookie            | No establece ninguna cookie                                                                                        |
| ¿Qué idioma acepta?                        | en_US (ingles)                                             | en_US (ingles)                                                                                                     |
| Alguna línea de código JavaScript          | No ejecuta JavaScript                                | `if("undefined"==typeof jQuery)` (bootstrap.js)                                                                      |
| Alguna línea de código CSS que se aplique  | `.section .der{float:right}` (istac.css)                                       | `border-bottom: 1px solid #e5e5e5;` (styles.css)                                                                     |
| Alguna línea de código HTML que se aplique | `<h1>Catálogo de API de eDatos</h1>` (index.html)                                              | `<div class="container" style="padding-top:10px;">` (index.html)                                                     |


