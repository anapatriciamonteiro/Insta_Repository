import React from 'react'


import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import styled from 'styled-components'

const PostContainer = styled.div`
  border: 1px solid;
  width: 300px;
  box-shadow: 10px 10px 10px 5px blue;
  margin: 50px;
  
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 50px;
  margin-left: 10px;
  `
const PostFooter = styled.div`

  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`

  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`



class Post extends React.Component {

  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    arrayDeComentarios : []
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })

    if (!this.state.curtido){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }else{
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas -1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario =(comentario) =>{
    const novoComentario = comentario
    const novoArrayDeComentarios = [...this.state.arrayDeComentarios,
      novoComentario]
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      arrayDeComentarios: novoArrayDeComentarios
    })
  }


  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    const listaDeComentario = this.state.arrayDeComentarios.map((comentario)=>{
      return <p>{comentario}</p>
    })


    return (

    
    <PostContainer>

      <PostHeader>
        <UserPhoto src ={this.props.fotoUsuario} alt='Imagem do Usuário'></UserPhoto>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src ={this.props.fotoPost} alt ="Imagem"></PostPhoto>

      <PostFooter>

        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador

          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}

        />
        </PostFooter>
      {componenteComentario}
      <div>{listaDeComentario}</div>
      </PostContainer>
      )
  }
}

export default Post

