import { useState } from "react";
import { RawImg } from "@components";

export default function MyComponent(props) {
  const [count, setCount] = useState(1);

  return (
    <div
      css={{
        fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
        pointerEvents: "auto",
        color: "rgba(255, 255, 255, 0.87)",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <div
        css={{
          fontWeight: "400",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1280px",
          paddingBottom: "32px",
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingTop: "32px",
          textAlign: "center",
          pointerEvents: "auto",
        }}
      >
        <div
          data-loc="src/App.tsx:26:21"
          $name="App"
          css={{
            fontWeight: "400",
            pointerEvents: "auto",
          }}
        >
          <a
            target="_blank"
            data-loc="src/App.tsx:27:23"
            $name="App"
            href="https://vite.dev/"
            css={{
              display: "inline",
              fontWeight: "500",
              pointerEvents: "auto",
            }}
          >
            <RawImg
              alt="Vite logo"
              data-loc="src/App.tsx:27:107"
              $name="App"
              image="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='31.88'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20257'%3e%3cdefs%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb466'%20x1='-.828%25'%20x2='57.636%25'%20y1='7.652%25'%20y2='78.411%25'%3e%3cstop%20offset='0%25'%20stop-color='%2341D1FF'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23BD34FE'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb467'%20x1='43.376%25'%20x2='50.316%25'%20y1='2.242%25'%20y2='89.03%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFEA83'%3e%3c/stop%3e%3cstop%20offset='8.333%25'%20stop-color='%23FFDD35'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23FFA800'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb466)'%20d='M255.153%2037.938L134.897%20252.976c-2.483%204.44-8.862%204.466-11.382.048L.875%2037.958c-2.746-4.814%201.371-10.646%206.827-9.67l120.385%2021.517a6.537%206.537%200%200%200%202.322-.004l117.867-21.483c5.438-.991%209.574%204.796%206.877%209.62Z'%3e%3c/path%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb467)'%20d='M185.432.063L96.44%2017.501a3.268%203.268%200%200%200-2.634%203.014l-5.474%2092.456a3.268%203.268%200%200%200%203.997%203.378l24.777-5.718c2.318-.535%204.413%201.507%203.936%203.838l-7.361%2036.047c-.495%202.426%201.782%204.5%204.151%203.78l15.304-4.649c2.372-.72%204.652%201.36%204.15%203.788l-11.698%2056.621c-.732%203.542%203.979%205.473%205.943%202.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505%204.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z'%3e%3c/path%3e%3c/svg%3e"
              css={{
                display: "inline",
                fontWeight: "500",
                height: "96px",
                paddingBottom: "24px",
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingTop: "24px",
                transitionDuration: "0.3s",
                transitionProperty: "filter",
                willChange: "filter",
                pointerEvents: "auto",
              }}
            />
          </a>
          <a
            target="_blank"
            data-loc="src/App.tsx:36:23"
            $name="App"
            href="https://react.dev/"
            css={{
              display: "inline",
              fontWeight: "500",
              pointerEvents: "auto",
            }}
          >
            <RawImg
              alt="React logo"
              data-loc="src/App.tsx:36:108"
              $name="App"
              image="https://builder-project-bb38c519-38a3-4b58-8c9e-640d1664818f.fly.dev/src/assets/react.svg"
              css={{
                display: "inline",
                animationDuration: "20s",
                animationIterationCount: "infinite",
                animationName: "logo-spin",
                animationTimingFunction: "linear",
                fontWeight: "500",
                height: "96px",
                paddingBottom: "24px",
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingTop: "24px",
                transitionDuration: "0.3s",
                transitionProperty: "filter",
                willChange: "filter",
                transform:
                  "matrix(0.965912, 0.258872, -0.258872, 0.965912, 0, 0)",
                pointerEvents: "auto",
              }}
            />
          </a>
        </div>
        <h1
          data-loc="src/App.tsx:50:21"
          $name="App"
          css={{
            fontSize: "51.2px",
            fontWeight: "700",
            lineHeight: "56.32px",
            pointerEvents: "auto",
          }}
        >
          REACT
        </h1>
        <div
          data-loc="src/App.tsx:55:21"
          $name="App"
          css={{
            fontWeight: "400",
            paddingBottom: "32px",
            paddingLeft: "32px",
            paddingRight: "32px",
            paddingTop: "32px",
            pointerEvents: "auto",
          }}
        >
          <button
            onClick={() => setCount((count) => count + 1)}
            data-loc="src/App.tsx:56:23"
            $name="App"
            css={{
              display: "inline-block",
              borderColor: "rgba(0, 0, 0, 0)",
              fontWeight: "500",
              lineHeight: "normal",
              pointerEvents: "auto",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            <span css={{}}>count is </span>
            <span css={{}}>{count}</span>
          </button>
          <p
            data-loc="src/App.tsx:64:23"
            $name="App"
            css={{
              fontWeight: "400",
              pointerEvents: "auto",
            }}
          >
            <span css={{}}>Edit </span>
            <code
              data-loc="src/App.tsx:66:25"
              $name="App"
              css={{
                display: "inline",
                fontFamily: "monospace",
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "19.5px",
                pointerEvents: "auto",
              }}
            >
              src/App.tsx
            </code>
            <span css={{}}> and save to test HMR</span>
          </p>
        </div>
        <p
          data-loc="src/App.tsx:82:21"
          $name="App"
          css={{
            color: "rgb(136, 136, 136)",
            fontWeight: "400",
            pointerEvents: "auto",
          }}
        >
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}
