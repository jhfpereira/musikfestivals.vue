export default {
  siteRecommender(state) {
    return (currentSiteTo, limit = 2) => {
      if (limit < 1) {
        throw new Error('Can not limit recommendations to less than one');
      }

      const filteredRecommendations = state.siteRecommendations.filter(
        (recommendation) => recommendation.link && recommendation.link.to !== currentSiteTo,
      );

      return filteredRecommendations.slice(0, limit);
    };
  },
};
