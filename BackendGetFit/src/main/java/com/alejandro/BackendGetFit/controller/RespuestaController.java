package com.alejandro.BackendGetFit.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alejandro.BackendGetFit.entity.Respuesta;
import com.alejandro.BackendGetFit.services.RespuestaService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/respuestas")
@CrossOrigin(origins = {"http://localhost:4200"})
public class RespuestaController {
    
    private final RespuestaService respuestaService;

    @GetMapping
    public List<Respuesta> getAllRespuestas() {
        return respuestaService.getAllRespuestas();
    }

    @PostMapping
    public void createRespuesta(@RequestBody Respuesta respuesta) {
        respuestaService.createPregunta(respuesta);
    }

    @PutMapping("/{id}")
    public void updateRespuesta(@PathVariable Long id, @RequestBody Respuesta respuesta) {
        respuestaService.updateRespuesta(id, respuesta);
    }

    @DeleteMapping("/{id}")
    public void deletePregunta(@PathVariable Long id) {
        respuestaService.deletePregunta(id);
    }

}
