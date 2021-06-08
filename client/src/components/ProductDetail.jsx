import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainOverview from "./overview/MainOverview.jsx";
import QuestionList from "./QA/QuestionList.jsx";
import Reviews from "./reviews/Reviews.jsx";
import styles from ".././style.css";


const ProductDetail = () => {
  const [prod, setProd] = useState(null);
  const { product_id } = useParams();
  // console.log('id pd', product_id);

  useEffect(() => {
    fetch(`http://localhost:3246/api/products/${product_id}?format=json`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => setProd(data))
      .catch(err => console.log("err", err))
  }, []);



  return (
    <div>
      <div>
        <div>
          <MainOverview prod={prod} />
        </div>
        <div>
          <QuestionList id={product_id} />
        </div>
        <div>
          <Reviews id={product_id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
