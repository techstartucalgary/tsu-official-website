import React, { useState } from "react";
import * as S from "./PreviousExecTeam.styles";
import { prevExecTeamList, PrevExecTeam } from "./PreviousExecTeamsInfo";
import Divider from "components/Divider";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";



const PreviousExecTeam = () => {
  const [selectedYear, setSelectedYear] = useState(
    prevExecTeamList[prevExecTeamList.length - 1].year
  );
  
  const getSelectedYearIndex = useCallback((): number =>{
    return prevExecTeamList.findIndex((data) => data.year === selectedYear)
  },[selectedYear]);

  const handleLeftArrow = useCallback(() => {
    const selectedYearIndex = getSelectedYearIndex();
    if (selectedYearIndex > 0) {
      setSelectedYear(prevExecTeamList[selectedYearIndex - 1].year);
      }
  },[getSelectedYearIndex]);
  const handleRightArrow = useCallback(() => {
    const selectedYearIndex = getSelectedYearIndex();
    if (selectedYearIndex < prevExecTeamList.length - 1) {
      setSelectedYear(prevExecTeamList[selectedYearIndex + 1].year);
    }
  },[getSelectedYearIndex]);

  return (
    <S.PrevTeamSection>
      <Divider />
      <S.SectionHeader>Previous Executives</S.SectionHeader>
      <S.PaginationControl>
        <S.ArrowButton
          className="arrow-button"
          onClick={handleLeftArrow}
          disabled={getSelectedYearIndex() === 0}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="sm"
            style={{ color: getSelectedYearIndex() === 0 ? "grey" : "black" }}
          />
        </S.ArrowButton>
        <S.YearPagination>
          <S.YearButton>{selectedYear}</S.YearButton>
        </S.YearPagination>
        <S.ArrowButton
          className="arrow-button"
          onClick={handleRightArrow}
          disabled={getSelectedYearIndex() === prevExecTeamList.length - 1}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size="sm"
            style={{
              color:
                getSelectedYearIndex() === prevExecTeamList.length - 1
                  ? "grey"
                  : "black",
            }}
          />
        </S.ArrowButton>
      </S.PaginationControl>

      {prevExecTeamList
        .filter((team) => team.year === selectedYear)
        .map((team: PrevExecTeam) => {
          return (
            <>
              <S.Carousel>
                {team.picture ? (
                  <img
                    src={team.picture}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "0.75rem",
                      objectFit: "cover",
                      boxShadow: "0rem 1.5rem 2rem -1.5rem rgba(0, 0, 0, 0.7)",
                    }}
                  />
                ) : (
                  <p>No picture available</p>
                )}
              </S.Carousel>
              <S.TeamList>
                {team.members.length > 0 && (
                  <>
                    {team.members.map((member, index) => (
                      <S.TeamMember key={index}>
                        <div style={{ justifyContent: "center" }}>
                          <S.TeamHeader
                            href={member.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {member.name}
                          </S.TeamHeader>
                          <S.TeamRole>{member.role}</S.TeamRole>
                        </div>
                      </S.TeamMember>
                    ))}
                  </>
                )}
              </S.TeamList>
            </>
          );
        })}
    </S.PrevTeamSection>
  );
};

export default React.memo(PreviousExecTeam);
