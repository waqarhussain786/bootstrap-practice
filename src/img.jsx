import React from 'react'

const Img = () => {
    let imgs = [
        'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg',
        'https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg',
      ];

      let cars =[
        'a','b','c','d','e'
      ];
      let name = 'waqarhussain';
      let name1 = 'salman';
      let name2 = 'ali';
      let name3 = 'ahmed';

      const cast = 'ujjan';

      let firstNumber = 4;
      let secondNumber = 4;
      let thirdNumber = 4;
      let forthNumber = 4;
      let a = 'names';


  return (
    <div>
        <h3>({firstNumber+a})</h3>

        <h2>{name+cast} {firstNumber}</h2>
        <h2>{name1} {cast} {secondNumber}</h2>
        <h2>{name2} {cast} {thirdNumber}</h2>
        <h2>{name3} {cast} {forthNumber}</h2>
        <h1>{cars[0]}</h1>
        <h1>{cars[3]}</h1>
        <h1>{cars[4]}</h1>
        <h1>{cars[2]}</h1>
        <h1>{cars[1]}</h1>
        <img src = {imgs[0]} alt = "IMG"/>
        <img src = {imgs[1]} alt = "IMG" />
    </div>
  )
}

export default Img