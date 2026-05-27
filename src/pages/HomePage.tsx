import tsu_logo from "images/tech-start-logo-white.png";
import "./HomePage.css";
import { motion } from "framer-motion";

import NumberStat from "components/NumberStat";
import Divider from "components/Divider";
import Particle from "components/Particles";
import SponsorSection from "components/SponsorSection/SponsorSection";
import Blobbie from "components/Blobbie";
import EventsSection from "components/EventsSection/EventsSection";
import { ProjectsSection } from "../components/ProjectSection/ProjectsSection";
import ApplyButton from "components/ApplyButton";
import AnnouncementBanner from "components/AnnouncementBanner/AnnouncementBanner";

const HomePage = () => {
  const showAnnouncement = false; // toggle visibility
  return (
    <div className="homePage">
      {showAnnouncement && (
        <AnnouncementBanner
          
          link={{
            text: "Click Here",
            to: "https://www.eventbrite.ca/e/tech-start-ucalgary-final-showcase-2026-tickets-1987370723332?aff=oddtdtcreator",
            external: true,
          }}
          message="Sign Up for Final Showcase!"
        />
      )}
      <header className="homePage__hero" id="homePageTop">
        <Particle />
        <div className="homePage__logoContainer">
          <motion.img
            className="homePage__logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={tsu_logo}
          ></motion.img>
        </div>
        <motion.p
          className="homePage__headerSubtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          a tech club for dreamers and doers
        </motion.p>
      </header>

      <section className="homePage__section homePage__section--aboutUs">
        <Blobbie
          id={8}
          width={300}
          transform="translate(-40%, 50%)"
          edge={true}
        />{" "}
        {/* translate is relative to previous div*/}
        <Blobbie
          id={2}
          width={100}
          transform="translate(clamp(10vw, calc(5vw + 1rem), -20vw), -20%)"
          edge={false}
        />
        <Blobbie
          id={3}
          width={250}
          transform="translate(clamp(80vw, calc(5vw + 1rem), -30vw), -30%)"
          edge={false}
        />
        <div className="homePage__container">
          <h1 className="chonkyHeading chonkyHeading--lessMargin">
            We're the innovators on campus!
          </h1>
          <Divider />
          <p className="regularText" id="draft">
            We're a software club at the University of Calgary. Through
            multidisciplinary teams, we take on interesting problems and use
            technology to solve them. Every semester, our teams combine
            software, design, and strategy to complete awesome projects.
          </p>

          <p className="regularText">
            At Tech Start, our members learn to use new technologies, gain
            experience with professional development tools and methodologies,
            and master the art of collaboration. We give our members the support
            and mentorship to succeed here and in industry regardless of their
            previous experiences. We're also the top spot on campus to meet
            fellow tech enthusiasts, aspiring entrepreneurs, and innovators.
          </p>

          <Blobbie
            id={2}
            width={300}
            transform="translate(75vw, -20%)"
            edge={true}
          />
          <div className="homePage__numberContainer">
            <NumberStat number={20} stat="projects so far" />
            <NumberStat number={230} stat="members so far" />
            <NumberStat
              number={99}
              suffix={"%"}
              stat="enjoyed their involvement"
            />
          </div>
          <div className="homePage__applyButtonBox">
            <ApplyButton />
          </div>
        </div>
      </section>

      <div id="projects">
        <ProjectsSection />
      </div>

      <section className="homePage__section homePage__section--events" id="events">
        <Blobbie
          id={3}
          width={400}
          transform="translate(-60%, 10%)"
          edge={true}
        />
        <Blobbie
          id={8}
          width={350}
          transform="translate(75vw, 0vw)"
          edge={false}
        />

        <div className="homePage__container">
          <h1 className="chonkyHeading chonkyHeading--lessMargin">Events</h1>
          <Divider />
          <EventsSection />
        </div>
      </section>

      <section className="homePage__section homePage__section--sponsors" id="sponsors">
        <Blobbie
          id={9}
          width={800}
          transform="translate(-80%, -10%)"
          edge={true}
        />{" "}
        {/* translate is relative to previous div*/}
        <Blobbie
          id={2}
          width={150}
          transform="translate(80vw, 0)"
          edge={false}
        />
        <Blobbie
          id={7}
          width={350}
          transform="translate(90vw, 30vw)"
          edge={false}
        />
        <SponsorSection />
      </section>
    </div>
  );
};
export default HomePage;
