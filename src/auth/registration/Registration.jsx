import React from 'react'

const Registration = () => {
  return (
    <div>
        <h1>Регистрация</h1>
        <div>
            <input type='text' зlaceholder='Введите имя' />
            <input type='text' placeholder='Введите фамилию' />
            <input type='email' placeholder='Введите почту' />
            <input type='password' placeholder='Введите пароль' />
        </div>

    </div>
  )
}

export default Registration