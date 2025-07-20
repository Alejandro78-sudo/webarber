package com.barberia.reservaweb.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.barberia.reservaweb.entities.Reserva;

@Repository
public interface ReservaRepository extends MongoRepository<Reserva, String> {
    // No necesitas declarar save() ni saveAll(), ya vienen incluidos

    // Aquí puedes agregar métodos personalizados, por ejemplo:
    Reserva findByNombreCliente(String nombreCliente);  // solo si este campo existe en la entidad

}
