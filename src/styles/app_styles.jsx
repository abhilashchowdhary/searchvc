export let style = {
  /**
   * Main container
   */
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    background: "black",
    // height: "100vh",
    padding: "21px 20px 50px",
    display: "flex",
    flexDirection: "column",
  },

  /**
   * Header style
   */

  header_container: {
    // background: "red",
    zIndex: "10",
    width: "100%",
    maxHeight: "80px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: "10px",
    paddingLeft: "24px",
    paddingRight: "24px",
    display: "flex",
    position: "sticky",
    // top: "10px",
  },
  header_bar: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: "5",
    width: "100%",
    maxWidth: "1140px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: "0",
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0",
    position: "static",
  },
  inner_header_bar: {
    width: "100%",
    maxWidth: "none",
    minHeight: "30px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: "0",
    marginLeft: "auto",
    marginRight: "auto",
    position: "static",
  },
  header_wrapper: {
    backgroundColor: "#171719",
    borderRadius: "40px",
    border: "1px rgba(255, 255, 255, .08)",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    display: "flex",
    position: "static",
    boxShadow: "0 2px 8px rgba(0, 0, 0, .2)",
  },
  header_button_container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "180px",
    display: "flex",
  },
  logo_text: {
    fontSize: "20px",
    fontWeight: "900",
    marginLeft: "10px",
    color: "white",
  },
  header_button_type_link: {
    backgroundColor: "var(--black)",
    color: "var(--white)",
    textAlign: "left",
    letterSpacing: ".2px",
    textTransform: "none",
    backgroundImage: "none",
    borderRadius: "10px",
    flexDirection: "column",
    alignSelf: "center",
    padding: "10px",
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "16px",
    textDecoration: "none",
    display: "block",
    color: "white",
  },
  header_button_type_link_with_avatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "var(--black)",
    color: "var(--white)",
    textAlign: "left",
    letterSpacing: ".2px",
    textTransform: "none",
    backgroundImage: "none",
    borderRadius: "10px",
    alignSelf: "center",
    paddingRight: "10px",
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "16px",
    textDecoration: "none",
    color: "white",
  },
  header_button: {
    backgroundColor: "black",
    padding: "10px 30px 10px",
    color: "var(--white)",
    textAlign: "left",
    letterSpacing: ".2px",
    textTransform: "none",
    backgroundImage: "none",
    borderRadius: "10px",
    flexDirection: "column",
    alignSelf: "center",
    padding: "10px",
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "16px",
    textDecoration: "none",
    display: "block",
    color: "white",
  },

  /**
   * Hero style
   */
  hero_main: {
    opacity: ".9",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "160px 5% 0",
    display: "block",
    position: "static",
    top: "57px",
    overflow: "hidden",
  },
  hero_container: {
    width: "100%",
    maxWidth: "1140px",
    color: "white",
    flexDirection: "column",
    margin: "0 auto auto",
    paddingBottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hero_branding_logo_background_blur: {
    width: "200px", // Adjust the size as needed
    height: "200px", // Adjust the size as needed
    backgroundColor: "#42dfff6b",
    borderRadius: "90%", // Makes the div a circle
    filter: "blur(95px)", // Adjust the blur intensity as needed
    position: "absolute",
    top: "195px",
  },
  hero_branding_logo_container: {},
  hero_branding_logo_text: {
    fontSize: "80px",
    lineHeight: "88px",
    letterSpacing: "-.04em",
    fontWeight: "900",
  },

  /**
   * Search
   */
  search_section: {
    margin: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  search_bar_container: {
    zIndex: "0",
    width: "818px",
    height: "63px",
    borderRadius: "15px",
    // backgroundColor: "#0E0E0E",
    backgroundColor: "#2a2a2a",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  search_bar_button_separator: {
    margin: "15px",
    height: "20px",
    width: "1px",
    border: "1px solid grey",
  },
  search_input: {
    color: "white",
    height: "100%",
    margin: "25px",
    background: "none",
    width: "80%",
    fontSize: "20px",
    focused: {
      outline: "none",
    },
  },
  search_button_container: {
    display: "flex",
    margin: "20px",
    alignItems: "center",
  },
  search_button: {
    color: "#42dfffd9",
    hover: {},
  },
  /**
   * Search guide model
   */
  search_guide_model_container: {
    height: "150px",
    background: "rgb(25 25 25 / 67%)",
    //   "linear-gradient(to bottom, rgba(248, 248, 248, 0.046) 20%, rgba(104, 104, 104, 0.96) 100%)",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px 20px",
    margin: "10px",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "800px",
  },
  guide_model_suggestion_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // margin: "10px",
  },
  guide_model_suggestion_text: {
    color: "#808080",
    marginLeft: "10px",
  },
  guide_model_query_flow_container: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(26 26 26 / 89%)",
    boxShadow: "rgb(156 156 156 / 28%) 0px 0px 26px 2px",
  },
  guide_model_query_flow_text: {},
  guide_model_query_flow_chip: {
    backgroundColor: "#71757a",
    margin: "10px",
    padding: "5px 8px",
    borderRadius: "4px",
  },
  guide_model_query_flow_chip_text: {
    color: "#d2d2d2",
  },

  /**
   * Tiles
   */
  tile_container: {},
  tile_inner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px",
    gap: "16px",
    backgroundColor: "#2a2a2a",
    borderRadius: "16px",
    boxShadow: "rgb(156 156 156 / 28%) 0px 0px 26px 2px",
    marginBottom: "16px",
  },
  tile_info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "0",
    width: "100%",
    flexWrap: "wrap",
    gap: "8px",
  },
  tile_item_metrics_container: {
    fontWeight: "500",
    fontSize: "14px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flex: "1 1 100%",
  },
  tile_investor_name: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
  tile_item_metrics: {
    color: "var(--black,#120e34)",
    display: "flex",
    alignItems: "center",
    gap: "2px",
    fontWeight: "400",
    overflowWrap: "break-word",
    hyphens: "auto",
  },
  tile_item_label: {
    color: "var(--dark-grey,grey)",
    display: "inline-flex",
    alignItems: "center",
    flex: "1 1",
    whiteSpace: "nowrap",
    gap: "4px",
  },
  tile_item_metrics_seperator: {
    color: "#aaa",
    display: "flex",
    alignItems: "center",
    width: "21px",
    height: "21px",
    padding: "7px",
  },
  tile_item_metric_value: {
    color: "white",
  },
  tile_item_seperator: {
    display: "block",
    width: "100%",
    height: "1px",
    backgroundColor: "#666666",
  },
  funding_round_badges: {
    display: "flex",
    width: "60%",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tile_header: {
    margin: "15px 0px",
    display: "flex",
    flexDirection: "column",
  },
  round_type_badge_element: {
    margin: "0px 10px 6px 0px",
    padding: "6px 20px",
  },
  tile_portfolio_companies: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px",
    // boxShadow: "rgb(0 189 255 / 28%) 0px 0px 10px 0px",
  },
  tile_portfolio_company_name: {
    color: "white",
    margin: "0px 10px",
  },
  tile_portfolio_company_container: {
    display: "flex",
    flexWrap: "wrap",
    margin: "10px",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tile_item_investor_portfolio_company_link: {
    color: "blue",
    textDecoration: "underline",
  },
  view_more_button: {
    color: "#1e98e5",
  },

  /**
   * Data stopper
   */
  data_stopper_main_container: {
    position: "sticky",
    // transform: "translate(0px, -387px",
  },
  data_stopper_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "rgb(64 112 112 / 87%)",
    borderRadius: "25px 34px 5px 5px",
    alignItems: "center",
    padding: "26px",
  },
  data_stopper_heading_text: {
    fontSize: "27px",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "25px",
  },
  data_stopper_subheading: {
    color: "#adadad",
    marginBottom: "25px",
  },

  /**
   * Skeleton
   */
  tile_skeleton_container: {
    margin: "50px",
  },

  /**
   * Suggestions
   */
  suggestion_container: {
    display: "flex",
    flexDirection: "column",
    padding: "0",
    gap: "24px",
    width: "100%",
    marginTop: "24px",
  },
  suggestion_inner_container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    alignItems: "center",
    justifyContent: "center",
  },
  suggestion_chip: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 12px 12px 16px",
    fontSize: "14px",
    lineHeight: "21px",
    gap: "8px",
    background: "#aea655",
    borderRadius: "30px",
    userSelect: "none",
    cursor: "pointer",
    width: "auto",
  },
  view_more_companies: {
    color: "#378ee7",
    textDecoration: "underline",
    marginLeft: "25px",
  },
};
