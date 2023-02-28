import React from 'react'
import { useForm } from '../../Hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
 
  const {form, onChangeForm} = useForm({curso:"", modulos:"", tecnologias:"", responsavel:""})

  
  const handleClick = (event) => {
    event.preventDefault()

    console.log(`Nome do Curso: ${form.curso}\n Número de Módulos: ${form.modulos}\n Tecnologias Abordadas: ${form.tecnologias}\n Responsável: ${form.responsavel}`)
  }




  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name={"curso"}
          value={form.curso}
          required
          onChange={onChangeForm}
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name={"modulos"}
          value={form.modulos}
          required
          onChange={onChangeForm}
          pattern="^(0*[2-9]|[1-9][0-9]+)$"
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name={"tecnologias"}
          value={form.tecnologias}
          required
          onChange={onChangeForm}
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name={"responsavel"}
          value={form.responsavel}
          required
          onChange={onChangeForm}
          pattern= "^[a-zA-z]{5,}"
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
