
import './css/App.css'
import paw from './assets/images/paw.png'
import dog2 from './assets/images/dog2.png'
import logo from './assets/images/logo.png'
import login from './assets/images/login.png'
import logo2 from './assets/images/logo2.png'
import circle from './assets/images/circle.png'
import icon1 from './assets/images/icon1.png'
import phone from './assets/images/phone.png'

import "./css/navbar.css"

const App = () => {
  return (
    <div >
      <div className='bc'>
        <img src={circle} className='circle'/>
      <div className='con'>
        <img className='paw ' src={paw}/>
        <table>
          <tr >
            <td rowSpan={3} className='datap'>
        <div className='letter'>
        <p className='c'>C</p>
      </div></td>
      <td className='datap'>
      <div className='letter1'>
        <p className='c2'>ONNECT</p>
      </div>
        
      </td>
      <td>
      <div className='letter2'>
        <p className='c2'>ARE</p>
      </div>
        
      </td>
      <td>
      <div className='letter3'>
        <p className='c2'>URE</p>
      </div>
        
      </td>
      <td>
      <div className='letter4'>
        <p className='c4'>with</p>
        <br/><br/><br/>
      </div>
        
      </td>
      <td>
      <img src={logo2} className='logo2'/>
      <img src={phone} className='phone'/>
      <div className='no'> <p className='phoneno'>777 344 882 / 11 3 523 675</p></div>
      
        
      
        
      </td>
      <div className='letter5'>
      
        <p className='c5'>Friendly Clinic</p>
      </div>
      </tr></table>
      </div>
      
        
        <div className='belt'>
        
          <hr className='hrule'/>
          <div className='nav'>
        <table>
            <tr>
                <td className='data'><center/><div className='t1'>Take Me</div><div className='t2'>Home</div></td>
                <td className='data'><div className='t1'>It's All</div><div className='t2'>About</div></td>
                <td className='data'><div className='t1'>Lovely</div><div className='t2'>Services</div></td>
                <td className='data'><div className='t1'>Make</div><div className='t2'>Contact</div></td>
                <td className='data'><div className='t1'>Tasty</div><div className='t2'>Treats</div></td>
                <td className='data'><div className='t1'>Make Your</div><div className='t2'>Appoinment</div></td>
                <td className='data'><div className='t1'>Meet Our</div><div className='t2'>Doctors</div></td>

            </tr>
        </table>
        <img src={icon1} className='icon'/>


    </div>
          
          
          <hr className='hrule'/>
          
          
          <img src={dog2} className='dog2img'/>  
          
          
        </div>
        <div>
        
        <img src={logo} className='logo swingimage'/>
        <img src={login} className='login'/>

        <img src={circle} className='circle2'/>

        
        
        

        
        

        
       
</div>


        

        



      </div>
    </div>
    
       
  )
}

export default App

