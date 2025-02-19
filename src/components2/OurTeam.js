import imageOurTeam from '../images/imageOurTeam.png';
import '../style.css';


function OurTeam() {
  return (
    <div className="OurTeamMain">
        <div class="OurTeamBlock">
            <div class="OurTeamBlockInfo">
                <p class="HeadingH2">Our team of creatives</p>
                <p class="HeadingH4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <p class="Body1Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>        
            </div>
            <div class="OurTeamBlockImage">
                <img src={imageOurTeam} height="480" alt="#"/>
            </div>
        </div>
    </div>
  );
}

export default OurTeam;
