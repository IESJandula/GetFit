package com.alejandro.BackendGetFit.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "monitores")
public class Monitor {

    @Id
    @GeneratedValue
    private Long id;

    private String nombre;
    private String descripcion;
    private String imagen;

}
