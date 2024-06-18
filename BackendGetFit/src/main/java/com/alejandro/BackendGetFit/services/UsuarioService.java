package com.alejandro.BackendGetFit.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alejandro.BackendGetFit.entity.Usuario;
import com.alejandro.BackendGetFit.repository.UsuarioRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    public void createUsuario(Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    public void updateUsuario(Long id, Usuario usuario) {
        usuario.setId(id);
        usuarioRepository.save(usuario);
    }

    public void deleteUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }

}
