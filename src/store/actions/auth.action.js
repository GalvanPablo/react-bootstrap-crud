// import { API_AUTH } from "../../data/api";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => async (dispatch) => {

    if (username === '1234@correo.com' && password === '1234') {
        dispatch({
            type: LOGIN_SUCCESS,
        });
    } else {
        dispatch({
            type: LOGIN_FAILURE,
        });
    }
    // try {

    //     const response = await fetch(API_AUTH.LOGIN, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ email: username, clave: password })
    //     })

    //     if (response.ok) {
    //         const { nombre, rol, idUsuario } = await response.json();
    //         dispatch({
    //             type: LOGIN_SUCCESS,
    //             nombre,
    //             rol,
    //             idUsuario
    //         });
    //     } else {
    //         const errorText = await response.text();

    //         if (errorText.includes('Usuario o contraseña incorrecta')) {
    //             alert('Usuario o contraseña incorrectos');
    //         } else {
    //             alert('Error desconocido');
    //         }
    //         dispatch({
    //             type: LOGIN_FAILURE,
    //         });
    //     }

    // } catch (error) {
    //     dispatch({
    //         type: LOGIN_FAILURE,
    //     });
    // }
};

export const logout = () => ({
    type: LOGOUT
});