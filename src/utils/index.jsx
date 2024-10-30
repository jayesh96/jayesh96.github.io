const getRandomDegree = (min, max) => {
    return Math.random() * (max - min) + min;
};

export { getRandomDegree };
