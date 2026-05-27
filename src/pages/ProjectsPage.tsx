import * as S from "./ProjectsPage.styles";
import { useState } from "react";
import Lottie from "react-lottie";
import { teamProjectLottieOptions } from "utility/LottieOptions";
import { motion } from "framer-motion";
import { PastProjects } from "components/ProjectSection/ProjectData";
import ProjectSection from "components/ProjectSection/ProjectSection";
import FeaturedProjectSection from "components/ProjectSection/FeaturedProjectSection";
import Divider from "components/Divider";
import ProjectKeywordsSection from "components/ProjectSection/ProjectKeywordsSection";
import { NewlineText } from "utility/Helpers";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";

const ProjectsPage = () => {
  const [featuredProjects] = useState(
    PastProjects.filter((project) => project.featured === true)
  );
  const [bestOverallProjects] = useState(
    PastProjects.filter((project) => project.showcaseWinner === true)
  );
  return (
    <S.ProjectsPage id="projectsPageTop">
      <S.ProjectsPageHeader>
        <S.ProjectsPageHeaderItem>
          <S.LottieDiv>
            <Lottie options={teamProjectLottieOptions} />
          </S.LottieDiv>
        </S.ProjectsPageHeaderItem>
        <S.ProjectsPageHeaderItem>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {NewlineText("Our \nProjects")}
          </motion.div>
        </S.ProjectsPageHeaderItem>
      </S.ProjectsPageHeader>

      <h2
        className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin"
        style={{ marginTop: "0px" }}
        id="showcase-winners"
      >
        Final Showcase Winners
      </h2>
      <p className="regularText regularText--white" style={{ padding: "0 10%", textAlign: "center" }}>
        Each year, one project is awarded the title of Best
        Overall Project at the Tech Start Final Showcase. The project
        group achieving the award for Best Overall Project is recognized
        for receiving the highest overall points in the 4 judging
        categories: Technical Functionality, User Friendliness, Presentation Quality, and Business Strategy.
      </p>
      <S.FinalShowcaseWinnerSection>
        {bestOverallProjects.map((project) => (
          <div data-aos="fade-up" data-aos-duration="800">
            <h2
              className="thiccSubheading thiccSubheading--gradient"
              style={{ textAlign: "center" }}
            >
              <Divider />
              {project.year}
            </h2>
            <div data-aos="flip-left"></div>
            <S.FinalShowcaseWinnerDescription>
              <span>
                <h1
                  className="babyHeading--white"
                >
                  Congratulations {project.name}!
                </h1>
                <p className="regularText regularText--white">
                  {project.description}
                </p>
                <S.FinalShowcaseWinnerLinkedInButtonDiv>
                  <HoverButton
                    mode={ButtonMode.GRADIENT}
                    text={"Learn More"}
                    link={project.winnerPost as string}
                    linkIsInternal={false}
                  />
                </S.FinalShowcaseWinnerLinkedInButtonDiv>
              </span>
              <S.FinalShowcaseWinnerImage>
                <div data-aos="flip-left">
                  <img src={project.teamPic} alt={project.name} />
                </div>
              </S.FinalShowcaseWinnerImage>
            </S.FinalShowcaseWinnerDescription>
          </div>
        ))}
      </S.FinalShowcaseWinnerSection>

      <div data-aos="fade-up" data-aos-duration="800">
        <h2
          className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin"
          style={{ textAlign: "center" }}
        >
          From Ideation to Implementation
        </h2>
        <Divider />
        <h3
          className="regularText--white"
          style={{ textAlign: "center", marginBottom: "3%" }}
        >
          Explore the diverse talents of our community, and witness innovation
          in action. <br></br> Have an idea for a cool project you'd like to
          bring to life with Tech Start?
        </h3>
        <S.WrapDiv>
          <div data-testid="apply_now_button">
            <HoverButton
              mode={ButtonMode.GRADIENT}
              glowOnHover={true}
              link="/apply"
              text={"Apply Now"}
              linkIsInternal={true}
            />
          </div>
        </S.WrapDiv>
      </div>
      <ProjectKeywordsSection />
      <h2 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin" id="featured-projects">
        Featured Projects
      </h2>
      <Divider />
      <FeaturedProjectSection featuredProjects={featuredProjects} />

      <h2 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin" id="past-projects">
        Past Projects
      </h2>
      <Divider />
      <ProjectSection projects={PastProjects} />
    </S.ProjectsPage>
  );
};

export default ProjectsPage;
