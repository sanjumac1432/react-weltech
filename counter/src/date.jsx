import React, { useState } from "react";

export const Update = () => {
  let newdate = new Date();
  let d = newdate.getDate();
  let m = newdate.getMonth()+1;
    let y = newdate.getFullYear();

  let [date, Setdate] = useState(d);
  let [month, Setmonth] = useState(m);
  let [year, Setyear] = useState(y);

  const handleDate = () =>{
    if(date<=30){
        Setdate(date + 1);
        }
        else if(date > 30){
            Setdate(date = 1);
            if(month<12){
                Setmonth(month + 1);
            }else{
                Setmonth(month=1);
                Setyear(year+1);
            }
             
        }
        
}

  return (
    <>
      <button>pre</button>
      <div>
        date : {date} /{month}/{year}</div>
      <button onClick={handleDate}>next</button>
    </>
  );
};
