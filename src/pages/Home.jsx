import ToDoList from '../components/ToDoList'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import Names from '../components/Names';

function Home() {
  return (
    <div className="App">
      <Header/>
      <ToDoList />
      <Names/>
      <Footer/>
    </div>
  );
}

export default Home;