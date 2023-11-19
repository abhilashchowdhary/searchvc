import { Fragment, useState } from "react";
import { Inter } from "next/font/google";
import { style } from "../styles/app_styles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Suggestions(props) {
  let list_of_suggestions = [
    "Find investors which have invested in alternative data platform for investors in USA",
    "Find investors which have invested in companies similar to stripe.com",
    " Investors holding significant artificial intelligence focused portfolios",
    "Find investors which have invested in robotics companies bulding sidewalk delivery robots in USA",
  ];
  return (
    <section style={style.suggestion_container}>
      <div style={style.suggestion_inner_container}>
        {list_of_suggestions.map((suggestion, index) => {
          return (
            <button
              onClick={() => props.handleSuggestionSelection(suggestion)}
              style={style.suggestion_chip}
              key={index}
            >
              {suggestion}
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <polyline
                  points="9 18 15 12 9 6"
                  stroke="#120E34"
                  fill="none"
                  stroke-width="2px"
                ></polyline>
              </svg>
            </button>
          );
        })}
      </div>
    </section>
  );
}
