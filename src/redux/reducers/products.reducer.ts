import { GET_PRODUCTS } from '../types/products.types';

const defaultState = {
    isRequestingProducts: false,
    productError: false,
    isRequested: false,
    categories: []
};

export default function (state = defaultState, { type, payload }: { type: any, payload: any }) {
    switch (type) {
        case GET_PRODUCTS:
            {
                return {
                    ...state, categories: payload,
                    isRequested: true
                };
            }
        default:
            return state;
    }
}