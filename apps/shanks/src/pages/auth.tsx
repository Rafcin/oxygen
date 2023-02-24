import { Sign } from "@/content/controls/sign";
import { Box } from "@mui/material";
import { FaDiscord } from "react-icons/fa";

const Auth = () => {
  return (
    <div>
      <Box sx={{ padding: "20px" }}>
        <Sign provider="discord" icon={<FaDiscord />} />
      </Box>
    </div>
  );
};

export default Auth;
