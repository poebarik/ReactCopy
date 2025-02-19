
import '../style.css';

function AboutUs() {
  return (
    <div className="AboutUsMain">
        <div class="AboutUsMainBlock">
            <div class="Pattern">
                <div class="FirstPattern"></div>
                <div class="SecondPattern"></div>
            </div>
            <div class="UnderPatternBlock">
                <div class="AboutUsMainBlockLeft">
                    <p class="Cap1">ABOUT US</p>
                    <p class="HeadingH2">We are a community of content writers who share their learnings</p>
                    <p class="Body1Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="www">Read More &gt;</a>
                </div>
                <div class="AboutUsMainBlockRight">
                    <p class="Cap1">OUR MISSION</p>
                    <p class="HeadingH3">Creating valuable content for creatives all around the world</p>
                    <p class="Body1Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutUs;
