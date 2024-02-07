"use client";
import HeroPages from "@/components/HeroPages";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Page = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const title1 = "";
  const desc = "FAQs";
  return (
    <div>
      <HeroPages
        tt={title1}
        desc={desc}
      />
      <div className="container my-5 text-center">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0, textAlign: "left" }}
            >
              How do both parents use EarnIt?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Parents can login to EarnIt using the same credentials on up to 5
              devices.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0, textAlign: "left" }}
            >
              {" "}
              What’s the difference between goals and rewards?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Goals are used with tasks that earn credits towards those goals.
              When the task is approved by the parent, the value of the task is
              automatically applied toward the balance of the goal associated.
            </Typography>
            <Typography>
              Rewards are used with tokens. Tokens can be redeemed toward
              rewards as often as kids want depending on their token balance.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Page;
