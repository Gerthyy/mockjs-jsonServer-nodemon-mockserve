/*
 * @Author: gerthwang
 * @Date:   2021-05-31 10:17:33
 * @Last Modified by:   gerthwang
 * @Last Modified time: 2021-05-31 17:52:35
 */
let Mock = require("mockjs");
let Random = Mock.Random;

module.exports = () => {
  let data = {
    data: {},
    1: [],
    2: [],
    3: [],
  };

  for (let i = 1; i <= 100; i++) {
    let part1 = Mock.mock({
      "part|1": ["hair",],
    });
    var id1 =  Random.id();
    var config =

      part1.part === "hair"
        ? Mock.mock({
            "labColor|1": [
              [89, -119, -100],
              [100, 89, 121],
              [50, 21, 54],
              [23, 43, 76],
              [54, 43, 76],
            ],
            "shining|1-100": 100,
            "grey|1-100": 50,
            "strength|1-100": 100,
            textures: {
              number:Random.int(0,100),
            }
          })
        : part1.part === "eyeshadow"
        ? Mock.mock({
            "rgbArray|9": [Random.rgb()],
            "shining|1-100": 100,
            "grey|1-100": 50,
            "strength|1-100": 100,
          })
        : {};
    var data1 = {
      guid: id1,
      name: id1,
      ...part1,
      config,
      schemaVersion: 1,
    }
    data["data"][id1] = data1
  }
  return data;
};
