import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useState } from "react";

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
  const [managerCount, setManagerCount] = useState(97);
  const [openCount, setOpenCount] = useState(0);

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Link
        href="#"
        onClick={() => setManagerCount(managerCount + 1)}
        sx={{ paddingLeft: "30px" }}
        underline="none"
        variant="body1"
      >
        <StyledBadge
          badgeContent={managerCount}
          color="secondary"
          showZero
          anchorOrigin={{
            horizontal: "left",
            vertical: "top"
          }}
        ></StyledBadge>
        Bauleiter
      </Link>
      <Link
        href="#"
        onClick={() => setOpenCount(openCount + 1)}
        sx={{ paddingLeft: "30px", paddingRight: "10px" }}
        underline="none"
        variant="body1"
      >
        <StyledBadge
          badgeContent={openCount}
          color="secondary"
          showZero
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
