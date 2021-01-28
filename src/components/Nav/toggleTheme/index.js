// Theme-Toggler   
import { Toggle } from 'rsuite'; 
import './theme.css';   
// this libary pulluted the entire app, thus I did not use it
//import 'rsuite/dist/styles/rsuite-default.css';  
 
const ToggleTheme = ( {handler}) => {  
    return (   
    <> 
	    <span onClick={handler}> 
    	     <Toggle size="lg" checkedChildren="white" unCheckedChildren="grey" />
    	</span>
	</>
	);
} 
export default ToggleTheme