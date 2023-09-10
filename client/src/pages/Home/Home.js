import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import TimelineDot from '@mui/lab/TimelineDot';

import './Home.css';
import '../../App.css';
import '../../components/Timeline/Timeline.css';
import {resumeData, about_me} from '../../utils/resumeData';


const Home = () => {

    return(
        <>
            {/* About Me */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_20'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    {about_me.map((element) => (
                        <Typography variant='body2' className='about_me_text'>
                            <TimelineDot variant='outlined' className='timeline_dot' />
                            {element}
                        </Typography>
                    ))}
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_20'>
                    <span></span>
                    <h6 className='section_title_text'>Skills</h6>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justify="space-between" spacing={3}>
                            {resumeData.skills.map((skill) => (
                                <Grid item xs={12} sm={6} md={3}>
                                    <Paper elevation={0} className='skill'>
                                        <Typography variant='h6' className='skill_title'>
                                            {skill.title}
                                        </Typography>
                                        {skill.description.map((element) => (
                                            <Typography variant='body2' className='skill_description'>
                                                <TimelineDot variant='outlined' className='timeline_dot' />
                                                {element}
                                            </Typography>
                                        ))}
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );

}

export default Home;
