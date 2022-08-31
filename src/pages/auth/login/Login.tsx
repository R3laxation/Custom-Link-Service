import React from 'react';
import {Typography, TextField, Button} from "@mui/material";

import styles from './Login.module.scss';

export const Login: React.FC = () => {
    return (
        <div className={styles.loginPage}>
            <Typography variant="h4" >
                Sign in
            </Typography>
            <Typography variant="subtitle1" gutterBottom={true} className={styles.subtitle}>
                Please enter your login and password
            </Typography>
            <form className={styles.form}>

                <TextField label={'Login'} size={'small'} margin={'normal'} fullWidth={true}/>
                <TextField label={'Password'} size={'small'} margin={'normal'} fullWidth={true} type={'password'}/>
                <Button type={'submit'} variant={'contained'} disableElevation={true} sx={{marginTop: 2}}>
                    Sign in
                </Button>
            </form>
        </div>
    );
};
