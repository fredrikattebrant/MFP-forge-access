import Resolver from '@forge/resolver';
import api, { route } from "@forge/api";

const resolver = new Resolver();

export const getDataFromJira = async (url) => {
    try {
      const routeUrl = route`${url}`;
      const response = await api.asUser().requestJira(routeUrl);
      return response.json();
    } catch (error) {
      console.error("getDataFromJira error, url", error, url);
      throw error;
    }
  };
  
resolver.define("getFilter", async (req) => {
    try {
        const filterId = req.payload.id;
        const result = await getDataFromJira(`/rest/api/3/filter/${filterId}`);
        console.log("getFilter ", filterId, result);
        return result;
    } catch (error) {
        console.error("getFilter error", error);
        throw error;
    }
});
export const handler = resolver.getDefinitions();

resolver.define("getUsers", async () => {
    console.log("getUsers");
    try {
      const result = await getDataFromJira("/rest/api/3/users/search");
      console.log("getUsers => ", result);
      return result;
    } catch (error) {
      console.error("getUsers error ", error);
      throw error;
    }
  });
  