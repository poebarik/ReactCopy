import imageLink1 from '../images/imageLink1.png';
import imageLink2 from '../images/imageLink2.png';
import imageLink3 from '../images/imageLink3.png';
import imageLink4 from '../images/imageLink4.png';

import imageAuthor1 from '../images/imageAuthor1.png';
import imageAuthor2 from '../images/imageAuthor2.png';
import imageAuthor3 from '../images/imageAuthor3.png';
import imageAuthor4 from '../images/imageAuthor4.png';

import imageListOfAuthors1 from '../images/imageListOfAuthors1.png';
import imageListOfAuthors2 from '../images/imageListOfAuthors2.png';
import imageListOfAuthors3 from '../images/imageListOfAuthors3.png';
import imageListOfAuthors4 from '../images/imageListOfAuthors4.png';
import '../style.css';

function ListOfAuthors() {
  return (
    <div className="ListOfAuthorsMain">
        <div class="ChooseFullBlock">
            <h2 class="HeadingH2">List of Authors</h2>
            <div class="ChooseFullIntoBlock">
                <div class="AuthorsBlock">
                    <div class="AuthorsBlockText">
                        <img src={imageAuthor1} width="128px" alt=""/>
                        <p class="HeadingH3">Floyd Miles</p>
                        <p class="Body2Text">Content Writer @Company</p>
                        <div class="AuthorLinks">
                            <a href="www"><img src={imageLink1} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink2} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink3} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink4} width="20" alt="#"/></a>
                        </div>
                    </div>               
                </div>
                <div class="AuthorsBlock AuthorsYellowBlock">
                    <div class="AuthorsBlockText">
                        <img src={imageAuthor2} width="128px" alt=""/>
                        <p class="HeadingH3">Dianne Russell</p>
                        <p class="Body2Text">Content Writer @Company</p>
                        <div class="AuthorLinks">
                            <a href="www"><img src={imageLink1} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink2} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink3} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink4} width="20" alt="#"/></a>
                        </div>
                    </div>  
                </div>
                <div class="AuthorsBlock ">
                    <div class="AuthorsBlockText">
                        <img src={imageAuthor3} width="128px"  alt=""/>
                        <p class="HeadingH3">Jenny Wilson</p>
                        <p class="Body2Text">Content Writer @Company</p>
                        <div class="AuthorLinks">
                            <a href="www"><img src={imageLink1} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink2} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink3} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink4} width="20" alt="#"/></a>
                        </div>
                    </div>  
                </div>
                <div class="AuthorsBlock">
                    <div class="AuthorsBlockText">
                        <img src={imageAuthor4} width="128px" alt=""/>
                        <p class="HeadingH3">Leslie Alexander</p>
                        <p class="Body2Text">Content Writer @Company</p>
                        <div class="AuthorLinks">
                            <a href="www"><img src={imageLink1} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink2} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink3} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink4} width="20" alt="#"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ChooseFullIntoBlock AuthorsSecond">
                <div class="AuthorsBlock">
                    <div class="AuthorsBlockText">
                        <img src={imageListOfAuthors1} width="128px" alt=""/>
                        <p class="HeadingH3">Guy Hawkins</p>
                        <p class="Body2Text">Content Writer @Company</p>
                        <div class="AuthorLinks">
                            <a href="www"><img src={imageLink1} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink2} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink3} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink4} width="20" alt="#"/></a>
                        </div>
                    </div>               
                </div>
                <div class="AuthorsBlock ">
                    <div class="AuthorsBlockText">
                        <img src={imageListOfAuthors2} width="128px" alt=""/>
                        <p class="HeadingH3">Eleanor Pena</p>
                        <p class="Body2Text">Content Writer @Company</p>
                        <div class="AuthorLinks">
                            <a href="www"><img src={imageLink1} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink2} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink3} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink4} width="20" alt="#"/></a>
                        </div>
                    </div>  
                </div>
                <div class="AuthorsBlock ">
                    <div class="AuthorsBlockText">
                        <img src={imageListOfAuthors3} width="128px"  alt=""/>
                        <p class="HeadingH3">Robert Fox</p>
                        <p class="Body2Text">Content Writer @Company</p>
                        <div class="AuthorLinks">
                            <a href="www"><img src={imageLink1} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink2} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink3} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink4} width="20" alt="#"/></a>
                        </div>
                    </div>  
                </div>
                <div class="AuthorsBlock">
                    <div class="AuthorsBlockText">
                        <img src={imageListOfAuthors4} width="128px" alt=""/>
                        <p class="HeadingH3">Jacob Jones</p>
                        <p class="Body2Text">Content Writer @Company</p>
                        <div class="AuthorLinks">
                            <a href="www"><img src={imageLink1} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink2} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink3} width="20" alt="#"/></a>
                            <a href="www"><img src={imageLink4} width="20" alt="#"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ListOfAuthors;
