package com.alejandro.BackendGetFit.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alejandro.BackendGetFit.entity.Respuesta;
import com.alejandro.BackendGetFit.repository.RespuestaRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RespuestaService {
    
    private final RespuestaRepository respuestaRepository;

    public List<Respuesta> getAllRespuestas() {
        return respuestaRepository.findAll();
    }

    public void createPregunta(Respuesta respuesta) {
        respuestaRepository.save(respuesta);
    }

    public void updateRespuesta(Long id, Respuesta respuesta) {
        respuesta.setId(id);
        respuestaRepository.save(respuesta);
    }

    public void deletePregunta(Long id) {
        respuestaRepository.deleteById(id);
    }

}
