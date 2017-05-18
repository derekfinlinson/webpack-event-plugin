function WebpackEventPlugin(events) {
    this.events = events;
}

WebpackEventPlugin.prototype.apply = function (compiler) {
    for (let event of this.events) {
        compiler.plugin(event.hook, event.callback);
    }
}

module.exports = WebpackEventPlugin;