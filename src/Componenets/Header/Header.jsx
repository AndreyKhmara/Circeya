import React from 'react';

export default function Header() {
  return (
    <div style={{
      // position: 'absolute',
      // left: 0,
      // top: 0,
      width: '100%',
      height: '100px',
      background: 'linear-gradient(black, gray)',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >

      <div style={{
        color: 'white',
        fontSize: '24px',
        marginLeft: '261px',
      }}
      >
        logo

      </div>
      <div style={{
        color: 'white',
        width: '228px',
        height: '32px',
        marginRight: '261px',

        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',

      }}
      >
        +7 (495) 495-49-54
      </div>
    </div>
  );
}
