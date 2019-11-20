import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Services from './Services';
import { MemoryRouter } from 'react-router-dom'

configure({ adapter: new Adapter() });

describe('Services', () => {
    let services = mount(
        <MemoryRouter>
            <Services />
        </MemoryRouter>)

    it('renders the services text', () => {
        expect(services.find('h2').at(0).text()).toEqual('Services')
    });
    it('renders the services text', () => {
        expect(services.find('h4').at(0).text()).toEqual('Kvana provides a wide range of marketplace development services for various industries')
    });
});