package com.alejandro.BackendGetFit.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "maquinas")
public class Maquina {

    @Id
    @GeneratedValue
    private Long id;

    private String nombre;
    private String descripcion;
    private String imagenURL;

}
