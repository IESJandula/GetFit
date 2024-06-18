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

import com.alejandro.BackendGetFit.entity.Pregunta;
import com.alejandro.BackendGetFit.services.PreguntaService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/preguntas")
@CrossOrigin(origins = {"http://localhost:4200"})
public class PreguntaController {
    
    private final PreguntaService preguntaService;

    @GetMapping
    public List<Pregunta> getAllPreguntas() {
        return preguntaService.getAllMonitores();
    }

    @PostMapping
    public void createPregunta(@RequestBody Pregunta pregunta) {
        preguntaService.createPregunta(pregunta);
    }

    @PutMapping("/{id}")
    public void updatePregunta(@PathVariable Long id, @RequestBody Pregunta pregunta) {
        preguntaService.updatePregunta(id, pregunta);
    }

    @DeleteMapping("/{id}")
    public void deletePregunta(@PathVariable long id) {
        preguntaService.deletePregunta(id);
    }

}
