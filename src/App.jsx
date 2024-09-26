import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [info, setInfo] = useState({username: "jorge", nombre: "jorge", descripcion: "nose", url: "aisodaisd", cantidad_post: 3, cantidad_seguidores: 10, cantidad_seguidos: 10});
  const [posts, setPosts] = useState([]);


  //useEffect(() => {
    //fetch("https://my.api.mockaroo.com/parcial_practica.json?key=d18dc910").then((response) => {response.json().then((data)=>{setInfo(data[0]);
    //})});
  //}, []);

  useEffect(() => {
    if (posts.length <= info.cantidad_post) {
      fetch("https://picsum.photos/350").then((response) => {
        setPosts([...posts, response.url]);
        console.log(posts.length);
      });
    }
  }, [posts]);


  const generarPosts = () => {
    let posts_generate = [];
    for (let i = 0; i < info.cantidad_post; i++) {
      posts_generate.push(
        <Col>
          <div className="card" style={{width:"18rem"}}>
            <Link to="/detalle">
              <img className="card-img-top" src={posts[i]} alt="post"/>
            </Link>
          </div>
        </Col>
      );
    }
    return posts_generate;
  }


  return (
    <Row>
      <Container className='head'>
        <Row>
          <Col>
            <Link to="/perfil">
              <img className='img-perfil' src={posts[0]} alt="foto-perfil" />
            </Link>
          </Col>
          <Col>
            <Row>
              <h2>{info.username}</h2>
              <p>{info.nombre}</p>
              <p>{info.descripcion}</p>
              <a>{info.url}</a>
              <Col>
                <p>{info.cantidad_post} posts</p>
              </Col>
              <Col>
                <p>{info.cantidad_seguidores} followers</p>
              </Col>
              <Col>
                <p>{info.cantidad_seguidos} following</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Col>
        <Container className='posts'>
          <Row className='row-cols-3'>
            {generarPosts()}
          </Row>
        </Container>
      </Col>
    </Row>
  );
}

export default App;
