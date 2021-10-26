package com.github.jhonathanribeiro.entity;

import javax.persistence.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Aluno extends PanacheEntity{
    public String nome;
    public String matricula;
    public String status;
    public String situacao;


    

}
