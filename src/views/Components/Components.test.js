import React from 'react';
import Components from './Components';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Components', () =>{
    let components = mount(<Components />)

    it('renders the services text', () => {
        expect(components.find('h2').text()).toEqual('Our Services')
    });
});