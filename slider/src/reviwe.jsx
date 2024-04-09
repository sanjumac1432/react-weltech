import React, { useState }  from 'react'
import { reviews}  from "./reviewdata";


export const Reviwe = () => {

const [show ,setshowdata]= useState(reviews)
const [index,setindex]= useState(0);

const next =(index)=>{
  if(index == show.length-1){
    setindex(0)
  }
  else{

    setindex(index+1)
  }
}
const pre =(index)=>{
  if(index <= 0){
    setindex(show.length-1)
  }
  else{

    setindex(index-1)
  }

}
const surprice =(index)=>{
setindex(0)
}

  return (
<div>

  {
    <main>
    <section class="container">
     
      <div class="title">
        <h2>our reviews</h2>
        <div class="underline"></div>
      </div>
  
      <article class="review">
        <div class="img-container">
          <img src={show[index].img} id="person-img" alt="" />
        </div>
        <h4 id="author">{show[index].name}</h4>
        <p id="job">{show[index].job}</p>
        <p id="info">{show[index].text}</p>
        <p id="ids">{show[index].id}</p>
        
        <div class="button-container">
          <button class="prev-btn" onClick={()=>{
            pre(index)
          }}>
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="next-btn" onClick={()=>{
            next(index)
          }} >
            <i class="fas fa-chevron-right"></i>
            
            
          </button>
        </div>
     
        <button class="random-btn" onClick={()=>{
          surprice(index)
        }}  >surprise me</button>
      </article>
    </section>
  </main>

 
  }
</div>
  )
}
