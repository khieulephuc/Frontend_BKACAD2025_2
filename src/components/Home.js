import { useState, useEffect } from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "./Header";
import { Link } from 'react-router-dom';

function Home(){
    var [seafood, setSeaFood] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/seafood")
        .then(res => {
            setSeaFood(res.data);
        })
    }, [])
    return(
        <>
            <Header></Header>
            <h1 className="text-center mb-3">Chào mừng các bạn</h1>
            <div className="row" style={{padding: "0 200px "}}>
                {seafood.map(item =>{
                    return(
                        <>
                            <Card className="col-4 mb-2">
                             <Card.Img variant="top" src={item.imgUrl} height="300px"
                                width="100px"></Card.Img>
                                <Card.Body>
                                    Tên hải sản:<Card.Title>{item.name}</Card.Title>
                                    Giá:<Card.Text className="text-danger">{item.price}</Card.Text>
                                    Địa chỉ:<Card.Text className="text-success">{item.address}</Card.Text>
                                    Mô tả<Card.Text>{item.description}</Card.Text>
                                    <Button variant="primary"><Link to='/detail'
                                    style={{textDecoration: "none", color:"white"}}></Link>Đặt hàng</Button>
                            </Card.Body>
                        </Card>
                    </>
                    )
                })}
            </div>
        </>
    )
}
export default Home;