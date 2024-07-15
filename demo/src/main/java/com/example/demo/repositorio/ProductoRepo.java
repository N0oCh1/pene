package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelos.Producto;

/**
 * ProductoRepo
 */
public interface ProductoRepo extends JpaRepository<Producto, Long>{

    
}