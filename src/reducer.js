export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:"BQBJddG7bJA17de0xJPe3paEWgc4IY_8t4lrMbdqFwijeRlqZa2cZbtTctE1g5-dt9WOIFe_Jy9tlww2zj_IWhz7MNDEjJgjAkB4rhRZwi6ffBfyLmb4XIGmaU_MAdsVbvnK7vfVe0Yg9dGAk7Bqokv95H31y_jsDQ",
};

const reducer = (state, action) =>{

    console.log(action)

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state
    }
}
export default reducer;