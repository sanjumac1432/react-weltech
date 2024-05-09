const innicialstate = {};

export default (state = 0, {type,payload})=>{

    switch (type){
        case 'inc' : state+1;
        return state+1;

        case 'dec' : state-1
        return state-1;

        default:
            return state

    }

}