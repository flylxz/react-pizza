import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    const categoryValue = category !== null ? `category=${category}` : '';
    const sortValue = sortBy === 'name'
        ? `_sort=${sortBy}&_order=asc`
        : `_sort=${sortBy}&_order=desc`

    axios.get(`http://localhost:3001/pizzas?${categoryValue}&${sortValue}`)
        .then(({ data }) => dispatch(setPizzas(data)));
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});