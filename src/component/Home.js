import { Card} from 'antd';
import { useNavigate } from 'react-router-dom';
import './home.css'


const Home =()=>{

    const navigate = useNavigate();

    const navigateToApplication = () => {
      navigate("/applications");
    };
	
    const navigateToData = () => {
        navigate("/data");
      };
      const navigateToResourcePage = () => {
        navigate("/resources");
      };
      


    return(
        <>
<div style={{margin:'5rem',marginLeft:'20rem'}} >

    <Card
			
									hoverable="true"
									onClick={navigateToData}
								><div >
                                <b>View Data</b>
                            </div>
									
									<div >
										This function is for viewing overall data from cloud which has application and resouces information that run Elanco day-to-day.  
									</div>
								</Card>
                        
                                <Card style={{marginTop:'2rem'}}
			
									hoverable="true"
									onClick={navigateToApplication}
								>
									<div >
										<b>View Application Data</b>
									</div>
									<div >
										This function is for viewing all application information.  
									</div>
								</Card> 
                                
                                <Card style={{marginTop:'2rem'}}
			
									hoverable="true"
									onClick={navigateToResourcePage}
								>
									<div >
										<b>View Resources Data</b>
									</div>
									<div >
										This function is for viewing all resource information.  
									</div>
								</Card> 
                                </div>
                                </>
    )
    

}


export default Home