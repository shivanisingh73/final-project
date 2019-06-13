import {observable,action} from 'mobx';
import axios from 'axios';
import md5 from 'md5';
import values from '../utils/Data';


class Nasscom {

@observable body= {
        "email": '',
        "hash": '',
        "timestamp": '',
      };

@observable otppin = '';

@observable title = new Set(); 
@observable values=values;
@observable count=0;
     
@observable data1= '';
@observable otp_res= [];
@observable access_token='';
@observable value1='';
@observable value2='';

@observable value3='';
@observable value4='';
@observable name=[];


@action generateOTP = async(text,ref) => {
   this.body.email=text
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      alert("Email is Not Correct");

      return false;
    }
    else {

      await fetch('http://nasscomevents.venusens.com/user/getcode', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(this.body)
      })
        .then(response => response.json())
        .then((res) => {
           this.otp_res= res
           console.warn('OTP-', this.otp_res.data.otp);
           ref.props.navigation.navigate('otp')
           console.warn('OTP-', this.otp_res);
           ref.props.navigation.navigate('otp',{email1:this.body.email})
        })
       
    }
  } 



@action hash_generate =() =>
{
    let time = Date.now();
    const key1 = "ux19tyiC5Fn0JTLa1l9CIIe03Cw2NsPD";
    const key2 = "vqPvO5H6bMbUhBiOqKT32priQnQrO43k";
    const hash = key1 + key2 + time;
    console.warn(hash);
    let hashkey = md5(hash);
    this.body.timestamp = time;
    this.body.hash = hashkey;
   
    console.warn(this.body)
    console.warn(hashkey);

}
@action access =async(value) =>
{
  
  await fetch('https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code='+value+'&redirect_uri=https://com.kelltontech.nilf2018.linkedin.oauth/oauth&client_id=818yckh1ioxpdc&client_secret=HL3O0fE6zUE5Rofi')
  .then(response => response.json())
  .then((res) => {
    console.warn(res)
     this.get_name(res.access_token)
    
  })


}

@action verify=()=>{
  console.warn('otp to verify',this.otp_res.data.otp) 
}

@action get_name=async(value)=>
{
  await fetch('https://api.linkedin.com/v2/me',{
    method: 'GET',
    headers:{
      Authorization:`Bearer ${value}`,
    
    }
  })
  .then(response => response.json())
  .then((res) => {
    console.log(res)
     this.name=res    
     console.log(this.name)
  })


}

@action changeTouch=(title, ref)=>{

  if(this.title.has(title))
      {
          this.title.delete(title)
      }
      else{
          console.warn(title);
          this.title.add(title);
          console.warn("in set",this.title)
      }
      ref.setState({})

}

@action click=(index,title,ref)=>{

  console.warn(index,title)
  const obj = this.values.find(ele => ele.title == title).data[index]
 const tempBool = obj.selected 
 if(tempBool == true)
 {
   this.count=this.count+1;
   console.warn("count",this.count)
 }
 obj.selected = !tempBool
  ref.setState({})

 }

}

export default new Nasscom()