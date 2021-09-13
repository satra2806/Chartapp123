import {init, RematchRootStore} from '@rematch/core';
import selectPlugin from '@rematch/select';
import LogRocket from 'logrocket';
import {models} from './models';

export const store = init({
    models,
    redux:{
        devtoolOptions:{
            disabled: process.env.NODE_ENV === 'production',
        },
        middlewares:[LogRocket.reduxMiddleware()]
    },
    plugins: [selectPlugin()]
});

export const {dispatch , select } = store;
