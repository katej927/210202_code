import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCategory from "./Components/ProductCategory/ProductCategory";
import ClassificationBox from "./Components/ClassificationBox/ClassificationBox";
import { PRODUCTLIST_API } from "../../config";
import { AiOutlineHome } from "react-icons/ai";

export default function ProductList() {
  const [categories, setCategories] = useState([]);
  const [newCategories, setNewCategories] = useState([]);
  const [state, setState] = useState({
    subcategoryCheckboxId1: "",
    subcategoryCheckboxId2: "",
    subcategoryCheckboxId3: "", // 실제 데이터 들어오면 추가
  });

  useEffect(() => {
    // fetch(PRODUCTLIST_API)
    fetch("/data/productList.json")
      .then((res) => res.json())
      .then((res) => setCategories(res.results));
  }, []);

  const isCheckedCategoryName = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    // getStateValues(state)
    // alignCategories(value);
  };

  // const getStateValues = () => {
  //   const stateValues = Object.values(state);
  //   console.log("stateValues 확인: ", stateValues);
  // };

  // newCategories = categories 재정렬(e.target.value로 들어온 값에 대한 객체만)
  const alignCategories = (categoryName) => {
    // {
    //   categories.map((category) => {
    //     if (category.name === categoryName) {
    //       console.log("alignCategories 진입");
    //       console.log(category);
    //       setNewCategories([category]);
    //     }
    //   });
    // }
  };

  console.log("ProductList state, categories 확인:", state, categories);
  return (
    <ProductListWrap>
      <Nav>네브바 자리</Nav>
      <Header>
        <MenuName>음료</MenuName>
        <CurrentLocation>
          <AiOutlineHome size={18} /> {">"} MENU {">"} 음료
        </CurrentLocation>
      </Header>
      <ClassificationBox
        categories={categories}
        state={state}
        isCheckedCategoryName={isCheckedCategoryName}
      />
      <ProductCategory
        categories={categories}
        state={state}
        newCategories={newCategories}
      />
    </ProductListWrap>
  );
}

const ProductListWrap = styled.div`
  padding: 0px 125px;
  font-family: $nanumGothic;
`;

const Nav = styled.nav`
  border: 1px solid black;
  height: 120px;
  width: 100%;
`;

const Header = styled.header`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 98px;
`;

const MenuName = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

const CurrentLocation = styled.div`
  font-size: 12px;
  color: #222222;
`;
