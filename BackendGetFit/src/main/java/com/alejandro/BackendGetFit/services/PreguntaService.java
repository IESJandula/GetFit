package com.alejandro.BackendGetFit.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alejandro.BackendGetFit.entity.Pregunta;
import com.alejandro.BackendGetFit.repository.PreguntaRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PreguntaService {
    
    private final PreguntaRepository preguntaRepository;

    public List<Pregunta> getAllMonitores() {
        return preguntaRepository.findAll();
    }

    public void createPregunta(Pregunta pregunta) {
        preguntaRepository.save(pregunta);
    }

    public void updatePregunta(Long id, Pregunta pregunta) {
        pregunta.setId(id);
        preguntaRepository.save(pregunta);
    }

    public void deletePregunta(Long id) {
        preguntaRepository.deleteById(id);
    }

}
