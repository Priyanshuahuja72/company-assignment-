import React from 'react'
import DataList from '../components/DataList'
import SubList from '../components/SubList'
const ApplicationOne:React.FC = () => {
 return (
    <div style={{marginTop: 30 , textAlign: "center"}}>
      <div className="heading-data"><h1>User Data mentioned below</h1></div>
      {/* Calling here dataList Component */}
      <DataList/>
       {/* second Component comes here */}
       <div className="second-heading" style={{paddingTop: 40}}><h2 >Second Component</h2></div>
       <SubList/>
    </div>
  )
}

export default ApplicationOne