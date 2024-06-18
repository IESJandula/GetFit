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

import com.alejandro.BackendGetFit.entity.Usuario;
import com.alejandro.BackendGetFit.services.UsuarioService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/usuarios")
@CrossOrigin(origins = {"http://localhost:4200"})
public class UsuarioController {

    private final UsuarioService usuarioService;
    
    @GetMapping
    public List<Usuario> getAllUsuarios() {
        return usuarioService.getAllUsuarios();
    }

    @PostMapping
    public void createUsuario(@RequestBody Usuario usuario) {
        usuarioService.createUsuario(usuario);
    }

    @PutMapping
    public void updateUsuario(@PathVariable Long id, @RequestBody Usuario usuario) {
        usuarioService.updateUsuario(id, usuario);
    }

    @DeleteMapping
    public void deleteUsuario(@PathVariable Long id) {
        usuarioService.deleteUsuario(id);
    }


}
