import React from "react";
import {render,fireEvent} from 'react-testing-library';
import Movies from './Movies';

describe('<Movies />', () => {

    test('test this component', () => {
        const { container } = render(<Movies />);
        expect(container.firstChild).toHaveTextContent('farts');
    });
  });

