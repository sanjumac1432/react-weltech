import React,{useState , useEffect} from 'react'

export const Card = () => {


    const [data,setdata] = useState([]);

    useEffect(()=>{

        fetch("https://course-api.com/react-tours-project").then(y=> y.json()).then(y=>{
            setdata(y);
            console.log(y);
        })

    },[])


    const notintreseted = (index)=>{

let d = [...data];
d.splice(index,1)
setdata(d);
console.log("remove")

    }



  return (
    <div>
      
      {
        data.map((value,index)=>{
          return (
            <div key={index} className="container">
 
  <div className="card">
    <div className="card-body">
    <b>{value.name}</b>
    <br />
    {
      value.image && (
        <img src={value.image} alt="img" width={500} height={250}/> 
        
      )}
      <br />
      <p>dec:{value.info}</p>
      <br />
     <p> Price: ${value.price}.00</p>
      <button onClick={()=>{
        notintreseted(index)
      }}>Not Interested</button>

    </div>
  </div>
</div>

          )

        })
      }  </div>
  )



}
