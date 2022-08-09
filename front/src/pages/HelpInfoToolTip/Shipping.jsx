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

const Shipping = (props) => {

    return(
        <>
         <p  style={{textAlign:"right"}}>This sentence include information about&nbsp;
            <b>
                  "Shipping"
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about delivery time"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Got the earphones 3 days early."}
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product came very worse packaged."}
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

export default Shipping;