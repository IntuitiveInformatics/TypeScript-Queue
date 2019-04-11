var CustomNode = /** @class */ (function () {
    function CustomNode(message, next) {
        if (next === void 0) { next = null; }
        this.message = message;
        this.next = next;
    }
    CustomNode.prototype.setNext = function (node) {
        this.next = node;
    };
    return CustomNode;
}());
