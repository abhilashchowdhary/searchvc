import { Fragment, useState } from "react";
import { Inter } from "next/font/google";
import { style } from "../styles/app_styles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <header style={style.header_container}>
      <div style={style.header_bar}>
        <div style={style.inner_header_bar}>
          <div style={style.header_wrapper}>
            <div>
              {/* TODO: Update the logo */}
              <span style={style.logo_text}>FindVC.ai</span>
            </div>
            <div style={style.header_button_container}>
              <button
                data-cal-link="manmohit/30min"
                data-cal-config='{"layout":"month_view"}'
                style={style.header_button_type_link_with_avatar}
              >
                <Avatar>
                  <AvatarImage
                    src="https://ph-avatars.imgix.net/3302789/16b2a27d-ef94-4449-92b5-b96982012c43?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=1"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span style={{ marginLeft: "10px" }}>Get Demo</span>
              </button>
              {/* <a style={style.header_button_type_link}>
                <span>Login</span>
              </a>
              <a style={style.header_button}>
                <span>Signup</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
