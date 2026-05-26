
import styled from "styled-components";

export const MerchContainer = styled.div`
  // mobile
  column-count: 1;
  column-gap: 24;
  max-width: 1024px;
  margin: auto;
  // ipad
  @media (min-width: 768px) {
    column-count: 2;
  }
  // desktop
  @media (min-width: 1024px) {
    column-count: 3;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 24px;
  background-color: white;
`;