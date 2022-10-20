import React from 'react';
import List from '../components/List';

export default function TexasCitiesListScreen() {
  const cities = [
    { name: 'Austin' },
    { name: 'San Antonio' },
    { name: 'Houston' },
    { name: 'Dallas' },
    { name: 'Laredo' },
    { name: 'McAllen' },
    { name: 'Hunt' },
    { name: 'Eaglepass' },
    { name: 'El Paso' },
    { name: 'Fort Worth' },
    { name: 'Arlington' },
    { name: 'Galveston' },
    { name: 'Irving' },
    { name: 'Plano' },
    { name: 'Amarillo' },
    { name: 'Waco' },
    { name: 'Denton' },
    { name: 'Frisco' },
    { name: 'Abilene' },
    { name: 'Brownsville' },
    { name: 'Round Rock' },
  ];

  return <List rows={cities} />;
}
