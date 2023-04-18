import { LoadingButton } from "@mui/lab";
import {
  Container,
  IconButton,
  InputAdornment,
  Link,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { FormProvider } from "../components/form";
import { FTextField } from "../components/form";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const SignInPage = () => {
  const defaultValues = {
    username: "web virgil learner",
    email: "bao@gmail.com",
    password: "123456",
    remember: true,
    choise: [],
    gender: [],
  };
  const methods = useForm({ defaultValues });
  const {
    //reset,
    //setError,
    handleSubmit,
    //control,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    //setError("afterSubmit", {message:"Server response error"})
  };
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container
      sx={{
        minHeight: 500,
        maxWidth: 450,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: 1,
            padding: 2,
            width: 450,
            backgroundColor: "green",
          }}
        >
          <LockIcon sx={{ mb: 2 }} />
          <Typography sx={{ mb: 2 }}>Log In</Typography>

          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <FTextField name="username" label="UserName" />
              <FTextField
                name="password"
                label="password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{ mt: 3 }}
            >
              Login
            </LoadingButton>
          </FormProvider>
          <Typography
            sx={{
              fontSize: 14,
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link sx={{ mr: 4 }} underline="none">
              Forgot password?
            </Link>
            <Link underline="none">Don't have an account? Sign Up</Link>
          </Typography>
        </Container>
      </Modal>
    </Container>
  );
};

export default SignInPage;
