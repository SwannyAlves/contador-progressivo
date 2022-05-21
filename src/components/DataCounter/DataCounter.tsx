import { DataCounterCard } from "./DataCounterCard";
import { dataCounterData } from "./dataCounterData";
import * as S from "./styles";

export function DataCounter() {
  console.log(dataCounterData);
  return (
    <S.Container id="main-data-counter">
      <S.ContainerDataCounter>
        <S.Title>Idade de alguns personagem</S.Title>
        <S.DataCounter>
          {dataCounterData.data.map((data) => {
            return (
              <DataCounterCard
                key={data.id}
                id={data.id}
                number={data.number}
                description={data.description}
              />
            );
          })}
        </S.DataCounter>
      </S.ContainerDataCounter>
    </S.Container>
  );
}
