// class sdp {
//     parse(txt) {}
//     stringify() {}
//     add(type, val)
//     del(type)
//     m(type) {}
//     c() {}
//     v() {}
// };

// class SdpMedia {
//     add(type, val) {}
//     del(type) {}
//     a(type) {}
//     c() {}
// }

// sdp.parse(str);
// sdp.stringify();

// sdp.v("0")
// sdp.o("0")
// sdp.s("0")
// sdp.i("0")
// sdp.u("0")
// sdp.e("0")
// sdp.p("0")
// sdp.c("0")
// sdp.b("0")
// sdp.z("0")
// sdp.k("0")
// sdp.t("0")
// sdp.r("0")
// sdp.m("audio/video/application").a("mid", "video")      // set a=mid:video
//                                 .a("mid")               // return video
//                                 .a("rtcp-mux", true)    // toggle rtcp-mux on
//                                 .c("IN IP4 172.17.0.1") // set c=IN IP4 172.17.0.1
//                                 .remove("a=ice-ufrag:") // remove attr with prefix a=ice-ufrag:
//                                 .payload()              // return payload types [0, 1, 2]
//                                 .payload([0, 1, 2])     // set payload types [0, 1, 2]
//                                 .rtpmap(0, "H264")      // set payload map 0 H264
//                                 .rtcpfb(0)              // get rtcp-fb attr of payload 0
//                                 .rtcpfb(0, ["", "", ,"", ""])  // set rtcp-fb attr of payload 0
//                                 .fmtp(0, "")            // set fmtp for payload 0

const log = console.log;

class Sdp {
    constructor(str) {
        this._v = null;
        this._o = null;
        this._s = null;
        this._i = null;
        this._u = null;
        this._e = null;
        this._p = null;
        this._c = null;
        this._b = null;
        this._z = null;
        this._k = null;
        this._t = null;
        this._r = null;
        this._m = {};
    }
    v(val) {
        return (arguments.length == 0 ? this._v : (this._v = val, this));
    }
    o(val) {
        return (arguments.length == 0 ? this._o : (this._o = val, this));
    }
    s(val) {
        return (arguments.length == 0 ? this._s : (this._s = val, this));
    }
    i(val) {
        return (arguments.length == 0 ? this._i : (this._i = val, this));
    }
    u(val) {
        return (arguments.length == 0 ? this._u : (this._u = val, this));
    }
    e(val) {
        return (arguments.length == 0 ? this._e : (this._e = val, this));
    }
    p(val) {
        return (arguments.length == 0 ? this._p : (this._p = val, this));
    }
    c(val) {
        return (arguments.length == 0 ? this._c : (this._c = val, this));
    }
    b(val) {
        return (arguments.length == 0 ? this._b : (this._b = val, this));
    }
    z(val) {
        return (arguments.length == 0 ? this._z : (this._z = val, this));
    }
    k(val) {
        return (arguments.length == 0 ? this._k : (this._k = val, this));
    }
    t(val) {
        return (arguments.length == 0 ? this._t : (this._t = val, this));
    }
    r(val) {
        return (arguments.length == 0 ? this._r : (this._r = val, this));
    }
    m(type) {
        return this._m[type];
    }
}
class SdpMedia {
    constructor() {
        this._a = [];
        this._c = null;
    }
}

//var sdp = new Sdp("");
//sdp.v("v").o("o").s("s").i("i").u("u").e("e").p("p").c("c").b("b").z("z").k("k").t("t").r("r");
//log(sdp);

