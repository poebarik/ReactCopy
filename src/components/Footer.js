import footerLogo1 from '../images/footerLogo1.png';
import footerLogo2 from '../images/footerLogo2.png';
import footerLogo3 from '../images/footerLogo3.png';
import footerLogo4 from '../images/footerLogo4.png';

import '../style/footerStyle.css'; 
import '../style/textStyle.css'; 


function Footer() {
  return (
    <div className="FooterMain">
      <footer>
        <div class="FooterFirst">
            <div class="FooterFirstLeft">
            <h1>&#123;Finsveet</h1>
            </div>

            <div class="FooterFirstRight">
                <nav>
                    <ul>
                        <li><a href="www">Home</a></li>
                        <li><a href="www">Blog</a></li>
                        <li><a href="www">About Us</a></li>
                        <li><a href="www">Contact us</a></li>
                        <li><a href="www">Privacy Policy</a></li>
                    </ul>
                </nav>
            </div>
        </div> 
        <div class="FooterSecondCenter">
            <div class="FooterSecond">
                <p class="HeadingH2 FooterText">Subscribe to our news letter to get latest updates and news</p>
                <input type="text" class="FooterInput" placeholder="Enter your Email"/>
                <div class="buttonSub FooterButton"><a href="https://www.youtube.com/?app=desktop&hl=ru">Subscribe</a></div>
            </div>
        </div>
        <div class="FooterThirdCenter">
            <div class="FooterThird">
                <div>
                    <p class="Body1Text FooterThirdText">Finstreet 118 2561 Fintown</p>
                    <p class="Body1Text FooterThirdText">Hello@finsweet.com 020 7993 2905</p>
                </div>
                <div class="FooterLogos">
                    <a href="www"><img src={footerLogo1} alt=""/></a>
                    <a href="www"><img src={footerLogo2} alt=""/></a>
                    <a href="www"><img src={footerLogo3} alt=""/></a>
                    <a href="www"><img src={footerLogo4} alt=""/></a>

                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
