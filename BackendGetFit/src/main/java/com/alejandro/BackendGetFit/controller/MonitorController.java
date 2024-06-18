package com.alejandro.BackendGetFit.controller;

import com.alejandro.BackendGetFit.entity.Monitor;
import com.alejandro.BackendGetFit.services.MonitorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/monitores")
@CrossOrigin(origins = {"http://localhost:4200"})
public class MonitorController {

    private final MonitorService monitorService;

    @GetMapping
    public List<Monitor> getAllMonitores() {
        return monitorService.getAllMonitores();
    }

    @PostMapping
    public void createMonitores(@RequestBody Monitor monitor) {
        monitorService.createMonitor(monitor);
    }

    @PutMapping("/{id}")
    public void updateMonitor(@PathVariable Long id, @RequestBody Monitor monitor) {
        monitorService.updateMonitor(id, monitor);
    }

    @DeleteMapping("/{id}")
    public void deleteMonitor(@PathVariable Long id) {
        monitorService.deleteMonitor(id);
    }

}
