import { Fragment, useState } from "react";
import { Inter } from "next/font/google";
import { style } from "../styles/app_styles";

const inter = Inter({ subsets: ["latin"] });

export default function Hero(props) {
  const [user_input, setUserInput] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);
  const inputStyle = {
    ...style.search_input,
    ...(isInputFocused ? style.search_input.focused : {}),
  };

  const clear_input = () => {
    setUserInput("");
  };
  const searchButtonClick = () => {
    props.handleSeach(user_input);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <section style={style.hero_main}>
      {/* Hero section */}
      <div style={style.hero_container}>
        <div style={style.hero_branding_logo_container}>
          <div style={style.hero_branding_logo_background_blur}></div>
          <div>
            {/* TODO: Update the hero texts */}
            <span style={style.hero_branding_logo_text}>FindVC</span>
          </div>
        </div>
        {/* Search section */}

        <div style={style.search_section}>
          <div style={style.search_bar_container}>
            <input
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              style={inputStyle}
              onChange={handleUserInput}
              value={user_input}
              placeholder="Find investors which have invested in companies similar to stripe.com"
            ></input>
            <div style={style.search_button_container}>
              <button onClick={clear_input}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"
                    stroke="#AAAAAA"
                    fill="#AAAAAA"
                    stroke-width="0px"
                  ></path>
                </svg>
              </button>
              <div style={style.search_bar_button_separator}></div>
              <button onClick={searchButtonClick} style={style.search_button}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Suggestion section */}
          {isInputFocused && (
            <div style={style.search_guide_model_container}>
              <div style={style.guide_model_suggestion_container}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  color="#808080"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="9" x2="15" y1="18" y2="18"></line>
                  <line x1="10" x2="14" y1="22" y2="22"></line>
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
                </svg>
                <span style={style.guide_model_suggestion_text}>
                  Structure your search in the following way to yield the most
                  relevant results. Skip any criteria that are not essential to
                  your query.{" "}
                </span>
              </div>
              <div style={style.guide_model_query_flow_container}>
                <span style={style.guide_model_suggestion_text}>
                  Find investors
                </span>

                <div style={style.guide_model_query_flow_chip}>
                  {" "}
                  <span style={style.guide_model_query_flow_chip_text}>
                    description
                  </span>
                </div>
                <span>+</span>
                <div style={style.guide_model_query_flow_chip}>
                  {" "}
                  <span style={style.guide_model_query_flow_chip_text}>
                    location
                  </span>
                </div>
                <span>+</span>
                <div style={style.guide_model_query_flow_chip}>
                  <span style={style.guide_model_query_flow_chip_text}>
                    similar company domain
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div></div>
      </div>
    </section>
  );
}
