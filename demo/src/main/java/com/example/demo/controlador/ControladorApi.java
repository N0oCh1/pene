package com.example.demo.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelos.Menu;
import com.example.demo.modelos.Pedidos;
import com.example.demo.repositorio.MenuRepo;
import com.example.demo.repositorio.PedidosRepo;

import java.util.*;
/**
 * ControladorApi
 */
@RestController
@CrossOrigin("http://localhost:5173/")
public class ControladorApi {

    @Autowired
    private MenuRepo menuRepo;
    @Autowired
    private PedidosRepo pedidoRepo;
    
    @GetMapping("/menu")
    public List<Menu> getMenu(){
        return menuRepo.findAll();
    }

    @GetMapping("/pedido")
    public List<Pedidos> getPedidos(){
        return pedidoRepo.findAll();
    }

    @PostMapping("/pedido")
    public Pedidos postPedidos(@RequestBody Pedidos nuevoPedidos){
        return pedidoRepo.save(nuevoPedidos);
    }

    @DeleteMapping("/eliminar/{id}")
    public void deletePedido(@PathVariable Long id){
        pedidoRepo.deleteById(id);
        return;
    }

    @SuppressWarnings("unchecked")
    @PutMapping("/actualizar/{id}")
    List<Pedidos> putPedidos(@RequestBody Pedidos newPedidos, @PathVariable Long id){
        return (List<Pedidos>) pedidoRepo.findById(id).map(pedido -> {
            System.out.println(pedido);
            pedido.setEstado(newPedidos.getEstado());
            pedido.setMesa(newPedidos.getMesa());
            pedido.setProducto(newPedidos.getProducto());
            return pedidoRepo.save(pedido);
        }).orElse(null);
    }
}