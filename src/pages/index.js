import { Inter } from "next/font/google";
import Header from "../components/header";
import Hero from "../components/hero";
import DataTableDemo from "../components/table";
import DataTiles from "../components/tiles";
import { style } from "../styles/app_styles";
import { data } from "autoprefixer";
import { useState } from "react";
import _ from "lodash";
import Suggestions from "../components/suggestions";
import DataTilesSkeleton from "../components/tile_skeleton";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [is_loading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({});

  const handleSeach = async (user_input) => {
    console.log("Start loading", user_input);
    setIsLoading(true);
    setResponse({});
    console.log("HITTING CRUSTDATA COMPANYGPT API");
    const response = await fetch(
      "https://crustdata.com/company_gpt/get_investors_from_prompt/",
      {
        method: "POST",
        headers: {
          Authorization: "Token a9c265feff7b6e50390dcb7069ef6bc9ca6baad9",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: user_input,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json(); // Await the JSON parsing here
    // Update the state based on the result
    console.log("Stop loading");
    setResponse(data);
    setIsLoading(false);
    console.log(data); // Now the data will be available here
    return data;
  };

  const handleSuggestionSelection = (suggestion) => {
    console.log("USER SUgGESTION: ", suggestion);
    handleSeach(suggestion);
  };
  console.log(_.isEmpty(response), is_loading);
  return (
    <main style={style.main}>
      <Header />
      <Hero handleSeach={handleSeach} />
      {is_loading ? (
        <DataTilesSkeleton />
      ) : (
        <div>
          {_.isEmpty(response) ? (
            <Suggestions
              handleSuggestionSelection={handleSuggestionSelection}
            />
          ) : (
            <DataTiles is_loading={is_loading} response={response} />
          )}
        </div>
      )}
    </main>
  );
}
