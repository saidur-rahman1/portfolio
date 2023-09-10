import { Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import GetAppIcon from '@mui/icons-material/GetApp';

// import BasicTimeline, {CustomTimelineSeperator} from "../Timeline/Timeline";
import {resumeData} from "../../utils/resumeData";
import CustomButton from "../Button/Button";

import './Profile.css';
import '../../pages/Resume/Resume.css';

// const CustomTimelineItem = ({title, text, link}) => (
//     <TimelineItem>
//         <CustomTimelineSeperator />
//         <TimelineContent > {/*className="timeline_content"*/}
//             {link ? (<Typography ><span>{title}:</span> <a href={link} target="_blank" rel="noreferrer">{text}</a></Typography>) : 
//             (<Typography ><span>{title}:</span> {text}</Typography>)}
//         </TimelineContent> {/* className="timelineItem_text" */}
//     </TimelineItem>
// );

function Profile() {

    const onButtonClick = () => {
        fetch('Saidur-Rahman.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Saidur-Rahman.pdf';
                alink.click();
            })
        })
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

            <div className="profile_details"> {/* className="profile_details" */}
                {/* <BasicTimeline icon={<PersonOutlineOutlinedIcon />}>
                    <CustomTimelineItem title='Email' text={resumeData.email} />

                    {Object.keys(resumeData.socials).map((key) => (
                        <CustomTimelineItem 
                            title={key} 
                            text={resumeData.socials[key].text} 
                            link={resumeData.socials[key].link} />
                    ))}
                </BasicTimeline> */}


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
                                    {/* <Typography>{education.institute}</Typography>
                                    <Typography variant='body2'>{education.degree}</Typography>
                                    <Typography className='experience_text'>{education.program}</Typography>
                                    <Typography className='experience_time'>{education.time}</Typography> */}
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