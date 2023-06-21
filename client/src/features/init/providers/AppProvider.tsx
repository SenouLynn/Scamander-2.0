import { AppProvider as ContextProvider } from "../utils/contexts";
import { useAppContext } from "../utils/hooks";

export default function App(props: Partial<AppContext>) {
  const value = useAppContext(props);
  return <ContextProvider value={value}>{props.children}</ContextProvider>;
}
