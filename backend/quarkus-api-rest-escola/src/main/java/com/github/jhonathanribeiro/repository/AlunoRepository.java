package com.github.jhonathanribeiro.repository;

import java.util.List;

import com.github.jhonathanribeiro.entity.Aluno;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoRepository extends CrudRepository<Aluno, Long>{
    @Query(value="select * from aluno", nativeQuery = true)

    List<Aluno> findByNotasAluno();
}
