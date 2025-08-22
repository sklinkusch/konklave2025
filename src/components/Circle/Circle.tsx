import { Lens } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import type { CircleProps, Rank } from "@mytypes/types";

export const Circle = ({ rank }: CircleProps) => {
  const getColor = (rank: Rank) => {
    switch (rank) {
      case "bishop":
        return "#6f2c91";
      case "priest":
        return "#ffffff";
      case "deacon":
        return "#4caf50";
    }
  };
  const getBorderColor = (rank: Rank) => {
    switch (rank) {
      case "bishop":
        return "#90d36e";
      case "priest":
        return "#000000";
      case "deacon":
        return "#b350af";
    }
  };
  const getTitle = (rank: Rank) => {
    switch (rank) {
      case "bishop":
        return "Kardinalbischof";
      case "priest":
        return "Kardinalpriester";
      case "deacon":
        return "Kardinaldiakon";
    }
  };
  if (rank) {
    return (
      <Tooltip title={getTitle(rank)}>
        <Lens
          sx={{
            color: getColor(rank),
            border: `2px solid ${getBorderColor(rank)}`,
            borderRadius: "50%",
            padding: 0,
          }}
        />
      </Tooltip>
    );
  }
  return null;
};
