package com.barberia.reservaweb.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.barberia.reservaweb.entities.Reserva;
import com.barberia.reservaweb.repositories.ReservaRepository;

@RestController
@RequestMapping("/reservas")
public class ReservaController {

    @Autowired
    private ReservaRepository reservaRepository;

    @GetMapping
    public List<Reserva> getAllReservas() {
        return reservaRepository.findAll();
    }

    @PostMapping
    public Reserva createReserva(@RequestBody Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @GetMapping("/demo")
    public List<String> getAllReserva() {
        return List.of("Reserva 1", "Reserva 2");
    }
}


