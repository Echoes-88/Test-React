import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New comment'
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New comment']);
})

// Le test suivant permet de vérifier que le reducer fonctionne bien de manière global
// Si on effectue le test précedant, ce test n'est pas très utile
it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type: undefined})

    expect(newState).toEqual([]);
})