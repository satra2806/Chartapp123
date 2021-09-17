import { getelectric } from '../api/api'

const intialState = {
    isLoading: true
}

export const electric = ({

    state: intialState,
    reducers: {


        setElectric(state, electricResponse) {
            return {

                ...state,
                isLoading: false,
                ...electricResponse
            }
        }

    },
    effects: {

        async loadElectric() {
            // if(!params) return;
            // const {data , field} = state;
            const electricResponse = await getelectric();
            this.setElectric({ ...electricResponse });
        }
    }

});

export default electric;