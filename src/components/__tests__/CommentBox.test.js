import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';

import CommentBox from 'components/CommentBox';

let component;

beforeEach(() => {
    component = mount(
        <Root>
            <CommentBox />
        </Root>
    );
})

afterEach(() => {
    component.unmount();
})

it('has a text area and 2 buttons', () => {
    expect(component.find("textarea").length).toEqual(1)
    expect(component.find("button").length).toEqual(2)
})

describe('the textarea', () => {

    beforeEach(() => {
        expect(component.find("textarea").simulate('change', {
            target: { value: 'This is a new comment'}
        }));
        component.update();
    });

    it('has a textarea that users can type in', () => {  
        expect(component.find('textarea').prop('value')).toEqual('This is a new comment');
    })

    it('when form is submitted, textarea gets emptied', () => {
        expect(component.find("form").simulate('submit'));
        component.update();
        expect(component.find("textarea").prop('value')).toEqual('');
    })

})

