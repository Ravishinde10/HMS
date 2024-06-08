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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HMSApp.docklogin.entity.Appointment;
import com.HMSApp.docklogin.entity.Medicine;
import com.HMSApp.docklogin.jparepositary.MedicineRepositary;

@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v3")
@RestController
public class MedicineController {
	
	
	private MedicineRepositary medicineRepositary;
	
	public MedicineController(MedicineRepositary medicineRepositary) {
		
		this.medicineRepositary = medicineRepositary;
	}
	
	@PostMapping("/insert")
	public Medicine createMedicine(@RequestBody Medicine medicine) {
		
		return this.medicineRepositary.save(medicine);
		
	}
	
	@GetMapping("/get")
	public List<Medicine> getAllMedicine(){
		
		return this.medicineRepositary.findAll();
		
	}
	
	@GetMapping("/medicine/{id}")
	public ResponseEntity<Medicine> getmedicineNyId(@PathVariable long id) throws AttributeNotFoundException{
		
		Medicine medicine = medicineRepositary.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine id is not found "+id));
		
		return ResponseEntity.ok(medicine);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Medicine> updateMedicine (@PathVariable long id, @RequestBody Medicine medicinedetails)throws AttributeNotFoundException{
		
	  Medicine medicine = medicineRepositary.findById(id).orElseThrow(()->new AttributeNotFoundException("Medicine id not found "+id));
	  
	  medicine.setDrugName(medicinedetails.getDrugName());
	  medicine.setStock(medicinedetails.getStock());
	  
	   medicineRepositary.save(medicine);
	  
	  return ResponseEntity.ok(medicine);
	  
	}
	
	
	@DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable long id) throws AttributeNotFoundException {
		Medicine medicine = medicineRepositary.findById(id).orElseThrow(() -> new AttributeNotFoundException("Appointment not found with id " + id));
        medicineRepositary.delete(medicine);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
