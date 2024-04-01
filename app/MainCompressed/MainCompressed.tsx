
import styles from "./MainCompressed.module.css";
import { ItemCompressed } from "@/components/ItemCompressed/ItemCompressed";
import { ITEMS_DATA } from "./MainCompressedData";

export function MainCompressed(): JSX.Element {
  return (
    <div className={styles.items}>
      {ITEMS_DATA.map((item) => (
        <ItemCompressed key={item.id} header={item.header} text={item.text} />
      ))}
    </div>
  );
}
