import Button from "@mui/material/Button";

interface CallFormSubmitProps {
  loading: boolean;
}

const CallFormSubmit = ({ loading }: CallFormSubmitProps) => (
  <Button
    variant="contained"
    type="submit"
    fullWidth
    loading={loading}
    loadingPosition="start"
  >
    Create Email
  </Button>
);

export default CallFormSubmit;
