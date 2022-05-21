/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import * as S from "./styles";

interface DataCounterCardProps {
  id: number;
  number: number;
  description: string;
}

export function DataCounterCard(props: DataCounterCardProps) {
  const [valorInicial, setValorInicial] = React.useState(0);
  const [valorFinal] = React.useState(props.number);

  useEffect(() => {
    if (valorInicial === valorFinal) {
      console.log("chegou ao final");
      return;
    }
    setValorInicial(valorInicial + 1);
  }, [valorInicial]);

  return (
    <S.Container id="main-data-counter">
      <S.DataCounter>
        <S.DataCounterCard>
          <h1 id="incremente">{valorInicial}</h1>
          <h2>{props.description}</h2>
        </S.DataCounterCard>
      </S.DataCounter>
    </S.Container>
  );
}
