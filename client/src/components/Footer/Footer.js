import { Typography } from '@mui/material';

import './Footer.css';
import {resumeData} from '../../utils/resumeData';

export default function Footer() {

    return(
        <div maxWidth="xl" className='footer'>
            <div className='text_left'>
                <Typography className='footer_name'>Designed & developed by {resumeData.name}</Typography>
            </div>
            <div className='text_right'>
                <Typography className='footer_credits'>
                    Idea from 
                    <a 
                        href='https://themeforest.net/user/tavonline' 
                        target='_blank' 
                        rel="noreferrer" 
                        style={{ textDecoration: 'none', color: 'white' }} >
                        &nbsp;tavonline
                    </a>
                </Typography>
            </div>
        </div>
    );

}