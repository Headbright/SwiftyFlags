// packages/[pkg].paths.js
const versions = ["5.10", "5.9", "5.8", "5.7", "5.6"];

export default {
  paths() {
    return versions.map((v) => {
      return { params: { version: v } };
    });
  },
};
