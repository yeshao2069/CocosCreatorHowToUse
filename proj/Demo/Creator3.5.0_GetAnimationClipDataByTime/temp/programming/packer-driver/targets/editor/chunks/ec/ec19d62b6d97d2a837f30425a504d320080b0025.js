System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AnimationComponent, error, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GetData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AnimationComponent = _cc.AnimationComponent;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c662eUKvxHu6GdDjAuXZGc", "GetData", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GetData", GetData = (_dec = ccclass('GetData'), _dec2 = property(AnimationComponent), _dec3 = property(AnimationComponent), _dec4 = property(AnimationComponent), _dec(_class = (_class2 = class GetData extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "act1", _descriptor, this);

          _initializerDefineProperty(this, "act2", _descriptor2, this);

          _initializerDefineProperty(this, "act3", _descriptor3, this);
        }

        start() {
          const data = this.getAnimationDataByTime(this.act1, 0, true);

          if (data) {
            // 获取pos
            console.log("获取坐标 => ", data.get('position')); // 获取rotation

            console.log("获取角度 => ", data.get('rotation')); // 获取scale

            console.log("获取缩放 => ", data.get('scale'));
          }

          const data2 = this.getAnimationDataByTimeExpand(this.act2, 0.6);

          if (data2) {
            // 获取pos
            // @ts-ignore
            console.log("获取坐标 => ", data2['position']);
          }

          const data3 = this.getAnimationDataByTimeExpand(this.act3, 1, 'c1');

          if (data2) {
            // 获取pos
            // @ts-ignore
            console.log("获取坐标 => ", data3['position']);
          }
        }
        /**
         * 根据时间获取指定帧的数据
         * @param target 动画组件Animation
         * @param time 动画的时间  单位:秒
         * @param path 获取具体的节点的名字  如  node/attend/box  输入 box 获取
         * @param isAccurate 是否精确获取  true为精确  false为不需要精确
         * 如动画时间1秒，中间分为4段(0,0.25,0.5,0.75,1)
         * 如果使用精确模式，需要输入精确值0.5，可以获取0.5位置的属性信息，输入0.6那么获取的是null
         * 如果使用不需要精确模式，输入精确值0.5获取的是0.5的信息，如果输入的是0.8，那么获取的是0.75的信息
         * return a object
         */


        getAnimationDataByTimeExpand(target, time, path = null, isAccurate = false) {
          // 适用于单个animationClip获取
          const animClips = target.clips;
          const clip1 = animClips[0]; // 适用于多个animationClip获取
          // let animName1 = target.defaultClip!.name;
          // let animState1 = target.getState(animName1);
          // const clip2 = animState1.clip;
          // let animName2 = 'Take 001';
          // let animState2 = target.getState(animName2);
          // const clip3 = animState2.clip;
          // console.log(clip1,clip2,clip3);

          console.log('当前动画的 name ==> ', clip1['name']);
          console.log('当前动画的 frameRate ==> ', clip1['frameRate']);
          console.log('当前动画的 sample ==> ', clip1['sample']);
          console.log('当前动画的 speed ==> ', clip1['speed']);
          console.log('当前动画的 wrapMode(循环模式) ==> ', clip1['wrapMode']);
          console.log('当前动画的 duration(总时长) ==> ', clip1['duration']); // 时间 表

          const timeSchedule = clip1['keys'][0]; // 坐标/旋转角度/缩放 表

          const curveArray = [];
          const curves = clip1['curves'];

          for (let i = 0; i < curves.length; i++) {
            // curves[x].modifiers[1] 为 设置的属性
            // curves[x].modifiers[0] 为 设置的路径，如果没有下一级的节点，那么该路径可以没有
            // curves[x].data.values 为一个属性集合
            let tempPath, tempAttribute;

            if (curves[i].modifiers.length > 1) {
              tempPath = curves[i].modifiers[0].path;
              tempAttribute = curves[i].modifiers[1];
            } else {
              tempPath = null;
              tempAttribute = curves[i].modifiers[0];
            }

            const val = curves[i].data.values;
            let temp = {
              path: tempPath,
              attribute: tempAttribute,
              values: val
            };
            curveArray.push(temp);
          }

          console.log('当前动画的 keys ==> ', timeSchedule);
          console.log('当前动画的 curves ==> ', clip1['curves']);
          console.log('当前动画的 属性表 ==> ', curveArray); // 总时间

          const duration = clip1['duration'];

          if (time < 0 && time > parseFloat(duration)) {
            error("获取时间错误 or 设置时间超过时长");
            return null;
          }

          if (!timeSchedule) {
            return null;
          }

          if (isAccurate) {
            // 使用精确的方式
            for (let i = 0; i < timeSchedule.length; i++) {
              if (timeSchedule[i] === time) {
                let data = {};

                for (let j = 0; j < curveArray.length; j++) {
                  if (curveArray[j]['path'] == null) {
                    // @ts-ignore
                    data[curveArray[j]['attribute']] = curveArray[j]['values'][i];
                  } else {
                    let _paths = curveArray[j]['path'].split('/');

                    let _path = _paths[_paths.length - 1];

                    if (_path == path) {
                      // @ts-ignore
                      data[curveArray[j]['attribute']] = curveArray[j]['values'][i];
                    }
                  }
                }

                return data;
              }
            }
          } else {
            // 使用不精确的方式
            for (let i = 0; i < timeSchedule.length; i++) {
              if (timeSchedule[i] >= time) {
                let data = {};

                for (let j = 0; j < curveArray.length; j++) {
                  if (curveArray[j]['path'] == null) {
                    // @ts-ignore
                    data[curveArray[j]['attribute']] = curveArray[j]['values'][i];
                  } else {
                    let _paths = curveArray[j]['path'].split('/');

                    let _path = _paths[_paths.length - 1];

                    if (_path == path) {
                      // @ts-ignore
                      data[curveArray[j]['attribute']] = curveArray[j]['values'][i];
                    }
                  }
                }

                return data;
              }
            }
          }

          return null;
        }
        /**
         * 根据时间获取指定帧的数据
         * @param target 动画组件Animation
         * @param time 动画的时间  单位:秒
         * @param isAccurate 是否精确获取
         * return map
         */


        getAnimationDataByTime(target, time, isAccurate = false) {
          // 适用于单个animationClip获取
          const animClips = target.clips;
          const clip1 = animClips[0]; // 适用于多个animationClip获取
          // let animName1 = target.defaultClip!.name;
          // let animState1 = target.getState(animName1);
          // const clip2 = animState1.clip;
          // let animName2 = 'Take 001';
          // let animState2 = target.getState(animName2);
          // const clip3 = animState2.clip;
          // console.log(clip1,clip2,clip3);

          console.log('当前动画的 name ==> ', clip1['name']);
          console.log('当前动画的 frameRate ==> ', clip1['frameRate']);
          console.log('当前动画的 sample ==> ', clip1['sample']);
          console.log('当前动画的 speed ==> ', clip1['speed']);
          console.log('当前动画的 wrapMode(循环模式) ==> ', clip1['wrapMode']);
          console.log('当前动画的 duration(总时长) ==> ', clip1['duration']); // 时间 表

          const timeSchedule = clip1['keys'][0]; // 坐标/旋转角度/缩放 表

          const curveObj = new Map();
          const curves = clip1['curves'];

          for (let i = 0; i < curves.length; i++) {
            // curves[x].modifiers[1] 为 设置的属性
            // curves[x].modifiers[0] 为 设置的路径，如果没有下一级的节点，那么该路径可以没有
            // curves[x].data.values 为一个属性集合
            const key = curves[i].modifiers[curves[i].modifiers.length - 1];
            const val = curves[i].data.values;
            curveObj.set(key, val);
          }

          console.log('当前动画的 keys ==> ', timeSchedule);
          console.log('当前动画的 curves ==> ', clip1['curves']);
          console.log('当前动画的 属性表 ==> ', curveObj); // 总时间

          const duration = clip1['duration'];

          if (time < 0 && time > parseFloat(duration)) {
            error("获取时间错误 or 设置时间超过时长");
            return null;
          }

          if (!timeSchedule) {
            return null;
          }

          if (isAccurate) {
            // 使用精确的方式
            for (let i = 0; i < timeSchedule.length; i++) {
              if (timeSchedule[i] === time) {
                let retData = new Map();
                curveObj.forEach((v, k) => {
                  retData.set(k, v[i]);
                });
                return retData;
              }
            }
          } else {
            // 使用不精确的方式
            for (let i = 0; i < timeSchedule.length; i++) {
              if (timeSchedule[i] > time) {
                let retData = new Map();
                curveObj.forEach((v, k) => {
                  retData.set(k, v[i - 1]);
                });
                return retData;
              }
            }
          }

          return null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "act1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "act2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "act3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec19d62b6d97d2a837f30425a504d320080b0025.js.map