package com.github.jhonathanribeiro.repository;

import java.util.List;

import javax.transaction.Transactional;

import com.github.jhonathanribeiro.entity.Aluno;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface AlunoRepository extends JpaRepository<Aluno, Long>{
    @Modifying 
    @Query(value="select "
	+ "(coalesce (bi.primeira_nota,0) + coalesce (bi.segunda_nota, 0) + coalesce(bi.terceira_nota, 0) + coalesce(bi.quarta_nota, 0))"
    + "/ 4 as total, *"
    + "from"
	+ "aluno al"
    + "join bimestres bi on"
    + "bi.aluno_id = al.id", nativeQuery = true)

     List<Aluno> mediaSimples();
}
