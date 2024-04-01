import { HeadlineProps } from "./Headline.props";

function Headline({ children,  }: HeadlineProps): JSX.Element {
  return <h2>{children}</h2>;
}
export default Headline;
