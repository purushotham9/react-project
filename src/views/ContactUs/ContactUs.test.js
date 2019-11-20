import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import ContactUs from './ContactUs';
import { MemoryRouter } from 'react-router-dom'

configure({ adapter: new Adapter() });

describe('ContactUs', () => {
    let contactUs = mount(
        <MemoryRouter>
            <ContactUs />
        </MemoryRouter>)

    it('renders the Get in touch with us text', () => {
        expect(contactUs.find('h2').at(0).text()).toEqual('Get in touch with us')
    });
    it('renders the We use transparency text', () => {
        expect(contactUs.find('p').at(0).text()).toEqual("We use transparency as a tool to help our customers achieve their goals. So, let 's discuss how you and Kvana team can launch your business idea or reinvent your product")
    });
    it('renders the Our Branches text', () => {
        expect(contactUs.find('h3').at(0).text()).toEqual('Our Branches :')
    }); 
    it('renders the USA', () => {
        expect(contactUs.find('h4').at(0).text()).toEqual('USA')
    }); 
    it('renders the USA address ', () => {
        expect(contactUs.find('b').at(0).text()).toEqual('360 S Market Street,UNIT 1306, San Jose,CA 95113.(415) 484-5689')
    }); 
    it('renders the USA mail ', () => {
        expect(contactUs.find('a').at(3).text()).toEqual('Contact@kvana.com')
    }); 
    it('renders the USA phone number', () => {
        expect(contactUs.find('a').at(4).text()).toEqual('(415) 484-5689')
    });
    it('renders the india address ', () => {
        expect(contactUs.find('b').at(1).text()).toEqual('#302, Harsha Homes, CBI colony, Madhapur, Hyderabad-500081, India.')
    }); 
    it('renders the USA phone number', () => {
        expect(contactUs.find('a').at(5).text()).toEqual('(040) 4853 3949')
    });
    it('renders the USA phone number', () => {
        expect(contactUs.find('a').at(6).text()).toEqual('+919640685656')
    });

    
});