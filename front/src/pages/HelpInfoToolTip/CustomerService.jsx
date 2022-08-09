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

const CustomerService = (props) => {

    return(
        <>
         <p style={{textAlign:"right"}}>This sentence include information about&nbsp;
            <b>
                  "Customer Service"
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Warranty service"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product is giving a two-year warranty."}
                        </li>
                        <p>{"Return"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Product is returned."}
                        </li>
                        <p>{"Refund / Replace"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Hope to get it replaced at service centre."}
                        </li>
                        <p>
                          {"Company’s communication about the product issue"}
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I've tried calling them but the always receive a 'network busy' error."
                          }
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

export default CustomerService;