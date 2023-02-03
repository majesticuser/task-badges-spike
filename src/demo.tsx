import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: "30px",
    height: "30px",
    left: -20,
    top: -2,
    borderRadius: "15px"
  }
}));

export default function CustomizedBadges() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Link
        href="#"
        onClick={() => console.log("clicked")}
        sx={{ paddingLeft: "30px" }}
        underline="none"
        variant="body1"
      >
        <StyledBadge
          badgeContent={222}
          color="secondary"
          anchorOrigin={{
            horizontal: "left",
            vertical: "top"
          }}
        ></StyledBadge>
        Bauleiter
      </Link>
      <Link
        href="#"
        onClick={() => console.log("clicked")}
        sx={{ paddingLeft: "30px", paddingRight: "10px" }}
        underline="none"
        variant="body1"
      >
        <StyledBadge
          badgeContent={2}
          color="secondary"
          anchorOrigin={{
            horizontal: "left",
            vertical: "top"
          }}
        ></StyledBadge>
        Offen
      </Link>
    </Box>
  );
}
