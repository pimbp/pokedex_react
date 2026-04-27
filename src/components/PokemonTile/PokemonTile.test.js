import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PokemonTile from './PokemonTile';

describe('PokemonTile', () => {
  let props;
  let shallowPokemonTile;
  let renderedPokemonTile;
  let mountedPokemonTile;

  const shallowTestComponent = () => {
    if (!shallowPokemonTile) {
      shallowPokemonTile = shallow(<PokemonTile {...props} />);
    }
    return shallowPokemonTile;
  };

  const renderTestComponent = () => {
    if (!renderedPokemonTile) {
      renderedPokemonTile = render(<PokemonTile {...props} />);
    }
    return renderedPokemonTile;
  };

  const mountTestComponent = () => {
    if (!mountedPokemonTile) {
      mountedPokemonTile = mount(<PokemonTile {...props} />);
    }
    return mountedPokemonTile;
  };  

  beforeEach(() => {
    props = {};
    shallowPokemonTile = undefined;
    renderedPokemonTile = undefined;
    mountedPokemonTile = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
