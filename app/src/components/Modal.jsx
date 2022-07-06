import React from 'react';
import "./Modal.scss"
import InfoTitle from './InfoTitle';
import TextItem from './TextItem';
import TextItemWrapper from './TextItemWrapper';
import TextItemVertical from './TextItemVertical';
import LineItem from './LineItem';
import ValueItem from './ValueItem';

const Modal = ({ type, expState }) => {

    if (type === "create") {
        return (
            <div className='modal-create'>

            </div>
        )
    }
    if (type === "search") {
        return (
            <div className='modal-search'>

            </div>
        )
    }
    if (type === "info") {
        let counterOfPocherk = 0
        let countOfTkedTotal = 0
        let counOfPortret = 0
        expState.forEach((item) => {
            if (item.typeOfExpertise === "Почерк") {
                counterOfPocherk += 1
            }
            if (item.typeOfExpertise === "ТКЭД общ." || item.typeOfExpertise ==="ТКЭД ден." ) {
                countOfTkedTotal += 1
                
            }
            if (item.typeOfExpertise === "Портретная"  ) {
                counOfPortret += 1
                
            }

        })
        return (
            <div className='modal-info'>
                <InfoTitle text="Количество назначенных экспертиз" />
                <TextItem text="Почерковедческих: " />
                <TextItem text={counterOfPocherk} />
                <TextItem text="ТКЭД: " />
                <TextItem text={countOfTkedTotal} />
                <TextItem text="Портретных: " />
                <TextItem text={counOfPortret} />
                <TextItem text="Всего: " />
                <TextItem text={expState.length} />
                <InfoTitle text="Количество результативных экспертиз" />
                <TextItem text="Почерковедческих: " />
                <TextItem text="12" />
                <TextItem text="ТКЭД: " />
                <TextItem text="153" />
                <TextItem text="Портретных: " />
                <TextItem text="1" />
                <TextItem text="Всего: " />
                <TextItem text="166" />
                <InfoTitle text="Количество экспертиз по статьям" />
                <TextItemWrapper>
                    <TextItem />
                    <TextItemVertical text="Всего: " />
                    <TextItemVertical text="Почерко-ких" />
                    <TextItemVertical text="ТКЭД" />
                    <TextItemVertical text="Портретных" />
                    <TextItemVertical text="Проверок" />
                    <LineItem />
                    <TextItem text="Всего: " />
                    <ValueItem text="166" />
                    <ValueItem text="12" />
                    <ValueItem text="153" />
                    <ValueItem text="1" />
                    <ValueItem text="153" />
                    <LineItem />
                    <TextItem text="ст. 158 УК РФ:" />
                    <LineItem />
                    <TextItem text="ст. 186, 187 УК РФ:" />
                    <LineItem />
                    <TextItem text="ст. 264 УК РФ:" />
                    <LineItem />
                </TextItemWrapper>
                <InfoTitle text="Количество экспертиз по исполнителям" />
                <TextItemWrapper>
                    <TextItem />
                    <TextItemVertical text="Всего: " />
                    <TextItemVertical text="Почерко-ких" />
                    <TextItemVertical text="ТКЭД" />
                    <TextItemVertical text="Портретных" />
                    <TextItemVertical text="Проверок" />
                    <LineItem />
                    <TextItem text="Всего: " />
                    <ValueItem text="166" />
                    <ValueItem text="12" />
                    <ValueItem text="153" />
                    <ValueItem text="1" />
                    <ValueItem text="153" />
                    <LineItem />
                    <TextItem text="Польченко Т.В.:" />
                    <ValueItem text="32" />
                    <ValueItem text="4" />
                    <ValueItem text="28" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Поволодцкий Д.Г.:" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="99" />
                    <LineItem />
                    <TextItem text="Васильев И.С.:" />
                    <ValueItem text="25" />
                    <ValueItem text="2" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Арзяков Д.Н.:" />
                    <ValueItem text="2" />
                    <ValueItem text="2" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Халилов Р.Н.:" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="54" />
                    <LineItem />
                    <TextItem text="Балабанов А.А.:" />
                    <ValueItem text="26" />
                    <ValueItem text="" />
                    <ValueItem text="25" />
                    <ValueItem text="1" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Дружинина Е.Ю.:" />
                    <ValueItem text="2" />
                    <ValueItem text="2" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Еноткин А.А.:" />
                    <ValueItem text="2" />
                    <ValueItem text="2" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Киселев А.С.: " />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="25" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                    <TextItem text="Марчук В.А.: " />
                    <ValueItem text="2" />
                    <ValueItem text="" />
                    <ValueItem text="65" />
                    <ValueItem text="" />
                    <ValueItem text="70" />
                    <LineItem />
                    <TextItem text="Черногоров А.Ю.: " />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <ValueItem text="20" />
                    <ValueItem text="" />
                    <ValueItem text="" />
                    <LineItem />
                </TextItemWrapper>
            </div>
        )
    }
    return (
        <div className='modal-hidden'>

        </div>
    );
};

export default Modal;