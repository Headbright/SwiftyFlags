// packages/[pkg].paths.js
const versions = ["6.3", "6.2", "6.1.2", "6.0", "5.10"];

export default {
  paths() {
    return versions.map((v) => {
      return { params: { version: v } };
    });
  },
};
