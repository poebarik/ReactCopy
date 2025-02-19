// import logo from '../logo.svg';
import '../style.css';


function Header() {
  return (
    <div className="Header">
      <header>
        <div class="headerLeft">
        <h1>&#123;Finsveet</h1>
        </div>

        <div class="headerRight">
            <div class="headerRightFirst"> 
                <nav>
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="www">Blog</a></li>
                        <li><a href="/About">About Us</a></li>
                        <li><a href="/Contact">Contact us</a></li>
                    </ul>
                </nav>
            </div>
            <div class="buttonSub"><a href="https://www.youtube.com/?app=desktop&hl=ru">Subscribe</a></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
