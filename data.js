window.stickFrames = {
1: [{"top": 104, "angle": 0, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
2: [{"top": 104, "angle": 10, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
3: [{"top": 104, "angle": 20, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
4: [{"top": 104, "angle": 30, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
5: [{"top": 104, "angle": 40, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
6: [{"top": 104, "angle": 50, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
7: [{"top": 104, "angle": 60, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
8: [{"top": 104, "angle": 70, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
9: [{"top": 104, "angle": 80, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
10: [{"top": 104, "angle": 90, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
11: [{"top": 104, "angle": 100, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
12: [{"top": 104, "angle": 110, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
13: [{"top": 104, "angle": 120, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
14: [{"top": 104, "angle": 130, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
15: [{"top": 104, "angle": 140, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
16: [{"top": 104, "angle": 150, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
17: [{"top": 104, "angle": 160, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
18: [{"top": 104, "angle": 170, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
19: [{"top": 104, "angle": 180, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
20: [{"top": 104, "angle": 190, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
21: [{"top": 104, "angle": 200, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
22: [{"top": 104, "angle": 210, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
23: [{"top": 104, "angle": 220, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
24: [{"top": 104, "angle": 230, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
25: [{"top": 104, "angle": 240, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
26: [{"top": 104, "angle": 250, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
27: [{"top": 104, "angle": 260, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
28: [{"top": 104, "angle": 270, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
29: [{"top": 104, "angle": 280, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
30: [{"top": 104, "angle": 290, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
31: [{"top": 104, "angle": 300, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
32: [{"top": 104, "angle": 310, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
33: [{"top": 104, "angle": 320, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
34: [{"top": 104, "angle": 330, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
35: [{"top": 104, "angle": 340, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
36: [{"top": 104, "angle": 350, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
};
var a = / Preparing message /i;
for (var b in turntable) {
    var c = turntable[b];
    if (typeof c !== "function") {
        continue
    }
    c.toString = Function.prototype.toString;
    if (a.test(c.toString())) {
        window.ttApi = c;
    }
}
window.stickersOn = false;
window.stickLtrs = {
' ':[],
a:[{"top": 47, "angle": -64.8000044463, "sticker_id": "4f86fd32e77989117e000001", "left": 170}, {"top": 29, "angle": 64.8000044463, "sticker_id": "4f86fd32e77989117e000001", "left": 217}, {"top": 139, "angle": -64.8000044463, "sticker_id": "4f86fd32e77989117e000001", "left": 127}, {"top": 234, "angle": -64.8000044463, "sticker_id": "4f86fd32e77989117e000001", "left": 86}, {"top": 107, "angle": 64.8000044463, "sticker_id": "4f86fd32e77989117e000001", "left": 255}, {"top": 186, "angle": 64.8000044463, "sticker_id": "4f86fd32e77989117e000001", "left": 295}, {"top": 229, "angle": 64.8000044463, "sticker_id": "4f86fd32e77989117e000001", "left": 315}, {"top": 174, "angle": 0, "sticker_id": "4f86fd32e77989117e000001", "left": 142}, {"top": 174, "angle": 0, "sticker_id": "4f86fd32e77989117e000001", "left": 239}],
b:[{"top": 108, "angle": 90, "sticker_id": "4f86fd27e77989117e000000", "left": 111}, {"top": 196, "angle": 90, "sticker_id": "4f86fd27e77989117e000000", "left": 108}, {"top": 30, "angle": -134.044677235, "sticker_id": "4f86febfe77989117e00000a", "left": 197}, {"top": 74, "angle": -69.8370653796, "sticker_id": "4f86febfe77989117e00000a", "left": 261}, {"top": 116, "angle": 0, "sticker_id": "4f86febfe77989117e00000a", "left": 238}, {"top": 155, "angle": -105.526892869, "sticker_id": "4f86febfe77989117e00000a", "left": 279}, {"top": 210, "angle": -44.5383990314, "sticker_id": "4f86febfe77989117e00000a", "left": 280}, {"top": 141, "angle": 19.5550383292, "sticker_id": "4f86febfe77989117e00000a", "left": 196}, {"top": 246, "angle": 0, "sticker_id": "4f86febfe77989117e00000a", "left": 233}, {"top": 253, "angle": 47.6579577175, "sticker_id": "4f86febfe77989117e00000a", "left": 191}, {"top": 41, "angle": -94.8224318972, "sticker_id": "4f86febfe77989117e00000a", "left": 238}, {"top": 102, "angle": -90, "sticker_id": "4f86fd27e77989117e000000", "left": 87}, {"top": 194, "angle": -90, "sticker_id": "4f86fd27e77989117e000000", "left": 81}],
c:[{"top": 27, "angle": 35.8624595756, "sticker_id": "4f86fea8e77989117e000009", "left": 225}, {"top": 20, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 175}, {"top": 58, "angle": -48.2206072354, "sticker_id": "4f86fea8e77989117e000009", "left": 95}, {"top": 148, "angle": -106.597134175, "sticker_id": "4f86fea8e77989117e000009", "left": 84}, {"top": 201, "angle": -165.182286828, "sticker_id": "4f86fea8e77989117e000009", "left": 155}, {"top": 205, "angle": 164.864312127, "sticker_id": "4f86fea8e77989117e000009", "left": 228}],
d:[{"top": 105, "angle": -90, "sticker_id": "4f86fdede77989117e000003", "left": 66}, {"top": 183, "angle": -90, "sticker_id": "4f86fdede77989117e000003", "left": 66}, {"top": 36, "angle": 0, "sticker_id": "4f86fe15e77989117e000005", "left": 159}, {"top": 57, "angle": 29.5586595364, "sticker_id": "4f86fe15e77989117e000005", "left": 221}, {"top": 113, "angle": 72.1687858785, "sticker_id": "4f86fe15e77989117e000005", "left": 256}, {"top": 181, "angle": 128.695723708, "sticker_id": "4f86fe15e77989117e000005", "left": 249}, {"top": 217, "angle": 162.909836925, "sticker_id": "4f86fe15e77989117e000005", "left": 197}, {"top": 234, "angle": 179.644040539, "sticker_id": "4f86fe15e77989117e000005", "left": 148}, {"top": 106, "angle": -270, "sticker_id": "4f86fdede77989117e000003", "left": 38}, {"top": 193, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 36}],
e:[{"top": 8, "angle": 0, "sticker_id": "4f873b32af173a2903816e52", "left": 107}, {"top": 101, "angle": 0, "sticker_id": "4f873b32af173a2903816e52", "left": 105}, {"top": 193, "angle": 0, "sticker_id": "4f873b32af173a2903816e52", "left": 105}, {"top": 220, "angle": -90, "sticker_id": "4f873b32af173a2903816e52", "left": 181}, {"top": 219, "angle": -90, "sticker_id": "4f873b32af173a2903816e52", "left": 279}, {"top": -5, "angle": -90, "sticker_id": "4f873b32af173a2903816e52", "left": 184}, {"top": -2, "angle": -90, "sticker_id": "4f873b32af173a2903816e52", "left": 286}, {"top": 107, "angle": -90, "sticker_id": "4f873b32af173a2903816e52", "left": 195}],
f:[{"top": 38, "angle": 90, "sticker_id": "4f86fd32e77989117e000001", "left": 105}, {"top": 131, "angle": 90, "sticker_id": "4f86fd32e77989117e000001", "left": 105}, {"top": 223, "angle": 90, "sticker_id": "4f86fd32e77989117e000001", "left": 105}, {"top": 15, "angle": 0, "sticker_id": "4f86fd32e77989117e000001", "left": 185}, {"top": 14, "angle": 0, "sticker_id": "4f86fd32e77989117e000001", "left": 285}, {"top": 135, "angle": 0, "sticker_id": "4f86fd32e77989117e000001", "left": 188}],
g:[{"top": 106, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 52}, {"top": 199, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 329}, {"top": 14, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 115}, {"top": 218, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 98}, {"top": 161, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 56}, {"top": 50, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 55}, {"top": 2, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 193}, {"top": 231, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 248}, {"top": 146, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 340}, {"top": 138, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 232}, {"top": 10, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 255}, {"top": 238, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 167}, {"top": 49, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 308}],
h:[{"top": 17, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 117}, {"top": 81, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 117}, {"top": 145, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 117}, {"top": 210, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 117}, {"top": 120, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 177}, {"top": 120, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 235}, {"top": 17, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 296}, {"top": 78, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 296}, {"top": 140, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 296}, {"top": 200, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 296}],
i:[{"top": 37, "angle": 0, "sticker_id": "4f86fe33e77989117e000006", "left": 102}, {"top": 39, "angle": 0, "sticker_id": "4f86fe33e77989117e000006", "left": 207}, {"top": 70, "angle": 0, "sticker_id": "4f86fe33e77989117e000006", "left": 101}, {"top": 70, "angle": 0, "sticker_id": "4f86fe33e77989117e000006", "left": 216}, {"top": 144, "angle": -90, "sticker_id": "4f86fe33e77989117e000006", "left": 144}, {"top": 145, "angle": -90, "sticker_id": "4f86fe33e77989117e000006", "left": 175}, {"top": 224, "angle": 0, "sticker_id": "4f86fe33e77989117e000006", "left": 89}, {"top": 230, "angle": 0, "sticker_id": "4f86fe33e77989117e000006", "left": 236}, {"top": 251, "angle": 0, "sticker_id": "4f86fe33e77989117e000006", "left": 97}, {"top": 253, "angle": 0, "sticker_id": "4f86fe33e77989117e000006", "left": 236}],
j:[{"top": 36, "angle": 0, "sticker_id": "4f86fdede77989117e000003", "left": 127}, {"top": 36, "angle": 0, "sticker_id": "4f86fdede77989117e000003", "left": 249}, {"top": 65, "angle": 0, "sticker_id": "4f86fdede77989117e000003", "left": 126}, {"top": 67, "angle": 0, "sticker_id": "4f86fdede77989117e000003", "left": 253}, {"top": 103, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 274}, {"top": 163, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 274}, {"top": 216, "angle": -33.4071956086, "sticker_id": "4f86fd3ee77989117e000002", "left": 269}, {"top": 244, "angle": -20.325716036, "sticker_id": "4f86fd3ee77989117e000002", "left": 222}, {"top": 252, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 184}, {"top": 238, "angle": 30.457404323, "sticker_id": "4f86fd3ee77989117e000002", "left": 138}, {"top": 202, "angle": 69.9094811057, "sticker_id": "4f86fd3ee77989117e000002", "left": 107}],
k:[{"top": 64, "angle": -90, "sticker_id": "4f86fe84e77989117e000008", "left": 89}, {"top": 193, "angle": -90, "sticker_id": "4f86fe84e77989117e000008", "left": 90}, {"top": 196, "angle": -90, "sticker_id": "4f86fe84e77989117e000008", "left": 124}, {"top": 65, "angle": -90, "sticker_id": "4f86fe84e77989117e000008", "left": 120}, {"top": 58, "angle": -40.7683339702, "sticker_id": "4f86fe84e77989117e000008", "left": 192}, {"top": 84, "angle": -40.7683339702, "sticker_id": "4f86fe84e77989117e000008", "left": 208}, {"top": 184, "angle": 50.6232511843, "sticker_id": "4f86fe84e77989117e000008", "left": 220}, {"top": 207, "angle": 50.6232511843, "sticker_id": "4f86fe84e77989117e000008", "left": 198}],
l:[{"top": 85, "angle": 90, "sticker_id": "4f86fd27e77989117e000000", "left": 37}, {"top": 190, "angle": 90, "sticker_id": "4f86fd27e77989117e000000", "left": 36}, {"top": 85, "angle": -90, "sticker_id": "4f86fd27e77989117e000000", "left": 63}, {"top": 191, "angle": -90, "sticker_id": "4f86fd27e77989117e000000", "left": 64}, {"top": 247, "angle": 0, "sticker_id": "4f86fd27e77989117e000000", "left": 156}, {"top": 271, "angle": 0, "sticker_id": "4f86fd27e77989117e000000", "left": 155}],
m:[{"top": 77, "angle": 90, "sticker_id": "4f86fe33e77989117e000006", "left": 41}, {"top": 83, "angle": 90, "sticker_id": "4f86fe33e77989117e000006", "left": 68}, {"top": 202, "angle": 90, "sticker_id": "4f86fe33e77989117e000006", "left": 44}, {"top": 202, "angle": 90, "sticker_id": "4f86fe33e77989117e000006", "left": 68}, {"top": 59, "angle": 39.5213529711, "sticker_id": "4f86fe33e77989117e000006", "left": 138}, {"top": 79, "angle": 39.5213529711, "sticker_id": "4f86fe33e77989117e000006", "left": 117}, {"top": 70, "angle": -47.7997165149, "sticker_id": "4f86fe33e77989117e000006", "left": 210}, {"top": 86, "angle": -47.7997165149, "sticker_id": "4f86fe33e77989117e000006", "left": 232}, {"top": 82, "angle": 90, "sticker_id": "4f86fe33e77989117e000006", "left": 275}, {"top": 203, "angle": 90, "sticker_id": "4f86fe33e77989117e000006", "left": 276}, {"top": 81, "angle": 90, "sticker_id": "4f86fe33e77989117e000006", "left": 296}, {"top": 204, "angle": 90, "sticker_id": "4f86fe33e77989117e000006", "left": 304}],
n:[{"top": 77, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 41}, {"top": 83, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 68}, {"top": 202, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 44}, {"top": 202, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 68}, {"top": 66, "angle": 49.8607988576, "sticker_id": "4f86fdede77989117e000003", "left": 138}, {"top": 83, "angle": 49.8607988576, "sticker_id": "4f86fdede77989117e000003", "left": 112}, {"top": 195, "angle": 49.8607988576, "sticker_id": "4f86fdede77989117e000003", "left": 234}, {"top": 216, "angle": 49.8607988576, "sticker_id": "4f86fdede77989117e000003", "left": 210}, {"top": 82, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 275}, {"top": 203, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 276}, {"top": 81, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 296}, {"top": 204, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 304}],
o:[{"top": 106, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 52}, {"top": 199, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 329}, {"top": 14, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 115}, {"top": 218, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 98}, {"top": 161, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 56}, {"top": 50, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 55}, {"top": 2, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 193}, {"top": 231, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 248}, {"top": 146, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 340}, {"top": 101, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 334}, {"top": 10, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 255}, {"top": 238, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 167}, {"top": 49, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 308}],
p:[{"top": 87, "angle": 0, "sticker_id": "4f86fe06e77989117e000004", "left": 183},{"top": 79, "angle": -90, "sticker_id": "4f86fdede77989117e000003", "left": 99}, {"top": 192, "angle": -90, "sticker_id": "4f86fdede77989117e000003", "left": 99}, {"top": 76, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 73}, {"top": 193, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 71}, {"top": 22, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 198}, {"top": 29, "angle": 19.6524538701, "sticker_id": "4f86fd3ee77989117e000002", "left": 251}, {"top": 55, "angle": 54.1910643332, "sticker_id": "4f86fd3ee77989117e000002", "left": 294}, {"top": 96, "angle": 85.8818595191, "sticker_id": "4f86fd3ee77989117e000002", "left": 305}, {"top": 144, "angle": 115.741714535, "sticker_id": "4f86fd3ee77989117e000002", "left": 295}, {"top": 169, "angle": -196.453743277, "sticker_id": "4f86fd3ee77989117e000002", "left": 259}, {"top": 177, "angle": -180, "sticker_id": "4f86fd3ee77989117e000002", "left": 202}],
q:[{"top": 342.634399414, "angle": 0, "sticker_id": "4f86fd27e77989117e000000", "left": 300}, {"top": 89, "angle": 0, "sticker_id": "4f86fe06e77989117e000004", "left": 171}, {"top": 186, "angle": 59.4660087513, "sticker_id": "4f86febfe77989117e00000a", "left": 98}, {"top": 79, "angle": -70.0501497587, "sticker_id": "4f86febfe77989117e00000a", "left": 298}, {"top": 17, "angle": 232.932787471, "sticker_id": "4f86febfe77989117e00000a", "left": 267}, {"top": 5, "angle": 182.449211536, "sticker_id": "4f86febfe77989117e00000a", "left": 195}, {"top": 19, "angle": 155.074664034, "sticker_id": "4f86febfe77989117e00000a", "left": 128}, {"top": 120, "angle": 111.170434439, "sticker_id": "4f86febfe77989117e00000a", "left": 77}, {"top": 217, "angle": 46.3262133646, "sticker_id": "4f86febfe77989117e00000a", "left": 148}, {"top": 215, "angle": -0.548364005788, "sticker_id": "4f86febfe77989117e00000a", "left": 217}, {"top": 55, "angle": 139.335584417, "sticker_id": "4f86febfe77989117e00000a", "left": 92}, {"top": 215, "angle": -63.4887982239, "sticker_id": "4f86febfe77989117e00000a", "left": 311}, {"top": 186, "angle": -384.206416801, "sticker_id": "4f86febfe77989117e00000a", "left": 271}, {"top": 126, "angle": -56.1803531509, "sticker_id": "4f86febfe77989117e00000a", "left": 299}],
r:[{"top": 79, "angle": -90, "sticker_id": "4f86fdede77989117e000003", "left": 99}, {"top": 192, "angle": -90, "sticker_id": "4f86fdede77989117e000003", "left": 99}, {"top": 76, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 73}, {"top": 193, "angle": 90, "sticker_id": "4f86fdede77989117e000003", "left": 71}, {"top": 22, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 198}, {"top": 29, "angle": 19.6524538701, "sticker_id": "4f86fd3ee77989117e000002", "left": 251}, {"top": 55, "angle": 54.1910643332, "sticker_id": "4f86fd3ee77989117e000002", "left": 294}, {"top": 96, "angle": 85.8818595191, "sticker_id": "4f86fd3ee77989117e000002", "left": 305}, {"top": 144, "angle": 115.741714535, "sticker_id": "4f86fd3ee77989117e000002", "left": 295}, {"top": 169, "angle": -196.453743277, "sticker_id": "4f86fd3ee77989117e000002", "left": 259}, {"top": 177, "angle": -180, "sticker_id": "4f86fd3ee77989117e000002", "left": 202}, {"top": 227, "angle": 36.0758760175, "sticker_id": "4f86fdede77989117e000003", "left": 186}, {"top": 207, "angle": 34.9839036215, "sticker_id": "4f86fdede77989117e000003", "left": 211}],
s:[{"top": 3, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 197}, {"top": 11, "angle": 19.6524538701, "sticker_id": "4f86fd3ee77989117e000002", "left": 257}, {"top": 40, "angle": 54.1910643332, "sticker_id": "4f86fd3ee77989117e000002", "left": 298}, {"top": 26, "angle": -33.7872200899, "sticker_id": "4f86fd3ee77989117e000002", "left": 147}, {"top": 70, "angle": -88.6969999733, "sticker_id": "4f86fd3ee77989117e000002", "left": 118}, {"top": 116, "angle": -136.337783275, "sticker_id": "4f86fd3ee77989117e000002", "left": 138}, {"top": 134, "angle": -180.717015844, "sticker_id": "4f86fd3ee77989117e000002", "left": 181}, {"top": 136, "angle": -166.874042282, "sticker_id": "4f86fd3ee77989117e000002", "left": 239}, {"top": 159, "angle": -138.912460585, "sticker_id": "4f86fd3ee77989117e000002", "left": 295}, {"top": 190, "angle": 250.435266429, "sticker_id": "4f86fd3ee77989117e000002", "left": 323}, {"top": 232, "angle": -68.559460322, "sticker_id": "4f86fd3ee77989117e000002", "left": 313}, {"top": 259, "angle": -21.9416331903, "sticker_id": "4f86fd3ee77989117e000002", "left": 266}, {"top": 263, "angle": 0, "sticker_id": "4f86fd3ee77989117e000002", "left": 210}, {"top": 252, "angle": 23.5080731032, "sticker_id": "4f86fd3ee77989117e000002", "left": 148}, {"top": 222, "angle": 48.1040754974, "sticker_id": "4f86fd3ee77989117e000002", "left": 93}],
t:[{"top": 19, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 62}, {"top": 16, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 172}, {"top": 17, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 284}, {"top": 107, "angle": 90, "sticker_id": "4f86fea8e77989117e000009", "left": 155}, {"top": 207, "angle": 90, "sticker_id": "4f86fea8e77989117e000009", "left": 165}, {"top": 50, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 64}, {"top": 45, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 167}, {"top": 48, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 279}, {"top": 107, "angle": 90, "sticker_id": "4f86fea8e77989117e000009", "left": 206}, {"top": 194, "angle": 90, "sticker_id": "4f86fea8e77989117e000009", "left": 204}],
u:[{"top": 127, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 43}, {"top": 199, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 329}, {"top": 35, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 37}, {"top": 218, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 98}, {"top": 175, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 54}, {"top": 83, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 38}, {"top": 4, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 35}, {"top": 231, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 248}, {"top": 146, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 340}, {"top": 101, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 334}, {"top": 4, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 328}, {"top": 238, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 167}, {"top": 47, "angle": 0, "sticker_id": "4f86fea8e77989117e000009", "left": 333}],
v:[{"top": 72, "angle": 54.0258728641, "sticker_id": "4f86fe33e77989117e000006", "left": 47}, {"top": 193, "angle": 54.0258728641, "sticker_id": "4f86fe33e77989117e000006", "left": 128}, {"top": 93, "angle": 54.0258728641, "sticker_id": "4f86fe33e77989117e000006", "left": 30}, {"top": 199, "angle": 54.0258728641, "sticker_id": "4f86fe33e77989117e000006", "left": 105}, {"top": 197, "angle": -54.0258728641, "sticker_id": "4f86fe33e77989117e000006", "left": 185}, {"top": 211, "angle": -54.0258728641, "sticker_id": "4f86fe33e77989117e000006", "left": 215}, {"top": 70, "angle": -54.0258728641, "sticker_id": "4f86fe33e77989117e000006", "left": 277}, {"top": 89, "angle": -54.0258728641, "sticker_id": "4f86fe33e77989117e000006", "left": 296}],
w:[{"top": 72, "angle": 70, "sticker_id": "4f86fdede77989117e000003", "left": 47}, {"top": 198, "angle": 70, "sticker_id": "4f86fdede77989117e000003", "left": 99}, {"top": 93, "angle": 70, "sticker_id": "4f86fdede77989117e000003", "left": 30}, {"top": 206, "angle": 70, "sticker_id": "4f86fdede77989117e000003", "left": 73}, {"top": 198, "angle": 103.915455714, "sticker_id": "4f86fdede77989117e000003", "left": 129}, {"top": 202, "angle": 104.070548432, "sticker_id": "4f86fdede77989117e000003", "left": 157}, {"top": 196, "angle": 70, "sticker_id": "4f86fdede77989117e000003", "left": 220}, {"top": 199, "angle": -69.4033429401, "sticker_id": "4f86fdede77989117e000003", "left": 270}, {"top": 208, "angle": 70, "sticker_id": "4f86fdede77989117e000003", "left": 200}, {"top": 190, "angle": -69.4033429401, "sticker_id": "4f86fdede77989117e000003", "left": 241}, {"top": 76, "angle": -69.4033429401, "sticker_id": "4f86fdede77989117e000003", "left": 288}, {"top": 83, "angle": -69.4033429401, "sticker_id": "4f86fdede77989117e000003", "left": 316}],
x:[{"top": 79, "angle": 50, "sticker_id": "4f86fdede77989117e000003", "left": 78}, {"top": 195, "angle": 50, "sticker_id": "4f86fdede77989117e000003", "left": 221}, {"top": 66, "angle": 50, "sticker_id": "4f86fdede77989117e000003", "left": 106}, {"top": 216, "angle": 50, "sticker_id": "4f86fdede77989117e000003", "left": 198}, {"top": 189, "angle": -50, "sticker_id": "4f86fdede77989117e000003", "left": 86}, {"top": 210, "angle": -50, "sticker_id": "4f86fdede77989117e000003", "left": 112}, {"top": 59, "angle": -50, "sticker_id": "4f86fdede77989117e000003", "left": 211}, {"top": 77, "angle": -50, "sticker_id": "4f86fdede77989117e000003", "left": 235}],
y:[{"top": 79, "angle": 50, "sticker_id": "4f86fd27e77989117e000000", "left": 78}, {"top": 66, "angle": 50, "sticker_id": "4f86fd27e77989117e000000", "left": 106}, {"top": 189, "angle": -50, "sticker_id": "4f86fd27e77989117e000000", "left": 86}, {"top": 198, "angle": -50, "sticker_id": "4f86fd27e77989117e000000", "left": 118}, {"top": 59, "angle": -50, "sticker_id": "4f86fd27e77989117e000000", "left": 211}, {"top": 77, "angle": -50, "sticker_id": "4f86fd27e77989117e000000", "left": 235}],
z:[{"top": 18, "angle": -90, "sticker_id": "4f873b32af173a2903816e52", "left": 117}, {"top": 15, "angle": -90, "sticker_id": "4f873b32af173a2903816e52", "left": 205}, {"top": 15, "angle": -90, "sticker_id": "4f873b32af173a2903816e52", "left": 297}, {"top": 65, "angle": 52.5258675285, "sticker_id": "4f873b32af173a2903816e52", "left": 288}, {"top": 116, "angle": 52.5258675285, "sticker_id": "4f873b32af173a2903816e52", "left": 206}, {"top": 178, "angle": 52.5258675285, "sticker_id": "4f873b32af173a2903816e52", "left": 131}, {"top": 217, "angle": 90, "sticker_id": "4f873b32af173a2903816e52", "left": 114}, {"top": 212, "angle": 90, "sticker_id": "4f873b32af173a2903816e52", "left": 218}, {"top": 208, "angle": 90, "sticker_id": "4f873b32af173a2903816e52", "left": 299}, {"top": 259, "angle": 0, "sticker_id": "4f86fe06e77989117e000004", "left": 391}]
}
window.myStickers = {
mine:[{top: -33, angle: 239.72956817,left: -72,sticker_id: "4f86febfe77989117e00000a"},
	{top: 262, angle: 405.246818091,left: 475,sticker_id: "4f86febfe77989117e00000a"},
	{top: 311,angle: 134.200708478,left: -23,sticker_id: "4f86febfe77989117e00000a"},
	{top: -64,angle: 309.397160525,left: 424,sticker_id: "4f86febfe77989117e00000a"},
	{top: 261,angle: 0,left: 203,sticker_id: "4f873b32af173a2903816e52"},
	{top: 152,angle: -0.350701903825,left: -106,sticker_id: "4f86fe84e77989117e000008"},
	{top: 147,angle: 0.00230560844905,left: -147,sticker_id: "4f86fe33e77989117e000006"}]
};
window.currFrm = 0;