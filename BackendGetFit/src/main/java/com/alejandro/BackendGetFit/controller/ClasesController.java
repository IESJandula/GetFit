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

import com.alejandro.BackendGetFit.entity.Clases;
import com.alejandro.BackendGetFit.services.ClasesService;

    import lombok.RequiredArgsConstructor;

    @RequiredArgsConstructor
    @RestController
    @RequestMapping("/clases")
    @CrossOrigin(origins = {"http://localhost:4200"})
    public class ClasesController {
        
        private final ClasesService clasesService;

        @GetMapping
        public List<Clases> getAllClases() {
            return clasesService.getAllClases();
        }

        @PostMapping
        public void createClases(@RequestBody Clases clase) {
            clasesService.createClases(clase);
        }

        @PutMapping("/{id}")
        public void updateClases(@PathVariable Long id, @RequestBody Clases clase) {
            clasesService.updateClases(id, clase);
        }

        @DeleteMapping("/{id}")
        public void deleteClases(@PathVariable Long id) {
            clasesService.deleteClases(id);
        }

    }
