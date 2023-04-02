import React from 'react';
import {TotalStateType} from '../../store/total-reducer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TableFooter} from '@mui/material';

type TablePropsType = {
    total: TotalStateType[]
}

export const TableTotal: React.FC<TablePropsType> = ({total}) => {

    const totalSum = total.reduce((acc: number, i: TotalStateType) => acc + +i.sum, 0).toFixed(2)

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Наименование</TableCell>
                            <TableCell align="right">ед.</TableCell>
                            <TableCell align="right">кол-во</TableCell>
                            <TableCell align="right">сумма</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {total.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.sum}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="right">Итого:</TableCell>
                            <TableCell align="right">{totalSum}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>

    );
}