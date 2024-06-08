package com.HMSApp.controller;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PutExchange;

import com.HMSApp.entity.Patient;
import com.HMSApp.repository.PatientRepositary;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PatientController {
	
	private PatientRepositary patientRepositary;
	

	public PatientController(PatientRepositary patientRepositary) {
	
		this.patientRepositary = patientRepositary;
	}
	
	@PostMapping("/insert")
	public Patient createPatient(@RequestBody Patient patient) {
		
		return patientRepositary.save(patient);
	}
	
	@GetMapping("/patient")
	public List<Patient> getAllPatient() {
		
		return patientRepositary.findAll();
		
	}
	
	@GetMapping("/patient/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable long id) throws AttributeNotFoundException{
		
		Patient patient = patientRepositary.findById(id).orElseThrow(()-> new AttributeNotFoundException("Patient not found with id "+ id));
		
		return ResponseEntity.ok(patient);
	}
	
	@DeleteMapping("/patient/{id}")
	public ResponseEntity<Map<String, Boolean>>deletePatient(@PathVariable Long id) throws AttributeNotFoundException  {
		
		Patient patient = patientRepositary.findById(id).orElseThrow(()-> new AttributeNotFoundException("Patient not found with id "+id ));
		
		patientRepositary.delete(patient);
		
		Map<String, Boolean> response =new HashMap<String,Boolean>();
		
		response.put("Delete", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
		
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable long id , @RequestBody Patient patientDetails) throws AttributeNotFoundException{
		
		Patient savepatient = patientRepositary.findById(id).orElseThrow(()-> new AttributeNotFoundException("Patient not found with id "+id));
		
		savepatient.setAge(patientDetails.getAge());
		savepatient.setName(patientDetails.getName());
		savepatient.setBlood(patientDetails.getBlood());
		savepatient.setDose(patientDetails.getDose());
		savepatient.setFees(patientDetails.getPrescriptions());
		savepatient.setUrgency(patientDetails.getUrgency());
		
		Patient savedPatient = patientRepositary.save(savepatient);
		
		return ResponseEntity.ok(savedPatient);
	}
}
