import imageTestimonialsUser from '../images/imageTestimonialsUser.png';
import imageBackButton from '../images/imageBackButton.png';
import imageForwardButton from '../images/imageForwardButton.png';

import '../style.css';

function Testimonials() {
  return (
    <div className="TestimonialsMain">
        <div class="TestimonialsBlock">
          <div class="TestimonialsFirstBlock">
            <p class="Cap1">TESTIMONIALs</p>
            <p class="HeadingH2">What people say about our blog</p>
            <p class="Body1Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div class="TestimonialsLine"></div>
          <div class="TestimonialsSecondBlock">
            <div class="TestimonialsSecondBlockFirst">
              <p class="HeadingH4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="TestimonialsSecondBlockLast">
            <div class="TestimonialsUser">
              <div><img src={imageTestimonialsUser} alt=""/></div>
              <div>
                <p class="HeadingH4">Jonathan Vallem</p>
                <p class="Body1Text">New york, USA</p>
              </div>
            </div>
            <div class="TestimonialsButtons">
              <div class="BackButton"><img src={imageBackButton} alt=""/></div>
              <div class="ForwardButton"><img src={imageForwardButton} alt=""/></div>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Testimonials;
