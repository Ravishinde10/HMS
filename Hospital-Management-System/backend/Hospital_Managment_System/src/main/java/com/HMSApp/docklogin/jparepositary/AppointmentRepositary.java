package com.HMSApp.docklogin.jparepositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSApp.docklogin.entity.Appointment;

@Repository
public interface AppointmentRepositary extends JpaRepository<Appointment, Long> {

}
