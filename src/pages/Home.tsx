import React from 'react';
import { Heading } from '../components/heading/Heading';

export const Home = () => {
  return (
    <>
      <Heading />
      <main className='section'>
        <div className='container'>
          <ul className='content-list'>
            <li className='content-list__item'>
              <h2 className='title-2'>Frontend</h2>
              <p>
                HTML, CSS, JavaScript, TypeScript, ReactJS, Redux, BootStrap, MaterialUI, AntDesign, StyledComponents
              </p>
            </li>
            <li className='content-list__item'>
              <h2 className='title-2'>Backend</h2>
              <p>NodeJS, Express, MongoDB</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
