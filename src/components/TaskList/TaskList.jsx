import styles from './TaskList.module.css'

export function TaskList(){

    return (
        <ul className={styles.TaskList}>
         <Item/>
         <li>Item 1</li>
         <li>Item 2</li>
         <li>Item 3</li>

        </ul>
    )
}