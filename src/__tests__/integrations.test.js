import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    // On utilise moxios pour simuler une fausse requete type axios
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name:'fetched 1' }, { name:'fetched 2' }]
    })
})

afterEach(() => {
    moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
    // Attemp to render the entire app
    const wrapper = mount(
        <Root>
            <App />
        </Root>
    )
    // find the 'fetchComments' button and click it
    wrapper.find('.fetch-comments').simulate('click');

    // Expect to find a list of comments
    // Ici on fait un setTimeout pour attendre que notre simulation moxios soit bien effectuée avant de vérifier le contenu
    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find('li').length).toEqual(2);
        done();
        wrapper.unmount();
    })
})