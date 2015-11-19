//间距类
function Margin(top, left, right, bottom) {
    this.top = top;
    this.left = left;
    this.right = right;
    this.bottom = bottom;
}

//可以移动的控件
function ElementObj(name, type, margin, panding, color, width, height, x, y) {
    this.name = name;
    this.type = type;
    this.margin = margin;
    this.panding = panding;
    this.color = color;
    this.width = width;
    this.height = height;
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
    this.element = this.ToElement();
}

var moveElement = null;

var DragDrop = function DragDrop(canvas) {
    this.canvas = document.getElementById(canvas);

    //初始化
    this.init = function () {
        var margin = new Margin(10, 10, 10, 10);
        var panding = new Margin(10, 10, 10, 10);
        var eleobj = new ElementObj("elementobj", "div", margin, panding, "red", 300, 200, 50, 60);
        AddElementObj(eleobj);
        AttachMoveEvent(eleobj);

        var margin = new Margin(2, 3, 2, 10);
        var panding = new Margin(1, 2, 10, 10);
        var eleobj2 = new ElementObj("elementobj", "div", margin, panding, "green", 200, 160, 20, 30);
        AddElementObj(eleobj2);
        AttachMoveEvent(eleobj2);
    };

    //添加element对象
    this.AddElementObj = function (obj) {
        this.canvas.appendChild(obj.element);
    };

    //添加移动事件
    this.AttachMoveEvent = function (obj) {
        obj.element.onmousedown = function (event) {
            moveElement = obj;
            moveElement.clientX = event.clientX;
            moveElement.clientY = event.clientY;
        };
        obj.element.onmouseup = function (event) {
            var e = event ? event : window.event;
            var disX = e.clientX - moveElement.clientX;
            var disY = e.clientY - moveElement.clientY;
            moveElement.x = moveElement.x + disX;
            moveElement.y = moveElement.y + disY;
            moveElement = null;
        };
    };

    document.onmousemove = function (event) {
        var e = event ? event : window.event;
        if (moveElement != null) {
            var disX = e.clientX - moveElement.clientX;
            var disY = e.clientY - moveElement.clientY;
            moveElement.element.style.left = moveElement.x + disX + "px";
            moveElement.element.style.top = moveElement.y + disY + "px";
        }
    };

    this.init();
}