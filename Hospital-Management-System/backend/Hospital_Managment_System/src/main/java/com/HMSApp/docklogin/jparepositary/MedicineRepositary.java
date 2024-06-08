package com.HMSApp.docklogin.jparepositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSApp.docklogin.entity.Medicine;

@Repository
public interface MedicineRepositary extends JpaRepository<Medicine, Long> {

}
