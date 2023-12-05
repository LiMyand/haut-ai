import axios from 'axios';

const YiYan = axios.create({
    baseURL: import.meta.env.VITE_YIYAN_API_URL,
});


export const getOne = () => {
    try {
        return YiYan.get('');
    } catch (error) {
        console.error(error);
        return "一句名言"
    }
}
export default YiYan;