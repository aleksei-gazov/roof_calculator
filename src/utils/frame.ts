import {initialTotalStateType} from '../store/totalReducer';
import {useAppSelector} from '../store/store';
import {InitialStateType} from '../store/configReducer';

// let productArea = 0
let selfTappingScrews = 0
let lengthPipe = 0
let sheets = 0
let totalData: initialTotalStateType = {
    // productArea: 0,
    // cellSize: null,
    // name: null,
    // units: null,
    // quantity: null,
    // sum: null,
}
export const productDimensions = (roofWidth: number, roofLength: number,) => {
    totalData.productArea = roofWidth * roofLength
}
export const numberOfSheets = (roofWidth: number, length: number, sheetWidth: number) => {
    sheets = ((Math.ceil(roofWidth / sheetWidth)) * (Math.ceil(length / 1)))
}
export const numberOfScrews = (roofWidth: number, roofLength: number, material: string, config: InitialStateType[]) => {
    const val = config.find((i) => i.type === 'fix' && i.key === material)
    console.log(val?.value)
    if (val !== undefined && val.value) {
        selfTappingScrews = roofWidth * roofLength * val.value
    }
}
export const pipeQuantity = (roofWidth: number, roofLength: number, step: number, pipeWidth: number) => {
    let numberOfLags = (Math.ceil(roofWidth / step)) + 1
    let crate = (Math.ceil(roofLength / 1)) + 1
    lengthPipe = (numberOfLags * roofLength) + (crate * (roofWidth - (numberOfLags * pipeWidth)))
}
export const sumSheets = (price: number,) => {
    // sheets * price
}