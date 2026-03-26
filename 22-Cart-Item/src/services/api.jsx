import  axios  from "axios";

export const ProductData = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=100')
        return response.data
    } catch (error) {
        console.log("getting Error : ", error);
        return null
    }
}


