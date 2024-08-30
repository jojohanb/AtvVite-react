import { Children } from "react"
import styles from "./Main.module.css"
export function Main(props){
    // let {Children} = props
    // console.log(props)
    return(
        <div className={styles.Main}>
            <div className={styles.barra}>
                <input type="text" placeholder="Digite uma tarefa" />
                <button>+</button>
            </div>
            <div className={styles.box}>
                <div className={styles.caxa}>
                    <p>Item 1</p>
                    <button>X</button>
                </div>
                <div className={styles.caxa}>
                    <p>Item 2</p>
                    <button>X</button>
                </div>
                <div className={styles.caxa}>
                    <p>Item 3</p>
                    <button>X</button>
                </div>
            </div>

            {/* <h1>
                <span>
                    {Children}
                </span> 
            </h1> */}

        </div>
    )
}