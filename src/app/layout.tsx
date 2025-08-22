import MuiProvider from "./ThemeProvider";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
