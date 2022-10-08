## Cocos Creator How To Use
### Write by yeshao2069.
### Cocos Creator How To Use is to simplify the use of some functions that users understand the API.
### Cocos Creator v3.4.x
&nbsp;

## Quick
| A | B | C | D | E |
| :---: | :---: | :---: | :---: | :---: | 
| [1. 用户界面 UI](#ui) | [2. 性能](#performance)  | [3. 音频 Audio](#audio) | [4. 视频 Video](#video) | [5. 帧动画 Animation](#animation)|
| [6. Spine动画](#spine) | [7. 龙骨动画 DragonBone](#dragonbone) | [8. 绘图 Graphics](#graphics) | [9. 物理 Physics](#physics) | [10. 缓动 Tween](#tween) |
| [11. 渲染 Render](#render) | [12. 模型 Model](#model) | [13. 粒子 Particle](#particle) | [14. 需求 DemandCase](#demandcase) | |
&nbsp;
## Examples

### UI
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 1  |   | [UI](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/UI) |   | [返回顶部](#quick)  |
|   | 1.1 | Label | [超大文本](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/UI/Creator3.4.2_2D_LargeSystemFontText)  | 官方DEMO  | <div align=center><img src="./image/202203/2022030201.jpg" width="400" height="300" /></div>  |
|   | 1.2 | Button | [简单按钮](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/UI/Creator3.4.2_2D_SimpleButton)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030201.gif" width="400" height="300" /></div>  |
|   | 1.3 | ListView | [列表视图示例](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/UI/Creator3.4.2_2D_ListViewUse)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030202.gif" width="400" height="300" /></div>  |
|   | 1.4 | WebView | [网页视图示例](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/UI/Creator3.4.2_2D_WebViewUse)  | 官方DEMO  | <div align=center><img src="./image/202203/2022030202.jpg" width="400" height="300" /></div>  |
|   | 1.5 | RichText | [富文本示例](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/UI/Creator3.4.2_2D_RichTextUse)  | 官方DEMO  | <div align=center><img src="./image/202203/2022030203.jpg" width="400" height="300" /></div>  |
|   | 1.6 | PageView | [页面视图示例](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/UI/Creator3.4.2_2D_PageViewUse)  | 官方DEMO  | <div align=center><img src="./image/202203/2022030204.jpg" width="400" height="300" /></div>  |
|   | 1.7 | Mask | [遮罩示例](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/UI/Creator3.4.2_2D_MaskUse)  | 官方DEMO  | <div align=center><img src="./image/202203/2022030205.jpg" width="400" height="300" /></div>  |
|   | 1.8 | UI | [更新列表信息](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/UI/Creator3.4.2_2D_UpdateListWithData)  | 官方DEMO  | <div align=center><img src="./image/202203/2022030206.png" width="400" height="300" /></div>  |
|   | 1.9 | Camera | [摄像机示例](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/UI/Creator3.4.2_2D_CameraUseSample)  |  | <div align=center><img src="./gif/202203/2022030203.gif" width="400" height="300" /></div>  |

### Performance
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 2  |   | [Performance](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Performance) |   | [返回顶部](#quick)  |
|   | 2.1 | Performance | [GPU Instancing](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Performance/Creator3.4.2_3D_GpuInstancing)  |  | <div align=center><img src="./image/202204/2022042802.png" width="400" height="300" /></div>  |
|   | 2.2 | Performance | [静态合批](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Performance/Creator3.4.2_3D_StaticBatch)  |  | <div align=center><img src="./image/202204/2022042804.png" width="400" height="300" /></div>  |
|   | 2.3 | Performance | [VB合并](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Performance/Creator3.4.2_3D_VBBatch)  |  | <div align=center><img src="./image/202204/2022042808.png" width="400" height="300" /></div>  |
|   | 2.4 | Performance | [遮挡查询剔除(原生)](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Performance/Creator3.4.2_3D_NativeOcclusionQuery)  |  | <div align=center><img src="./gif/202205/2022051701.gif" width="400" height="300" /></div>  |

### Audio
| 编号 | 子编号 | 类目 | 子项 | 备注 |  演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 3  |   | [Audio](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Audio) |   | [返回顶部](#quick)  |
|   | 3.1 | Audio | [多个音效同时播放](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Audio/Creator3.4.2_PlayOneShot)  |   |   |
|   | 3.2 | Audio | [添加全局按钮音效](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Audio/Creator3.4.2_AddGlobalButtonSound)  |   |   |
|   | 3.3 | Audio | [模拟钢琴播放](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Audio/Creator3.4.2_PianoPlay)  | 官方DEMO  |  <div align=center><img src="./image/202203/2022030211.png" width="400" height="300" /></div> | 

### Video
| 编号 | 子编号 | 类目 | 子项 | 备注 |  演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 4  |   | [Video](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Video) |   | [返回顶部](#quick)  |
|   | 4.1 | Video | [视频使用](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Video/Creator3.4.2_VideoPlayer)  | 官方DEMO  | <div align=center><img src="./image/202203/2022030207.jpg" width="400" height="300" /></div>  |
|   | 4.2 | Video | [视频置于UI之下 *](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Video/Creator3.4.2_VideoStayOnBottom)  | 官方DEMO  | <div align=center><img src="./image/202203/2022030208.jpg" width="400" height="300" /></div>  |

### Animation
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 5  |   | [Animation](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Animation) |   | [返回顶部](#quick)  |   |
|   | 5.1 | Animation | [精灵帧动画](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Animation/Creator3.4.2_2D_SpriteFrameAnimation)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030211.gif" width="400" height="300" /></div> |
|   | 5.2 | Animation | [精灵帧移动动画](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Animation/Creator3.4.2_2D_SpriteMoveAnimation)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030212.gif" width="400" height="300" /></div> |
|   | 5.3 | Animation | [精灵帧动画动态创建](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Animation/Creator3.4.2_2D_CreateAnimationClip)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030213.gif" width="400" height="300" /> </div> |

### Spine
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 6  |   | [Spine](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Spine) |   | [返回顶部](#quick)  |   |
|   | 6.1 | Spine | [加载Spine动画](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Spine/Creator3.4.2_2D_LoadSpine)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030221.gif" width="400" height="300" /></div>  |
|   | 6.2 | Spine | [Spine挂点](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Spine/Creator3.4.2_2D_SpineAttach)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030222.gif" width="400" height="300" /></div>  |
|   | 6.3 | Spine | [Spine特效](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Spine/Creator3.4.2_2D_SpineMesh)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030223.gif" width="400" height="300" /></div> |
|   | 6.4 | Spine | [Spine换肤](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Spine/Creator3.4.2_2D_SpineSkin)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030224.gif" width="400" height="300" /></div> |
|   | 6.5 | Spine | [Spine挂点碰撞检测](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Spine/Creator3.4.2_2D_SpineCollider)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030225.gif" width="400" height="300" /></div> |
|   | 6.6 | Spine | [Spine动作切换](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Spine/Creator3.4.2_2D_SpineBoy)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030226.gif" width="400" height="300" /></div> |

### DragonBones
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 7  |   | [DragonBones](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/DragonBones) |   | [返回顶部](#quick)  |   |
|   | 7.1 | DragonBones | [替换龙骨动画](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/DragonBones/Creator3.4.2_2D_DragonBonesReplaceSlot)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030402.gif" width="400" height="300" /></div> |
|   | 7.2 | DragonBones | [加载龙骨动画](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/DragonBones/Creator3.4.2_2D_LoadDragonBones)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030401.gif" width="400" height="300" /></div> |
|   | 7.3 | DragonBones | [龙骨动画碰撞检测](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/DragonBones/Creator3.4.2_2D_DragonBonesCollider)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030403.gif" width="400" height="300" /></div> |
|   | 7.4 | DragonBones | [龙骨动画挂点](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/DragonBones/Creator3.4.2_2D_DragonBonesAttach)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030404.gif" width="400" height="300" /></div> |
|   | 7.5 | DragonBones | [切换龙骨动画](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/DragonBones/Creator3.4.2_2D_DragonBones)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030405.gif" width="400" height="300" /></div> |

### Graphics
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 8  |   | [Graphics](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics) |   | [返回顶部](#quick)  |   |
|   | 8.1 | Graphics | [画饼状图](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics/Creator3.4.2_2D_GraphicsArc)  | 官方DEMO | <div align=center><img src="./image/202203/2022030401.png" width="400" height="300" /></div> |
|   | 8.2 | Graphics | [画正方形](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics/Creator3.4.2_2D_GraphicsRect)  | 官方DEMO | <div align=center><img src="./image/202203/2022030402.png" width="400" height="300" /></div> |
|   | 8.3 | Graphics | [画菱形](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics/Creator3.4.2_2D_GraphicsLineTo)  | 官方DEMO | <div align=center><img src="./image/202203/2022030403.png" width="400" height="300" /></div> |
|   | 8.4 | Graphics | [画椭圆形](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics/Creator3.4.2_2D_GraphicsEllipse)  | 官方DEMO | <div align=center><img src="./image/202203/2022030404.png" width="400" height="300" /></div> |
|   | 8.5 | Graphics | [三点画圆](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics/Creator3.4.2_2D_GraphicsDrawCircle)  |  | <div align=center><img src="./gif/202203/2022030411.gif" width="400" height="300" /></div> |
|   | 8.6 | Graphics | [涂鸦](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics/Creator3.4.2_2D_Doodle)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030412.gif" width="400" height="300" /></div> |
|   | 8.7 | Graphics | [画Sine曲线](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics/Creator3.4.2_2D_GraphicsSineWaves)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030413.gif" width="400" height="300" /></div> |
|   | 8.8 | Graphics | [自由画线](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics/Creator3.4.2_2D_DrawLine)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030414.gif" width="400" height="300" /></div> |
|   | 8.9 | Graphics | [烟花爆炸](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics/Creator3.4.2_2D_GraphicsFireworksExplosion)  |  | <div align=center><img src="./gif/202203/2022030415.gif" width="400" height="300" /></div> |
|   | 8.10 | Graphics | [画房子](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Graphics/Creator3.4.2_2D_GraphicsHouse)  |  | <div align=center><img src="./image/202203/2022032101.png" width="400" height="300" /></div> |

### Physics
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 9  |   | [Physics](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics) |   | [返回顶部](#quick)  |   |
|   | 9.1 | Physics | [检测碰撞体是否存在](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsRaycastClosest)  |   | <div align=center><img src="./image/202203/2022030411.jpg" width="400" height="300" /></div>  |
|   | 9.2 | Physics | [射线检测](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsRaycast)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030421.gif" width="400" height="300" /></div> |
|   | 9.3 | Physics | [使用物理材质](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsMaterial)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030422.gif" width="400" height="300" /></div> |
|   | 9.4 | Physics | [使用网格碰撞器组件](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsMeshCollider)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030423.gif" width="400" height="300" /></div> |
|   | 9.5 | Physics | [物体旋转跳跃](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsRotateJumpWithVelocity)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030424.gif" width="400" height="300" /></div> |
|   | 9.6 | Physics | [使用触发器-触发事件](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsTriggerEvent)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030425.gif" width="400" height="300" /></div> |
|   | 9.7 | Physics | [运行时更新碰撞体数据](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsRuntimeUpdate)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030426.gif" width="400" height="300" /></div> |
|   | 9.8 | Physics | [使用平面碰撞器组件](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsPlaneCollider)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030427.gif" width="400" height="300" /></div> |
|   | 9.9 | Physics | [物理同步](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsSync)  | 官方DEMO | <div align=center<img src="./gif/202203/2022030428.gif" width="400" height="300" /></div> |
|   | 9.10 | Physics | [物理分组掩码](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsGroupMask)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030429.gif" width="400" height="300" /></div> |
|   | 9.11 | Physics | [物理动态运行](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsRunDynamic)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030430.gif" width="400" height="300" /></div> |
|   | 9.12 | Physics | [不规则物体碰撞](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsConvexColliders)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030431.gif" width="400" height="300" /></div> |
|   | 9.13 | Physics | [点对点约束](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsPointToPointConstraint)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030432.gif" width="400" height="300" /></div> |
|   | 9.14 | Physics | [碰撞点数据测试](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsContactData)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030433.gif" width="400" height="300" /></div> |
|   | 9.15 | Physics | [链条约束](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsHingeConstraint)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030434.gif" width="400" height="300" /></div> |
|   | 9.16 | Physics | [使用恒力组件](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsForceConstant)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030435.gif" width="400" height="300" /></div> |
|   | 9.17 | Physics | [使用碰撞器-碰撞事件](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsCollisionEvent)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030436.gif" width="400" height="300" /></div> |
|   | 9.18 | Physics | [胶囊体触发器测试](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Physics/Creator3.4.2_3D_PhysicsCapsuleTrigger)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030437.gif" width="400" height="300" /></div> |

### Tween
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 10  |   | [Tween](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Tween) |   | [返回顶部](#quick)  |   |
|   | 10.1 | Tween | [透明度渐变](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Tween/Creator3.4.2_2D_TweenOpacityChange)  |  | <div align=center><img src="./gif/202203/2022030501.gif" width="400" height="300" /></div> |
|   | 10.2 | Tween | [旋转](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Tween/Creator3.4.2_3D_TweenRotateChange)  |  | <div align=center><img src="./gif/202203/2022030502.gif" width="400" height="300" /></div> |
|   | 10.3 | Tween | [环形运动](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Tween/Creator3.4.2_2D_TweenCircleMove)  |   | <div align=center><img src="./gif/202203/2022030503.gif" width="400" height="300" /></div> |
|   | 10.4 | Tween | [旋转并缩放](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Tween/Creator3.4.2_2D_TweenRotateAndScaleForever)  |  | <div align=center><img src="./gif/202203/2022030504.gif" width="400" height="300" /></div> |
|   | 10.5 | Tween | [使用Easing示例](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Tween/Creator3.4.2_2D_TweenShowMonster)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030505.gif" width="400" height="300" /></div> |
|   | 10.6 | Tween | [Tween封装](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Tween/Creator3.4.2_2D_TweenCCUtils)  |   |   |

### Model
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 11  |   | [Model](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Model) |   | [返回顶部](#quick)  |   |
|   | 11.1 | Model | [表情动画](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Model/Creator3.4.2_3D_MorphHead)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030511.gif" width="400" height="300" /></div> |
|   | 11.2 | Model | [跳舞的女人](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Model/Creator3.4.2_3D_DanceWoman)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030512.gif" width="400" height="300" /></div> |
|   | 11.3 | Model | [使用卡通材质](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Model/Creator3.4.2_3D_Toon)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030513.gif" width="400" height="300" /></div> |
|   | 11.4 | Model | [动态加载材质](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Model/Creator3.4.2_3D_DynamicLoadMaterial)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022032701.gif" width="400" height="300" /></div>  |
|   | 11.5 | Model | [冬来了](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Model/Creator3.4.2_3D_Winter)  | 官方DEMO  | <div align=center><img src="./image/202203/2022030501.png" width="400" height="300" /></div>  |
|   | 11.6 | Model | [骑士](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Model/Creator3.4.2_3D_Knight)  | 官方DEMO  | <div align=center><img src="./image/202203/2022030511.png" width="400" height="300" /></div>  |

### Renderer
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 12  |   | [Renderer](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Renderer) |   | [返回顶部](#quick)  |
|   | 12.1 | Renderer | [2D在3D中渲染](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Renderer/Creator3.4.2_2dRenderingIn3d)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030521.gif" width="400" height="300" /></div> |
|   | 12.2 | Renderer | [Web截图](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Renderer/Creator3.4.2_Capture)  |   | <div align=center><img src="./gif/202203/2022030522.gif" width="400" height="300" /></div>  |

### Particle
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 13  |   | [Particle](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle) |   | [返回顶部](#quick)  |   |
|   | 13.1 | Particle | [火焰](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_FlameSimulation)  |  | <div align=center><img src="./gif/202203/2022030531.gif" width="400" height="300" /></div> |
|   | 13.2 | Particle | [粒子拖尾1](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleTrails01)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030532.gif" width="400" height="300" /></div> |
|   | 13.3 | Particle | [粒子拖尾2](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleTrails02)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030533.gif" width="400" height="300" /></div> |
|   | 13.4 | Particle | [粒子拖尾3](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleTrails03)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030534.gif" width="400" height="300" /></div> |
|   | 13.5 | Particle | [粒子拖尾4](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleTrails04)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030535.gif" width="400" height="300" /></div> |
|   | 13.6 | Particle | [颜色模块](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleColor)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030536.gif" width="400" height="300" /></div> |
|   | 13.7 | Particle | [加速度模块](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleForce)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030537.gif" width="400" height="300" /></div> |
|   | 13.8 | Particle | [限速模块](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleLimitVelocity)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030538.gif" width="400" height="300" /></div> |
|   | 13.9 | Particle | [主模块](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleMain)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030539.gif" width="400" height="300" /></div> |
|   | 13.10 | Particle | [渲染模块](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleRenderer)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030540.gif" width="400" height="300" /></div> |
|   | 13.11 | Particle | [旋转模块](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleRotation)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030541.gif" width="400" height="300" /></div> |
|   | 13.12 | Particle | [发射器模块](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleShape)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030542.gif" width="400" height="300" /></div> |
|   | 13.13 | Particle | [大小模块](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleSize)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030543.gif" width="400" height="300" /></div> |
|   | 13.14 | Particle | [贴图动画模块](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleTextureAnimation)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030544.gif" width="400" height="300" /></div> |
|   | 13.15 | Particle | [速度模块](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_3D_ParticleVelocity)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030545.gif" width="400" height="300" /></div> |
|   | 13.16 | Particle | [2D粒子显隐](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_2D_ToggleParticle)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030546.gif" width="400" height="300" /></div> |
|   | 13.17 | Particle | [2D粒子完成后自动移除](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Particle/Creator3.4.2_2D_AutoRemoveParticle)  | 官方DEMO  | <div align=center><img src="./gif/202203/2022030547.gif" width="400" height="300" /></div> |

### DemandCase
| 编号 | 子编号 | 类目 | 子项 | 备注 | 演示 |
| :---: | :---: | :---: |:---: |:---: |:---: |
| 14 |   | [Case](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo) |   | [返回顶部](#quick)  |   |
|   | 14.1 | Case | [物体是否在摄像机范围内](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_3D_ObjectIsInCameraView)  |  |<div align=center><img src="./gif/202203/2022030551.gif" width="400" height="300" /></div> |
|   | 14.2 | Case | [使用动画帧事件](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_UseAnimationFrameEvents)  |  | <div align=center><img src="./gif/202203/2022030561.gif" width="400" height="300" /></div> |
|   | 14.3 | Case | [动态获取脚本的方法名](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_GetScriptFunction)  |  | <div align=center><img src="./image/202203/2022030521.png" width="400" height="300" /></div> |
|   | 14.4 | Case | [动态获取动画属性数据](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_GetAnimationClipDataByTime)  |  |  <div align=center><img src="./image/202203/2022030536.png" width="400" height="300" /></div> |
|   | 14.5 | Case | [点击响应](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_PressResponseTest)  |   |   |
|   | 14.6 | Case | [物体始终在人物右侧](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_3D_ObjectAlwaysFollow)  |   | <div align=center><img src="./gif/202203/2022030562.gif" width="400" height="300" /></div> |
|   | 14.7 | Case | [圆形进度条](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_2D_CircularProgressBar)  |  | <div align=center><img src="./gif/202203/2022030563.gif" width="400" height="300" /></div> |
|   | 14.8 | Case | [椭圆轨迹运动](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_2D_EllipseMove)  |  | <div align=center><img src="./gif/202203/2022030564.gif" width="400" height="300" /></div> |
|   | 14.9 | Case | [贝塞尔曲线路径在线绘制工具](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_BezierCurvePathCreator)  |  | <div align=center><img src="./gif/202203/2022030565.gif" width="400" height="300" /></div> |
|   | 14.10 | Case | [动态加载FBX模型中的Mesh](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_3D_DynamicLoadMesh)  |  | <div align=center><img src="./gif/202203/2022030566.gif" width="400" height="300" /></div> |
|   | 14.11 | Case | [旋转后矩形是否包含点](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_2D_AbovePointTest)  |  | <div align=center><img src="./image/202203/2022030541.png" width="400" height="300" /></div> |
|   | 14.12 | Case | [弯曲的道路](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_3D_RoadCurved)  |  | <div align=center><img src="./image/202203/2022030542.png" width="400" height="300" /></div> |
|   | 14.13 | Case | [3D位置转化](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_ScreenToWorldPoint)  | 官方DEMO | <div align=center><img src="./gif/202203/2022030567.gif" width="400" height="300" /></div> |
|   | 14.14 | Case | [动态生成单色精灵](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_2D_Sprite_AutoGenerateSpriteframe)  |  | <div align=center><img src="./image/202203/2022030543.png" width="400" height="300" /></div> |
|   | 14.15 | Case | [不规则按钮](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_2D_IrregularButton)  |  | <div align=center><img src="./gif/202203/2022030568.gif" width="400" height="300" /></div> |
|   | 14.16 | Case | [自适应最小角度旋转](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_2D_AdaptiveAngleRotation)  |  | <div align=center><img src="./gif/202203/2022032202.gif" width="400" height="300" /></div> |
|   | 14.17 | Case | [自适应最小角度点击旋转](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_2D_AdaptiveRotation)  |  | <div align=center><img src="./gif/202203/2022032201.gif" width="400" height="300" /></div> |
|   | 14.18 | Case | [3D模型上的文字](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.4.x/Demo/Creator3.4.2_3D_LabelOnCube)  |  | <div align=center><img src="./image/202205/2022051701.png" width="400" height="300" /></div> |

### Mark
Cocos Creator How To Use 3.4.x 版本列举效果 109 种，会同步更新到 [Cocos Creator How To Use 3.5.x](https://gitee.com/yeshao2069/cocos-creator-how-to-use/tree/v3.5.x) 版本，后续 Cocos Creator How To Use 3.4.x 将不会同步新的效果，请移步到 3.5.x 版本查看最新效果。