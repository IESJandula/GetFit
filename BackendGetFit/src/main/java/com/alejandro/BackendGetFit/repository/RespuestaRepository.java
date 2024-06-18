package com.alejandro.BackendGetFit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alejandro.BackendGetFit.entity.Respuesta;

@Repository
public interface RespuestaRepository extends JpaRepository<Respuesta, Long> {
    
}
