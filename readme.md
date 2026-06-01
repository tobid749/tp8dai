para ejecutar
npm i
npm start




Get:

http://localhost:3000/api/province

devuleve:
[
    {
        "id": 2,
        "name": "Cordoba",
        "full_name": "Provincia de Cordoba",
        "latitude": "-31.4201",
        "longitude": "-64.1888",
        "display_order": 2
    },
    {
        "id": 3,
        "name": "Santa Fe",
        "full_name": "Provincia de Santa Fe",
        "latitude": "-31.6333",
        "longitude": "-60.7000",
        "display_order": 3
    },
    {
        "id": 7,
        "name": "Chaco",
        "full_name": "Provincia del Chaco",
        "latitude": "-24.89",
        "longitude": "-59.93",
        "display_order": 10
    }
]

http://localhost:3000/api/province/2
devuelve:
{
    "id": 2,
    "name": "Cordoba",
    "full_name": "Provincia de Cordoba",
    "latitude": "-31.4201",
    "longitude": "-64.1888",
    "display_order": 2
}



POST:

http://localhost:3000/api/province
body raw
JSON
{
  "name": "Tel Aviv",
  "full_name": "tel aviv",
  "latitude": -24.89,
  "longitude": -59.93,
  "display_order": 8
}


Post fallido
http://localhost:3000/api/province
{
  "name": "AB",
  "full_name": "Prueba",
  "latitude": 0,
  "longitude": 0,
  "display_order": 1
}

respuesta:
El nombre debe tener mínimo 3 letras
error 400

PUT
http://localhost:3000/api/province
{
  "id": 8 ,
  "name": "Tel aviv modificada",
  "full_name": "Tel aviv 2",
  "latitude": -34.60,
  "longitude": -58.38,
  "display_order": 20
}

respuesta
Provincia actualizada

Put cone rror 400
{
  "id": 999,
  "name": "Prueba",
  "full_name": "Prueba",
  "latitude": 0,
  "longitude": 0,
  "display_order": 1
}

resp:
Provincia no encontrada


DELTE:
http://localhost:3000/api/province/2

RESPUESTA:
Provincia eliminada


Delete con errpr:
http://localhost:3000/api/province/67




respiuesta:
Provincia no encontrada