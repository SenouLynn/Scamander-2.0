import { InitProvider } from "../utils/contexts";
import { useInitContext } from "../utils/init";

export default function InitContext(props: Partial<InitContext>) {
  const value = useInitContext(props);
  return <InitProvider value={value}>{props.children}</InitProvider>;
}
