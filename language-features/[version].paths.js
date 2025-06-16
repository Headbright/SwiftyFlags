// packages/[pkg].paths.js
const versions = [
  "6.2-2025-06-14",
  "6.1.2",
  "6.0",
  "5.10",
  "5.9",
  "5.8",
  "5.7",
];

export default {
  paths() {
    return versions.map((v) => {
      return { params: { version: v } };
    });
  },
};
