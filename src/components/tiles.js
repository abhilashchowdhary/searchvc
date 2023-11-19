import { Fragment, useState } from "react";
import { Inter } from "next/font/google";
import { style } from "../styles/app_styles";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import api_response_sample from "../data/api_response_sample.json";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import _ from "lodash";

const inter = Inter({ subsets: ["latin"] });

const DescriptionLimit = ({ text, limit }) => {
  const [showMore, setShowMore] = useState(false);
  const slicedText = showMore ? text : text.slice(0, limit);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <p>{slicedText}</p>
      {text.length > limit && (
        <button style={style.view_more_button} onClick={toggleShowMore}>
          {showMore ? "Show Less" : "View More"}
        </button>
      )}
    </div>
  );
};

export default function DataTiles(props) {
  return (
    <section style={style.tile_container}>
      {Object.entries(props["response"]["data"]).map(
        ([investor_name, investor_info], index) => {
          if (index > 5) {
            return null;
          }
          return (
            <div key={index}>
              {index === 5 && (
                <div style={style.data_stopper_main_container}>
                  <div style={style.data_stopper_container}>
                    <div style={style.data_stopper_heading_text}>
                      We found {props["response"]["total_investor_count"]} more
                      investors matching your request
                    </div>
                    <div style={style.data_stopper_subheading}>
                      To get more relevant results and unlock extra data
                      sources, you need to upgrade your account.
                    </div>
                    <div>
                      <a href="https://cal.com/manmohit/30min">
                        <Button>Request Demo</Button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              <div
                style={{
                  ...style.tile_inner,
                  filter: index === 5 ? "blur(10px)" : undefined,
                }}
              >
                <div style={style.tile_info}>
                  <div style={style.tile_header}>
                    <div style={style.tile_investor_name}>{investor_name}</div>
                    <div style={style.tile_item_metrics_container}>
                      <span style={style.tile_item_metrics}>
                        <label style={style.tile_item_label}>
                          Portfolio size:
                        </label>
                        <p style={style.tile_item_metric_value}>
                          {investor_info.total_investments}
                        </p>
                      </span>
                      {/* <svg
                          style={style.tile_item_metrics_seperator}
                          width="5"
                          height="5"
                          viewBox="0 0 5 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.48523 4.046C2.00923 4.046 1.60323 3.88267 1.26723 3.556C0.940568 3.22 0.777234 2.814 0.777234 2.338C0.777234 1.85267 0.940568 1.44667 1.26723 1.12C1.60323 0.784 2.00923 0.616 2.48523 0.616C2.97057 0.616 3.38123 0.784 3.71723 1.12C4.05323 1.44667 4.22123 1.85267 4.22123 2.338C4.22123 2.814 4.05323 3.22 3.71723 3.556C3.38123 3.88267 2.97057 4.046 2.48523 4.046Z"
                            fill="#A2A2A2"
                          ></path>
                        </svg> */}
                    </div>
                  </div>
                  <div style={style.funding_round_badges}>
                    {investor_info["round_participated"].map(
                      (round_type, index) => {
                        return (
                          <Badge
                            key={index}
                            style={style.round_type_badge_element}
                          >
                            {_.startCase(round_type.replace("_", " "))}
                          </Badge>
                        );
                      }
                    )}
                  </div>
                </div>
                <div style={style.tile_item_seperator}></div>
                <div style={style.tile_portfolio_company_container}>
                  {investor_info["companies"].map((company_info, index) => {
                    return (
                      <div key={index} style={style.tile_portfolio_companies}>
                        <div style={style.tile_portfolio_companies}>
                          <Avatar>
                            <AvatarImage
                              src={company_info["logo"]}
                              alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>

                          <span style={style.tile_portfolio_company_name}>
                            {company_info["name"]}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <a
                  href="https://cal.com/manmohit/30min"
                  style={style.view_more_companies}
                >
                  View all {investor_info["total_investments"]} portfolio
                  companies
                </a>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
}
