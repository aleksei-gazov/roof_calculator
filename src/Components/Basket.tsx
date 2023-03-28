import {useAppSelector} from '../store/store';
import {initialTotalStateType} from '../store/totalReducer';


const Basket = () => {
    const total = useAppSelector<initialTotalStateType[]>(state=>state.total)
    return (
        <div>
            <h1>Basket</h1>
            <table >
                <thead>
                <tr>
                    <th>Наименование</th>
                    <th>ед.</th>
                    <th>кол-во</th>
                    <th>сумма</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{total[0].name}</td>
                    <td>Reeves</td>
                    <td>67439</td>
                    <td>10/18/1985</td>
                </tr>
                </tbody>
            </table>
            Итого:
        </div>
    );
};

export default Basket;