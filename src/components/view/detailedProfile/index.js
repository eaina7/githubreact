// ComponentName = DetailedProfile   
import { useParams } from "react-router-dom";

const DetailedProfile = () => { 
  const { detailedProfileName } = useParams();
 return (   
	      <div className="content">
			  {detailedProfileName}
          </div>
	);
} 
export default DetailedProfile