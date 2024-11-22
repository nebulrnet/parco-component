import { axiosMockAdapterInstance } from "@/app/api/mock";
import { funds } from "./data";

axiosMockAdapterInstance.onGet("/api/funds").reply(async () => {
  try {
    console.log("getting called");
    return [200, funds];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});
