package com.example.demo.modelos;

import java.util.ArrayList;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.List;
import jakarta.persistence.OneToMany;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;

@Entity
public class Pedidos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Pedido")
    private Long idPedido;

    @Column(name = "mesa", unique=true)
    private int mesa;

    @Column(name = "Estado")
    private String estado;

    @OneToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REMOVE})
    @JoinColumn(name = "id_pedido")
    List<Producto> producto = new ArrayList<Producto>();

    public Long getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(Long idPedido) {
        this.idPedido = idPedido;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public int getMesa() {
        return this.mesa;
    }

    public void setMesa(int mesa) {
        this.mesa = mesa;
    }

    public List<Producto> getProducto() {
        return this.producto;
    }

    public void setProducto(List<Producto> producto) {
        this.producto = producto;
    }


}
