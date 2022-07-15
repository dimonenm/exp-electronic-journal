import React, { FC, useState } from 'react';
import InfoSeparator from './InfoSeparator';
import InfoTable from './InfoTable';
import InfoText from './InfoText';
import InfoTextVertical from './InfoTextVertical';
import InfoTitle from './InfoTitle';

interface ModalInfoProps {
}

const ModalInfo: FC<ModalInfoProps> = () => {

  return (
    <>
      <InfoTitle text="Количество назначенных экспертиз" />
      <div></div>
      <div></div>
      <InfoText text="Почерковедческих:" />
      <InfoText text="18" />
      <InfoText text="ТКЭД:" />
      <InfoText text="54" />
      <InfoText text="Портретных:" />
      <InfoText text="28" />
      <InfoText text="Всего:" />
      <InfoText text="100" />
      <div></div>
      <div></div>
      <InfoTitle text="Количество результативных экспертиз" />
      <div></div>
      <div></div>
      <InfoText text="Почерковедческих:" />
      <InfoText text="18" />
      <InfoText text="ТКЭД:" />
      <InfoText text="54" />
      <InfoText text="Портретных:" />
      <InfoText text="28" />
      <InfoText text="Всего:" />
      <InfoText text="100" />
      <div></div>
      <div></div>
      <InfoTitle text="Количество экспертиз по статьям" />
      <div></div>
      <div></div>
      <InfoTable type="article">
        <InfoText text="" />
        <InfoTextVertical text="Всего" />
        <InfoTextVertical text="Почерк-ких" />
        <InfoTextVertical text="ТКЭД" />
        <InfoTextVertical text="Портретных" />
        <InfoTextVertical text="Проверок" />
        <InfoSeparator/>
        <InfoText text="Всего:" />
        <InfoText text="36" />
        <InfoText text="6" />
        <InfoText text="17" />
        <InfoText text="13" />
        <InfoText text="153" />
        <InfoSeparator />
        <InfoText text="ст. 101 УК РФ:" />
        <InfoText text="4" />
        <InfoText text="1" />
        <InfoText text="2" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 105 УК РФ:" />
        <InfoText text="3" />
        <InfoText text="0" />
        <InfoText text="2" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 158, 159, 160 УК РФ:" />
        <InfoText text="7" />
        <InfoText text="2" />
        <InfoText text="3" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 186, 187 УК РФ:" />
        <InfoText text="5" />
        <InfoText text="1" />
        <InfoText text="3" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 222 УК РФ:" />
        <InfoText text="9" />
        <InfoText text="1" />
        <InfoText text="6" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 264 УК РФ:" />
        <InfoText text="5" />
        <InfoText text="1" />
        <InfoText text="1" />
        <InfoText text="3" />
        <InfoText text="" />
        <InfoSeparator />
      </InfoTable>
      <div></div>
      <div></div>
      <InfoTitle text="Количество экспертиз по исполнителям" />
      <div></div>
      <div></div>
      <InfoTable type="executors">
        <InfoText text="" />
        <InfoTextVertical text="Всего" />
        <InfoTextVertical text="Почерк-ких" />
        <InfoTextVertical text="ТКЭД" />
        <InfoTextVertical text="Портретных" />
        <InfoTextVertical text="Проверок" />
        <InfoSeparator />
        <InfoText text="Всего:" />
        <InfoText text="100" />
        <InfoText text="18" />
        <InfoText text="54" />
        <InfoText text="28" />
        <InfoText text="153" />
        <InfoSeparator />
        <InfoText text="Польченко Т.В.:" />
        <InfoText text="10" />
        <InfoText text="1" />
        <InfoText text="6" />
        <InfoText text="3" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Поволодцкий Д.Г.:" />
        <InfoText text="13" />
        <InfoText text="2" />
        <InfoText text="7" />
        <InfoText text="4" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Васильев И.С.:" />
        <InfoText text="8" />
        <InfoText text="2" />
        <InfoText text="4" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Арзяков Д.Н.:" />
        <InfoText text="11" />
        <InfoText text="2" />
        <InfoText text="7" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Халилов Р.Н.:" />
        <InfoText text="9" />
        <InfoText text="2" />
        <InfoText text="6" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Балабанов А.А.:" />
        <InfoText text="10" />
        <InfoText text="2" />
        <InfoText text="5" />
        <InfoText text="3" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Дружинина Е.Ю.:" />
        <InfoText text="5" />
        <InfoText text="0" />
        <InfoText text="3" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Еноткин А.А.:" />
        <InfoText text="7" />
        <InfoText text="1" />
        <InfoText text="5" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Киселев А.С.:" />
        <InfoText text="9" />
        <InfoText text="1" />
        <InfoText text="4" />
        <InfoText text="4" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Марчук В.А.:" />
        <InfoText text="6" />
        <InfoText text="2" />
        <InfoText text="2" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Черногоров А.Ю.:" />
        <InfoText text="2" />
        <InfoText text="1" />
        <InfoText text="0" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
      </InfoTable>
    </>
  );
};

export default ModalInfo;