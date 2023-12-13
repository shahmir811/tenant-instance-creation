import {createSlice} from '@reduxjs/toolkit';
import {loginUserService} from "../../services/authService";

const initialState = {
    loggedIn: false,
    user: null,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticate: (state, {payload}) => {
            state.loggedIn = payload.loggedIn;
            state.user = payload.user;
        },
        reset: () => initialState,
    },
});

const asyncActions = {
    loginUser: (user) => async (dispatch) => {
        try {
            loginUserService(user)
                .then(data => {
                    console.log("data ",data)
                    localStorage.setItem("token", JSON.stringify(data.token));
                    localStorage.setItem("permissions", JSON.stringify(data.permissions));
                    dispatch(
                        slice.actions.authenticate({
                            loggedIn: true,
                            user,
                        }),
                    );
                    return Promise.resolve(data)
                })

        } catch (err) {
            console.log('[##] err', err);
            dispatch(
                slice.actions.authenticate({
                    loggedIn: false,
                    user: null,
                }),
            );
            return Promise.reject()
        }
    }
};

export function useAuthModule() {
    return {...slice.actions, ...asyncActions};
}

export default slice.reducer;
