import React from 'react'
import vc from "../image/vcsir11.png";
import pro_vc from "../image/pro_vc.jpg";
import sunil_sir from "../image/Sunil_sir.png";
import nitin_sir from "../image/nitin_goyal_sir.jpeg";
import Binay_sir from "../image/Binay_sir.jpeg";
import Priti_mam from "../image/priti_mam.png"

function Designation() {
  return (
    <div className='blue-grey darken-3' >
      <div className='row center white-text'  style={{height:"200"}}
      >
        <h4>Members</h4>
        <div className='col l2 m4 s4 white-text center'>
        <img src={vc} alt="" class="circle responsive-img" height={100} width={90}/>
        <p>
          
       <span style={{fontWeight:"bold"}}> Prof. (Dr.) Tankeshwar Kumar</span><br/>Vice Chancellor- CUH
        </p>
        </div>
        <div className='col l2 m4 s4 white-text'>
        <img src={pro_vc} alt="" class="circle responsive-img" height={100} width={90}/>
        <p>
        <span style={{fontWeight:"bold"}}> Prof. (Dr.) Sushma Yadav</span>
          <br/>
          Pro Vice Chancellor
        </p>
        </div>
        <div className='col l2 m4 s4 white-text'>
        <img src={sunil_sir} alt="" class="circle responsive-img" height={100} width={90}/>
        <p>
        <span style={{fontWeight:"bold"}}> Dr. Sunil Kumar </span>

        
        <br/>
        Convener, Coding Club
        <br/>
        Dept. CS & IT
        </p>
        </div>
        <div className='col l2 m4 s4 white-text'>
        <img src={nitin_sir} alt="" class="circle responsive-img" height={100} width={90}/>
        <p>
        <span style={{fontWeight:"bold"}}> Dr. Nitin Goyal </span>
        <br/>
        Assistant Professor, CSE
        </p>
        </div>
        <div className='col l2 m4 s4 white-text'>
        <img src={Binay_sir} alt="" class="circle responsive-img" height={100} width={90}/>
        <p>
        <span style={{fontWeight:"bold"}}> Dr. Binay Kumar Ray </span>
        <br/>
        Assistant Professor, CSE
        </p>
        </div>
        <div className='col l2 m4 s4 white-text'>
        <img src={Priti_mam} alt="" class="circle responsive-img" height={100} width={90}/>
        <p>
        <span style={{fontWeight:"bold"}}> Dr. Priti Maratha </span>
        <br/>
        Assistant Professor, CS & IT
        </p>
        </div>

      </div>
      
    </div>
  )
}

export default Designation;
