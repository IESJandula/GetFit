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

import com.alejandro.BackendGetFit.entity.Contacto;
import com.alejandro.BackendGetFit.services.ContactoService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/contacto")
@CrossOrigin(origins = {"http://localhost:4200"})
public class ContactoController {
    
    private final ContactoService contactoService;

    @GetMapping
    public List<Contacto> getAllContactos() {
        return contactoService.getAllContactos();
    }

    @PostMapping
    public void createContacto(@RequestBody Contacto contacto) {
        contactoService.createContacto(contacto);
    }

    @PutMapping
    public void updateContacto(@PathVariable Long id, @RequestBody Contacto contacto) {
        contactoService.updateContacto(id, contacto);
    }

    @DeleteMapping
    public void deleteContacto(@PathVariable Long id) {
        contactoService.deleteContacto(id);
    }

}
