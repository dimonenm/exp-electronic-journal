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
            <div className='modal'>

            </div>
        )
    }
    if (type === "search") {
        return (
            <div className='modal'>

            </div>
        )
    }
    if (type === "info") {
        let assignedExp = {
            Pocherk: 0,
            Tked: 0,
            Portret: 0,
            Total: 0
        }
        let resultExp = {
            Pocherk: 0,
            Tked: 0,
            Portret: 0,
            Total: 0
        }
        let articleExp = {
            Total: {
                "Всего": 0,
                "ст. 101": 0,
                "ст. 105": 0,
                "ст. 158, 159, 160": 0,
                "ст. 186, 187": 0,
                "ст. 222": 0,
                "ст. 264": 0,
            },
            Pocherk: {
                "Всего": 0,
                "ст. 101": 0,
                "ст. 105": 0,
                "ст. 158, 159, 160": 0,
                "ст. 186, 187": 0,
                "ст. 222": 0,
                "ст. 264": 0,
            },
            Tked: {
                "Всего": 0,
                "ст. 101": 0,
                "ст. 105": 0,
                "ст. 158, 159, 160": 0,
                "ст. 186, 187": 0,
                "ст. 222": 0,
                "ст. 264": 0,
            },
            Portret: {
                "Всего": 0,
                "ст. 101": 0,
                "ст. 105": 0,
                "ст. 158, 159, 160": 0,
                "ст. 186, 187": 0,
                "ст. 222": 0,
                "ст. 264": 0,
            },
            Verifications: 0
        }
        
        let countOfPolchenkoPocherk = 0
        let countOfPolchenkoTked = 0
        let countOfPolchenkoPortret = 0
        let countOfPolchenkoTotal = 0
        let countOfPovolodtskiyPocherk = 0
        let countOfPovolodtskiyTked = 0
        let countOfPovolodtskiyPortret = 0
        let countOfPovolodtskiyTotal = 0
        let countOfVasilyevPocherk = 0
        let countOfVasilyevTked = 0
        let countOfVasilyevPortret = 0
        let countOfVasilyevTotal = 0
        let countOfArzyakovPocherk = 0
        let countOfArzyakovTked = 0
        let countOfArzyakovPortret = 0
        let countOfArzyakovTotal = 0
        let countOfKhalilovPocherk = 0
        let countOfKhalilovTked = 0
        let countOfKhalilovPortret = 0
        let countOfKhalilovTotal = 0
        let countOfBalabanovPocherk = 0
        let countOfBalabanovTked = 0
        let countOfBalabanovPortret = 0
        let countOfBalabanovTotal = 0
        let countOfDrujininaPocherk = 0
        let countOfDrujininaTked = 0
        let countOfDrujininaPortret = 0
        let countOfDrujininaTotal = 0
        let countOfEnotkinPocherk = 0
        let countOfEnotkinTked = 0
        let countOfEnotkinPortret = 0
        let countOfEnotkinTotal = 0
        let countOfKiselevPocherk = 0
        let countOfKiselevTked = 0
        let countOfKiselevPortret = 0
        let countOfKiselevTotal = 0
        let countOfMarchukPocherk = 0
        let countOfMarchukTked = 0
        let countOfMarchukPortret = 0
        let countOfMarchukTotal = 0
        let countOfChernogorovPocherk = 0
        let countOfChernogorovTked = 0
        let countOfChernogorovPortret = 0
        let countOfChernogorovTotal = 0

        expState.forEach((item) => {
            assignedExp.Total += 1
            if (item.typeOfExpertise === "Почерк") {
                assignedExp.Pocherk += 1
                if (item.result === "Результативная") {
                    resultExp.Pocherk += 1
                    resultExp.Total += 1
                }
            }
            if (item.typeOfExpertise === "ТКЭД общ." || item.typeOfExpertise === "ТКЭД ден.") {
                assignedExp.Tked += 1
                if (item.result === "Результативная") {
                    resultExp.Tked += 1
                    resultExp.Total += 1
                }
            }
            if (item.typeOfExpertise === "Портретная") {
                assignedExp.Portret += 1
                if (item.result === "Результативная") {
                    resultExp.Portret += 1
                    resultExp.Total += 1
                }
            }
            if (item.typeOfMaterial === "УД") {
                articleExp.Total["Всего"] += 1

                if (item.typeOfExpertise === "Почерк") {
                    articleExp.Pocherk["Всего"] += 1
                    if (item.article === "ст. 101 УК РФ") {
                        articleExp.Pocherk["ст. 101"] += 1
                        articleExp.Total["ст. 101"] += 1
                    }
                    if (item.article === "ст. 105 УК РФ") {
                        articleExp.Pocherk["ст. 105"] += 1
                        articleExp.Total["ст. 105"] += 1
                    }
                    if (item.article === "ст. 158, 159, 160 УК РФ") {
                        articleExp.Pocherk["ст. 158, 159, 160"] += 1
                        articleExp.Total["ст. 158, 159, 160"] += 1
                    }
                    if (item.article === "ст. 186, 187 УК РФ") {
                        articleExp.Pocherk["ст. 186, 187"] += 1
                        articleExp.Total["ст. 186, 187"] += 1
                    }
                    if (item.article === "ст. 222 УК РФ") {
                        articleExp.Pocherk["ст. 222"] += 1
                        articleExp.Total["ст. 222"] += 1
                    }
                    if (item.article === "ст. 264 УК РФ") {
                        articleExp.Pocherk["ст. 264"] += 1
                        articleExp.Total["ст. 264"] += 1
                    }
                }
                if (item.typeOfExpertise === "ТКЭД общ." || item.typeOfExpertise === "ТКЭД ден.") {
                    articleExp.Tked["Всего"] += 1
                    if (item.article === "ст. 101 УК РФ") {
                        articleExp.Tked["ст. 101"] += 1
                        articleExp.Total["ст. 101"] += 1
                    }
                    if (item.article === "ст. 105 УК РФ") {
                        articleExp.Tked["ст. 105"] += 1
                        articleExp.Total["ст. 105"] += 1
                    }
                    if (item.article === "ст. 158, 159, 160 УК РФ") {
                        articleExp.Tked["ст. 158, 159, 160"] += 1
                        articleExp.Total["ст. 158, 159, 160"] += 1
                    }
                    if (item.article === "ст. 186, 187 УК РФ") {
                        articleExp.Tked["ст. 186, 187"] += 1
                        articleExp.Total["ст. 186, 187"] += 1
                    }
                    if (item.article === "ст. 222 УК РФ") {
                        articleExp.Tked["ст. 222"] += 1
                        articleExp.Total["ст. 222"] += 1
                    }
                    if (item.article === "ст. 264 УК РФ") {
                        articleExp.Tked["ст. 264"] += 1
                        articleExp.Total["ст. 264"] += 1
                    }
                }
                if (item.typeOfExpertise === "Портретная") {
                    articleExp.Portret["Всего"] += 1
                    if (item.article === "ст. 101 УК РФ") {
                        articleExp.Portret["ст. 101"] += 1
                        articleExp.Total["ст. 101"] += 1
                    }
                    if (item.article === "ст. 105 УК РФ") {
                        articleExp.Portret["ст. 105"] += 1
                        articleExp.Total["ст. 105"] += 1
                    }
                    if (item.article === "ст. 158, 159, 160 УК РФ") {
                        articleExp.Portret["ст. 158, 159, 160"] += 1
                        articleExp.Total["ст. 158, 159, 160"] += 1
                    }
                    if (item.article === "ст. 186, 187 УК РФ") {
                        articleExp.Portret["ст. 186, 187"] += 1
                        articleExp.Total["ст. 186, 187"] += 1
                    }
                    if (item.article === "ст. 222 УК РФ") {
                        articleExp.Portret["ст. 222"] += 1
                        articleExp.Total["ст. 222"] += 1
                    }
                    if (item.article === "ст. 264 УК РФ") {
                        articleExp.Portret["ст. 264"] += 1
                        articleExp.Total["ст. 264"] += 1
                    }
                }
            }

            
            //     }
            //     if (item.executor === "Польченко Т.В.") {
            //         countOfPolchenkoTked += 1
            //     }
            //     if (item.executor === "Поволодцкий Д.Г.") {
            //         countOfPovolodtskiyTked += 1
            //     }
            //     if (item.executor === "Васильев И.С.") {
            //         countOfVasilyevTked += 1
            //     }
            //     if (item.executor === "Арзяков Д.Н.") {
            //         countOfArzyakovTked += 1
            //     }
            //     if (item.executor === "Халилов Р.Н.") {
            //         countOfKhalilovTked += 1
            //     }
            //     if (item.executor === "Балабанов А.А.") {
            //         countOfBalabanovTked += 1
            //     }
            //     if (item.executor === "Дружинина Е.Ю.") {
            //         countOfDrujininaTked += 1
            //     }
            //     if (item.executor === "Еноткин А.А.") {
            //         countOfEnotkinTked += 1
            //     }
            //     if (item.executor === "Киселев А.С.") {
            //         countOfKiselevTked += 1
            //     }
            //     if (item.executor === "Марчук В.А.") {
            //         countOfMarchukTked += 1
            //     }
            //     if (item.executor === "Черногоров А.Ю.") {
            //         countOfChernogorovTked += 1
            //     }
            // }
            // if (item.typeOfExpertise === "Портретная") {
            //     countOfPortret += 1
            //     if (item.result === "Результативная") {
            //         countResOfPortret += 1
            //     }
            //     if (item.result === "Результативная") {
            //         countUdOfPortret += 1
            //     }
            //     if (item.article === "ст. 101 УК РФ") {
            //         countOfUd101Portret += 1
            //     }
            //     if (item.article === "ст. 105 УК РФ") {
            //         countOfUd105Portret += 1
            //     }
            //     if (item.article === "ст. 158, 159, 160 УК РФ") {
            //         countOfUd158Portret += 1
            //     }
            //     if (item.article === "ст. 186, 187 УК РФ") {
            //         countOfUd186Portret += 1
            //     }
            //     if (item.article === "ст. 222 УК РФ") {
            //         countOfUd222Portret += 1
            //     }
            //     if (item.article === "ст. 264 УК РФ") {
            //         countOfUd264Portret += 1
            //     }
            //     if (item.executor === "Польченко Т.В.") {
            //         countOfPolchenkoPortret += 1
            //     }
            //     if (item.executor === "Поволодцкий Д.Г.") {
            //         countOfPovolodtskiyPortret += 1
            //     }
            //     if (item.executor === "Васильев И.С.") {
            //         countOfVasilyevPortret += 1
            //     }
            //     if (item.executor === "Арзяков Д.Н.") {
            //         countOfArzyakovPortret += 1
            //     }
            //     if (item.executor === "Халилов Р.Н.") {
            //         countOfKhalilovPortret += 1
            //     }
            //     if (item.executor === "Балабанов А.А.") {
            //         countOfBalabanovPortret += 1
            //     }
            //     if (item.executor === "Дружинина Е.Ю.") {
            //         countOfDrujininaPortret += 1
            //     }
            //     if (item.executor === "Еноткин А.А.") {
            //         countOfEnotkinPortret += 1
            //     }
            //     if (item.executor === "Киселев А.С.") {
            //         countOfKiselevPortret += 1
            //     }
            //     if (item.executor === "Марчук В.А.") {
            //         countOfMarchukPortret += 1
            //     }
            //     if (item.executor === "Черногоров А.Ю.") {
            //         countOfChernogorovPortret += 1
            //     }
            // }
            countOfPolchenkoTotal = countOfPolchenkoPocherk + countOfPolchenkoTked + countOfPolchenkoPortret
            countOfPovolodtskiyTotal = countOfPovolodtskiyPocherk + countOfPovolodtskiyTked + countOfPovolodtskiyPortret
            countOfVasilyevTotal = countOfVasilyevPocherk + countOfVasilyevTked + countOfVasilyevPortret
            countOfArzyakovTotal = countOfArzyakovPocherk + countOfArzyakovTked + countOfArzyakovPortret
            countOfKhalilovTotal = countOfKhalilovPocherk + countOfKhalilovTked + countOfKhalilovPortret
            countOfBalabanovTotal = countOfBalabanovPocherk + countOfBalabanovTked + countOfBalabanovPortret
            countOfDrujininaTotal = countOfDrujininaPocherk + countOfDrujininaTked + countOfDrujininaPortret
            countOfEnotkinTotal = countOfEnotkinPocherk + countOfEnotkinTked + countOfEnotkinPortret
            countOfKiselevTotal = countOfKiselevPocherk + countOfKiselevTked + countOfKiselevPortret
            countOfMarchukTotal = countOfMarchukPocherk + countOfMarchukTked + countOfMarchukPortret
            countOfChernogorovTotal = countOfChernogorovPocherk + countOfChernogorovTked + countOfChernogorovPortret
        })

        return (
            <div className='modal modal-info'>
                <InfoTitle text="Количество назначенных экспертиз" />
                <TextItem text="Почерковедческих: " />
                <TextItem text={assignedExp.Pocherk} />
                <TextItem text="ТКЭД: " />
                <TextItem text={assignedExp.Tked} />
                <TextItem text="Портретных: " />
                <TextItem text={assignedExp.Portret} />
                <TextItem text="Всего: " />
                <TextItem text={assignedExp.Total} />
                <InfoTitle text="Количество результативных экспертиз" />
                <TextItem text="Почерковедческих: " />
                <TextItem text={resultExp.Pocherk} />
                <TextItem text="ТКЭД: " />
                <TextItem text={resultExp.Tked} />
                <TextItem text="Портретных: " />
                <TextItem text={resultExp.Portret} />
                <TextItem text="Всего: " />
                <TextItem text={resultExp.Total} />
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
                    <ValueItem text={articleExp.Total["Всего"]} />
                    <ValueItem text={articleExp.Pocherk["Всего"]} />
                    <ValueItem text={articleExp.Tked["Всего"]} />
                    <ValueItem text={articleExp.Portret["Всего"]} />
                    <ValueItem text="153" />
                    <LineItem />
                    <TextItem text="ст. 101 УК РФ:" />
                    <ValueItem text={articleExp.Total["ст. 101"]} />
                    <ValueItem text={articleExp.Pocherk["ст. 101"]} />
                    <ValueItem text={articleExp.Tked["ст. 101"]} />
                    <ValueItem text={articleExp.Portret["ст. 101"]} />
                    <LineItem />
                    <TextItem text="ст. 105 УК РФ:" />
                    <ValueItem text={articleExp.Total["ст. 105"]} />
                    <ValueItem text={articleExp.Pocherk["ст. 105"]} />
                    <ValueItem text={articleExp.Tked["ст. 105"]} />
                    <ValueItem text={articleExp.Portret["ст. 105"]} />
                    <LineItem />
                    <TextItem text="ст. 158, 159, 160 УК РФ:" />
                    <ValueItem text={articleExp.Total["ст. 158, 159, 160"]} />
                    <ValueItem text={articleExp.Pocherk["ст. 158, 159, 160"]} />
                    <ValueItem text={articleExp.Tked["ст. 158, 159, 160"]} />
                    <ValueItem text={articleExp.Portret["ст. 158, 159, 160"]} />
                    <LineItem />
                    <TextItem text="ст. 186, 187 УК РФ:" />
                    <ValueItem text={articleExp.Total["ст. 186, 187"]} />
                    <ValueItem text={articleExp.Pocherk["ст. 186, 187"]} />
                    <ValueItem text={articleExp.Tked["ст. 186, 187"]} />
                    <ValueItem text={articleExp.Portret["ст. 186, 187"]} />
                    <LineItem />
                    <TextItem text="ст. 222 УК РФ:" />
                    <ValueItem text={articleExp.Total["ст. 222"]} />
                    <ValueItem text={articleExp.Pocherk["ст. 222"]} />
                    <ValueItem text={articleExp.Tked["ст. 222"]} />
                    <ValueItem text={articleExp.Portret["ст. 222"]} />
                    <LineItem />
                    <TextItem text="ст. 264 УК РФ:" />
                    <ValueItem text={articleExp.Total["ст. 264"]} />
                    <ValueItem text={articleExp.Pocherk["ст. 264"]} />
                    <ValueItem text={articleExp.Tked["ст. 264"]} />
                    <ValueItem text={articleExp.Portret["ст. 264"]} />
                    <LineItem />
                </TextItemWrapper>
                <InfoTitle text="Количество экспертиз по исполнителям" />
                {/* <TextItemWrapper>
                    <TextItem />
                    <TextItemVertical text="Всего: " />
                    <TextItemVertical text="Почерко-ких" />
                    <TextItemVertical text="ТКЭД" />
                    <TextItemVertical text="Портретных" />
                    <TextItemVertical text="Проверок" />
                    <LineItem />
                    <TextItem text="Всего: " />
                    <ValueItem text={expState.length} />
                    <ValueItem text={counterOfPocherk} />
                    <ValueItem text={countOfTkedTotal} />
                    <ValueItem text={countOfPortret} />
                    <ValueItem text="153" />
                    <LineItem />
                    <TextItem text="Польченко Т.В.:" />
                    <ValueItem text={countOfPolchenkoTotal} />
                    <ValueItem text={countOfPolchenkoPocherk} />
                    <ValueItem text={countOfPolchenkoTked} />
                    <ValueItem text={countOfPolchenkoPortret} />
                    <LineItem />
                    <TextItem text="Поволодцкий Д.Г.:" />
                    <ValueItem text={countOfPovolodtskiyTotal} />
                    <ValueItem text={countOfPovolodtskiyPocherk} />
                    <ValueItem text={countOfPovolodtskiyTked} />
                    <ValueItem text={countOfPovolodtskiyPortret} />
                    <LineItem />
                    <TextItem text="Васильев И.С.:" />
                    <ValueItem text={countOfVasilyevTotal} />
                    <ValueItem text={countOfVasilyevPocherk} />
                    <ValueItem text={countOfVasilyevTked} />
                    <ValueItem text={countOfVasilyevPortret} />
                    <LineItem />
                    <TextItem text="Арзяков Д.Н.:" />
                    <ValueItem text={countOfArzyakovTotal} />
                    <ValueItem text={countOfArzyakovPocherk} />
                    <ValueItem text={countOfArzyakovTked} />
                    <ValueItem text={countOfArzyakovPortret} />
                    <LineItem />
                    <TextItem text="Халилов Р.Н.:" />
                    <ValueItem text={countOfKhalilovTotal} />
                    <ValueItem text={countOfKhalilovPocherk} />
                    <ValueItem text={countOfKhalilovTked} />
                    <ValueItem text={countOfKhalilovPortret} />
                    <LineItem />
                    <TextItem text="Балабанов А.А.:" />
                    <ValueItem text={countOfBalabanovTotal} />
                    <ValueItem text={countOfBalabanovPocherk} />
                    <ValueItem text={countOfBalabanovTked} />
                    <ValueItem text={countOfBalabanovPortret} />
                    <LineItem />
                    <TextItem text="Дружинина Е.Ю.:" />
                    <ValueItem text={countOfDrujininaTotal} />
                    <ValueItem text={countOfDrujininaPocherk} />
                    <ValueItem text={countOfDrujininaTked} />
                    <ValueItem text={countOfDrujininaPortret} />
                    <LineItem />
                    <TextItem text="Еноткин А.А.:" />
                    <ValueItem text={countOfEnotkinTotal} />
                    <ValueItem text={countOfEnotkinPocherk} />
                    <ValueItem text={countOfEnotkinTked} />
                    <ValueItem text={countOfEnotkinPortret} />
                    <LineItem />
                    <TextItem text="Киселев А.С.: " />
                    <ValueItem text={countOfKiselevTotal} />
                    <ValueItem text={countOfKiselevPocherk} />
                    <ValueItem text={countOfKiselevTked} />
                    <ValueItem text={countOfKiselevPortret} />
                    <LineItem />
                    <TextItem text="Марчук В.А.: " />
                    <ValueItem text={countOfMarchukTotal} />
                    <ValueItem text={countOfMarchukPocherk} />
                    <ValueItem text={countOfMarchukTked} />
                    <ValueItem text={countOfMarchukPortret} />
                    <LineItem />
                    <TextItem text="Черногоров А.Ю.: " />
                    <ValueItem text={countOfChernogorovTotal} />
                    <ValueItem text={countOfChernogorovPocherk} />
                    <ValueItem text={countOfChernogorovTked} />
                    <ValueItem text={countOfChernogorovPortret} />
                    <LineItem />
                </TextItemWrapper> */}
            </div>
        )
    }
    return (
        <div className='modal modal-hidden'>

        </div>
    );
};

export default Modal;