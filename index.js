/*
 * @Author: gerthwang
 * @Date:   2021-05-31 10:17:33
 * @Last Modified by:   Gerth Wang
 * @Last Modified time: 2021-06-01 12:55:06
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
      "part|1": ["hair","eyeshadow"],
    });
    let textures = Mock.mock({
      "textures|1": ["liquid","powered","cream"],
    });
    let fnish = Mock.mock({
      "fnish|1": ["matter","glossy"],
    });
    var id1 =  Random.guid();
    var config =

      part1.part === "hair"
        ? Mock.mock({
            "shades|1": [
              [89, -119, -100],
              [100, 89, 121],
              [50, 21, 54],
              [23, 43, 76],
              [54, 43, 76],
            ],
            "shape":[1,2,3,4,5,6,7],
            "shining|1-100": 100,
            "grey|1-100": 50,
            "strength|1-100": 100,
            ...textures,
            ...fnish
          })
        : part1.part === "eyeshadow"
        ? Mock.mock({
            "shades|9": [[123,234,145]],
            "shape":[1,2,3,4,5,6,7],
            "shining|1-100": 100,
            "grey|1-100": 50,
            "strength|1-100": 100,
            ...textures,
            ...fnish
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