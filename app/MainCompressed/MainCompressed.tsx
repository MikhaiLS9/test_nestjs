import styles from "./MainCompressed.module.css";
import { ItemCompressed } from "@/components/ItemCompressed/ItemCompressed";
import { itemsData } from "../../constItemsData.ts";

export function MainCompressed(): JSX.Element {
  return (
    <div className={styles.items}>
      {itemsData.map((item) => (
        <ItemCompressed key={item.id} header={item.header} text={item.text} />
      ))}
    </div>
  );
}
