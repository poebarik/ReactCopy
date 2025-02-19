import imageIcon1 from '../images/imageIcon1.png';
import imageIcon2 from '../images/imageIcon2.png';
import imageIcon3 from '../images/imageIcon3.png';
import imageIcon4 from '../images/imageIcon4.png';
import '../style.css';

function Choose() {
  return (
    
    <div class="ChooseMain">
        <div class="ChooseFullBlock">
            <h2 class="HeadingH2">Choose A Catagory</h2>
            <div class="ChooseFullIntoBlock">
                <div class="ChooseBlock">
                    <div class="ChooseBlockText">
                        <div class="Icon"><img src={imageIcon1} width="60px" height="60px" alt=""/></div>
                        <p class="HeadingH3">Business</p>
                        <p class="Body1Text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>               
                </div>
                <div class="ChooseBlock yellowBlock">
                    <div class="ChooseBlockText">
                        <div class="Icon"><img src={imageIcon2} width="36px" height="36px" alt=""/></div>
                        <p class="HeadingH3">Startup</p>
                        <p class="Body1Text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>  
                </div>
                <div class="ChooseBlock ">
                    <div class="ChooseBlockText">
                        <div class="Icon"><img src={imageIcon3} width="60px" height="60px" alt=""/></div>
                        <p class="HeadingH3">Economy</p>
                        <p class="Body1Text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>  
                </div>
                <div class="ChooseBlock">
                    <div class="ChooseBlockText">
                        <div class="Icon"><img src={imageIcon4} width="60px" height="60px" alt=""/></div>
                        <p class="HeadingH3">Technology</p>
                        <p class="Body1Text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Choose;
