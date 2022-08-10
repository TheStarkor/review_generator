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
      maxWidth: 800,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

const Consideration = (props) => {

    return(
        <> 
         <p style={{textAlign:"right"}}>This sentence include information about&nbsp;
            <HelpInfoTooltip
                placement="right-start"
                title={
                    <React.Fragment>
                    <p style={{fontSize:'1.2rem', fontWeight:'bold'}}>{"Consideration:"}</p>
                    <p style={{fontSize:'1rem'}}>{"The expectation of the product"}</p>
                    <li 
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                    >
                        {
                        "Disappointed as I expected that it would last me for 6 months for the least."
                        }
                    </li>
                    <br/>
                    <p style={{fontSize:'1rem'}}>{"Reason for purchase decision making"}</p>
                    <li
                        style={{fontSize:'.8rem',  fontStyle: "italic" }}
                    >
                        {"I buy this product for my daughter’s present."}
                    </li>
                    <br/>
                    <p style={{fontSize:'1rem'}}>{"Product search experience"}</p>
                    <li
                        style={{fontSize:'.8rem',  fontStyle: "italic" }}
                    >
                        {"After a long research, I finally choose this one."}
                    </li>
                    <br/>
                    <p style={{fontSize:'1rem'}}>{"Previous similar product usage experience"}</p>
                    <li
                        style={{fontSize:'.8rem',  fontStyle: "italic" }}
                    >
                        {"I've tried similar products from the same company before."}
                    </li>
                    <br/>
                    </React.Fragment>
                }
                >
                <b style={{textDecoration:"underline"}}>
                Consideration</b>
                </HelpInfoTooltip>
                </p>
                {/* <HelpCenterIcon
                    style={{ paddingLeft: "5px", color: "grey" }}
                />
                </HelpInfoTooltip> */}
        </>
    );
};

export default Consideration;