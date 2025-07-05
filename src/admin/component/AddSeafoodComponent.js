import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SeafoodService from "../service/SeafoodService";
import { Link, useParams } from "react-router-dom";

const AddSeafoodComponent = () =>{
    var [name, setName] = useState("");
    var [price, setPrice] = useState("");
    var [address, setAddress] = useState("");
    var [imgUrl, setImage] = useState("");
    // trong bản React Router 6 sử dụng navigate thay cho useHistory
    var navigate = useNavigate();
    var {id} = useParams();

    // hàm thêm mới hoặc cập nhật seafood, sẽ gọi API hoặc update
    var SaveOrUpdateSeafood = (e) => {
        e.preventDefault();
         var seafood = {name, price, address, imgUrl}

        if(id){
            SeafoodService.updateSeafoods(id, seafood).then((response) =>{
                console.log(response.data);
                navigate('/seafoods');
            }).catch(error =>{
                console.log(error);
            })
        }else{
            SeafoodService.createSeafood(seafood).then((response) =>{
                console.log(response.data);
                navigate('/seafoods');
            }).catch(error =>{
                console.log(error);
            })
        }
    }
    useEffect(() =>{
            SeafoodService.getSeafoodByID(id).then((response)=>{
                setName(response.data.name);
                setPrice(response.data.price);
                setAddress(response.data.address);
                setImage(response.data.imgUrl);

                console.log(response);
            }).catch(error =>{
                console.log(error);
            })
        },[])

         var title = () =>{
            if(id){
                return <h2 className="text-center text-primary">Cập nhật</h2>
            }else{
                return <h2 className="text-center text-success">Thêm</h2>
            }
        }
        return(
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Tên hải sản:</label>
                                    <input type="text"
                                           placeholder=""
                                           name="name"
                                           className="form-control"
                                           value={name}
                                           onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Giá hải sản:
                                    </label>
                                    <input type="text"
                                           placeholder=""
                                           name="price"
                                           className="form-control"
                                           value={price}
                                           onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Địa chỉ:
                                    </label>
                                    <input type="text"
                                           placeholder=""
                                           name="address"
                                           className="form-control"
                                           value={address}
                                           onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">
                                        Hình ảnh
                                    </label>
                                    <input type="text"
                                           placeholder=""
                                           name="imgUrl"
                                           className="form-control"
                                           value={imgUrl}
                                           onChange={(e) => setImage(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={(e) => SaveOrUpdateSeafood(e)}>Lưu</button>
                                <Link to='/seafoods' className="btn btn-warning">Quay lại</Link>
                            </form>
                        </div>
                     </div>
                    </div>
                </div>
            </div>
        )
 }
export default AddSeafoodComponent;