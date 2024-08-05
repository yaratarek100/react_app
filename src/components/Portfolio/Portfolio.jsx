import React from 'react'
import { useState } from 'react';
import Card from '../Card/Card';
import img1 from '../../assets/images/poert1.png';
import img2 from '../../assets/images/port2.png';
import img3 from '../../assets/images/port3.png';
import Star from '../Star/Star';
import PopUp from '../PopUp/PopUp';
import { changeTitle } from '../../App';

export default function Portfolio() {
  let [clickedSrc, setClickedSrc] = useState(null);
  changeTitle("portfolio");



  return (
    <>
    <div className=" main-box-1 bg-white h-full py-12">
      <div className="container mx-auto h-full ">
      <Star color={"var(--dark-color)"} title="Portfolio component" />
      <div className='flex justify-center items-center flex-wrap'>
        <Card src={img1} clickedSrc={clickedSrc} setClickedSrc={setClickedSrc}/>
        <Card src={img2} clickedSrc={clickedSrc} setClickedSrc={setClickedSrc} />
        <Card src={img3} clickedSrc={clickedSrc} setClickedSrc={setClickedSrc} />
        <Card src={img1} clickedSrc={clickedSrc} setClickedSrc={setClickedSrc} />
        <Card src={img2} clickedSrc={clickedSrc} setClickedSrc={setClickedSrc} />
        <Card src={img3} clickedSrc={clickedSrc} setClickedSrc={setClickedSrc} />
        </div>
        </div>
        </div>
        {clickedSrc!=null?<PopUp clickedSrc={clickedSrc} setClickedSrc={setClickedSrc} />:null}        
        </>

  )
}
