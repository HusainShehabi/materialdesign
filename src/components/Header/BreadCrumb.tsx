import HomeIcon from "@mui/icons-material/Home";

type Props = {};

function BreadCrumb({}: Props) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ fontSize: "0.875rem" }}>
        <HomeIcon fontSize="inherit" /> / Profile
      </div>
      <div style={{ fontWeight: "700", fontSize: "1rem" }}>Profile</div>
    </div>
  );
}

export default BreadCrumb;
