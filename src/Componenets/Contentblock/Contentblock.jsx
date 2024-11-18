import React from 'react';
import classes from './Contentblock.module.css';

export default function Contentblock({ imgtop, imgbot }) {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.topheader}>ut aliquip ex ea commodo consequat</div>
        <div>
          <div className={classes.container}>
            <div>
              <img
                style={{
                  width: '860px',
                  heigth: '480px',
                }}
                src={imgtop}
                alt="img"
              />

            </div>
            <div>
              <div>
                <p style={{
                  fontFamily: 'Orchidea Pro',
                  fontWeight: '500',
                  fontSize: '48px',
                }}
                >
                  Lorem ipsum dolor sit
                  <br />
                  amet, consectetur
                  <br />
                  adipiscing elits

                </p>

              </div>
              <div className={classes.description}>
                Incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                <br />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum !

              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={classes.container}>

        <div>
          <div>
            <p style={{
              fontFamily: 'Orchidea Pro',
              fontWeight: '500',
              fontSize: '48px',
              marginLeft: '263px',
            }}
            >
              Lorem ipsum dolor sit
              <br />
              amet, consectetur
              <br />
              adipiscing elits

            </p>

          </div>
          <div className={classes.descriptionBottom}>
            Incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

          </div>
        </div>
        <div style={{
          width: '600px',
          height: '400px',
          overflow: 'hidden',
        }}
        >
          <img
            src={imgbot}
            alt="img"
          />

        </div>

      </div>
    </>
  );
}
