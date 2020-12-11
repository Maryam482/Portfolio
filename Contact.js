import React,{useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Contact.styles.css';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const validationSchema = yup.object({
  fullname: yup
  .string('Enter your Full Name')
  .required('Name is required'),
  email: yup
    .string('Enter your email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(9, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
    message: yup
    .string('Enter your email')
    .required('Email is required'),
});

 const Contact = () => {
   const [Data, setData] = useState([])
  const formik = useFormik({
    initialValues: {
      fullname:'',
      email: '',
      password: '',
      message:'',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
     setData(values)
    },
  });
  console.log(Data)
    return (
      <div className="formic"  >
      <Grid container spacing={0}>
        <Grid item xs={12} >
     <h1 className="p1"><u>CONTACT US</u></h1>
            <p className="p2">let us know what you think! Inorder to provide for better service.please don't hesitate to give us feedback.Thank you.</p>
   <br/>   <form  className="form" onSubmit={formik.handleSubmit}>
        
   <TextField
          fullWidth
          id="fullname"
          name="name"
          label="Full Name"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
          helperText={formik.touched.fullname&& formik.errors.fullname}
        /><TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
       <br/>  <TextareaAutosize
          fullWidth
          id="message"
          name="message"
          label="Message"
          type="text"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button className= "btn" color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      
      </form>
    
        </Grid>
  
      </Grid>
        </div>
    )
}
export default Contact;
