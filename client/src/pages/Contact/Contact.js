import React, {useState} from 'react';
import { Alert, Snackbar, TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import emailjs from '@emailjs/browser';

import '../../App.css';
import '../../components/Timeline/Timeline.css';
import CustomButton from '../../components/Button/Button';
import { theme } from '../../themes/theme';

const initialValues = {
    name: '',
    nameError: false,
    nameHelperText: '',

    id: 0,
    email: '',
    emailError: false,
    emailHelperText: '',
  
    message: '',
    messageError: false,
    messageHelperText: '',
};


const Contact = () => {

    const [values, setValues] = useState(initialValues);
    const [snackbar, setSnackbar] = useState(false);

    const finalValidation = () => {
        let isError = false;
        const errors = {
            nameError: false,
            nameHelperText: '',
            
            emailError: false,
            emailHelperText: '',
        
            messageError: false,
            messageHelperText: ''
        };
    
        let emailChecker = (/$^|.+@.+..+/).test(values.email);
        if (!emailChecker || values.email === '') {
          isError = true;
          errors.emailHelperText = "Enter valid email";
          errors.emailError = true;
        }
    
        if (values.name === '') {
          isError = true;
          errors.nameHelperText = "Enter name";
          errors.nameError = true;
        }

        if (values.message === '') {
            isError = true;
            errors.messageHelperText = "Enter message";
            errors.messageError = true;
        }
    
    
        setValues({
          ...values,
          ...errors
        });
    
        return isError;
    }
 
    function handleSubmit(event) {
        event.preventDefault();
        
        const err = finalValidation();
        if (!err) {
        
            emailjs.sendForm('service_4nf0s0t', 'template_6g0afx8', event.target, 'Egfda1EByN5yVrlJ-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            setSnackbar(true);

                setValues({
                    ...values,
                    id: 0,
                    email: '',
                    emailError: false,
                    emailHelperText: '',
        
                    name: '',
                    nameError: false,
                    nameHelperText: '',
        
                    message: '',
                    messsageError: false,
                    messsageHelperText: '',
                });

        }
    }

    const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbar(false);
    };

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
          ...values,
          [name]:value
        })
    }

    return(
        <>
            {/* Contact */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_20'>
                    <span></span>
                    <h6 className='section_title_text'>Contact Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <ThemeProvider theme={theme}>
                        {/* <React.Fragment> */}
                            <form onSubmit={handleSubmit} noValidate> {/* action={<Link to="/" />} */}
                                {/* <Stack spacing={2} direction="row" sx={{marginBottom: 4}}> */}
                                    <TextField
                                        type="text"
                                        variant='outlined'
                                        label="Name"
                                        name="name"
                                        onChange={handleInputChange}
                                        value={values.name}
                                        error={values.nameError}
                                        helperText={values.nameHelperText}
                                        fullWidth
                                        required
                                        sx={{mb: 4}}
                                    />
                                {/* </Stack> */}
                                <TextField
                                    type="email"
                                    variant='outlined'
                                    label="Email"
                                    name="email"
                                    onChange={handleInputChange}
                                    value={values.email}
                                    error={values.emailError}
                                    helperText={values.emailHelperText}
                                    fullWidth
                                    required
                                    sx={{mb: 4}}
                                />
                                <TextField
                                    type="text"
                                    variant='outlined'
                                    label="Message"
                                    name="message"
                                    onChange={handleInputChange}
                                    value={values.message}
                                    error={values.messageError}
                                    helperText={values.messageHelperText}
                                    fullWidth
                                    required
                                    multiline
                                    rows={5}
                                    sx={{mb: 4}}
                                />
                                <div><CustomButton text={"Submit"} /></div>
                            </form>
                        {/* </React.Fragment> */}
                    </ThemeProvider>
                    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={snackbar} autoHideDuration={3000} onClose={closeSnackbar}>
                        <Alert onClose={closeSnackbar} severity="success" sx={{ width: '100%' }}>
                            Message sent
                        </Alert>
                    </Snackbar>
                </Grid>
            </Grid>
        </>
    );

}

export default Contact;
