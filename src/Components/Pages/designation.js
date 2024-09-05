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
      <div className='row center white-text'  style={{height:"400"}}
      >
        <h4 style={{padding:"20px", fontWeight:"bold"}}>Club Members</h4>
        <div className='col l1 m12 s12'></div>
        <div className='col l2 m6 s6 white-text center'>
        <img src={vc} alt="" class="circle responsive-img" height={100} width={90}/>
        <p>
          
       <span style={{fontWeight:"bold"}}> Prof. (Dr.) Tankeshwar Kumar</span><br/>Vice Chancellor<br/> CUH
        </p>
        </div>
        <div className='col l2 m6 s6 white-text'>
        <img src={pro_vc} alt="" class="circle responsive-img" height={100} width={90}/>
        <p>
        <span style={{fontWeight:"bold"}}> Prof. (Dr.) Sushma Yadav</span>
          <br/>
          Pro Vice Chancellor<br/>CUH
        </p>
        </div>
        <div className='col l2 m6 s6 white-text'>
        <img src={sunil_sir} alt="" class="circle responsive-img" height={100} width={90}/>
        <p>
        <span style={{fontWeight:"bold"}}> Dr. Sunil Kumar </span>

        
        <br/>
        Convener, Coding Club
        <br/>
        Assistant Professor, CS & IT - CUH
        </p>
        </div>
        <div className='col l2 m6 s6 white-text'>
        <img src={nitin_sir} alt="" class="circle responsive-img" height={80} width={85}/>
        <p>
        <span style={{fontWeight:"bold"}}> Dr. Nitin Goyal </span>
        <br/>
        Member, Coding Club<br/>
        Assistant Professor, CSE - CUH
        </p>
        </div>
        <div className='col l2 m6 s6 white-text'>
        <img src={Priti_mam} alt="" class="circle responsive-img" height={80} width={80}/>
        <p>
        <span style={{fontWeight:"bold"}}> Dr. Priti Maratha </span>
        <br/>
        Member, Coding Club<br/>
        Assistant Professor, CS & IT - CUH
        </p>
        </div>
        <div className='l1 m12 s12'></div>

      </div>
      
    </div>
  )
}

export default Designation;
