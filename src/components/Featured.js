import imageLogo1 from '../images/imageLogo1.png';
import imageLogo2 from '../images/imageLogo2.png';
import imageLogo3 from '../images/imageLogo3.png';
import imageLogo4 from '../images/imageLogo4.png';
import imageLogo5 from '../images/imageLogo5.png';

import '../style.css';

function Featured() {
  return (
    <div className="FeaturedMain">
        <div className="FeaturedInfo">
            <p class="Body2Text">We are</p>
            <p class="HeadingH4">Featured in</p>
        </div>
        <div class="FeaturedLogos">
            <img src={imageLogo1} width="170" alt=""/>
            <img src={imageLogo2} width="170" alt=""/>
            <img src={imageLogo3} width="170" alt=""/>
            <img src={imageLogo4} width="170" alt=""/>
            <img src={imageLogo5} width="170" alt=""/>
        </div>

    </div>
  );
}

export default Featured;
