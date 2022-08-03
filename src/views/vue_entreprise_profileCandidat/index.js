import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery,
    Select,
    MenuItem
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ==============================|| SAMPLE PAGE ||============================== //

//

const Entreprise_profileCandidat = () => (
    <MainCard title="Profile Candidat">
        <Formik
            initialValues={{
                email: '',
                password: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    if (scriptedRef.current) {
                        setStatus({ success: true });
                        setSubmitting(false);
                    }
                } catch (err) {
                    console.error(err);
                    if (scriptedRef.current) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs zeroMinWidth>
                            <TextField multiline fullWidth label="Titre Offre" margin="normal" name="fname" type="text" defaultValue="" />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Status de L'offre</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Status"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="active">Active</MenuItem>
                                            <MenuItem value="enPause">En Pause</MenuItem>
                                            <MenuItem value="pourvue">Pourvue</MenuItem>
                                            <MenuItem value="pourvue">Validée</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <TextField multiline fullWidth label="Points Incontournable" name="lname" type="text" defaultValue="" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        label="Description du poste"
                                        margin="normal"
                                        name="lname"
                                        type="text"
                                        defaultValue=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        label="Profile Rechercher"
                                        margin="normal"
                                        name="lname"
                                        type="text"
                                        defaultValue=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        label="Rémunération"
                                        margin="normal"
                                        name="lname"
                                        type="text"
                                        defaultValue=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        label="Avantages & Contexte"
                                        margin="normal"
                                        name="lname"
                                        type="text"
                                        defaultValue=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField multiline fullWidth label="#Tags" margin="normal" name="lname" type="text" defaultValue="" />
                                </Grid>
                                <Grid item tem xs={2}>
                                    <Box sx={{ mt: 2 }}>
                                        <AnimateButton>
                                            <Button
                                                disableElevation
                                                disabled={isSubmitting}
                                                fullWidth
                                                size="large"
                                                variant="contained"
                                                color="primary"
                                            >
                                                + Valideur
                                            </Button>
                                        </AnimateButton>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField multiline fullWidth label="Roles" margin="normal" name="lname" type="text" defaultValue="" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        label="Adresse Mail"
                                        margin="normal"
                                        name="lname"
                                        type="text"
                                        defaultValue=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        label="Login Valideur"
                                        margin="normal"
                                        name="lname"
                                        type="text"
                                        defaultValue=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        label="Password Valideur"
                                        margin="normal"
                                        name="lname"
                                        type="text"
                                        defaultValue=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        label="Changer de mot de pass a la premier connxion"
                                        margin="normal"
                                        name="lname"
                                        type="text"
                                        defaultValue=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        multiline
                                        fullWidth
                                        label="Etat des validations"
                                        margin="normal"
                                        name="lname"
                                        type="text"
                                        defaultValue=""
                                    />
                                </Grid>

                                <Grid item tem xs={2}>
                                    <Box sx={{ mt: 2 }}>
                                        <AnimateButton>
                                            <Button
                                                disableElevation
                                                disabled={isSubmitting}
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="secondary"
                                            >
                                                PDF
                                            </Button>
                                        </AnimateButton>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    </MainCard>
);

export default Entreprise_profileCandidat;
