import Button from "@mui/material/Button";

interface CallFormSubmitProps {
  loading: boolean;
}

const CallFormSubmit = ({ loading }: CallFormSubmitProps) => (
  <Button
    variant="outlined"
    type="submit"
    fullWidth
    loading={loading}
    loadingPosition="start"
  >
    Generate Email
  </Button>
);

export default CallFormSubmit;
