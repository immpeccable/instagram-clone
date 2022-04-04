import React, { Component } from 'react';
import '../App.css'


let Home = () => {


    return <div>
        <form>
        <label htmlFor = "email">email</label>
        <input type="email" name='email' id = "email"></input>
        <label htmlFor='fullname'>fullname</label>
        <input name='fullname' id = "fullname" type="text"></input>
        <label htmlFor='username'>username</label>
        <input name='username' id = "username" type="text"></input>
        <label htmlFor='password'>password</label>
        <input type="password" name = "password" id = "password"></input>

        <input type="submit" value="Sign Up" formMethod='POST' formAction='http://localhost:3000/sign-up' ></input>
        

    </form>

    <form>
        <label htmlFor='email'>email</label>
        <input type="email" name='email' id = "email"></input>
        <label htmlFor='password'>password</label>
        <input type="password" name='password' id = "password"></input>

        <input type="submit" value="Log in" formMethod='POST' formAction='http://localhost:3000/log-in' ></input>
    </form>
    </div>


}

export default Home