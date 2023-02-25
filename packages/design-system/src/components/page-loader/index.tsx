import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { Pulse } from "../pulse";

const PageLoader: React.FC<any> = ({ pageLoading }) => {
  const theme = useTheme<any>();
  return (
    <Box
      component="div"
      sx={{
        pointerEvents: "none",
        bottom: 0,
        left: 0,
        opacity: pageLoading ? 1 : 0,
        position: "fixed",
        top: 0,
        transition: "opacity 0.24s ease 0s",
        width: "100%",
        zIndex: 2001,
        backgroundColor: theme?.vars.palette.background?.default,
      }}
    >
      <Box
        component="div"
        sx={{
          marginTop: 0,
          marginBottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          whiteSpace: "nowrap",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
        }}
      >
        <Pulse size={8} color={theme?.vars.palette.text?.primary} />
      </Box>
    </Box>
  );
};

export { PageLoader };
