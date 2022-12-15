import HomePage from "../../HomePage/HomePage";
import Feed from '../../Feed/Feed';
import './Home.css'



function Home() {

    return(
  
     <div className='homeContainer'>
         <HomePage/>
       
          <div className="BottomContainer">
          <Feed />

          </div>
        
     </div>
     
    )
  }
  
  export default Home;
  