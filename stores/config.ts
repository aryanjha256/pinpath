// Config store for managing users preferences and settings

export const useConfigStore = defineStore("useConfigStore", () => {
  const userConfig = ref({
    map: {
      showLabels: true,
      showHeatmap: true,
      showPoints: true,
      showGrid: false,
      showSatellite: false,
      showTerrain: false,
      showTraffic: false,
    },
    haveMapMotion: true,
    flyZoomLevel: 6,
  });

  return {
    userConfig,
  };
});
