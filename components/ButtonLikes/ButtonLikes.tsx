import Image from "next/image";
import styles from "./ButtonLikes.module.css";
import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

interface ButtonLikesProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  count?: number;
  appearance?: "white" | "black";
  height: number;
  width: number;
  isActive?: boolean;
}

function ButtonLikes({
  count,
  appearance,
  height,
  width,
  onClick,
  isActive,
}: ButtonLikesProps): JSX.Element {
  return (
    <button
      className={cn(styles.like_button, {
        [styles.white]: appearance === "white",
        [styles.black]: appearance === "black",
        [styles.isActive]: isActive,
      })}
      onClick={onClick}
    >
      {count}

      {isActive ? (
        <Image src="/shape.svg" width={width} height={height} alt="like" />
      ) : (
        <Image src="/like.svg" width={width} height={height} alt="like" />
      )}
    </button>
  );
}

export default ButtonLikes;
