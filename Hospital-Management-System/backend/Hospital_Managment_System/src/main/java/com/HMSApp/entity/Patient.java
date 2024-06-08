package com.HMSApp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "patients")
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	
	private String age;
	
	@Column(name = "blood_group")
	private String blood;
	
	private String prescriptions;
	
	private String dose;
	
	private String fees;
	
	private String urgency;
	
	

	public Patient() {
		super();
	}



	public Patient(long id, String name, String age, String blood, String prescriptions, String dose, String fees,
			String urgency) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.blood = blood;
		this.prescriptions = prescriptions;
		this.dose = dose;
		this.fees = fees;
		this.urgency = urgency;
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getAge() {
		return age;
	}



	public void setAge(String age) {
		this.age = age;
	}



	public String getBlood() {
		return blood;
	}



	public void setBlood(String blood) {
		this.blood = blood;
	}



	public String getPrescriptions() {
		return prescriptions;
	}



	public void setPrescriptions(String prescriptions) {
		this.prescriptions = prescriptions;
	}



	public String getDose() {
		return dose;
	}



	public void setDose(String dose) {
		this.dose = dose;
	}



	public String getFees() {
		return fees;
	}



	public void setFees(String fees) {
		this.fees = fees;
	}



	public String getUrgency() {
		return urgency;
	}



	public void setUrgency(String urgency) {
		this.urgency = urgency;
	}
	
	
	

}
