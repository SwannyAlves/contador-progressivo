import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerDataCounter = styled.div`
  width: 100%;
  margin: 0 0 50px 0;
  min-height: 355px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DataCounter = styled.div`
  max-width: 1110px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 4px;
  padding: 10px;

  @media (max-width: 990px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const DataCounterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-right: 30px;

  justify-content: center;
  min-width: 250px;
  width: 100%;
  :last-child {
    margin-right: 0;
  }

  @media (max-width: 990px) {
    margin-right: 0;
    margin-bottom: 30px;
    justify-content: center;
    gap: 1em;
    height: 100px;
  }

  h1 {
    color: var(--light);
    margin-bottom: 10px;
    font-size: 3rem;
  }
  h2 {
    color: var(--light);
    font-size: 20px;
    font-weight: lighter;
  }
`;
export const Title = styled.p`
  margin: 50px 0 2px 0;
  text-align: center;
  color: var(--light);
  opacity: 0.8;
  font-size: 25px;
  font-weight: bold;
  clear: right;
  display: block;
`;
