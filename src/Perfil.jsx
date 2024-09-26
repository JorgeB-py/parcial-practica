import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

export default function Perfil() {
    const [info, setInfo] = useState({username: "jorge", nombre: "jorge", descripcion: "nose", url: "aisodaisd", cantidad_post: 3, cantidad_seguidores: 10, cantidad_seguidos: 10});
    const [posts, setPosts] = useState([]);
    //useEffect(() => {
    //fetch("https://my.api.mockaroo.com/parcial_practica.json?key=d18dc910").then((response) => {response.json().then((data)=>{setInfo(data[0]);
    //})});
    //}, []);

    useEffect(() => {
          fetch("https://picsum.photos/350").then((response) => {
            setPosts([...posts, response.url]);
            console.log(posts.length);
          });
      }, []);

    const renderizarcondicional = () => {
        if(Math.floor(Math.random()*10)>5){
            return(
                <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={info.username}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Nombre completo</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder={info.nombre}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Descripción</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder={info.descripcion}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">URL página personal</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder={info.url}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            )
        }else{
            return(
                <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <p>{info.username}</p>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Nombre completo</label>
                    <p>{info.nombre}</p>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Descripción</label>
                    <p>{info.descripcion}</p>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">URL página personal</label>
                    <p>{info.url}</p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            )
        }
    }
    return (
        <Container>
            <h2>Editar perfil</h2>
            <img src={posts[0]} alt="" className='img-perfil'/>
            {renderizarcondicional()}
            
        </Container>
    )
}