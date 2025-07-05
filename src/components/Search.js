import React, { useState } from "react";
import Header from "./Header";

export default function App(){
    const [searchInput, setSearchInput] = useState("");
    let footballer = [
        {name: "Văn Quyết", salary: 90000, address: "Thạch Thất", imgUrl: 'https://cdn2.tuoitre.vn/thumb_w/1200/471584752817336320/2024/10/12/van-quyet-can-canh-17287448037641939937261-41-0-565-1001-crop-1728744826584981768837.jpg'},
        {name: "Thành Chung", salary: 90000, address: "Tuyên Quang", imgUrl: 'https://vcdn1-vnexpress.vnecdn.net/2021/10/14/thanh-chung-mobile-5301-1634199482.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=VYL6FyjIkwkljNLcSvmsmA'},
        {name: "Ronaldo", salary: 90000, address: "Madeira", imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHm00TmPEIH1ToD4rqKZG2Eb58e6dL7iHDM4qrV-Iz0YEDj2c7Ycqio4M2aNrCIHdqWPwzYi16Qx6iTGsJ1ItYK9FTEU31CWxGNxNvOg'},
        {name: "Duy Mạnh", salary: 90000, address: "Đông Anh", imgUrl: 'https://photo.znews.vn/w660/Uploaded/lce_jwqqc/2025_01_05/z6200461301995_41031e6740b6e0f8517c0642d6ec41d6_1.jpg'},
        {name: "Messi", salary: 90000, address: "Rosario", imgUrl: 'https://vcdn1-thethao.vnecdn.net/2022/12/19/fkscvpyvqaa1fv9-jfif-167139012-9444-5939-1671391905.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=3hRZ0Szr15s7C7xncexxuw'}
    ]
    const handleChange = (e) =>{
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    // filter countries according to search values
    function searchList(){
        let FilteredCountries = footballer.filter((footballer) =>{
            return footballer.name.match(searchInput.toLowerCase());
        });
        // create table rows
        const filtered = FilteredCountries?.map((footballer) => (
            <tr>
                <td>{footballer.name}</td>
                <td>{footballer.salary}</td>
                <td>{footballer.address}</td>
                <td><img src={footballer.imgUrl} width="60px" height="60px" /></td>
            </tr>
        ));
        return <div>{filtered}</div>
    }
    return(
        <div align="center">
            <Header></Header>
            <h2>{" "}
                Tìm kiếm cầu thủ theo tên
            </h2>
            Nhập tên cầu thủ <input type="search"
                                    placeholder="Nhập họ tên cần tìm"
                                    onChange={handleChange}
                                    value={searchInput}
                                    width={100}
                            />
            <table>
                <tr width="100%">
                    <td>Họ tên</td>
                    <td>Lương</td>
                    <td>Địa chỉ</td>
                    <td>Hình ảnh</td>
                </tr>
                {searchList()}
            </table>
        </div>
    );
}