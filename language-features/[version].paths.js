// packages/[pkg].paths.js
const versions = ["6.0", "5.10", "5.9", "5.8", "5.7"];

export default {
  paths() {
    return versions.map((v) => {
      return { params: { version: v } };
    });
  },
};
