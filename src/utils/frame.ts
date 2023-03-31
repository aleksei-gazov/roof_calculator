import {initialTotalStateType} from '../store/totalReducer';
import {useAppSelector} from '../store/store';
import {InitialStateType} from '../store/configReducer';
import {getPrice} from '../store/table-reducer';
import {Dispatch} from 'redux';
import {InitialDataStateType} from '../store/dataReducer';

let materialData: any = {
    // productArea - размер изделия 1
    //cellSize - размерячейки
    //name - 1
    // unit - единицы изделия 1
    //quantity - количество 1
    //sum 1
}
let materialData1: any = {
    //name - 1
    // unit - единицы изделия 1
    //quantity - количество 1
    //sum 1
}
let materialData2: any = {
    //name - 1
    // unit - единицы изделия 1
    //quantity - количество 1
    //sum 1
}

//Рассчет размеров изделия
export const productDimensions = (roofWidth: number, roofLength: number, ) => {
    materialData.productArea = roofWidth * roofLength
}
//Рассчет количества листов
export const numberOfSheets = (roofWidth: number, length: number, sheetWidth: number) => {
    materialData.quantity = (Math.ceil(roofWidth/sheetWidth)) * (Math.ceil(length/1))* sheetWidth
}
// Рассчет стоимости листов
export const sumSheets = (data:InitialDataStateType[], dispatch: Dispatch)=> {
    let mat = data.find((i)=> i.type === 'list')
    materialData.name = mat?.name
    materialData.unit = mat?.unit
    materialData.sum = (mat!.price * materialData.quantity).toFixed(2)
    // dispatch(getPrice(materialData))
}

// Рассчет количества саморезов
export const numberOfScrews = (data:InitialDataStateType[], roofWidth: number, roofLength: number, material: string,  dispatch: Dispatch ) => {
    let mat = data.find((i)=> i.type === 'fix')
    materialData1.name = mat?.name
    materialData1.unit = mat?.unit
    materialData1.sum = (mat!.price * materialData.quantity).toFixed(2)
    materialData1.quantity =  roofWidth * roofLength * 5

}

//Рассчет количества труб и сетки каркаса
export const pipeQuantity = (data:InitialDataStateType[], roofWidth: number, roofLength: number,  step: number, pipeWidth: number,  dispatch: Dispatch) => {
    let mat= data.find((i)=> i.type === 'pipe')
    let numberOfLags = (Math.ceil(roofWidth/step)) + 1 //кол-во лаг
    let distanceBetweenLags =  roofWidth / (numberOfLags - 1) - mat!.width! // среднее расст между лагами

    let crate = (Math.ceil(roofLength/step)) + 1 //кол-во обрешотки
    let distanceBetweenTheCrate = roofLength/(crate - 1) // среднее расстояние между обрешоткой
    materialData2.quantity = (numberOfLags * roofLength) + (crate *(roofWidth - (numberOfLags* pipeWidth))) // кол-во трубы
    materialData2.name = mat!.name
    materialData2.unit = mat!.unit
    materialData2.sum = (materialData2.quantity * mat!.price).toFixed(2)
    dispatch(getPrice(materialData, materialData1, materialData2))
}









// export const productDimensions = (roofWidth: number, roofLength: number,) => {
//     totalData.productArea = roofWidth * roofLength
// }
// export const numberOfSheets = (roofWidth: number, length: number, sheetWidth: number) => {
//     sheets = ((Math.ceil(roofWidth / sheetWidth)) * (Math.ceil(length / 1)))
// }
// export const numberOfScrews = (roofWidth: number, roofLength: number, material: string, config: InitialStateType[]) => {
//     const val = config.find((i) => i.type === 'fix' && i.key === material)
//     console.log(val?.value)
//     if (val !== undefined && val.value) {
//         selfTappingScrews = roofWidth * roofLength * val.value
//     }
// }
// export const pipeQuantity = (roofWidth: number, roofLength: number, step: number, pipeWidth: number) => {
//     let numberOfLags = (Math.ceil(roofWidth / step)) + 1
//     let crate = (Math.ceil(roofLength / 1)) + 1
//     lengthPipe = (numberOfLags * roofLength) + (crate * (roofWidth - (numberOfLags * pipeWidth)))
// }
// export const sumSheets = (price: number,) => {
//     // sheets * price
// }