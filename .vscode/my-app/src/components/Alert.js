import React from 'react'

export default function Alert(props) {
  return (
   

    <div>
     {props.alert==null?null:<div className= "alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.alert.msg}</strong> 
  
   
  </div>} 
      

</div>
        
  )
}
