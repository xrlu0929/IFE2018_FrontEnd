// 设置数据点颜色
function setColor(data) {
    let barColor;
    let g, b, r;
    b = 0;
    switch (data.product) {
        case "手机":
            g = 0;
            b = 21
            break;
        case "笔记本":
            g = 200;
            b = 100;
            break;
        case "智能音箱":
            g = 102;
            b = 200;
            break;
        default:
            break;
    }
    switch (data.region) {
        case "华东":
            r = 255;
            break;
        case "华北":
            r = 153;
            break;
        case "华南":
            r = 21;
            break;
        default:
            break;
    }
    barColor = rgb(r, g, b);
    return barColor;
}

function rgb(r, g, b){
  return ["rgb(",r,",",g,",",b,")"].join("");
}