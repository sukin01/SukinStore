//间距类
function Margin(top, left, right, bottom) {
    this.top = top;
    this.left = left;
    this.right = right;
    this.bottom = bottom;
}

//控件基类
function BaseObj(name, type, margin, panding, color, width, height) {
    this.name = name;
    this.type = type;
    this.margin = margin;
    this.panding = panding;
    this.color = color;
    this.width = width;
    this.height = height;
    this.ToElement = function () {
        var element = document.createElement(type);
        element.setAttribute("name", name);
        element.style.height = this.height + "px";
        element.style.width = this.width + "px";
        element.style.background = this.color;
        element.style.marginLeft = this.margin.left + "px";
        element.style.marginRight = this.margin.right + "px";
        element.style.marginTop = this.margin.top + "px";
        element.style.marginBottom = this.margin.bottom + "px";
        element.style.position = "absolute";
        return element;
    };
}

//可以移动的控件
function MoveObj(name, type, margin, panding, color, width, height, x, y) {
    BaseObj.apply(this, [name, type, margin, panding, color, width, height]);
    this.x = x;
    this.y = y;
    this.ToElement = function () {
        var element = document.createElement(type);
        element.setAttribute("name", name);
        element.style.height = this.height + "px";
        element.style.width = this.width + "px";
        element.style.background = this.color;
        element.style.marginLeft = this.margin.left + "px";
        element.style.marginRight = this.margin.right + "px";
        element.style.marginTop = this.margin.top + "px";
        element.style.marginBottom = this.margin.bottom + "px";
        element.style.position = "absolute";
        element.style.left = this.x + "px";
        element.style.top = this.y + "px";
        return element;
    };
}

var DragDrop = function DragDrop(canvas) {
    this.canvas = document.getElementById(canvas);

    //初始化
    this.init = function () {
        var margin = new Margin(10, 10, 10, 10);
        var panding = new Margin(10, 10, 10, 10);
        var moveobj1 = new MoveObj("move1", "div", margin, panding, "red", 300, 200, 50, 60);
        AddObj(moveobj1.ToElement());
    };

    this.AddObj = function (obj) {
        this.canvas.appendChild(obj);
    };

    this.init();
}