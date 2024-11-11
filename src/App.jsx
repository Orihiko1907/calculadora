import { useState } from "react"
import "./style.scss"
export default function App() {
  const[primeiroValor, setSegundoValor] =useState()
  //useState é uma variavel de estado As variáveis ​​podem ser usadas para armazenar dados em um programa, como strings, números, objetos JSON ou valores booleanos 
  return(
    <main>
      <h1>Calculadora</h1>
      <input type="nunber" placeholder="insira um numero"/>
      <input type="nunber" placeholder="ensira um numero"/> 
      <div>
      <button>+</button>
      <button>-</button>
      <button>x</button>
      <button>÷</button>
      </div>
      
    </main>
  )
}