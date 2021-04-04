import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Imagem from './img/baixados.jpg'

class App extends React.Component {

  state = {

    pessoas: [

      {
      nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
      },

      {
        nomeUsuario: "Aninha",
        fotoUsuario: "https://picsum.photos/id/237/20/20",
        fotoPost: "https://picsum.photos/200/200?grayscale"
      },

      {
        nomeUsuario: "Carlinha",
        fotoUsuario: Imagem,
        fotoPost: "https://picsum.photos/id/100/50/50"
      }


    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  };

  adicionaPost = () => {

    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novaPostagem = [...this.state.pessoas, novoPost];

    this.setState({pessoas: novaPostagem});

  };
  
  //No onchange permite te escrever no input //
  onChangeInputNomeUsuario = (event) =>{

    this.setState({valorInputNomeUsuario: event.target.value});
    // aqui ele pega o alvo do evento, no caso, o evento é digitar e o alvo é o input, logo pegamos
    //o value, pq não queremos pegar <input...tra la la, e sim o seu valor digitado//
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  };

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})

  };

  render() {
    const listaDeComponentes = this.state.pessoas.map((post)=>{
      return (
        <Post
          nomeUsuario ={post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost= {post.fotoPost}
        />
      );
    });

    return (
      <div className={'box-total'}>
        <h1 className={'text-post'}>PostGram</h1>
      <div>

        <div className={'box-post'}>
        
        <h3 className={'text-post'}>Adicionar postagem</h3>

        <input

        value = {this.state.valorInputNomeUsuario}
        onChange={this.onChangeInputNomeUsuario}
        placeholder={"Usuário"}
        className={'input-post'}
        />

        <input

        value = {this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder ={"Link foto usuário"}
        className={'input-post'}

        />

        <input

        value = {this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder ={"Link foto post"}
        className={'input-post'}

        />

        <button onClick ={this.adicionaPost} className={'buttom-post'}>Adicionar</button>

        </div>

      
      <div>{listaDeComponentes}</div>
      </div>
      </div>

    );
  }
}

export default App;

