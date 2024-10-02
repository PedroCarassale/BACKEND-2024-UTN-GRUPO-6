import {Injectable} from "@nestjs/common" // Es un decordador de propiedad.
// Injectable se utiliza principalmente para declarar una clase como un proveedor, es decir, puede ser injectado en otros componentes de la app.
@Injectable({}) // Quiere decir que puede ser injectada en otro lado por ejemplo en GimnasioController.
export class GimnasioService {

    
        private gimnasios = [
          {
            "id": 1,
            "nombre": "Gimnasio Atlas",
            "direccion": "Av. Siempre Viva 123",
            "ciudad": "Springfield",
            "telefono": "555-1234",
            "servicios": [
              "Pesas",
              "Cardio",
              "Clases de yoga",
              "Entrenamiento personal"
            ],
            "horario": {
              "lunes-viernes": "06:00 - 22:00",
              "sabado": "08:00 - 20:00",
              "domingo": "Cerrado"
            },
            "precio_membresia": 30.00
          },
          {
            "id": 2,
            "nombre": "Fitness 24/7",
            "direccion": "Calle Falsa 456",
            "ciudad": "Shelbyville",
            "telefono": "555-5678",
            "servicios": [
              "CrossFit",
              "Spinning",
              "Clases de pilates",
              "Boxeo"
            ],
            "horario": {
              "lunes-domingo": "24 horas"
            },
            "precio_membresia": 40.00
          },
          {
            "id": 3,
            "nombre": "Wellness Gym",
            "direccion": "Boulevard Central 789",
            "ciudad": "Capital City",
            "telefono": "555-9876",
            "servicios": [
              "Piscina",
              "Sauna",
              "Clases de zumba",
              "Clases de natación"
            ],
            "horario": {
              "lunes-viernes": "06:00 - 21:00",
              "sabado": "09:00 - 18:00",
              "domingo": "10:00 - 16:00"
            },
            "precio_membresia": 50.00
          }
        ]
      
    getAll() {
        return this.gimnasios;
    }  

    //Funciones que consulten una BD.
    getById(id){
        return("Gimnasio: "+id);
    }

}