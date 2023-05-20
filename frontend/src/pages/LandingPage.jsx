import { useEffect, useState } from "react";

const Landing = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <section className="landing-page">
        {!showContent && (
          <section className="animation">
            <div className="text-center">
              <p className="text-white animate-float-words animate-endorphine">
                Endorphine
              </p>
              {/*  <p className="text-white animate-float-words animate-oxytocin">
                Oxytocin
              </p>
              <p className="text-white animate-float-words animate-dopamine">
                dopamine
              </p> */}
            </div>
          </section>
        )}
        {showContent && (
          <section className="content text-white">
            Your constant content goes here
          </section>
        )}
      </section>
    </section>
  );
};

export default Landing;
