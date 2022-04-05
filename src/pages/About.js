import "./css/about.css";
export default function About() {
  return (
    <div>
      {/* Section A */}
      <section id="section-about-a">
        <div className="container py-2">
          <div className="card-about-a">
            <h1 className="card-title text-center">Leo</h1>
            <p className="bio">
              My name is Leo, i am an 9 months healthy and happy budgie. I am
              being treated very well by my owners and in my lifetime i have
              learned a lot of tricks and words.
            </p>
          </div>
          <div className="card-leo"></div>
        </div>
      </section>

      <section id="section-about-b">
        <div className="container py-2">
          <div className="card-story">
            <h1 className="card-title text-center">Story</h1>
            <p className="story text-center">
              I have a terrifying story to tell. It was 2 weeks ago when I flew
              away from home by accident. I was curious like every bird and flew
              out but then I was so scared I flew so far away from home I didn't
              knew where i was. I was gone from home for 6 hours and it started
              getting dark and cold and I didn't know where to go, but lucky my
              owner's friend found me and put me on his shoulder and took me at
              his home. It was almost midnight he contacted my owner and my
              owner came and took me with my cage and drove me home. I was so
              happy to be back.
            </p>
          </div>
        </div>
      </section>

      <section id="section-about-c">
        <div className="container py-2">
          <div className="card-friend">
            <h1 className="card-title text-center">Chiki</h1>
            <p className="friend text-center">
              This is my best friend Chiki. It's my owner's girlfriend's budgie
              and we are the same age. We like to play together so much and we
              love each other so much
            </p>
            <div className="card-chiki"></div>
          </div>
        </div>
      </section>

      {/* Footer Content*/}
      <footer id="main-footer">
        <i class="fa-solid fa-dove fa-2x"></i>
        <h1>Copyright &copy; 2022, All Rights Reserved</h1>
        <i class="fa-solid fa-dove fa-2x"></i>
      </footer>
    </div>
  );
}
