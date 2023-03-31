import {useAppSelector} from '../store/store';
import {initialTotalStateType} from '../store/totalReducer';
import { Table } from './Table';
import {InitialTableStateType} from '../store/table-reducer';


const Basket = () => {
    // const total = useAppSelector<initialTotalStateType[]>(state=>state.total)
    // const table = useAppSelector<initialTotalStateType>(state=>state.table)
    const total = useAppSelector<initialTotalStateType>(state=>state.total)
    const table = useAppSelector<InitialTableStateType[]>(state=>state.table)
    return (
        <div>
            <h1>Basket</h1>
            {table.map(i=> {
                let allTotal = total[i.tableId]
                return (
                    <Table
                        table={i}
                        total={allTotal}
                    />
                )
            })}

        </div>
    );
};

export default Basket;