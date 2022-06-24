// pages/index1/index1.js
Page({
    
    data: {
    },
    A2s:function(){
        this.setData({
            A2:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/A0.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    A2e:function(){
        this.setData({
            A2:'white'
        })
    },
    B2s:function(){
        this.setData({
            B2:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/B0.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    B2e:function(){
        this.setData({
            B2:'white'
        })
    },
    C1s:function(){
        this.setData({
            C1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/C1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    C1e:function(){
        this.setData({
            C1:'white'
        })
    },
    D1s:function(){
        this.setData({
            D1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/D1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    D1e:function(){
        this.setData({
            D1:'white'
        })
    },
    E1s:function(){
        this.setData({
            E1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/E1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    E1e:function(){
        this.setData({
            E1:'white'
        })
    },
    F1s:function(){
        this.setData({
            F1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/F1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    F1e:function(){
        this.setData({
            F1:'white'
        })
    },
    G1s:function(){
        this.setData({
            G1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/G1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    G1e:function(){
        this.setData({
            G1:'white'
        })
    },
    A1s:function(){
        this.setData({
            A1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/A1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    A1e:function(){
        this.setData({
            A1:'white'
        })
    },
    B1s:function(){
        this.setData({
            B1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/B1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    B1e:function(){
        this.setData({
            B1:'white'
        })
    },
    C0s:function(){
        this.setData({
            C0:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/C2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    C0e:function(){
        this.setData({
            C0:'white'
        })
    },
    D0s:function(){
        this.setData({
            D0:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/D2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    D0e:function(){
        this.setData({
            D0:'white'
        })
    },
    E0s:function(){
        this.setData({
            E0:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/E2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    E0e:function(){
        this.setData({
            E0:'white'
        })
    },
    F0s:function(){
        this.setData({
            F0:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/F2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    F0e:function(){
        this.setData({
            F0:'white'
        })
    },
    G0s:function(){
        this.setData({
            G0:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/G2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    G0e:function(){
        this.setData({
            G0:'white'
        })
    },
    A0s:function(){
        this.setData({
            A0:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/A2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    A0e:function(){
        this.setData({
            A0:'white'
        })
    },
    B0s:function(){
        this.setData({
            B0:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/B2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    B0e:function(){
        this.setData({
            B0:'white'
        })
    },
    cs:function(){
        this.setData({
            c:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/C3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    ce:function(){
        this.setData({
            c:'white'
        })
    },
    ds:function(){
        this.setData({
            d:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/D3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    de:function(){
        this.setData({
            d:'white'
        })
    },
    es:function(){
        this.setData({
            e:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/E3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    ee:function(){
        this.setData({
            e:'white'
        })
    },
    fs:function(){
        this.setData({
            f:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/F3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    fe:function(){
        this.setData({
            f:'white'
        })
    },
    gs:function(){
        this.setData({
            g:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/G3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    ge:function(){
        this.setData({
            g:'white'
        })
    },
    as:function(){
        this.setData({
            a:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/A3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    ae:function(){
        this.setData({
            a:'white'
        })
    },
    bs:function(){
        this.setData({
            b:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/B3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    be:function(){
        this.setData({
            b:'white'
        })
    },
    c1s:function(){
        this.setData({
            c1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/C4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    c1e:function(){
        this.setData({
            c1:'white'
        })
    },
    d1s:function(){
        this.setData({
            d1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/D4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    d1e:function(){
        this.setData({
            d1:'white'
        })
    },
    e1s:function(){
        this.setData({
            e1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/E4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    e1e:function(){
        this.setData({
            e1:'white'
        })
    },
    f1s:function(){
        this.setData({
            f1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/F4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    f1e:function(){
        this.setData({
            f1:'white'
        })
    },
    g1s:function(){
        this.setData({
            g1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/G4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    g1e:function(){
        this.setData({
            g1:'white'
        })
    },
    a1s:function(){
        this.setData({
            a1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/A4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    a1e:function(){
        this.setData({
            a1:'white'
        })
    },
    b1s:function(){
        this.setData({
            b1:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/B4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    b1e:function(){
        this.setData({
            b1:'white'
        })
    },
    c2s:function(){
        this.setData({
            c2:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/C5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    c2e:function(){
        this.setData({
            c2:'white'
        })
    },
    d2s:function(){
        this.setData({
            d2:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/D5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    d2e:function(){
        this.setData({
            d2:'white'
        })
    },
    e2s:function(){
        this.setData({
            e2:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/E5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    e2e:function(){
        this.setData({
            e2:'white'
        })
    },
    f2s:function(){
        this.setData({
            f2:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/F5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    f2e:function(){
        this.setData({
            f2:'white'
        })
    },
    g2s:function(){
        this.setData({
            g2:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/G5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    g2e:function(){
        this.setData({
            g2:'white'
        })
    },
    a2s:function(){
        this.setData({
            a2:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/A5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    a2e:function(){
        this.setData({
            a2:'white'
        })
    },
    b2s:function(){
        this.setData({
            b2:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/B5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    b2e:function(){
        this.setData({
            b2:'white'
        })
    },
    c3s:function(){
        this.setData({
            c3:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/C6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    c3e:function(){
        this.setData({
            c3:'white'
        })
    },
    d3s:function(){
        this.setData({
            d3:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/D6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    d3e:function(){
        this.setData({
            d3:'white'
        })
    },
    e3s:function(){
        this.setData({
            e3:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/E6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    e3e:function(){
        this.setData({
            e3:'white'
        })
    },
    f3s:function(){
        this.setData({
            f3:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/F6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    f3e:function(){
        this.setData({
            f3:'white'
        })
    },
    g3s:function(){
        this.setData({
            g3:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/G6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    g3e:function(){
        this.setData({
            g3:'white'
        })
    },
    a3s:function(){
        this.setData({
            a3:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/A6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    a3e:function(){
        this.setData({
            a3:'white'
        })
    },
    b3s:function(){
        this.setData({
            b3:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/B6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    b3e:function(){
        this.setData({
            b3:'white'
        })
    },
    c4s:function(){
        this.setData({
            c4:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/C7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    c4e:function(){
        this.setData({
            c4:'white'
        })
    },
    d4s:function(){
        this.setData({
            d4:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/D7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    d4e:function(){
        this.setData({
            d4:'white'
        })
    },
    e4s:function(){
        this.setData({
            e4:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/E7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    e4e:function(){
        this.setData({
            e4:'white'
        })
    },
    f4s:function(){
        this.setData({
            f4:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/F7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    f4e:function(){
        this.setData({
            f4:'white'
        })
    },
    g4s:function(){
        this.setData({
            g4:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/G7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    g4e:function(){
        this.setData({
            g4:'white'
        })
    },
    a4s:function(){
        this.setData({
            a4:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/A7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    a4e:function(){
        this.setData({
            a4:'white'
        })
    },
    b4s:function(){
        this.setData({
            b4:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/B7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    b4e:function(){
        this.setData({
            b4:'white'
        })
    }, 
    c5s:function(){
        this.setData({
            c5:'red'
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/C8.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    c5e:function(){
        this.setData({
            c5:'white'
        })
    },                                 
    A2b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#A0.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    C1b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#C1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    D1b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#D1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    F1b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#F1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    G1b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#G1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    A1b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#A1.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    C0b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#C2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    D0b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#D2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    F0b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#F2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    G0b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#G2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    A0b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#A2.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    cb:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#C3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    db:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#D3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    fb:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#F3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    gb:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#G3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    ab:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#A3.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    c1b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#C4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    d1b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#D4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    f1b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#F4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    g1b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#G4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    a1b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#A4.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    c2b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#C5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    d2b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#D5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    f2b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#F5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    g2b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#G5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    a2b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#A5.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    c3b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#C6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    d3b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#D6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    f3b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#F6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    g3b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#G6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    a3b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#A6.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    c4b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#C7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    d4b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#D7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    f4b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#F7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    g4b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#G7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },
    a4b:function(){
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
        innerAudioContext.loop = false // 是否循环播放，默认为 false
        wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
        obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
        success: function (e) {},
            fail: function (e) {}
        })
        innerAudioContext.src ='/pages/image/#A7.mp3'; // 音频资源的地址
        innerAudioContext.onPlay()
    },              
})