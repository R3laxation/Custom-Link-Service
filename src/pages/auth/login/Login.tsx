import React from 'react';
import {Typography, TextField, Button} from "@mui/material";

import styles from './Login.module.scss';
import {useForm, Controller, SubmitHandler, useFormState} from 'react-hook-form';
import {loginValidation, passwordValidation} from "./validation";


interface ILoginForm {
    login: string
    password: string
}

export const Login: React.FC = () => {

    const {handleSubmit, control} = useForm<ILoginForm>();
    const {errors} = useFormState({control});

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        console.log(data)
    }


    return (
        <div className={styles.loginPage}>
            <Typography variant="h4">
                Sign in
            </Typography>
            <Typography variant="subtitle1" gutterBottom={true} className={styles.subtitle}>
                Please enter your login and password
            </Typography>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                <Controller control={control} name={'login'} rules={loginValidation}
                            render={({field}) => (
                                <TextField label={'Login'} size={'small'}
                                           margin={'normal'} fullWidth={true}
                                           onChange={(e) => field.onChange(e)}
                                           value={field.value}
                                           error={!!errors.login?.message}
                                           helperText={errors.login?.message}

                                />
                            )}/>
                <Controller control={control} name={'password'} rules={passwordValidation}
                            render={({field}) => (
                                <TextField label={'Password'} size={'small'}
                                           margin={'normal'} fullWidth={true}
                                           onChange={(e) => field.onChange(e)}
                                           value={field.value}
                                           error={!!errors.password?.message}
                                           helperText={errors.password?.message}

                                />
                            )}/>
                <Button type={'submit'} variant={'contained'} disableElevation={true}
                        sx={{marginTop: 2}} fullWidth={true}>
                    Sign in
                </Button>
            </form>
        </div>
    );
};
