import { Container } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

export default function Detalle() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
          fetch("https://picsum.photos/550").then((response) => {
            setPosts([...posts, response.url]);
            console.log(posts.length);
          });
      }, []);
    
    return (
        <Container>
            <h1>Detalle</h1>
            <img src={posts[0]} alt="post"/>
            <p>Paseando xd</p>
        </Container>
    );
}