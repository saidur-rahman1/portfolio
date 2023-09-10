import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@mui/material';

import './Portfolio.css';
import '../../App.css';
import { resumeData } from '../../utils/resumeData';

export default function Portfolio() {

    const [tabValue, setTabValue] = useState("All");
    const [dialog, setDialog] = useState(false);

    return(
        <Grid container className='section pb_45'>
            {/* Title */}
            <Grid item className='section_title mb_20'>
                    <span></span>
                    <h6 className='section_title_text'>Portfolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs
                    value={tabValue}
                    indicatorColor='white'
                    className='customTabs'
                    onChange={(event, newValue) => setTabValue(newValue)}>
                        <Tab label="All" value="All" className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'} />
                        {[...new Set(resumeData.portfolio.map(element => (element.tag)))].map(tag => (
                            <Tab label={tag} value={tag} className={tabValue === {tag} ? 'customTabs_item active' : 'customTabs_item'} />
                        ))}
                </Tabs>
            </Grid>

            {/* Portfolio */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {resumeData.portfolio.map(item => (
                        <>
                            {tabValue === item.tag || tabValue === "All" ? (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Grow in timeout={1000}>
                                        <Card className='custom_card' onClick={() => setDialog(item)}>
                                            <CardActionArea>
                                                <CardMedia className='custom_card_image' image={item.image} title={item.title} />
                                                <CardContent>
                                                    <Typography className='custom_card_title'>{item.title}</Typography>
                                                    <Typography variant='body2' className='custom_card_summary'>{item.summary}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                        </>
                    ))}
                </Grid>
            </Grid>

            <Dialog className='dialog' open={dialog} onClose={() => setDialog(false)}>
                <DialogTitle onClose={() => setDialog(false)}>{dialog.title}</DialogTitle>
                <img src={dialog.image} alt='' className='dialog_image' />
                <DialogContent>
                    <Typography className='dialog_description'>
                        {dialog.description}
                    </Typography>
                </DialogContent>
                <DialogActions className='dialog_actions'>{dialog?.links?.map(link => (
                    <a href={link.link} target='_blank' rel="noreferrer" className='dialog_icon'>
                        {link.icon}
                    </a>
                ))}</DialogActions>
            </Dialog>

        </Grid>
    );

}