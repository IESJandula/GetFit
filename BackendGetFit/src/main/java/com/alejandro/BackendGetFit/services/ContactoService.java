package com.alejandro.BackendGetFit.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alejandro.BackendGetFit.entity.Contacto;
import com.alejandro.BackendGetFit.repository.ContactoRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ContactoService {
    
    private final ContactoRepository contactoRepository;

    public List<Contacto> getAllContactos() {
        return contactoRepository.findAll();
    }

    public void createContacto(Contacto contacto) {
        contactoRepository.save(contacto);
    }

    public void updateContacto(Long id, Contacto contacto) {
        contacto.setId(id);
        contactoRepository.save(contacto);
    }

    public void deleteContacto(Long id) {
        contactoRepository.deleteById(id);
    }

}
