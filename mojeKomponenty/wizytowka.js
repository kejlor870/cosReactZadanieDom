import React from 'react';
import './wizytowkaStyle.css';

const Wizytowka = ({profilowe, imie, nazwisko, opis, link}) =>{
    return(
        <div className='wizytowka'>
            <img src={profilowe} alt='profilowe zdjecie' className='profZdj' rel="noopener noreferrer"/>
            <div className='daneWizytowki'>
                <h1 className='imieNazwisko'>{imie} {nazwisko}</h1>
                <p className='opis'>{opis}</p>
                <a href={link} target='_blank' className='link'>Link</a>

            </div>
            <br />
            <br />
            <br />
        </div>



    );

};

export default Wizytowka;















