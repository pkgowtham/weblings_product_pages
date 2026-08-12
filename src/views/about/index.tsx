'use client'

import React from 'react'
import { about, asief, diwagar, praveen, ragul } from '../../constant/images'
import SvgHeart from '../../components/svg/Heart'
import SvgLock from '../../components/svg/Lock'
import SvgTeam from '../../components/svg/Team'
import SvgIdea from '../../components/svg/Idea'
import Typography from '../../components/typography/component'
import { useStyle } from './style'
import aboutData from '../../data/about.json'

const foundationIcons: Record<string, React.ReactNode> = {
    idea: <SvgIdea />,
    heart: <SvgHeart />,
    lock: <SvgLock />,
    team: <SvgTeam />,
}

const teamAvatars: Record<string, string> = {
    asief,
    praveen,
    ragul,
    diwagar,
}

const About = () => {
    const classes = useStyle()

    return (
        <div>
            {/* Section 1: Journey */}
            <div className={classes.abtSectionMain}>
                <div className={classes.abtSection1}>
                    <div className={classes.abtSection1Container1}>
                        <div className={classes.abtCont}>
                            <div className={classes.abtHeadPara}>
                                <Typography variant="HS" component={'h1'}>
                                    {aboutData.journey.title}
                                </Typography>
                                <Typography variant="BM">
                                    {aboutData.journey.description}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={classes.abtSection1Container2}>
                        <img src={about} alt="About Us" />
                    </div>
                </div>
            </div>

            {/* Section 2: Foundation */}
            <div className={classes.abtSection2Main}>
                <div className={classes.abtSection2}>
                    <Typography variant="HS" component={'h1'}>
                        {aboutData.foundation.title}
                    </Typography>
                    <div className={classes.abtSec2}>
                        {aboutData.foundation.items.map((item) => (
                            <div key={item.id} className={classes.abtSec2Con1}>
                                <div className={classes.abtCon1ImgHead}>
                                    {foundationIcons[item.id]}
                                    <Typography variant="LM">{item.title}</Typography>
                                </div>
                                <div className={classes.abtCon1Para}>
                                    <Typography variant="BM">{item.description}</Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 3: Team */}
            {/* <div className={classes.abtSection3Main}>
                <div className={classes.abtSec3}>
                    <div className={classes.abtSec3HeadPara}>
                        <Typography variant="HS" component={'h1'}>
                            {aboutData.team.title}
                        </Typography>
                        <Typography variant="BM">
                            {aboutData.team.description}
                        </Typography>
                    </div>
                    <div className={classes.abtCont1ImgTextMain}>
                        {aboutData.team.members.map((member) => (
                            <div key={member.id} className={classes.abtCont1ImgText}>
                                <img src={teamAvatars[member.id]} alt={member.name} />
                                <div className={classes.abtCont1Text}>
                                    <Typography variant="LM" className={classes.abtCont1Para}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="BS" className={classes.abtCont1Para2}>
                                        {member.role}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default About