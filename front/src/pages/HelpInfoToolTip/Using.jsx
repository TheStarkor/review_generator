import React, { useState, useEffect } from "react";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const HelpInfoTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 320,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

const Using = (props) => {

    return(
        <>
         <p style={{textAlign:"right"}}>This sentence include information about&nbsp;
                        <b>
                  "Using"
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>
                          {
                            "Product quality evaluation (sound quality, bass, charging, connection, ….)"
                          }
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "The sound quality is awesome but the built quality of the product is at very low level."
                          }
                        </li>
                        <p>{"Context of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I used it when exercising."}
                        </li>
                        <p>{"Ease of use / Troubles"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The earphones kept coming out of my ears."}
                        </li>
                        <p>{"Frequency of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I use the product 2-3 times a week."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b></p>
        </>
    );
};

export default Using;