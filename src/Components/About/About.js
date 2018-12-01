import React from 'react';
import Modal from '../Modal/Modal';
import AboutView from './AboutView';

const About = ( {isAbout, closeAbout} ) => {
    if (isAbout){
    	return (
            <Modal close={closeAbout}>
    	      <AboutView/>
            </Modal>
    	);
    } else {
    	return (
	      null
    	)
    }
}

export default About;
