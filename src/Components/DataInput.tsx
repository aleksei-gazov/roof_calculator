import React, {MouseEvent} from 'react';
import {useAppSelector} from '../store/store';
import {InitialConfigStateType} from '../store/configReducer';
import Input from './Input';
import Selector from './Selector';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useFormik} from 'formik';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const DataInput = () => {
    const data = useAppSelector<InitialConfigStateType[]>(state => state.data)

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }
    const onSelectValue = () => {
        console.log()
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            const regX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

            if (!values.email) {
                errors.email = 'Required'
            } else if (!regX.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 3) {
                errors.password = 'password must be more than 3 characters'
            }
            return errors
        },
        onSubmit: values => {
            // dispatch(loginTC(values))
            alert(JSON.stringify(values, null, 2))
            formik.resetForm();
        },
    })

    return (
        // <form onSubmit={formik.handleSubmit}>
        //     <FormControl>
        //         <FormGroup>
        //             {formik.touched.email && formik.errors.email &&
        //                 <div style={{color: 'red'}}>{formik.errors.email}</div>}
        //             {formik.touched.password && formik.errors.password &&
        //                 <div style={{color: 'red'}}>{formik.errors.password}</div>}
        //             <Button type={'submit'} variant={'contained'} color={'primary'}>
        //                 Login
        //             </Button>
        //         </FormGroup>
        //     </FormControl>
        // </form>

        <div>
            <form >
                <span>Выберети тип покрытия:</span> <Selector data={data} onSelectValue={onSelectValue}/>

                <Input/>
                <Input/>
                <Selector data={data} onSelectValue={onSelectValue}/>
                <button onClick={onClickHandler}>В корзину</button>
            </form>


        </div>
    );
};

export default DataInput;