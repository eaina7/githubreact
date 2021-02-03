// ComponentName = DetailedProfile   
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


const DetailedProfile = () => { 
  const { detailedProfileName } = useParams();
  let [githubinfo,setGitHubInfo] = useState();
  
  console.log(detailedProfileName)
	 useEffect(() => {
		axios
		  .get(`https://api.github.com/users/${detailedProfileName}`)
		  .then((result) => setGitHubInfo(result.data))
		  .catch((error) => console.log(error));
	  }, [detailedProfileName]);
	 /**
	  * create a useeffect
	  * fetch the github info from profile
	  * create a state with the github info
	  * update the state with info from profile
	  * display the state
	  */
  
 return (   
	      <div className="content">
			  {detailedProfileName}
			  
			  <div className ="display">{githubinfo ? <div>{githubinfo.login} <img src={githubinfo.avatar_url}/> {githubinfo.public_repos}</div>: null}</div>
			            </div>
						
	);
} 
export default DetailedProfile