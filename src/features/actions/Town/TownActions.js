import { morrocoTownFetcher } from "../../../axios";
import { fetchTowns } from "../../reducers/Town/TownSlice";

export const getMoroccoCities = () => (dispatch) => {
  const where = encodeURIComponent(
    JSON.stringify({
      asciiname: {
        $exists: true,
      },
    })
  );
  const config = {
    headers: {
      "X-Parse-Application-Id": "tmrRrlWjf1aUxe5KDkMZBnKmzBPBGVIG9Hpb0P3f", // This is your app's application id
      "X-Parse-REST-API-Key": "O2zMg6NBA94V3xzGvLtuczgDIkqbug6cRVhAqLVE", // This is your app's REST API key
    },
  };
  return morrocoTownFetcher
    .get(
      `CitiesMorocco_List_of_Morroco_cities?limit=120order=asciiname&keys=asciiname&where=${where}`,
      config
    )
    .then((response) => {
        if(response.status === 200)
        {
            dispatch(fetchTowns(response.data["results"]))
            return true;
        }
        else {
            return false
        }
    })
    .catch(() => false);
};
