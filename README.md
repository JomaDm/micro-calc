# Proyecto de Microservicios en NestJS: Calculadora Matemática

Este proyecto utiliza NestJS para implementar una arquitectura de microservicios dedicada a realizar cálculos matemáticos, dividiendo las responsabilidades en tres niveles: cálculos básicos, medios y complejos.

## Justificación

La división en tres microservicios obedece a los siguientes objetivos:

1. **Modularidad:** Separar las responsabilidades según el nivel de complejidad facilita el mantenimiento y permite escalar cada servicio de forma independiente.
2. **Escalabilidad:** Servicios como los cálculos básicos, que probablemente reciban más solicitudes, pueden escalarse sin afectar los cálculos más complejos.
3. **Especialización:** Cada microservicio puede optimizarse y personalizarse para las necesidades específicas de su nivel de cálculos.
4. **Aislamiento de fallos:** Si un microservicio experimenta problemas, los otros niveles seguirán funcionando, garantizando mayor disponibilidad.

### Microservicios

1. **Cálculos Básicos:**
   - Suma, resta, multiplicación y división.

2. **Cálculos Medios:**
   - Calculos que requieren mas procesamiento que los cálculos básicos

3. **Cálculos Complejos:**
   - Cálculos que su complejidad algoritmica puede crecer a tal grado que afecte el rendimiento del sistema

Cada microservicio está implementado como un proyecto independiente de NestJS con su propia lógica y dependencias.

---

## Ejecución en Local con Docker-Compose

El proyecto incluye un archivo `docker-compose.yml` para facilitar la ejecución de los microservicios y sus dependencias.

### Requisitos Previos

1. Tener Docker y Docker Compose instalados.
2. Clonar este repositorio.

### Pasos para Ejecutar

1. **Construir las imágenes:**
   Navega al directorio del proyecto y ejecuta:
   ```bash
   docker-compose build
   ```

2. **Iniciar los contenedores:**
   Lanza los microservicios con:
   ```bash
   docker-compose up
   ```

3. **Verificar el funcionamiento:**
   Cada microservicio está expuesto en un puerto diferente (configurado en el archivo `docker-compose.yml`). Puedes hacer solicitudes a los endpoints utilizando herramientas como Postman o cURL.

4. **Detener los contenedores:**
   Para detener todos los servicios, utiliza:
   ```bash
   docker-compose down
   ```

