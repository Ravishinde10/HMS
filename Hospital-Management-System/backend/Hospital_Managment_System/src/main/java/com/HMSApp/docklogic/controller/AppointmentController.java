package com.HMSApp.docklogic.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HMSApp.docklogin.entity.Appointment;
import com.HMSApp.docklogin.jparepositary.AppointmentRepositary;

@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v2")
@RestController
public class AppointmentController {	
	private AppointmentRepositary appointmentRepositary;

	public AppointmentController(AppointmentRepositary appointmentRepositary) {
		
		this.appointmentRepositary = appointmentRepositary;
	}
	
	
	@PostMapping("/appointment")
	public Appointment createAppointment(@RequestBody Appointment appointment) {
		
		return appointmentRepositary.save(appointment);
	}
	
	@GetMapping("/get")
	public List<Appointment> getAllAppointment(){
		
		return appointmentRepositary.findAll();
	}
	
	@DeleteMapping("/deleteappointment/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable long id) throws AttributeNotFoundException {
        Appointment appointment = appointmentRepositary.findById(id).orElseThrow(() -> new AttributeNotFoundException("Appointment not found with id " + id));
        appointmentRepositary.delete(appointment);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
