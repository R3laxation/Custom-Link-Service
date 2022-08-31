import React from 'react';
import { Login } from './login/Login';
import { Registration } from './registration/Registration';
import styles from './AuthPage.module.scss';
import img from '../../assets/images/view.jpg';


export const AuthPage: React.FC = () => {
    return (
        <div className={styles.authPage} style={{backgroundImage: `url(${img})`}}>
            <Login/>
            {/*<Registration/>*/}
        </div>
    );
};

