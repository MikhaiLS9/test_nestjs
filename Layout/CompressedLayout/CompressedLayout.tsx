import { Header } from "@/app/Header/Header";
import { MainCompressed } from "@/app/MainCompressed/MainCompressed";
import styles from "./CompressedLayout.module.css";

export function CompressedLayout(): JSX.Element {
  return (
    <>
      <Header />
      <MainCompressed />
    </>
  );
}
