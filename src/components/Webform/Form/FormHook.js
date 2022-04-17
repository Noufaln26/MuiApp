import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

export default function FormHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h2" component="h2" mb={2} color="white">
          Add Details
        </Typography>
        <TextField
          sx={{ mb: 2, borderRadius: "5px", backgroundColor: "white" }}
          htmlFor="firstname"
          variant="outlined"
          fullWidth
          type="text"
          placeholder="First name"
          {...register("firstname", {
            required: true,
          })}
        />
        {errors.FirstName && <span>This field is required</span>}
        {/* 
        
        <TextField
          sx={{ mb: 2, borderRadius:"5px",backgroundColor: 'white' }}
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <TextField
                    sx={{ mb: 2, borderRadius:"5px",backgroundColor: 'white' }}

          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <TextField
          sx={{ mb: 2, borderRadius:"5px",backgroundColor: 'white' }}
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <FormControl error={Boolean(errors.gender)} >
          <FormLabel component="legend" sx={{ color: 'white' }}> Choose Your Gender </FormLabel>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel
              value="female"
              sx={{ color: 'white' }}
              control={
                <Radio
                  {...register("gender", { required: "Choose your gender" })}
                />
              }
              label="Female"
            />
            <FormControlLabel
              value="male"
              sx={{ color: 'white' }}
              control={
                <Radio
                  {...register("gender", { required: "Choose your gender" })}
                />
              }
              label="Male"
            />
            <FormControlLabel
              value="other"
              sx={{ color: 'white' }}
              control={
                <Radio
                  {...register("gender", { required: "Choose your gender" })}
                />
              }
              label="Other"
            />
          </RadioGroup>
          <FormHelperText style={{ color: "#d32f2f" }}>
            {errors.gender?.message}
          </FormHelperText>
        </FormControl>
        <TextField
          sx={{ mb: 2, borderRadius:"5px",backgroundColor: 'white' }}
          type="number"
          placeholder="Age"
          {...register("Age", { required: true, max: 150 })}
        />

        */}

        <Button variant="contained" value="submit" type="submit">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
