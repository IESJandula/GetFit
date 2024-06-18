package com.alejandro.BackendGetFit.services;

import com.alejandro.BackendGetFit.entity.Monitor;
import com.alejandro.BackendGetFit.repository.MonitorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MonitorService {

    private final MonitorRepository monitorRepository;

    public void createMonitor(Monitor monitor) {
        monitorRepository.save(monitor);
    }

    public List<Monitor> getAllMonitores() {
        return monitorRepository.findAll();
    }

    public void updateMonitor(Long id, Monitor monitor) {
        monitor.setId(id);
        monitorRepository.save(monitor);
    }

    public void deleteMonitor(Long id) {
        monitorRepository.deleteById(id);
    }

}
