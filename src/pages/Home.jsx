import MainPage from '../components/MainPage'
import Posts from '../components/Posts'
import AboutUsBlock from '../components/AboutUsBlock'
import Choose from '../components/Choose';
import SpecialPost from '../components/SpecialPost';
import Authors from '../components/Authors';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

function Home() {
    return (
      <div className="App">
        <MainPage/>
        <Posts/>
        <AboutUsBlock/>
        <Choose/>
        <SpecialPost/>
        <Authors/>
        <Featured/>
        <Testimonials/>
        <Team/>
      </div>
    );
  }
  
  export default Home;
  