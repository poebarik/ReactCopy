import imageAboutUs from '../images/imageAboutUs.png';
import '../style.css';


function AboutUsPage2() {
  return (
    <div className="AboutUsPage2Main">
        <div class="AboutUsPage2MainCenter">
            <div class="AboutUsPage2MainFirst">
                <div class="AboutUsPage2MainFirstInner">
                    <p class="Cap3">ABOUT US</p>
                    <p class="HeadingH2">We are a team of content writers who share their learnings</p>
                </div>
            </div>
            <div class="AboutUsPage2MainLast">
                <p class="Body1Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
      <div class="AboutUsPage2Photo">
        <img src={imageAboutUs} width="1440" alt="#"/>
      </div>
      <div class="AboutUsLines">
        <div class="AboutUsLinesFirst">
            <div class="AboutUsLinesFirstBlock">
                <p class="Display">12+</p>
                <p class="Body1Text">Blogs Published</p>
            </div>
            <div class="AboutUsLinesFirstBlock">
                <p class="Display">18K+</p>
                <p class="Body1Text">Views on Finsweet</p>
            </div>
            <div class="AboutUsLinesFirstBlock">
                <p class="Display">30K+</p>
                <p class="Body1Text">Total active Users</p>
            </div>
            </div>
        <div class="AboutUsLinesLastBlock">
            <div class="AboutUsLinePurple"></div>
            <div class="AboutUsLineYellow"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage2;
