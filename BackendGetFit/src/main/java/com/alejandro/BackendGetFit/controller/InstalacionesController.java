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

import com.alejandro.BackendGetFit.entity.Instalaciones;
import com.alejandro.BackendGetFit.services.InstalacionesService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/instalaciones")
@CrossOrigin(origins = {"http://localhost:4200"})
public class InstalacionesController {
    
    private final InstalacionesService instalacionesService;

    @GetMapping
    public List<Instalaciones> getAllInstalaciones() {
        return instalacionesService.getAllInstalaciones();
    }

    @PostMapping
    public void createInstalacion(@RequestBody Instalaciones instalaciones) {
        instalacionesService.createInstalacion(instalaciones);
    }

    @PutMapping("/{id}")
    public void updateInstalaciones(@PathVariable Long id, @RequestBody Instalaciones instalaciones) {
        instalaciones.setId(id);
        instalacionesService.updateInstalaciones(id, instalaciones);
    }

    @DeleteMapping("/{id}")
    public void deleteInstalacion(@PathVariable Long id) {
        instalacionesService.deleteInstalacion(id);
    }

}
