import React from 'react'

export default function Alert(props) {
  return (
   
    <div className="aller">
     {props.alert==null?null:<div className= "alert alert-danger alert-dismissible fade show" role="alert">
  <strong>{props.alert.msg}</strong> 
  
   
  </div>} 
      

</div>
        
  )
}
