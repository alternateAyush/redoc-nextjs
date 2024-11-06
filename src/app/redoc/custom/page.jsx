"use client";
import { RedocStandalone } from "redoc";

export default function RedoxPage() {
  return (
    <div className='min-h-screen p-0 m-0'>
      <RedocStandalone
        specUrl='/openapi.yaml'
        options={{
          defaultSampleLanguage: "Javascript",
          ctrlFHijack: false,
          theme: {
            spacing: {
              unit: 4,
              sectionHorizontal: 16,
              sectionVertical: 24,
            },
            breakpoints: {
              small: "600px",
              medium: "960px",
              large: "1280px",
            },
            colors: {
              tonalOffset: 0.2,
              text: {
                primary: "#ffffff",
                secondary: "#b0bec5",
              },
              primary: {
                main: "#ff4081",
                light: "#ff79b0",
                dark: "#c60055",
                contrastText: "#ffffff",
              },
              success: {
                main: "#4caf50",
                light: "#80e27e",
                dark: "#087f23",
                contrastText: "#ffffff",
              },
              warning: {
                main: "#ff9800",
                light: "#ffc947",
                dark: "#c66900",
                contrastText: "#ffffff",
              },
              error: {
                main: "#f44336",
                light: "#ff7961",
                dark: "#ba000d",
                contrastText: "#ffffff",
              },
              gray: {
                50: "#fafafa",
                100: "rgba(0,0,0,0.4)",
              },
              border: {
                light: "#ffffff1a",
                dark: "#ffffff33",
              },
              responses: {
                success: {
                  color: "#ffffffff",
                  backgroundColor: "#1b5e20",
                  tabTextColor: "#ffffff",
                },
                error: {
                  color: "#f44336",
                  backgroundColor: "#b71c1c",
                  tabTextColor: "#ffffff",
                },
                redirect: {
                  color: "#ff9800",
                  backgroundColor: "#ef6c00",
                  tabTextColor: "#ffffff",
                },
                info: {
                  color: "#2196f3",
                  backgroundColor: "#0d47a1",
                  tabTextColor: "#ffffff",
                },
              },
              http: {
                get: "#4caf50",
                post: "#ff4081",
                put: "#ff9800",
                options: "#9c27b0",
                patch: "#f57c00",
                delete: "#f44336",
                basic: "#673ab7",
                link: "#3f51b5",
                head: "#03a9f4",
              },
            },
            schema: {
              linesColor: "#ffffff33",
              defaultDetailsWidth: "75%",
              typeNameColor: "#ff4081",
              typeTitleColor: "#ffffff",
              requireLabelColor: "#ff4081",
              labelsTextSize: "12px",
              nestingSpacing: "16px",
              nestedBackground: "#424242",
              arrow: {
                size: "12px",
                color: "#ff4081",
              },
            },
            typography: {
              fontSize: "14px",
              lineHeight: "1.5",
              fontWeightLight: "300",
              fontWeightRegular: "400",
              fontWeightBold: "700",
              fontFamily: '"Roboto Mono", monospace',
              smoothing: "antialiased",
              optimizeSpeed: true,
              code: {
                fontSize: "13px",
                fontWeight: "400",
                fontFamily: "Source Code Pro, monospace",
                lineHeight: "1.6",
                color: "#ffffff",
                backgroundColor: "#263238",
                wrap: true,
              },
              headings: {
                fontFamily: "Roboto, sans-serif",
                fontWeight: "700",
                lineHeight: "1.5",
              },
              links: {
                color: "#ff4081",
                visited: "#ff79b0",
                hover: "#ff4081",
                textDecoration: "none",
                hoverTextDecoration: "underline",
              },
            },
            sidebar: {
              width: "260px",
              backgroundColor: "#263238",
              textColor: "#b0bec5",
              activeTextColor: "#ffffff",
              groupItems: {
                activeBackgroundColor: "#ff4081",
                activeTextColor: "#ffffff",
                textTransform: "uppercase",
              },
              level1Items: {
                activeBackgroundColor: "#ff4081",
                activeTextColor: "#ffffff",
                textTransform: "uppercase",
              },
              arrow: {
                size: "12px",
                color: "#ff4081",
              },
            },
            logo: {
              maxHeight: "60px",
              maxWidth: "200px",
              gutter: "16px",
            },
            rightPanel: {
              backgroundColor: "#263238",
              textColor: "#ff4081",
              width: "300px",
              servers: {
                overlay: {
                  backgroundColor: "#37474f",
                  textColor: "#ffffff",
                },
                url: {
                  backgroundColor: "#37474f",
                },
              },
            },
            codeBlock: {
              backgroundColor: "#263238",
            },
            fab: {
              backgroundColor: "#ff4081",
              color: "#ffffff",
            },
          },
        }}
      />
    </div>
  );
}
