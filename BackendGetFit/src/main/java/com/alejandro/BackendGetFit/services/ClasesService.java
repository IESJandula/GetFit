package com.alejandro.BackendGetFit.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alejandro.BackendGetFit.entity.Clases;
import com.alejandro.BackendGetFit.entity.Instalaciones;
import com.alejandro.BackendGetFit.repository.ClasesRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClasesService {
    
    private final ClasesRepository clasesRepository;

    public List<Clases> getAllClases() {
        return clasesRepository.findAll();
    }

    public void createClases(Clases clase) {
        clasesRepository.save(clase);
    }

    public void updateClases(long id, Clases clase) {
        Clases existingClase = clasesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Clase no encontrada"));
        existingClase.setAlumnos(clase.getAlumnos());
        clasesRepository.save(existingClase);
    }

    public void deleteClases(Long id) {
        clasesRepository.deleteById(id);
    }

}
