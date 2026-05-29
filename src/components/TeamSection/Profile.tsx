import React, { useMemo } from "react";
import * as S from "./Profile.styles";
import { TeamMember } from "./TeamInformation";
import ProfileDescription from "./ProfileDescription";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { SocialMediaColor } from "../../utility/SharedStyles";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// props for team profile
type ProfileProps = {
  key: number;
  mobileView: boolean;
  profilePic: string;
  alt: string;
  member: TeamMember;
  activeCategory: string;
};

const getBackgroundColor = (category: string): SocialMediaColor => {
  switch (category) {
    case "executives":
      return SocialMediaColor.ToggleGreen;
    case "projectManagers":
      return SocialMediaColor.ToggleBlue;
    case "alumni":
      return SocialMediaColor.ToggleEarthGreen;
    default:
      return SocialMediaColor.ToggleBlue;
  }
};

const Profile = (props: ProfileProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const preventDragHandler = (e: any) => e.preventDefault();
  
  // memoize the test data id so its not recalcaulated on every render but only when the member name changes
  const testDataId = useMemo(() => 
    `profile-image-${props.member.name.replace(/\s/g, "-").toLowerCase()}`,
  [props.member.name]);

  return (
    <S.ProfileDiv
      data-aos={!props.mobileView && "zoom-in"}
      data-aos-duration={!props.mobileView && "1000"}
      mobileView={props.mobileView}
    >
      {props.profilePic && (
        <S.ProfileIconDiv>
          <img
            src={props.profilePic}
            key={props.key}
            alt={props.alt}
            onDragStart={preventDragHandler}
            data-testid={testDataId}
        />
        </S.ProfileIconDiv>
      )}

      {props.member.linkedin && (
        <S.LinksSection
          backgroundColor={getBackgroundColor(props.activeCategory)}
        >
          <SocialMedia
            color={SocialMediaColor.White}
            icon={faLinkedinIn}
            link={props.member.linkedin}
            newTab={true}
          />
        </S.LinksSection>
      )}

      <ProfileDescription
        name={props.member.name}
        affiliation={props.member.affiliation}
      />
    </S.ProfileDiv>
  );
};

export default React.memo(Profile);
