/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { StyledLabelValueText, StyledTooltipCard, StyledTooltipLabelValueStack } from "../styled/styled";
import DxPrimaryTypography from "./DxPrimaryTypography";

const DxChartTooltip = ({ payload, active, label }) => {
  if (active && payload && payload.length)
    return (
      <StyledTooltipCard>
        <DxPrimaryTypography>
          {capitalizeFirstLetter(label)} 
        </DxPrimaryTypography>
        <Box>
          {payload.map((item, index) => (
            <StyledTooltipLabelValueStack key={index}>
              <StyledLabelValueText sx={{ color: item.color }}>
                {capitalizeFirstLetter(item.dataKey)} :
              </StyledLabelValueText>
              <StyledLabelValueText sx={{ color: item.color }}>
                {item.value}
              </StyledLabelValueText>
            </StyledTooltipLabelValueStack>
          ))}
        </Box>
      </StyledTooltipCard>
    );
};

export default DxChartTooltip;
