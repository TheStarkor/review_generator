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

const Purchase = (props) => {

    return(
        <>
         <p style={{textAlign:"right"}}>This sentence include information about&nbsp;
        {/* <b>
                  "Purchase" */}
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p style={{fontSize:'1.2rem', fontWeight:'bold'}}>{"Purchase:"}</p>
                        <p style={{fontSize:'1rem'}}>{"Thoughts and opinions about price"}</p>
                        <li
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                        >
                          {
                            "I spend at least 1600 rs for this product and really unsatisfied."
                          }
                        </li>
                        <br/>

                        <p style={{fontSize:'1rem'}}>{"Experience related to payment methods"}</p>
                        <li
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                        >
                          {
                            "I kept trying, but Amazon's payment system didn't work."
                          }
                        </li>
                        <br/>
                      </React.Fragment>
                    }
                  >
                <b style={{textDecoration:"underline"}}>
                Purchase</b>
                </HelpInfoTooltip>
                </p>
                    {/* <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b></p> */}
        </>
    );
};

export default Purchase;