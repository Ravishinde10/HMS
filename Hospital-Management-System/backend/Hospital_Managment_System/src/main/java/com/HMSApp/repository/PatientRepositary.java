package com.HMSApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSApp.entity.Patient;

@Repository
public interface PatientRepositary extends JpaRepository<Patient, Long> {

}
