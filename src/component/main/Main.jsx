import React from "react";
import CardComponent from "../card/CardComponent";
import { MainDiv } from "../styled";

const Main = props => {
  const { photoList } = props;
  console.log(photoList);
  const cardElem = photoList
    ? photoList.map(data => {
        return <CardComponent key={data.photo_seq} photoList={data} />;
      })
    : [];
  return <MainDiv>{cardElem}</MainDiv>;
};

export default Main;
