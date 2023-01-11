import React from 'react';
import { Link } from "react-router-dom";
const PopularArtical = () => {
  const data = [
    {link:"/",img:"https://s1.1zoom.me/big3/207/373785-svetik.jpg",title:"Barsoom is wonderful",date:"August 9 2023"},
    {link:"/",img:"https://s1.1zoom.me/big3/207/373785-svetik.jpg",title:"Barsoom is wonderful",date:"August 9 2023"},
    {link:"/",img:"https://s1.1zoom.me/big3/207/373785-svetik.jpg",title:"Barsoom is wonderful",date:"August 9 2023"},
    {link:"/",img:"https://s1.1zoom.me/big3/207/373785-svetik.jpg",title:"Barsoom is wonderful",date:"August 9 2023"},
    {link:"/",img:"https://s1.1zoom.me/big3/207/373785-svetik.jpg",title:"Barsoom is wonderful",date:"August 9 2023"},
    {link:"/",img:"https://s1.1zoom.me/big3/207/373785-svetik.jpg",title:"Barsoom is wonderful",date:"August 9 2023"}
]
    return (
        <>
           {data.map((e,i)=>(
             <div className="row" key={i}>
             <div className="col-4">
                 <Link to={e.link} className='image'><img src={e.img} alt="" /></Link>
             </div>
             <div className="col-8">
                 <div className="title-time">
                     <Link to={e.link} >{e.title} </Link>
                     <br />
                     <span>{e.date}</span>
                 </div>
             </div>
         </div>
           ))}
            
        </>
    )
};

export default PopularArtical;