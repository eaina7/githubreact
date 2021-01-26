// ComponentName = DetailedProfile   
import { useParams } from "react-router-dom";

const DetailedProfile = () => { 
  const { detailedProfileName } = useParams();
 return (   
	      <div>
			DetailedProfile for {detailedProfileName}
          </div>
	);
} 
export default DetailedProfile