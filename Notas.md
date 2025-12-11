# Guia para ejecutar Proyecto

Guía para ejecutar el backendEste documento describe los pasos necesarios para activar el entorno virtual y levantar el servidor backend con Uvicorn,
1.conectando el frontend al backend Activar el entorno virtualDependiendo de la terminal que utilices en Windows:

CMD:`.venv\Scripts\activate.bat`

PowerShell: `.venv\Scripts\Activate.ps1`

Ejecutar el servidor con UvicornUna vez activado el entorno virtual, corre el siguiente comando:
`uvicorn app.main:app --reload --port 8000` Parámetros importantes

`--reload`: reinicia automáticamente el servidor al detectar cambios en el código.

`--port 8000`: define el puerto en el que se ejecutará el backend.

1. Conectar el frontend con el backend (`npm run dev`)

La URL base del backend será:`http://localhost:8000`

Los endpoints definidos en FastAPI estarán disponibles en rutas como:`http://localhost:8000/tu_endpoint`
