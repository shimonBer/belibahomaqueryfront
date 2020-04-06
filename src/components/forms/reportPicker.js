
import React, { useState, useEffect } from 'react';
import { reportMakerService, reportNamesService } from '../../services/reportServices';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Copyright from '../copyRight';
import downloadFile from '../../util/downloadReport';

const months = { Jan:'01', Feb:'02', Mar:'03', Apr:'04', May:'05', Jun:'06', Jul:'07', Aug:'08', Sep:'09', Oct:'10', Nov:'11', Dec:'12' };
const years = ['2019', '2020'];

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function ReportPicker(props) {

    const [month, setMonth] = useState('01');
    const [year, setYear] = useState('2020');
    const [reportNames, setReportNames] = useState([]);

    useEffect(() => {
        (async function getReportNames(){
          const reports = await reportNamesService();
          setReportNames(reports.data);
        })()
    }, [reportNamesService]);

  
    const updateMonth = (event) => {
        setMonth(event.target.value);
        
    }
    const updateYear = (event) => {
        setYear(event.target.value);
        
    }

const handleSubmit = async(reportType) => {
    try {
        const response = await reportMakerService({ year, month, reportType });
        if (200 <= response.status <= 300) {
            await downloadFile(response.data.downloadURL);
        }
    }catch(err){
        console.log(err);
        logout();
    }
}
  const classes = useStyles();
  const logout = () => {
    localStorage.removeItem("query-auth-token");
    props.history.push('/login');
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" align="left" color="inherit" noWrap className={classes.toolbarTitle}>
            Beliba Homa Reports
          </Typography>
          {/* <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav> */}
          <Button onClick={logout} color="primary" variant="outlined" className={classes.link}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Monthly Reports
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Choose your form out of the following options:
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {reportNames.map(report => (
            // Enterprise card is full width at sm breakpoint
            <Grid key={report} item md={4}>
              <Card>
                <CardHeader
                  title={report}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent >
                  <div className={classes.cardPricing} >
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>
                        Month
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={month}
                            onChange={updateMonth}
                            // labelWidth={labelWidth}
                            >
                        
                            {
                                
                                Object.keys(months).map((month) => {
                                return <MenuItem key={month} value={months[month]}>{month}</MenuItem>;                                    })
                                
                            }
                        </Select>
                    </FormControl>
                  </div>
                  <div className={classes.cardPricing}>
                    <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>
                                Year
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={year}
                                onChange={updateYear}
                                // labelWidth={labelWidth}
                                >
                            
                                {
                                    
                                    years.map((year) => {
                                        return <MenuItem key={year} value={year}>{year}</MenuItem>;                                    
                                    })                                   
                                    
                                }
                            </Select>
                        </FormControl>
                  </div>
                  <ul>
                    {/* {report.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))} */}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button onClick={() => handleSubmit(report)} fullWidth variant="contained" color="primary">
                    Download Report
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}