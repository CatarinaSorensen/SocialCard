import React from 'react';
import styled from "styled-components";
import arrow from "../resourses/arrow.png";

let accountTw = "ThePracticalDev";

const SCHeaderStyle = styled.div`
    max-width: 40%;
    margin: auto;
`
const SCHeaderImgStyle = styled.img`
    height: 3em;
    width: 3em;
    border-radius: 50%;
    margin-right: 1em;
    margin-top:5px;
`
const MarginStyle = styled.div`
    margin-bottom: 7px;
    display:flex;
    justify-content: center;
`
const AncoreStyle = styled.a`
    color:#72bcd4;
`
const HrStyle = styled.hr`
    font-weight: lighter;
    color: gray;
`
const BoldSpan = styled.span`
    font-weight: bold;
`
const LightSpan = styled.span`
    font-weight: lighter;
    color: gray;
`
const FolderStyle = styled.span`
    cursor: pointer; 
    margin-left: auto;
`

const SCHeader = ({ header, account, handleClick }) => (
    <SCHeaderStyle>
        <HrStyle />
        <MarginStyle>
            <SCHeaderImgStyle src="https://pbs.twimg.com/profile_images/1002604104194056192/IEoNsLNM_400x400.jpg" alt="profile"></SCHeaderImgStyle>
            <div className="container">
                <div className="displayHor">
                    <BoldSpan>{`${header} \u00A0`}</BoldSpan>
                    <LightSpan>{account} Sep 4 2018</LightSpan>
                </div>
                <div>Learning React? Start Small.</div>
                <div>{`{ cred:`} <AncoreStyle href={`https://www.twitter.com/${accountTw}`}>{accountTw}</AncoreStyle>{` }`}</div>
            </div>
            <FolderStyle onClick={handleClick}><img src={arrow} alt="arrow" /></FolderStyle>
        </MarginStyle>
    </SCHeaderStyle>
);

export default SCHeader;