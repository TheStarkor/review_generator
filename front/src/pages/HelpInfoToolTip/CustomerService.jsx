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

const CustomerService = (props) => {

    return(
        <>
         <p style={{textAlign:"right"}}>This sentence include information about&nbsp;
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p style={{fontSize:'1.2rem', fontWeight:'bold'}}>{"Customer Service:"}</p>
                        <p style={{fontSize:'1rem'}}>{"Warranty service"}</p>
                        <li
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                        >
                          {"The product is giving a two-year warranty."}
                        </li>
                        <br/>
                        
                        <p style={{fontSize:'1rem'}}>{"Return"}</p>
                        <li
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                        >
                          {"Product is returned."}
                        </li>
                        <br/>
                        
                        <p style={{fontSize:'1rem'}}>{"Refund / Replace / Repair"}</p>
                        <li
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                        >
                          {"Hope to get it replaced at service centre."}
                        </li>
                        <br/>
                        
                        <p style={{fontSize:'1rem'}}>
                          {"Company’s communication about the product issue"}
                        </p>
                        <li
                        style={{fontSize:'.8rem', fontStyle: "italic" }}
                        >
                          {
                            "I've tried calling them but always receive a 'network busy'."
                          }
                        </li>
                        <br/>
                        
                      </React.Fragment>
                    }
                  >
                <b style={{textDecoration:"underline"}}>
                Customer Service</b>
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

export default CustomerService;