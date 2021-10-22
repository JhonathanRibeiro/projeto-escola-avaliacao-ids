package com.github.jhonathanribeiro.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.github.jhonathanribeiro.entity.Aluno;

@Path("api")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AlunoResource {

    @GET
    @Path("/alunos")
    public List<Aluno> getAlunos() {
        return Aluno.listAll();
    }

    @GET
    @Path("/aluno/{id}")
    public Aluno getAlunoById(@PathParam("id") Long id) {
        return Aluno.findById(id);
        
    }
}