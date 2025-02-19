import imageSpecialPost from '../images/imageSpecialPost.png';
import '../style.css';

function SpecialPost() {
  return (
    <div className="SpecialPostMain">
        <div class="SpecialPostMainBlock">
          <div class="SpecialPostMainBlockPhoto">
            <img src={imageSpecialPost} alt=""/>
          </div>
          <div class="SpecialPostInfo">
          <div class="SpecialPostInfoInner">
              <p class="Cap1">WHY WE STARTED</p>
              <p class="HeadingH1">It started out as a simple idea and evolved into our passion</p>
              <p class="Body1Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              <a href="https://www.youtube.com/?app=desktop&hl=ru" class="button SpecialPostsButton">Discover our story &gt;</a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default SpecialPost;
