import { useRouter } from "next/router"

import styles from "../styles/main.module.css"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Top = () => {
    const router = useRouter();
    const onClick = () => {
        router.push("/UserList")
    }
    return (
        <div className={styles.top}>
             <Header/>
            <h1>トップ画面</h1>
            <img src="/images/IMG_6114.JPG" alt="Top画像" className={styles.img6114}/>
             <p className={styles.button}>
            <button className={styles.inputButton} onClick={onClick}>ユーザ一覧へ</button>
            </p>
            <Footer/>
        </div>
    )
}
export default Top;