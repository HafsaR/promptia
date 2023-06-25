import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Shar
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            AI-Powered prompts
          </span>
        </h1>
        <p className="desc text-center"> 
          Propmtia is an open-source AI prompting tool for modern world to
          discover, create snd share creative prompts
        </p>
        <Feed />
      </section>
    </div>
  );
};

export default Home;
