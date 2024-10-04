import React from 'react'

import { useDispatch } from 'react-redux'
import { login } from './../../store/actions/auth.action'

const Auth = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState('');
    const [passwd, setPasswd] = React.useState('');

    const iniciarSesion_onClick = (e) => {
        e.preventDefault();

        if (email.trim().length === 0) {
            alert('El email es requerido');
            return;
        }

        if (passwd.trim().length === 0) {
            alert('La contraseña es requerido');
            alert(passwd)
            return;
        }

        dispatch(login(email, passwd));
    }

    return (
        <div className='auth-container'>
            <div className='text-center'>
                <form className="form-signin">
                    <img className="mb-4" src="https://i.pinimg.com/originals/28/9c/0c/289c0c686ecc709c51de9b18860746aa.png" alt="" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Ingrese sus datos</h1>

                    <label for="inputEmail" className="sr-only">Correo electronico</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autofocus
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label for="inputPassword" className="sr-only">Contraseña</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required
                        onChange={e => setPasswd(e.target.value)}
                    />
                    
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={iniciarSesion_onClick}>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}

export default Auth