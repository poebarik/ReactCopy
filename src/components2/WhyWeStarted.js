import imageWhyWeStarted from '../images/imageWhyWeStarted.png';
import '../style.css';


function WhyWeStarted() {
  return (
    <div className="OurTeamMain">
        <div class="OurTeamBlock">
            <div class="OurTeamBlockImage">
                <img src={imageWhyWeStarted} height="517" alt="#"/>
            </div>
            <div class="OurTeamBlockInfo">
                <p class="HeadingH2">Why we started this Blog</p>
                <p class="HeadingH4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <p class="Body1Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>        
            </div>
            
        </div>
    </div>
  );
}

export default WhyWeStarted;
