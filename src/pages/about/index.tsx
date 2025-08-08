import React from 'react'
// import './about.css'
import { about, asief, diwagar, praveen, ragul } from '../../constant/images'
import SvgHeart from '../../components/svg/Heart.tsx'
import SvgLock from '../../components/svg/Lock.tsx'
import SvgTeam from '../../components/svg/Team.tsx'
import SvgIdea from '../../components/svg/Idea.tsx'
import Typography from '../../components/typography/component.tsx'
import { useStyle } from './style.ts'


const About = () => {

const classes = useStyle()

    return (
        <div>          
            <div className={classes.abtSectionMain}>
            <div className={classes.abtSection1}>
                <div className={classes.abtSection1Container1}>
                    <div className={classes.abtCont}>
                        <div className={classes.abtHeadPara}>
                            {/* <h1>Our Jouney </h1> */}
                            <Typography variant='HS' component={'h1'}>Our Jouney</Typography>
                            <Typography variant='BM'>Founded in insert founding year, we set out to simplify business operations by creating an all-in-one platform for HR, scheduling, and communication. What began as a small idea has grown into a trusted solution for companies of all sizes. Despite challenges, our commitment to innovation drives us forward, with a clear vision to make work life simpler and more efficient for businesses worldwide.</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.abtSection1Container2}>
                    <img src={about} alt="" />
                </div>
            </div>
            </div>
            <div className={classes.abtSection2Main}>
                <div className={classes.abtSection2}>
                    <Typography variant='HS' component={'h1'}>Our Foundation</Typography>
                    <div className={classes.abtSec2}>
                        <div className={classes.abtSec2Con1}>
                            <div className={classes.abtCon1ImgHead}>
                                <SvgIdea/>
                                <Typography variant='LM'>Innovative <br /> Solutions</Typography>
                            </div>
                            <div className={classes.abtCon1Para}>
                                <Typography variant='BM'>We deliver advanced solutions that simplify works</Typography>
                            </div>
                        </div>
                        <div className={classes.abtSec2Con1}>
                            <div className={classes.abtCon1ImgHead}>
                                <SvgHeart/>
                                <Typography variant='LM'>user-Centric</Typography>
                            </div>
                            <div className={classes.abtCon1Para}>
                                <Typography variant='BM'>User first-tailored solutions and exceptional support.</Typography>
                            </div>
                        </div>
                        <div className={classes.abtSec2Con1}>
                            <div className={classes.abtCon1ImgHead}>
                                <SvgLock/>
                                <Typography variant='LM'>Transparency</Typography>
                            </div>
                            <div className={classes.abtCon1Para}>
                                <Typography variant='BM'>We ensure honesty, transparency, and accountability in all actions.</Typography>
                            </div>
                        </div>
                        <div className={classes.abtSec2Con1}>
                            <div className={classes.abtCon1ImgHead}>
                               <SvgTeam/>
                                <Typography variant='LM'>Teamwork</Typography>
                            </div>
                            <div className={classes.abtCon1Para}>
                                <Typography variant='BM'>We value teamwork and diverse perspectives for better solutions.</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <div className={classes.abtSection3Main}>
                <div className={classes.abtSec3}>
                    <div className={classes.abtSec3HeadPara}>
                        <Typography variant='HS' component={'h1'}>Our Team</Typography>
                        <Typography variant='BM'>At weblings, we combine innovation and expertise to revolutionize business operations. Our diverse team collaborates to deliver impactful, cutting-edge solutions.</Typography>
                    </div>
                    <div className={classes.abtCont1ImgTextMain}>
                        <div className={classes.abtCont1ImgText}>
                        <img src={asief} alt="" />
                        <div className={classes.abtCont1Text}>
                            <Typography variant='LM' className={classes.abtCont1Para}>Mohammed Asief</Typography>
                            <Typography variant='BS' className={classes.abtCont1Para2}>Designer</Typography>
                        </div>
                        </div>
                        <div className={classes.abtCont1ImgText}>
                            <img src={praveen} alt="" />                     
                        <div className={classes.abtCont1Text}>
                            <Typography variant='LM' className={classes.abtCont1Para}>Praveen</Typography>
                            <Typography variant='BS' className={classes.abtCont1Para2}> Developer</Typography>
                        </div>
                        </div>
                        <div className={classes.abtCont1ImgText}>
                        <img src={ragul} alt="" />
                        <div className={classes.abtCont1Text}>
                            <Typography variant='LM' className={classes.abtCont1Para}>Rathinavel</Typography>
                            <Typography variant='BS' className={classes.abtCont1Para2}>Developer</Typography>
                        </div>
                        </div>
                        <div className={classes.abtCont1ImgText}>
                        <img src={diwagar} alt="" />
                        <div className={classes.abtCont1Text}>
                            <Typography variant='LM' className={classes.abtCont1Para}>Diwagar</Typography>
                            <Typography variant='BS' className={classes.abtCont1Para2}>Developer</Typography>
                        </div>
                        </div>
                    </div>
                </div>
           </div>          
        </div>
    )
}

export default About;