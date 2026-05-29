import styled from "styled-components/macro";
import { TeamCategory } from "./Team";

// helper function 
const getStylesForCategory = (category: TeamCategory) => {
  switch (category) {
    case "executives":
      return { backgroundColor: "var(--primary-green)", left: "5px" };
    case "projectManagers":
      return { backgroundColor: "var(--lightwash-green)", left: "calc(33.3% + 5px)" };
    case "alumni":
      return { backgroundColor: "var(--toggle-earthGreen)", left: "calc(66.6% + 5px)" };
    default:
      return { backgroundColor: "var(--primary-green)", left: "5px" }; // Default to executives
  }
};

export const TeamSection = styled.div`
  padding: 5vw;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  & > h2 {
    font-size: var(--chonky-header-size);
    font-weight: var(--chonky-header-weight);
    color: var(--primary-black);
    margin-bottom: 0;

    @media (max-width: 800px) {
      font-size: var(--thicc-subheading-size);
    }
  }
`;

export const ToggleButtonWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 2%;
  justify-content: center;
  align-items: center;
`;

export const SliderWrapper = styled.div<{ selectedCategory: TeamCategory }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 40px;
  background-color: ${({ selectedCategory }) =>
    selectedCategory === "executives" ? "var(--primary-green)" :
      selectedCategory === "projectManagers" ? "var(--lightwash-green)" :
        "var(--toggle-earthGreen)"};
  border-radius: 50px;
  padding: 5px;
`;

export const SliderOption = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 10px 5px;
  font-weight: 500;
  font-size: var(--regular-font);
  font-family: "Inter", Tahoma, sans-serif;
  color: #fff;
  z-index: 2;

  @media (max-width: 700px) {
    font-size: var(--regular-font);
  }
`;

export const SliderPosition = styled.div<{ selectedCategory: TeamCategory }>`
  position: absolute;
  top: 5px;
  left: ${({ selectedCategory }) =>
    getStylesForCategory(selectedCategory).left};
  width: calc(33.3% - 10px);
  height: calc(100% - 10px);
  background-color: ${({ selectedCategory }) =>
    getStylesForCategory(selectedCategory).backgroundColor};
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 3px 3px;
  transition: left 0.8s ease, background-color 0.2s ease-in-out;
`;