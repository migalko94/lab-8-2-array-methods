# Módulo 8 - Laboratorio 8.2 Array Methods

> Aquí describimos la realización del laboratorio

Estamos desarrollando un software hospitalario, y el cliente nos pide poder realizar una serie de operaciones sobre una lista de pacientes.

Se nos proporciona el set de datos inicial.

# Apartados obligatorios

## Apartado 1

Extraer lista de pacientes que están asignados a la especialidad de Pediatría y la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

### Implementación con array methods

Lo implementamos con el método de array _filter_ que nos devuelve aquellos pacientes que tienen la especialidad de pediatría, por un lado, y la especialidad de pediatría y menos de 10 años por el otro. Los introducimos en un _array_ nuevo para que sea inmutable.

## Apartado 2

Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
Crear una función que devuelve true/false dependiendo si se da la condición.

### Implementación con array methods

Lo implementamos con el método _some_. Si al menos alguno de los elementos cumple las condiciones, se activa el protocolo de urgencia. _every_ daría error porque todos deberían cumplir las condiciones.

## Apartado 3

El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

### Implementación con array methods

Lo realizamos con una combinación de los métodos _filter_ y _map_. Devolvemos solamente los pacientes reasignados en esta ocasión.

## Apartado 4

Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría.

### Implementación con array methods

El mecanismo de funcionamiento de esta función es prácticamente idéntico a la del apartado 2.

# Apartados opcionales

## Apartado 5

Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a Cardiología.

### Implementación con array methods

Tomando nuestra implementación sin _array methods_, la simplificamos con un _forEach_. No obstante, de esta forma no vemos gran diferencia a hacerlo con un bucle. Finalmente, implementamos la función con _filter_ y utilizamos el método _length_ para la obtención del sumatorio.

> Fin del laboratorio
