package com.alejandro.BackendGetFit.controller;

import com.alejandro.BackendGetFit.entity.Maquina;
import com.alejandro.BackendGetFit.services.MaquinaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/maquinas")
@CrossOrigin(origins = {"http://localhost:4200"})
public class MaquinaController {

    private final MaquinaService maquinaService;

    @GetMapping
    public List<Maquina> getAllMaquinas() {
        return maquinaService.getAllMaquinas();
    }

    @PostMapping
    public void createMaquina(@RequestBody Maquina maquina) {
        maquinaService.createMaquina(maquina);
    }

    @PutMapping("/{id}")
    public void updateMaquina(@PathVariable Long id, @RequestBody Maquina Maquina) {
        maquinaService.updateMaquina(id, Maquina);
    }

    @DeleteMapping("/{id}")
    public void deleteMaquina(@PathVariable Long id) {
        maquinaService.deleteMaquina(id);
    }
}
