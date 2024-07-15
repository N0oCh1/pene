package com.example.demo.modelos; 
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Product") 
    private Long idProduct;

    @Column(name="id_plato")
    private Long id_plato;

    @Column(name = "Product_Name")
    private String productName;

    @Column(name = "Product_Precio")
    private double productPrecio;

    @Column(name = "Product_categoria")
    private String productoCategoria;
   

    public Producto() {

    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public String getProductName() {
        return productName;
    }
    
    public void setProductName(String productName) {
        this.productName = productName;
    }
    

    public double getProductPrecio() {
        return this.productPrecio;
    }

    public void setProductPrecio(double productPrecio) {
        this.productPrecio = productPrecio;
    }

    public String getProductoCategoria() {
        return this.productoCategoria;
    }

    public void setProductoCategoria(String productoCategoria) {
        this.productoCategoria = productoCategoria;
    }

    public Long getId_plato() {
        return this.id_plato;
    }

    public void setId_plato(Long id_plato) {
        this.id_plato = id_plato;
    }
    

}
