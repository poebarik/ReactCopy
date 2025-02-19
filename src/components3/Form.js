//import imageSpecialPost from '../images/imageSpecialPost.png';
import '../style.css';

function Form() {
  return (
    <div className="FormMain">
        <div class="FormBlock">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Your Email"/>
            <select required>
                <option value="" disabled selected>Query Related</option>
                <option> 1</option>
                <option>2</option>
                <option >3</option>
            </select>
            <textarea placeholder="Message" required></textarea>
            <a href="www" class="button"> Send Message</a>
        </div>
    </div>
  );
}

export default Form;
