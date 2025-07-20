package com.barberia.reservaweb.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reservas") // Nombre de la colección en MongoDB
public class Reserva {

    @Id
    private String id;
    private String nombreCliente;
    private String fecha;
    private String hora;
    private String servicio;

    // Constructor vacío (obligatorio para Spring)
    public Reserva() {}

    // Constructor con parámetros (opcional)
    public Reserva(String nombreCliente, String fecha, String hora, String servicio) {
        this.nombreCliente = nombreCliente;
        this.fecha = fecha;
        this.hora = hora;
        this.servicio = servicio;
    }

    // Getters y Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getServicio() {
        return servicio;
    }

    public void setServicio(String servicio) {
        this.servicio = servicio;
    }
}
