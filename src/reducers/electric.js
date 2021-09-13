import {getelectric} from '../api/api'

const intialState = {
    isLoading: true
}
console.log("je")
export const electric =({
    
    state:intialState,
    reducers: {
        
        
        setElectric(state,electricResponse){
            return {
                
                ...state,
                isLoading:false,
                ...electricResponse
            }
            console.log("tes");
        }
        
    },
    effects: {
        
        async loadElectric() {
            // if(!params) return;
            console.log("je")
            // const {data , field} = state;
            const electricResponse = await getelectric();
            this.setElectric({...electricResponse});
        }
    }

});

export default electric;