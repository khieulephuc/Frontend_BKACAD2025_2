import { Carousel } from "antd";
import { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";

function Details() {
    var [seafood, setSeafood] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/seafood").then(res =>{
            setSeafood(res.data)
        })
    }, []);
        var handleSubmit = () =>{
            alert("Đặt hàng thành công")
        }
    return(
        <>
        <Header></Header>
         <h1 className="text-center mt-2 mb-2">Chi tiết đặt hàng</h1>
        <Carousel autoplay>
            {seafood.map(item =>{
                return(
                    <>
                        <div style={{width: "100%"}}>
                            <img src={item.imgUrl} style={{backgroundSize: "cover",
                                backgroundPosition: "center center", padding: "0 400px",
                                width: "100%", height: "600px"}} />
                        </div>
                    </>
                )
            }
            )}
        </Carousel>
        <h2 className="text-center mt-2 mb-2">Thông tin đặt hàng</h2>
        <div className="text-center mt-5" style={{ marginLeft: "35%" }}>
            <Form name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete = "off">
                <Form.Item
                    label="Họ và tên"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Quý khách nhập đầy đủ thông tin!',
                    },
                ]}>
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label="Số điện thoại"
                    name="text"
                    rules={[
                        {
                            required: true,
                            message: 'Điền đầy đủ số điện thoại',
                        },
                    ]}>
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    label="Địa chỉ giao hàng"
                    name="text1"
                    rules={[
                        {
                            required: true,
                            message: 'Điền địa chỉ giao hàng',
                        },
                    ]}>
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}>
                        <Button type="primary" onClick={handleSubmit} style={{color: "black"}}>Đặt hàng</Button>
                </Form.Item>
            </Form>
        </div>
        </>
    )
}

export default Details;