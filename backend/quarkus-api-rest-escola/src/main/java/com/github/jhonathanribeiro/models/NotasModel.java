package com.github.jhonathanribeiro.models;

public class NotasModel {
    private String primeira_nota;
    private String segunda_nota;
    private String terceira_nota;
    private String quarta_nota;
    
    public String getPrimeiraNota() {
        return primeira_nota;
    }
    
    public String getSegundaNota() {
        return segunda_nota;
    }

    public String getTerceitaNota() {
        return terceira_nota;
    }

    public String getQuartaNota() {
        return quarta_nota;
    }
    
    public void setPrimeiraNota(String primeira_nota) {
        this.primeira_nota = primeira_nota;
    }

    public void setSegundaNota(String segunda_nota) {
        this.segunda_nota = segunda_nota;
    }
    
    public void setTerceiraNota(String terceira_nota) {
        this.terceira_nota = terceira_nota;
    }
    
    public void setQuartaNota(String quarta_nota) {
        this.quarta_nota = quarta_nota;
    }
    
}
