package com.example.demo.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Menu {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPlato;

    @Column (name = "Precio")
    private double precio;

    @Column(name = "PlatoName")
    private String platoName;
    
    @Column(name = "Categoria")
    private String categoria;


    public Long getIdPlato() {
        return idPlato;
    }
    public void setIdPlato(Long idPlato) {
        this.idPlato = idPlato;
    }
    public double getPrecio() {
        return precio;
    }
    public void setPrecio(double precio) {
        this.precio = precio;
    }
    public String getPlatoName() {
        return platoName;
    }
    public void setPlatoName(String platoName) {
        this.platoName = platoName;
    }
    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    

}
