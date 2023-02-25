import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Pulse } from "../pulse";

const Loading = () => {
  const theme = useTheme<any>();

  return (
    <Box
      sx={{
        height: "40px",
        margin: "20px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Pulse size={3} color={theme?.vars.palette?.loaderDots?.default} />
    </Box>
  );
};

export { Loading };
