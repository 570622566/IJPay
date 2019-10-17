/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7e4bdab33dc60e4a2d3908b2a7943c25"
  },
  {
    "url": "assets/css/0.styles.98f35480.css",
    "revision": "d42be60f84fab4de0eefc58d29673dcb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0ee5d5dd.js",
    "revision": "e128a2191cd35e154d1c5a88b6d4315e"
  },
  {
    "url": "assets/js/11.8d1d6df7.js",
    "revision": "185d5ed243fc1ced7b911bff724d075f"
  },
  {
    "url": "assets/js/12.ab88f08f.js",
    "revision": "b31f4a0e920508f6b2a626bbb2691e7b"
  },
  {
    "url": "assets/js/13.cff68904.js",
    "revision": "779fcab86378db0e0e888530bbc26e1a"
  },
  {
    "url": "assets/js/14.d0fb9a65.js",
    "revision": "b43559a8a56145316bd3127fe3c0962c"
  },
  {
    "url": "assets/js/15.e94908dc.js",
    "revision": "9940fc2df38a43fb71a05b974270ed71"
  },
  {
    "url": "assets/js/16.5a7081ec.js",
    "revision": "980264ef4634771ff9c91ed19dd1f993"
  },
  {
    "url": "assets/js/17.b936cb2b.js",
    "revision": "189c543dbf8ef524bc6776557b26be41"
  },
  {
    "url": "assets/js/18.4573dd51.js",
    "revision": "00de76401ab690df83763c4af39f7dcc"
  },
  {
    "url": "assets/js/19.79f59511.js",
    "revision": "fb367694f5e1de9914f8f516a5e444cf"
  },
  {
    "url": "assets/js/20.86418bfc.js",
    "revision": "084b9b8e143e8f2bd3303d5d0b1adafb"
  },
  {
    "url": "assets/js/21.ca894ae4.js",
    "revision": "8d75e576b0618e40fc5305b310b02218"
  },
  {
    "url": "assets/js/22.d67a432a.js",
    "revision": "e3a1c18dbbf1fe097ad27cbeb2e55dc2"
  },
  {
    "url": "assets/js/23.441d06a7.js",
    "revision": "49d1de84708cb88037dbc14329f36c44"
  },
  {
    "url": "assets/js/24.46ffd626.js",
    "revision": "7e7eae5ad1a1f8b48a7f2b7de6b65b91"
  },
  {
    "url": "assets/js/25.c68bae67.js",
    "revision": "d4039827f1e8c4c533c750bb7701053f"
  },
  {
    "url": "assets/js/3.1277c491.js",
    "revision": "f4045b4c9a8f19a8e3b1ca75411a0384"
  },
  {
    "url": "assets/js/4.360b7ee4.js",
    "revision": "3147867522c6181727af1f19a07f1b85"
  },
  {
    "url": "assets/js/5.bd703a74.js",
    "revision": "9fe81fd5ec441c02effddc15cb90b471"
  },
  {
    "url": "assets/js/6.be4c4d64.js",
    "revision": "e98bfb9ca633a475a49bc2a40b1c0a2b"
  },
  {
    "url": "assets/js/7.6d10b10f.js",
    "revision": "90a1c8cc7a39d9e913bf11ae0bf05cfc"
  },
  {
    "url": "assets/js/8.11380d7c.js",
    "revision": "8a9aee0727b031e68d8c56122a88d570"
  },
  {
    "url": "assets/js/9.d5eb2bd1.js",
    "revision": "a9cb02a966a77beae346058bf4464f7f"
  },
  {
    "url": "assets/js/app.1808ce15.js",
    "revision": "d972f515c6f7f589279e2fd86543eabb"
  },
  {
    "url": "assets/js/vendors~notification.008be287.js",
    "revision": "f0f92cd3cf3c78c6de00ecd43409eb96"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "b266bd5258f5da34c1d76c004152d6c7"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "175da96f0b1fc0335818cce4b860b3bd"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "1d8b4cd320fa978df27623399ec3397f"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "bdf968abb451b4efaa84e58a3e66deff"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "4328ecebabffe04488420a75f200ccfd"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "58b66c865abe22b15b33408eec9c1fe7"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "4fe0e9af4c83de20f595025516f207a6"
  },
  {
    "url": "guide/http.html",
    "revision": "a74df38066879eba3228f1660787513e"
  },
  {
    "url": "guide/index.html",
    "revision": "cf4eea9bf3454d245651f173ab7820ec"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "5ab79cd13dbb3410a89c94bac8c7b2b2"
  },
  {
    "url": "guide/maven.html",
    "revision": "b8ef78962e596e1b5809438b7ce7ee8b"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "24277ab15189c3f3c65ce535a915162e"
  },
  {
    "url": "guide/resource.html",
    "revision": "48edc43176f6321d76b5cde43130e918"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "bfc8113441b2fa859a4797281b17e77d"
  },
  {
    "url": "guide/weixin/tnw.html",
    "revision": "1ec3d2f6938bc052f33f1651cf979f7e"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "5f33d46fb2671b19a997cd94044fb531"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "98e67ca0189ecd9484af9740bd6589ac"
  },
  {
    "url": "index.html",
    "revision": "9eac38eb30c5564fe53ddc9b60571126"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "519a6443adb0110d19e3bf9f273d5f62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
