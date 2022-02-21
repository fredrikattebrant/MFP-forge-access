import Resolver from '@forge/resolver';
import api, { route } from "@forge/api";

const resolver = new Resolver();

resolver.define("getFilter", async (req) => {
    try {
        const url = `/rest/api/3/filter/${req.payload.id}`;
        const routeUrl = route`${url}`;
        const response = await api.asUser().requestJira(routeUrl);
        const result = await response.json();
        return result.values;
    } catch (error) {
        console.error("getFilter error", error);
        throw error;
    }
});
export const handler = resolver.getDefinitions();

