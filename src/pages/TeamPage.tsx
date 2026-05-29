import Blobbie from "components/Blobbie";
import TeamSection from "components/TeamSection/TeamSection";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import { motion } from "framer-motion";
import * as S from "./TeamPage.styles";
import * as T from "components/TeamSection/TeamSection.styles";
import FounderSection from "components/TeamFounder/FounderSection";
import Team from "components/TeamSection/Team";
import { boardMembers } from "components/TeamSection/TeamInformation";
import useViewport from "components/UseViewport";
import Divider from "components/Divider";
import PreviousExecTeam from "components/PreviousExecTeam/PreviousExecTeam";

const TeamPage = () => {
  // set defaultView flag according to screen width cutoff value
  const { width } = useViewport(); // get screen width
  const defaultView = width > 600 ? true : false;
  return (
    <S.TeamPage id="teamPageTop">
      <Blobbie
        id={2}
        width={300}
        transform="translate(80vw, 0vw)"
        edge={true}
      />
      <Blobbie
        id={8}
        width={250}
        transform="translate(-10vw, 10vw)"
        edge={false}
      />
      <S.TeamPageHeader>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Tech Start is only possible thanks to our team of talented, passionate
          leaders. Interested in joining us?
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <HoverButton
            mode={ButtonMode.GRADIENT}
            glowOnHover={false}
            link="/apply"
            text={"Apply Now"}
            linkIsInternal={true}
          />
        </motion.div>
      </S.TeamPageHeader>

      <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
        The Board
      </h1>
      <Divider />
      <FounderSection />
      <T.TeamSection>
        <Team
          teamMembers={boardMembers}
          desktopView={defaultView}
          activeCategory="executives"
        />
      </T.TeamSection>
      <TeamSection desktopView={defaultView} />
      <PreviousExecTeam />
    </S.TeamPage>
  );
};

export default TeamPage;
