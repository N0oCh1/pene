package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelos.Menu;

public interface MenuRepo extends JpaRepository<Menu, Long>{

    
}