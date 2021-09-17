import { getfuelprice } from '../api/api'

const intialState = {
    isLoading: true
}

export const fuelprices = ({

    state: intialState,
    reducers: {


        setFuel(state, fuelResponse) {
            return {

                ...state,
                isLoading: false,
                ...fuelResponse
            }
        }


    },
    effects: {

        async loadfuel() {
            // if(!params) return;
            // const {data , field} = state;
            const fuelResponse = await getfuelprice();
            this.setFuel({ ...fuelResponse })
        }
    }

});

export default fuelprices;