import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transaction";
import { TransactionProvider } from "./hooks/useTrasactions";
import { ModalProvider } from "./hooks/useModal";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ModalProvider>
        <TransactionProvider>
          <Transactions />
        </TransactionProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}
