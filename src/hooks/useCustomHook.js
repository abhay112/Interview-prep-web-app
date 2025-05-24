import React, { useState } from 'react'

const withCounter = (OldComponent,incrementBy) => {
  return function EnhanceComponent(props){
    const [count,setCount] = useState(0);
    return <OldComponent {...props} count={count} increment={()=>setCount(count+incrementBy)}/>
  }
}

export default withCounter