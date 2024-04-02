import { About } from "@/app/About/About";
import { Comments } from "@/app/Comments/Comments";
import { Header } from "@/app/Header/Header";
import { Main } from "@/app/Main/Main";


export function FullLayout () : JSX.Element {
    return <>
        <Header />
        <Main />
        <About />
        <Comments />
    </>;
}

