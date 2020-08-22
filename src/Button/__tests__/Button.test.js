import React from 'react';
import Button from '../src/Button';
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Button', () => {
    let getByTestId;
    let elem;
    let onClickHandler = jest.fn();
    afterEach(cleanup);
    beforeEach(() => {
        ({getByTestId} = render(<Button onClick={onClickHandler}/>));
        elem = getByTestId('base-button');
        fireEvent.click(getByTestId('base-button'));
    });

    it('check button render label', () => {
      expect(elem.innerHTML).toBe('Apply Now');
    });

    it('button onClick fired', () => {
        expect(onClickHandler).toHaveBeenCalled();
    });
});