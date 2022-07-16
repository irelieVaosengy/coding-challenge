import {createSelector} from "reselect";

export const globalState = state => state.appReducer

export const selectSearchKeyWords = createSelector(
    [ globalState ],
    state => state.searchKeyWords
);

export const selectTechnologies = createSelector(
    [ globalState ],
    state => state.technologies
);

export const selectNinja = createSelector(
    [ globalState ],
    state => state.awesomeNinja
);
