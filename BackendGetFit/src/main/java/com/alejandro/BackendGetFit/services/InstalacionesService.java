package com.alejandro.BackendGetFit.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alejandro.BackendGetFit.entity.Instalaciones;
import com.alejandro.BackendGetFit.repository.InstalacionesRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InstalacionesService {
    
    private final InstalacionesRepository instalacionesRepository;

    public List<Instalaciones> getAllInstalaciones() {
        return instalacionesRepository.findAll();
    }

    public void createInstalacion(Instalaciones instalaciones) {
        instalacionesRepository.save(instalaciones);
    }

    public void updateInstalaciones(Long id, Instalaciones instalaciones) {
        instalaciones.setId(id);
        instalacionesRepository.save(instalaciones);
    }

    public void deleteInstalacion(Long id) {
        instalacionesRepository.deleteById(id);
    }

}
