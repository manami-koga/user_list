import { UserType } from "@/types/UserTypes"
import thumbnaiil from "../../../public/images/thumbnail_IMG_6074.jpg"
import styles from "../../styles/main.module.css"
import useSWR from "swr";

export const UserCard = (Props: UserType) => {
    const { name, email } = Props;

    const fetcher = ():Promise<Array<UserType>> => {
       return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>res.json());
     }
    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
    if (error) return <div>エラーです</div>
    if (isLoading) return<div>読み込み中…</div>
    
        return (
            <>

                <div>
                    <img src="thumbnaiil" alt="プロフィール画像" className={styles.img} />
                    <div className={styles.card}>
                        <h1>{name}</h1>
                        <p>{email}</p>
                    </div>
                </div>
            </>
        )
}