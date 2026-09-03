// packages/[pkg].paths.js
import { versionIds } from "../versions.js";

export default {
  paths() {
    return versionIds.map((v) => {
      return { params: { version: v } };
    });
  },
};
