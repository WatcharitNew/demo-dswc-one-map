import { Kanit } from "next/font/google";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import MapFilterContextProvider from "@/contexts/mapFilterContext";
import { QueryProvider } from "@/lib/providers";
import { AppLayout } from "@/components";

import theme from "../style/theme";
import "@mantine/core/styles.css";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Demo One Map",
  description: "Demo One Map",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${kanit.className} min-w-[90rem] font-normal text-base bg-blue-50`}
      >
        <QueryProvider>
          <MantineProvider theme={theme}>
            <MapFilterContextProvider>
              <AppLayout>{children}</AppLayout>
            </MapFilterContextProvider>
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
