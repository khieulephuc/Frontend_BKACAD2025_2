import React, { useEffect, useState } from "react";
import SeafoodService from "../service/SeafoodService";
import Header from '../../components/Header';
import { Link } from "react-router-dom";

var ListSeafoodComponent = () =>{
    var [seafood, setSeafood] = useState([])
    useEffect(() =>{
        getAllSeafoods();
    },[])
    // tách hàm getAllSeafoods() ra riêng để gọi ra nhiều lần

    var getAllSeafoods = () =>{
        SeafoodService.getAllSeafoods().then((response) => {
            setSeafood(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    var deleteSeafoods = (seafoodID) =>{
        if(!window.confirm(' Bạn có thực sự muốn xóa? ')){
            return;
        }
        SeafoodService.deleteSeafoods(seafoodID).then((response) =>{
            getAllSeafoods();
        }).catch(error =>{
            console.log(error);
        })
    }
    return(
        <div className="container">
            <Header></Header>
            <h2 className="text-center text-success">Quản lý hải sản</h2>
            <Link to="/add-seafoods" className="btn btn-success mb-2">Thêm +</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Mã</th>
                        <th>Tên hải sản</th>
                        <th>Giá</th>
                        <th>Địa chỉ</th>
                        <th>Hình ảnh</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        seafood.map(
                            seafood =>
                                <tr key={seafood.id}>
                                    <td>{seafood.id}</td>
                                    <td>{seafood.name}</td>
                                    <td>{seafood.price}</td>
                                    <td>{seafood.address}</td>
                                    <td><img src={seafood.imgUrl} height="70px" width="100px" /></td>
                                    <td>
                                        <Link className="btn btn-warning" to={`/edit-seafood/${seafood.id}`}>
                                            Cập nhật
                                        </Link>
                                        <button className="btn btn-danger" onClick={() => deleteSeafoods(seafood.id)}
                                        style={{marginLeft: "10px"}}>Xóa</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListSeafoodComponent;