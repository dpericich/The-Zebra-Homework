// Star calculator to determine the number of gold stars

export const calculateRatings = (starsNumber, goldStar, whiteStar) => {
  if (starsNumber !== null) {
    const starsArray = [];
    if (starsNumber < 5) {
      let whiteStars = 5 - starsNumber;
      for (let i = 0; i < starsNumber; i++) {
        starsArray.push(
          <img
            src={goldStar}
            alt="gold star"
            className="name-container-display__star"
          />
        );
      }
      for (let i = 0; i < whiteStars; i++) {
        starsArray.push(
          <img
            src={whiteStar}
            alt="white star"
            className="name-container-display__star"
          />
        );
      }
    } else {
      for (let i = 0; i < 5; i++) {
        starsArray.push(
          <img
            src={goldStar}
            alt="gold star"
            className="name-container-display__star"
          />
        );
      }
    }
    console.log(starsArray);
    return starsArray;
  } else {
    return null;
  }
};

// Features function to construct array of feature images

export const displayFeatures = (features) => {
  // Check if the array exists from the API requst
  if (features !== undefined) {
    // Map over the array of items and return the icon names. The icon
    // names are the same as the png files
    let featureNames = features.map((feature) => feature.icon);
    let returnFeatures = [];
    // Loop over the array of file names and create image elements for each item
    // Before returning the array
    for (let i = 0; i < featureNames.length; i++) {
      const imgPath = `/assets/${featureNames[i]}.png`;
      returnFeatures.push(
        <img
          src={imgPath}
          alt={featureNames[i]}
          className="name-container-display__feature"
        />
      );
    }
    console.log(returnFeatures);
    return returnFeatures;
  } else {
    return null;
  }
};
