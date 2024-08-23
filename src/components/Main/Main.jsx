import { Children } from "react"
import styles from "./Main.module.css"
export function Main(props){
    let {Children} = props
    // console.log(props)
    return(
        <div className={styles.Main}>
            <h1>
                <span>
                    {Children}
                </span> 
            </h1>

        </div>
    )
}