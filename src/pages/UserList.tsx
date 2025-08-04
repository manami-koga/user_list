import { useRouter } from "next/router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { UserType } from "@/types/UserTypes";
import thumbnaiil from "../../public/images/thumbnail_IMG_6074.jpg"
import styles from "../styles/main.module.css"
import useSWR from "swr";

const UserList = (Props: UserType) => {
    const router = useRouter();
    const onClick = () => {
        router.push("/Top");
    }

    const { name, email } = Props;

    const fetcher = (): Promise<Array<UserType>> => {
        return fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
    }
    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
    if (error) return <div>エラーです</div>
    if (isLoading) return <div>読み込み中…</div>
    return (
        <div>
            <Header />
            <h2 className={styles.title}>ここはユーザ一覧</h2>
            <div>
                
                <div>
                    {data?.map((user) => {
                        return (
                            <div className={styles.card}>
                                <img src={thumbnaiil.src} alt="プロフィール画像" className={styles.img} />
                                <h1>{user.name}</h1>
                                <p>{user.email}</p>
                            </div>
                            )
                    })}
                </div>
            </div>
            <p className={styles.button}>
            <button className={styles.inputButton} onClick={onClick}>TOPに戻る</button>
            </p>
            <Footer />
        </div>
    )
}
export default UserList;