import { Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import GetAppIcon from '@mui/icons-material/GetApp';

import {resumeData} from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import SaidurRahman from "./Saidur-Rahman.pdf";

import './Profile.css';
import '../../pages/Resume/Resume.css';


function Profile() {

    const onButtonClick = () => {
        // fetch('Saidur-Rahman.pdf').then(response => {
        //     response.blob().then(blob => {
        //         const fileURL = window.URL.createObjectURL(blob);
        //         let alink = document.createElement('a');
        //         alink.href = fileURL;
        //         alink.download = 'Saidur-Rahman.pdf';
        //         alink.click();
        //     })
        // })
        const link = document.createElement('a');
        link.download = 'Saidur-Rahman';

        link.href = SaidurRahman;

        link.click();
    }

    return(
        <div className="profile container">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>

            <figure className="profile_image">
                <img src={require('../../assets/images/img2.jpg')} alt="Profile" />
            </figure>

            <div className="profile_details">

                <Timeline className='timeline'
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                }}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot className='timeline_dot_header'>
                                <PersonOutlineOutlinedIcon />
                            </TimelineDot>
                            <TimelineConnector className='connector_height' />
                        </TimelineSeparator>
                    </TimelineItem>
                    
                    <TimelineItem className='timeline_item_internal'>
                            <TimelineSeparator>
                                <TimelineDot variant='outlined' className='timeline_dot' />
                                <TimelineConnector className='connector_height' />
                            </TimelineSeparator>
                                    
                            <TimelineContent>
                                <Typography className="timelineItem_text">{resumeData.email}</Typography>
                            </TimelineContent>

                    </TimelineItem>

                    {Object.keys(resumeData.socials).map(key => (
                        <TimelineItem className='timeline_item_internal'>
                            <TimelineSeparator>
                                <TimelineDot variant='outlined' className='timeline_dot' />
                                <TimelineConnector className='connector_height' />
                            </TimelineSeparator>
                                    
                            <TimelineContent>
                                {resumeData.socials[key].link ? (<Typography className="timelineItem_text"><a href={resumeData.socials[key].link} target="_blank" rel="noreferrer">{resumeData.socials[key].text}</a></Typography>) : 
                                    (<Typography className="timelineItem_text">{resumeData.socials[key].text}</Typography>)}
                            </TimelineContent>

                        </TimelineItem>
                    ))}

                    <TimelineItem className='timeline_item_internal'>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined' className='timeline_dot' />
                        </TimelineSeparator>
                                    
                        <TimelineContent>
                            <Typography className="timelineItem_text"><a href="https://www.hackerrank.com/saidur_rahman1" target="_blank" rel="noreferrer">hackerrank.com/saidur_rahman1</a></Typography>
                        </TimelineContent>

                    </TimelineItem>
                </Timeline>

                <div className="button_container" onClick={onButtonClick}>
                    <CustomButton text={"Download resume"} icon={<GetAppIcon />} />
                </div>
            </div>
        </div>
    );

}

export {Profile}