import { Box, ListItemButton } from "@mui/material";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import {
  AspectRatio,
  CardContainer,
  CardContent,
  CardCover,
} from "@oxygen/design-system";
import React from "react";

export const StreamCard: React.FC<any> = React.memo(
  ({
    cover,
    ar,
    direction,
    children,
    details,
    ...props
  }: {
    children?: React.ReactNode;
    cover?: React.ReactNode;
    details?: React.ReactNode;
    ar: string;
    direction: "vertical" | "horizontal";
  }) => {
    const carouselOrientation: number = direction === "vertical" ? 12 : 5;
    const bodyOrientation: number = direction === "vertical" ? 12 : 7;
    return (
      <span>
        <ListItemButton
          {...props}
          disableRipple={true}
          sx={{
            display: "block",
          }}
        >
          <span>
            {/** Content */}
            <Grid container spacing={0} columns={12} sx={{ padding: 0 }}>
              <Grid
                xs={12}
                sm={carouselOrientation}
                md={carouselOrientation}
                lg={carouselOrientation}
              >
                <Box
                  component="div"
                  sx={(theme: any) => ({
                    borderRadius: "12px",
                    position: "relative",
                    contain: "none",
                    overflow: "hidden",
                    WebkitMaskImage:
                      "-webkit-radial-gradient(center,white,black)",
                    "&::after": {
                      content: '" "',
                      position: "absolute",
                      inset: 0,
                      borderRadius: "inherit",
                      pointerEvents: "none",
                    },
                    transition: "transform 300ms ease-out 0s",
                    transform: "scale(0.97)",
                    "&:hover": {
                      transform: "scale(1)",
                      border: `5px solid ${theme?.vars.palette?.background?.inverse}`,
                    },
                  })}
                >
                  <AspectRatio ratio={ar}>
                    <CardContainer
                      sx={{
                        cursor: "pointer",
                        borderRadius: "0px",
                      }}
                    >
                      <CardCover>
                        <Box sx={{ width: "100%", height: "100%" }}>
                          {cover}
                        </Box>
                      </CardCover>
                      <CardContent sx={{ width: "100%" }}>
                        {children}
                      </CardContent>
                    </CardContainer>
                  </AspectRatio>
                </Box>
              </Grid>
              <Grid
                xs={12}
                sm={bodyOrientation}
                md={bodyOrientation}
                lg={bodyOrientation}
                sx={{ cursor: "pointer" }}
              >
                {details}
              </Grid>
            </Grid>
          </span>
        </ListItemButton>
      </span>
    );
  }
);
