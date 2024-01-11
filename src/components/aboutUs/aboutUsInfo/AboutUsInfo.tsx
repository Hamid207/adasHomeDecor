import style from "./AboutUsInfo.module.css";

const AboutUsInfo = () => {
  return (
    <section>
      <div>
        <ul className={style.list_body}>
          <li>
            <div>
              <h2>500+</h2>
              <p>PROJECTS</p>
            </div>
          </li>
          <li>
            <div>
              <h2>70+</h2>
              <p>PARTNERS</p>
            </div>
          </li>
          <li>
            <div>
              <h2>30K+</h2>
              <p>FOLLOWERS</p>
            </div>
          </li>
          <li>
            <div>
              <h2>25+</h2>
              <p>YEARS</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsInfo;
