import imagePosts from '../images/imagePosts.png';
import '../style.css';

function Posts() {
  return (
    <div class="PostsMainSize">
        <div class="PagePostsBlock"> 
            <div class="PostsBlockLeft">
            <h2 class="HeadingH2">Featured Post</h2>
                <div class="PostsBlockLeftInner">
                    <div class="PostsBlockLeftInnerInner">
                        <img src={imagePosts} width="669" height="352" alt=""/>
                        <div>
                        <p class="Label01">By <span class="highlited2">John Doe</span> l May 23, 2022</p>
                        </div>
                        <div>
                            <p class="HeadingH3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <p class="Body1Text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                        <a href="https://www.youtube.com/?app=desktop&hl=ru" class="button PostsButton">Read More &gt;</a>
                    </div>
                </div>
            </div>
            <div class="PostsBlockRight">
                <div class="HeaderOfPostsBlockRight">
                    <h2 class="HeadingH2">All Posts</h2>
                    <a href="https://www.youtube.com/?app=desktop&hl=ru">View All</a>
                </div>
                <div class="InnerBlock">
                    <div class="InnerInnerBlock">
                        <p class="Label01">By <span class="highlited2">John Doe</span> l Aug 23, 2021</p>
                        <p class="HeadingH4">8 Figma design systems that you can download for free today.</p>
                    </div>
                </div>
                <div class="InnerBlock secondInnerBlock">
                    <div class="InnerInnerBlock">
                        <p class="Label01">By <span class="highlited2">John Doe</span> l Aug 23, 2021</p>
                        <p class="HeadingH4">8 Figma design systems that you can download for free today.</p>
                    </div>
                </div>
                <div class="InnerBlock">
                    <div class="InnerInnerBlock">
                        <p class="Label01">By <span class="highlited2">John Doe</span> l Aug 23, 2021</p>
                        <p class="HeadingH4">8 Figma design systems that you can download for free today.</p>
                    </div>
                </div>
                <div class="InnerBlock">
                    <div class="InnerInnerBlock">
                        <p class="Label01">By <span class="highlited2">John Doe</span> l Aug 23, 2021</p>
                        <p class="HeadingH4">8 Figma design systems that you can download for free today.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Posts;
