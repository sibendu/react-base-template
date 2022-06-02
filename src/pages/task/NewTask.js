import React , { useState , useEffect } from 'react';
import { DataGrid, useGridApiRef, GridToolbar , GridRowModes} from '@mui/x-data-grid';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';

import Footer from "../../common/Footer";

import PageHeader from '../../common/PageHeader';

function NewTask (props){

  const newRecord = { id: 0, lastName: null, firstName: null, age: null, "city": null };
  const [record, setRecord] = React.useState(props.data ?  props.data: newRecord);

  useEffect(() => {
    console.log(props.menuClickInd+" - record in NewTask: "+JSON.stringify({record}));
  });

  interface CityOptionType {
    title: string;
    code: string;
  }

  const cities = [
    { title: 'Kolkata', code: "KOL" },
    { title: 'London', code: "LON" },
    { title: 'California', code: "CAL" }
  ]; 

  return (

    <div id="layoutDrawer_content">
        
        <main>
            
            <div className="container-xl p-5">
                
            <PageHeader heading="New Task" subheading="Create a new task"/>

            <div className="card card-raised">          

            <React.Fragment>
                
                <Grid container>

                  <Grid item xs={12} sm={6} padding={2}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      value={record.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} padding={2}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="family-name"
                      variant="standard"
                      value={record.lastName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} padding={2}>
                    <TextField
                      required
                      id="age"
                      name="age"
                      label="Age"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      value={record.age}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} padding={2}>
                    <TextField
                      required
                      id="fullName"
                      name="fullName"
                      label="Full name"
                      fullWidth
                      autoComplete="family-name"
                      variant="standard"
                      value={record.fullName}
                    />
                  </Grid>
                  

                  <Grid item xs={12} sm={6} padding={2}>
                    <Autocomplete                      
                      id="cities"
                      options={cities}
                      onChange={(event, value) => console.log('Changed: '+value)}
                      getOptionLabel= {(option: CityOptionType) => option.title}
                      defaultValue={cities.find(v =>  v.code==record.city? v.title: '')}
                      renderInput={(params) => (
                        <TextField {...params} label="City" variant="standard"/>
                      )}
                    />            
                  </Grid>
                  
                  <Grid item xs={12} padding={2}>
                    <FormControlLabel
                      control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                      label="Use this address for payment details"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} padding={2}>
                      <div style={{float: 'right'}}>    
                        <Button variant="contained" size="medium" endIcon={<AddIcon />} onClick={() => {alert('Form submitted');}}>Save</Button>
                      </div>  
                  </Grid> 
                  <Grid item xs={12} sm={6} padding={2}>
                        <Button variant="outlined" size="medium" endIcon={<DeleteIcon />} color="success" onClick={() => {alert('Form is cleared');}}>Clear</Button>
                  </Grid>        

                </Grid>
              </React.Fragment>

              </div>

            </div>
        </main>

        <Footer/>  
    </div>
    
    );
  };
  
export default NewTask;