package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelos.Pedidos;

/**
 * PedidosRepo
 */
public interface PedidosRepo extends JpaRepository<Pedidos, Long>{

    
}