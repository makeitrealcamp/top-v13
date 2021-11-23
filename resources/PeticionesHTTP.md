# Peticiones HTTP

# JSON

Es un formato para organizar datos estructurados. Se utiliza principalmente para transmitir información entre aplicaciones.

```javascript
const obj = JSON.parse('{ "name": "Pedro" }');
console.log(obj.name); // Pedro
```

```javascript
JSON.stringify({ name: 'Pedro' }); // '{ "name": "Pedro" }'
```

# Verbos HTTP

    - POST: Crear
    - GET: Obtener
    - PUT: Actualizar/Crear
    - DELETE: Eliminar
    - HEAD: Similar al Get, pero no retorna el contenido, solo código de respuesta

# Códigos de respuesta

2xx: Errores del Servidor

- 200 OK
- 201 Creado

4xx: Errores del cliente

- 401 No Autorizado
- 404 No Encontrado

# Promesa

Es un objeto que representa la terminación o el fracaso de una operación asíncrona.

# Síncrono

Sentencias que se ejecutan una detrás de la otra.

# Asíncrono

Cuando una acción comienza el programa sigue ejecutandose. Cuando la acción termina el programa es informado y tiene acceso al resultado.

# Fetch

Es una API de JS que nos permite manipular los métodos HTTP.
