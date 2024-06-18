package com.alejandro.BackendGetFit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alejandro.BackendGetFit.entity.Contacto;

@Repository
public interface ContactoRepository extends JpaRepository<Contacto, Long> {
    
}
