import React, { useState, useEffect } from "react";
import Axios from "axios";
import UserCard from "./Component/UserCard";
import Footer from "./Component/Footer";
const emailArray = [];
let renderArr = [];

function App() {
  let [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const url1 = "https://reqres.in/api/users?page=1";
      const url2 = "https://reqres.in/api/users?page=2";
      const res1 = await Axios(url1);
      const res2 = await Axios(url2);
      const res3 = res1.data.data.concat(res2.data.data);
      setData(res1.data.data.concat(res2.data.data));

      //   storing email in array
      res3.forEach((el) => {
        emailArray.push(el.email);
      });
    };

    getdata();
  }, []);

  const inputHandle = (e) => {
    setInput(e.target.value);
  };


  const searchBtnHandle = (e) => {
    e.preventDefault();
    const filterArr = [];
    data.forEach((el) => {
      if (el.email.includes(input)) {
        filterArr.push(el);
      }
      
    })
    setOutput(filterArr)
    };


renderArr = output.length > 0 ? output : data;

  return (
    <div className="container-fluid">
      <div className="row header">
        <div className="col-3">
          <span className="text-left logo">Lybrate</span>
        </div>
        <div className="col-9">
          <form className="d-flex">
            <input
              className="form-control me-1 search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={inputHandle}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={searchBtnHandle}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="card-section">
          <div className="row">
            {renderArr.map((el, index) => {
              return (
                <UserCard
                  pic={el.avatar}
                  firstName={el.first_name}
                  lastName={el.last_name}
                  email={el.email}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
