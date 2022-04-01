import './index.css';
import jeremy from './images/jeremy.png'; 
import work from "./images/work.svg";
import {ReactComponent as Ellipsis} from "./images/ellipsis.svg";
import play from "./images/play.svg";
import study from "./images/study.svg";
import exercise from './images/exercise.svg';
import social from './images/social.svg';
import selfcare from './images/selfcare.svg';
import { useState } from 'react';
import { studyDailyDuration, workDuration } from './Duration';
import { workDailyDuration } from './Duration';
import { studyDuration } from './Duration';
import { exerciseDuration, exerciseDailyDuration,
   socialDuration, socialDailyDuration,
  selfcareDuration, selfcareDailyDuration,
playDuration, playDailyDuration, monthlyWorkDuration,
monthlyPlayDuration, monthlySocialDuration, monthlyStudyDuration,
monthlyExerciseDuration, monthlySelfcareDuration } from './Duration';
import { AppStyles } from './Appstyles';
import { Activity } from './Activity';


function App() {
const [workValue, setWorkValue] = useState(workDuration);
const [playValue, setPlayValue] = useState(playDuration);
const [studyValue, setStudyValue] = useState(studyDuration);
const [exerciseValue, setExerciseValue] = useState(exerciseDuration);
const [socialValue, setSocialValue] = useState(socialDuration);
const [selfcareValue, setSelfcareValue] = useState(selfcareDuration);

const changeDailyDuration = () => {
setWorkValue(workDailyDuration);
setPlayValue(playDailyDuration);
setStudyValue(studyDailyDuration);
setExerciseValue(exerciseDailyDuration);
setSocialValue(socialDailyDuration);
setSelfcareValue(selfcareDailyDuration);
};

const changeWeeklyDuration = () => {
  setWorkValue(workDuration);
  setPlayValue(playDuration);
  setStudyValue(studyDuration);
  setExerciseValue(exerciseDuration);
  setSocialValue(socialDuration);
  setSelfcareValue(selfcareDuration);
};

const changeMonthlyDuration = () => {
  setWorkValue(monthlyWorkDuration);
  setPlayValue(monthlyPlayDuration);
  setStudyValue(monthlyStudyDuration);
  setExerciseValue(monthlyExerciseDuration);
  setSocialValue(monthlySocialDuration);
  setSelfcareValue(monthlySelfcareDuration);
};

  return (
    <>
    <AppStyles className="App">
  <div className='Jeremy-div'>
    <div className='Jeremy'>
    <img src={jeremy} alt='jeremy pic'/>
    <div className='Jeremy-report'>
    <p>Report for</p>
    <h2>Jeremy Robson</h2>
    </div>
</div>
<div className='p'>
<p onClick={changeDailyDuration}>Daily</p>
<p className='Weekly'onClick={changeWeeklyDuration}>Weekly</p>
<p onClick={changeMonthlyDuration}>Monthly</p>
</div>
  </div>

  <Activity className='Work'>
    <div className='activity-work'>
    <img className='activity-logo' src={work} alt="Work-Logo"></img>
    </div>
      <div>
      <h5>Work</h5>
      <Ellipsis className='ellipsis'/>
    </div>
    <span className='values'>
    {workValue}
    </span>
  </Activity>

  <Activity className='Play'>
    <div className='activity-play'>
      <img className='activity-logo' src={play} alt="Work-Logo"/>
    </div>
    <div>
      <h5>Play</h5>
      <Ellipsis className='ellipsis'/>
    </div>
    <span className='values'>
      {playValue}
    </span>
  </Activity>

  <Activity className='Study'>
    <div className='activity-study'>
    <img className='activity-logo' src={study} alt="Work-Logo"/>
    </div>
    <div>
      <h5>Study</h5>
      <Ellipsis className='ellipsis'/>
    </div>
    <span className='values'>
      {studyValue}
    </span> 
  </Activity>

  <Activity className='Exercise'>
    <div className='activity-exercise'>
    <img className='activity-logo' src={exercise} alt="Work-Logo"/>
    </div>
    <div>
      <h5>Exercise</h5>
      <Ellipsis className='ellipsis'/>
    </div>
    <span className='values'>
      {exerciseValue}
    </span>
    
  </Activity>

  <Activity className='Social'>
    <div className='activity-social'>
    <img className='activity-logo' src={social} alt="Work-Logo"/>
    </div>
    <div>
      <h5>Social</h5>
      <Ellipsis className='ellipsis'/>
    </div>
    <span className='values'>
      {socialValue}
    </span> 
  </Activity>

  <Activity className='Self Care'>
    <div className='activity-selfcare'>
    <img className='activity-logo' src={selfcare} alt="Work-Logo"/>
    </div>
    <div>
      <h5>Self Care</h5>
      <Ellipsis className='ellipsis'/>
    </div>
    <span className='values'>
      {selfcareValue}
    </span>
  </Activity>

  
    </AppStyles>
    <footer>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="">Frontend Mentor</a>. 
    Coded by <p>Amzat</p>.
  </footer>
  </>
  );
}

export default App;
