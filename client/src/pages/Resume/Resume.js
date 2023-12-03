import React from 'react';
import { Grid, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import './Resume.css';
import '../../App.css';
import '../../components/Timeline/Timeline.css';
import {resumeData} from '../../utils/resumeData';


const Resume = () => {

    return(
        <>
            {/* Education and Experience */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_20'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>
                {/* <Grid container item xs={12}> */}
                    {/* Experience */}
                    <Grid container item xs={12}>
                        <Timeline className='timeline'
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                                },
                            }}
                            >
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className='timeline_dot_header'>
                                        <WorkIcon />
                                    </TimelineDot>
                                <TimelineConnector className='connector_height' sx={{ backgroundColor: 'green' }} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='h6' className='timeline_header'>
                                        Experience
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            {resumeData.experiences.map(experience => (
                                <TimelineItem className='timeline_item'>
                                    <TimelineSeparator>
                                        <TimelineDot variant='outlined' className='timeline_dot' />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    
                                        <TimelineContent>
                                            <Typography>{experience.title}</Typography>
                                            <Typography variant='body2'>{experience.institute}</Typography>
                                            <Typography className='experience_time'>{experience.time}</Typography>
                                            <Typography className='experience_text'>{experience.description}</Typography>
                                        </TimelineContent>

                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Grid>

                    {/* Education */}
                    <Grid container item xs={12}>
                        <Timeline className='timeline'
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                                },
                            }}
                            >
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className='timeline_dot_header'>
                                        <SchoolIcon />
                                    </TimelineDot>
                                <TimelineConnector className='connector_height' />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='h6' className='timeline_header'>
                                        Education
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            {resumeData.education.map(education => (
                                <TimelineItem className='timeline_item'>
                                    <TimelineSeparator>
                                        <TimelineDot variant='outlined' className='timeline_dot' />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    
                                        <TimelineContent>
                                            <Typography>{education.degree}</Typography>
                                            <Typography variant='body2'>{education.institute}</Typography>
                                            <Typography className='experience_text'>{education.program}</Typography>
                                            <Typography className='experience_time'>{education.time}</Typography>
                                        </TimelineContent>

                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Grid>

                    {/* Certifications */}
                    <Grid container item xs={12}>
                        <Timeline className='timeline'
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                                },
                            }}
                            >
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className='timeline_dot_header'>
                                        <SchoolIcon />
                                    </TimelineDot>
                                <TimelineConnector className='connector_height' />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='h6' className='timeline_header'>
                                        Certifications
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            {resumeData.certification.map(certification => (
                                <TimelineItem className='timeline_item'>
                                    <TimelineSeparator>
                                        <TimelineDot variant='outlined' className='timeline_dot' />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    
                                        <TimelineContent>
                                            <Typography>{certification.degree}</Typography>
                                            <Typography variant='body2'>{certification.institute}</Typography>
                                            <Typography className='certification_text'><a href={certification.url} target="_blank" rel="noreferrer">{certification.certificate}</a></Typography>
                                            <Typography className='experience_time'>{certification.time}</Typography>
                                        </TimelineContent>

                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Grid>
                {/* </Grid> */}
            </Grid>
        </>
    );

}

export default Resume;
