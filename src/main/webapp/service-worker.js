if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,r,c)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+a.slice(1)};return Promise.all(r.map((a=>{switch(a){case"exports":return i;case"module":return s;default:return e(a)}}))).then((e=>{const a=c(...e);return i.default||(i.default=a),i}))})))}}define("./service-worker.js",["./workbox-f163abaa"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"725ab3b2a79a5ae39b26fba495548910"},{url:"js/extensions.min.js",revision:"adae2bddf90d292f9e6297db50f39dd3"},{url:"js/stencils.min.js",revision:"c170a229d8726934c0d6b04c2214a36c"},{url:"js/shapes-14-6-5.min.js",revision:"2a45abd06dfe78e69135e9f87f9b78d3"},{url:"js/math-print.js",revision:"9d98c920695f6c3395da4b68f723e60a"},{url:"index.html",revision:"6d4fee0a8111a8faf43063d25ceea2dc"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/grapheditor.css",revision:"a02a5d8342a82adf17798f4eae85befc"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"87d5d01385c5d0f0c4c4f5d0f3532826"},{url:"js/croppie/croppie.min.css",revision:"fc297c9002c79c15a132f13ee3ec427e"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"56a66f46dc3a454959c8220a9a79cc83"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"2ce6e99d95113e9ca6b24343cea202e0"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"f7a38ee065b927f3e9568213709e5b84"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"375a89b2a867264a395f384d00eeba13"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"197ed5837ed27992688fc424699a9a78"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"ec6e55011746305549024292f46270bd"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"74878fb4834967aa4a68647cab7888c1"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"293aa21acaf0a3349686f420b2be874a"},{url:"connect/confluence/viewer-init.js",revision:"4a60c6c805cab7bc782f1e52f7818d9f"},{url:"connect/confluence/viewer.js",revision:"c5fb629e12fd3256c23cc8acfaa46f5b"},{url:"connect/confluence/viewer-1-4-42.html",revision:"c7b38b3af4eb7a58ab6dc4791216530e"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"ea920e51a37c0b54d7187e0ee2791b5d"},{url:"connect/confluence/includeDiagram.html",revision:"538252ed4fed6d5e9f4e53b35954c116"},{url:"connect/confluence/macro-editor.js",revision:"e273a48b8e81faac4530bf1a68d75aa0"},{url:"math/MathJax.js",revision:"b2c103388b71bb3d11cbf9aa45fe9b68"},{url:"math/config/TeX-MML-AM_SVG-full.js",revision:"d5cb8ac04050983170ae4af145bc66ff"},{url:"math/jax/output/SVG/fonts/TeX/fontdata.js",revision:"495e5a410955d1b6178870e605890ede"},{url:"math/jax/element/mml/optable/BasicLatin.js",revision:"cac9b2e71382e62270baa55fab07cc13"},{url:"math/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",revision:"e3e5e4d5924beed29f0844550b5c8f46"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js",revision:"0767cbad7275b53da128e7e5e1109f7c"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js",revision:"346302a5c5ee00e01c302148c56dbfe3"},{url:"resources/dia.txt",revision:"b27e8770b0fc71f51c97a80bed58ec4e"},{url:"resources/dia_am.txt",revision:"ff59ef2ea422e962065b978f74f1989e"},{url:"resources/dia_ar.txt",revision:"b53a2876e65d205d42c0217216db0a0b"},{url:"resources/dia_bg.txt",revision:"5ae6ea7a2b816b32ded88cb15651dbfc"},{url:"resources/dia_bn.txt",revision:"f8775fef4398d0863d1c95b92f778f14"},{url:"resources/dia_bs.txt",revision:"1a5bbe8e6e02b215c7457d9735ada682"},{url:"resources/dia_ca.txt",revision:"d8ac61cb5b3e5d47f9ce8160c8b2f057"},{url:"resources/dia_cs.txt",revision:"aeaa9d93c19d60a9ab385a21d57f025c"},{url:"resources/dia_da.txt",revision:"5e0221a99a3fdf557b5ccf72965d99b2"},{url:"resources/dia_de.txt",revision:"d3ad299dc8cfbd2a34479edfafce74ad"},{url:"resources/dia_el.txt",revision:"80761a88228f85296bfc029bf5340718"},{url:"resources/dia_eo.txt",revision:"4544b6600298fe72d2d516fd135c54fa"},{url:"resources/dia_es.txt",revision:"863e0e73d4cdf95093461ef0157e13e5"},{url:"resources/dia_et.txt",revision:"3a47c1b462102c60e47e0f7d6e07d379"},{url:"resources/dia_eu.txt",revision:"92c451283a83cae2d83460b1b0aaf1c4"},{url:"resources/dia_fa.txt",revision:"c56a53dac116441fac2a6e6a110b4fcf"},{url:"resources/dia_fi.txt",revision:"fcc968a8202ebe596bb4efa31d5c55b7"},{url:"resources/dia_fil.txt",revision:"0c98b10b2ce7660502fab8f8a09216c0"},{url:"resources/dia_fr.txt",revision:"550ba55018af500d82b2ade74f49d6a6"},{url:"resources/dia_gl.txt",revision:"d9dedee9a17ce0e98cac6a641dbd1b17"},{url:"resources/dia_gu.txt",revision:"6d6d7e768e1d255dcb9f9abf87676787"},{url:"resources/dia_he.txt",revision:"404b9e323e5bbbecb63ea4a58385431a"},{url:"resources/dia_hi.txt",revision:"8c4436fda7e9278685d9d5d6e0942ae9"},{url:"resources/dia_hr.txt",revision:"38cf52a7e23c4e8796d0cbb7ea217f7e"},{url:"resources/dia_hu.txt",revision:"e17887d5e7057c80ec1da14fe7749c52"},{url:"resources/dia_id.txt",revision:"32c8349f2744c3b6023fd17742eb1c2c"},{url:"resources/dia_it.txt",revision:"57eba100f012d139d00543c31060cf04"},{url:"resources/dia_ja.txt",revision:"cbb7bea7bd120272c6dfe0d6f0ca85f4"},{url:"resources/dia_kn.txt",revision:"ca9045d8ab0d3c8448228187c8ba77cd"},{url:"resources/dia_ko.txt",revision:"ea4948e5456ac276658b0071172dee82"},{url:"resources/dia_lt.txt",revision:"05955be58d94abc2707dea99394a60db"},{url:"resources/dia_lv.txt",revision:"47aa1bcdd23457cd5f3026db7a357fc9"},{url:"resources/dia_ml.txt",revision:"5735f8afcd3fb73882147629d044e368"},{url:"resources/dia_mr.txt",revision:"8e891bbae07ac6fbe9038e8d19fb66fd"},{url:"resources/dia_ms.txt",revision:"ea1992800627d8e54c54d54d1078cd50"},{url:"resources/dia_my.txt",revision:"b27e8770b0fc71f51c97a80bed58ec4e"},{url:"resources/dia_nl.txt",revision:"a158a142f848a44f4b9a86b2c71de770"},{url:"resources/dia_no.txt",revision:"a73fe6de8d13ff09b57022c6152de435"},{url:"resources/dia_pl.txt",revision:"a731cde706b7b10c2bb9b8b804ecf99e"},{url:"resources/dia_pt-br.txt",revision:"6d5aef2fa11b45c7e089a78d8f8077d9"},{url:"resources/dia_pt.txt",revision:"e39267e6c115d3dfff18734d9512396a"},{url:"resources/dia_ro.txt",revision:"e2485ba528fffc006ddc16a2bdbba588"},{url:"resources/dia_ru.txt",revision:"4e4dff4df4bb635eab4648a31718bb71"},{url:"resources/dia_si.txt",revision:"b27e8770b0fc71f51c97a80bed58ec4e"},{url:"resources/dia_sk.txt",revision:"aa39fa602751e960c408b51bc4d1e9a3"},{url:"resources/dia_sl.txt",revision:"a1e9ea18592a3520a564da53754435f1"},{url:"resources/dia_sr.txt",revision:"ee7f392d230f3acf9ee64e59912d2240"},{url:"resources/dia_sv.txt",revision:"d1af4adc3abc689e2b2877348fe3a80e"},{url:"resources/dia_sw.txt",revision:"ee11057cc33d2db3915810afa98e4fb8"},{url:"resources/dia_ta.txt",revision:"64633496007987935476811363899867"},{url:"resources/dia_te.txt",revision:"b67de98cc3819f31d6aedc4a8e332d3f"},{url:"resources/dia_th.txt",revision:"bf3564b735dddb73bafa110e1ba4f364"},{url:"resources/dia_tr.txt",revision:"e66e3a8530b0bda46ff6de26598a637b"},{url:"resources/dia_uk.txt",revision:"1ea94afcd9c9383c784ceae2896c8af4"},{url:"resources/dia_vi.txt",revision:"2ea8a953b560713a201dff1d8d3917dd"},{url:"resources/dia_zh-tw.txt",revision:"7a19eef01a4ee231cc05d3b3833bba4f"},{url:"resources/dia_zh.txt",revision:"f609cb57ae40941ae6c8165f89d7aed0"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
