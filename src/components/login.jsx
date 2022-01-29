import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { authorized } from '../store/user'

const defaultUsers = [
    {
        username: "username1",
        password: "username1",
    },
    {
        username: "username2",
        password: "username2",
    }
]
const textFilds = {
  errors: {
    default: "",
    emptyUser: "Такого пользователя не существует",
    emptyInput: "Введите все данные"
  },
  auth: {
    logIn: "Вход",
    logOut: "Выход"
  }
}

const Login = ({className}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState({username: "", password: ""})
  const [error, setError] = useState(textFilds.errors.default);
  const [authText, setAuthText] = useState(textFilds.auth.logIn);
  const isAuthorized = useSelector((state) => state.user.isAuthorized)
  const dispatch = useDispatch()

  const openModal = () => {
    if(!isAuthorized){
      setModalVisible(true);
      setError(textFilds.errors.default)
    }
    else{
      dispatch(authorized("гость"))
      setAuthText(textFilds.auth.logIn)
    }
  };
  const closeModal = () => {
    setModalVisible(false);
    setError(textFilds.errors.default)
  };
  const onChangeInput = ({ target: { value, name } }) => {
    setState({
      ...state,
      [name]: value
    })
  }
  const sumbitForm = (e) => {
    e.preventDefault();
    if(state.username !== "" && state.password !==""){
        defaultUsers.forEach(item => {
            if(item.username === state.username && item.password === state.password){
                setModalVisible(false);
                dispatch(authorized(state.username))
                setAuthText(textFilds.auth.logOut)
            }
            else{
                setError(textFilds.errors.emptyUser)
            }
        })
    }
    else {
        setError(textFilds.errors.emptyInput)
    }

  }
  return (
    <>
      <button className={className} onClick={openModal}>{authText}</button>
      {isModalVisible ? (
        <div className="modal">
          <div onClick={closeModal} className="modal-background"></div>
          <div className="modal-content">
            <form className="formLogin" onSubmit={sumbitForm}>
                <div className="formLogin-field">
                <label className="formLogin-label" htmlFor="email">
                    Username
                </label>
                <input onChange={onChangeInput} name="username" id="username" className="input formLogin-input" placeholder="username" type="text" />
                </div>
                <div className="field">
                    <label className="formLogin-label" htmlFor="password" > Password</label>
                    <input onChange={onChangeInput} name="password" className="input formLogin-input" id="password" placeholder="password" type="password" />
                </div>
                <p>{error}</p>
                <button className="formLogin-button">
                    Submit
                </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Login;
