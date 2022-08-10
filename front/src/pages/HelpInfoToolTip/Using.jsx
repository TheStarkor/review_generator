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

const Using = (props) => {

    return(
        <>
         <p style={{textAlign:"right"}}>This sentence include information about&nbsp;
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p style={{fontSize:'1.2rem', fontWeight:'bold'}}>{"Using:"}</p>
                        <p style={{fontSize:'1rem'}}>
                          {
                            "Product quality evaluation (sound quality, bass, charging, connection, ….)"
                          }
                        </p>
                        <li
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                        >
                          {
                            "The sound quality is awesome but the built quality of the product is at very low level."
                          }
                        </li>
                        <br/>

                        <p  style={{fontSize:'1rem'}}>{"Context of use"}</p>
                        <li
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                        >
                          {"I used it when exercising."}
                        </li>
                        <br/>

                        <p  style={{fontSize:'1rem'}}>{"Ease of use / Troubles"}</p>
                        <li
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                        >
                          {"The earphones kept coming out of my ears."}
                        </li>
                        <br/>

                        <p  style={{fontSize:'1rem'}}>{"Frequency of use"}</p>
                        <li
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                        >
                          {"I use the product 2-3 times a week."}
                        </li>
                        <br/>
                      </React.Fragment>
                    }
                  >
                <b style={{textDecoration:"underline"}}>
                Using</b>
                </HelpInfoTooltip>
                </p>                    {/* <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b></p> */}
        </>
    );
};

export default Using;