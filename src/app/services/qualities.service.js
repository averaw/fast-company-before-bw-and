import httpService from "./http.service";
const qualityEndpoint = "http://localhost:4000/api/v1/quality/";

const qualityService = {
    get: async (id) => {
        const { data } = await httpService.get(qualityEndpoint);
        return data;
    }
};
export default qualityService;
