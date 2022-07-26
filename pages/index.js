import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css'
import api from './api/index'

export default function Home() {

  useEffect(() =>{
    axios.get("https://doar-computador-api.herokuapp.com/")
  })
  
  return (
    <div className={styles.container}>
      <h1>Doação de computadores usados</h1>
      <p></p>
    </div>
  )
}
