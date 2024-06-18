package com.alejandro.BackendGetFit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alejandro.BackendGetFit.entity.Clases;

@Repository
public interface ClasesRepository extends JpaRepository<Clases, Long> {
    
}
