import { useState } from "react";
import styles from './button.module.css'

export default function MeuContador() {


    //variavel de estado
    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1);
    }
    function diminuir() {
        setContador(contador - 1);
    }
    if (contador > 5) {
        return (
            <div >
                <h1>Valor muito alto</h1>
                <button onClick={aumentar}>aumentar</button>
                <button onClick={diminuir}>diminuir</button>
            </div >
        )
    }



    return (
        <div>
            <h1>Meu Contador : {contador}</h1>
            {/* renderizando condicional menalmente */}
            <button className={styles.MyButton} onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
    )
}