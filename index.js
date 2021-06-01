/*
 * @Author: gerthwang
 * @Date:   2021-05-31 10:17:33
 * @Last Modified by:   Gerth Wang
 * @Last Modified time: 2021-06-01 18:37:13
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
    let l = Random.int(0,100);
    let a = Random.int(-128,128);
    let b = Random.int(-128,128);
    var id1 =  Random.guid();
    var config =

      part1.part === "hair"
        ? Mock.mock({
            "shades|1": [
              [l,a,b],
            ],
            "shining|1-100": 100,
            "grey|1-100": 50,
            "strength|1-100": 100,
            "shapes":[1,2,3,4,5,6,7],
            ...textures,
            ...fnish
          })
        : part1.part === "eyeshadow"
        ? Mock.mock({
            "shades|9": [[123,234,145]],
            "shining|1-100": 100,
            "grey|1-100": 50,
            "strength|1-100": 100,
            "shapes":[1,2,3,4,5,6,7],
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