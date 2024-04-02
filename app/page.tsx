
import { FullLayout } from "@/Layout/FullLayout/FullLayout";
import styles from "./page.module.css"
import { CompressedLayout } from "@/Layout/CompressedLayout/CompressedLayout";



export default function Home() {
  return (
    <div className={styles.container}>
    <CompressedLayout/>
    </div>
  );
}
