import React from 'react';
import './AboutView.css';


//Change Lorem Ipsum to real text
const AboutView = () => {
    return (
        <div className='aboutView'>
            <article>
                <p>The Pomodoro Technique is a time management method
                developed by Francesco Cirillo in the late 1980s.
                The technique uses a timer to break down work into intervals, 
                aditionally 25 minutes in length, separated by short breaks. 
                These intervals are named pomodoros, the anglicized plural of 
                the Italian word pomodoro (tomato), after the tomato-shaped 
                kitchen timer that Cirillo used as a university student.</p>
                <h2>How to pomodoro efficiently?</h2>
                <ol>
                	<li>Decide on the task to be done.</li>
                	<li>Set the pomodoro timer (traditionally: 25 minutes).</li>
                	<li>Work on the task.</li>
                	<li>End work when the timer rings and add one to your pomodoro count.</li>
                	<li>If your pomodoro count is not divisible by four, 
                	take a short break (3-5 minutes) and go back to step 2.</li>
                	<li>If your pomodoro count is divisible by four, take a longer
                	break (15-30 minutes) and go back to step 1.</li>
                </ol>
    			<h2>Click anywhere to go back</h2>
            </article>
        </div>
    );
}

export default AboutView;
