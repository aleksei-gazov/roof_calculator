import {addTotal, isTotalAC} from '../store/total-reducer';
import {Dispatch} from 'redux';
import {DataType, FixType, PipeType} from '../store/data-reducer';


let materialData: any = {}
let materialData1: any = {}
let materialData2: any = {}
export let productArea: number
//Calculation of product dimensions
export const productDimensions = (roofWidth: number, roofLength: number, ) => {
    productArea = roofWidth * roofLength
}
//Calculation of the number of sheets
export const numberOfSheets = (roofWidth: number, length: number, sheetWidth: number) => {
    materialData.quantity = (Math.ceil(roofWidth/sheetWidth)) * length * sheetWidth
}
//
// Calculation of the cost of sheets
export const sumSheets = (data:DataType[], sheetWidth: number, thickness: number)=> {
    let mat = data.find((i)=> i.type === 'list' && i.width === sheetWidth && i.thickness === thickness)
    materialData.name = mat?.name
    materialData.unit = mat?.unit
    materialData.sum = (mat!.price * materialData.quantity).toFixed(2)
}

// Calculation of the number of screws
export const numberOfScrews = (fixPrice: FixType, roofWidth: number, roofLength: number, material: string ) => {
    materialData1.name = fixPrice.name
    materialData1.unit = fixPrice.unit
    materialData1.sum = (fixPrice.price * materialData.quantity).toFixed(2)
    materialData1.quantity =  (roofWidth * roofLength * fixPrice.price).toFixed(2)

}

// Calculation of the number of pipes and frame mesh
export const pipeQuantity = (pipe:PipeType[], material: string,  roofWidth: number, roofLength: number,  step: number, pipeWidth: number,  dispatch: Dispatch) => {
    let pepiSize= pipe.find((i)=> material=== 'metal' ? i.width === 30 : i.width === 20)
    let numberOfLags = (Math.ceil(roofWidth/step)) + 1 //кол-во лаг
    console.log((Math.ceil(roofWidth/step)) + 1)
    let distanceBetweenLags =  roofWidth / (numberOfLags - 1) - pepiSize!.width/100 // среднее расст между лагами
    let crate = (Math.ceil(roofLength/step)) + 1 //кол-во обрешотки
    let distanceBetweenTheCrate = roofLength/(crate - 1) // среднее расстояние между обрешоткой
    materialData2.quantity = (numberOfLags * roofLength) + (crate *(roofWidth - (numberOfLags* pipeWidth))).toFixed(2) // кол-во трубы
    materialData2.name = pepiSize!.name
    materialData2.unit = pepiSize!.unit
    materialData2.sum = (materialData2.quantity * pepiSize!.price).toFixed(2)
    console.log(materialData, materialData1, materialData2)
    dispatch(addTotal(materialData, materialData1, materialData2,productArea, distanceBetweenLags, distanceBetweenTheCrate))
    dispatch(isTotalAC(true))
}
