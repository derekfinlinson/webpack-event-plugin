class WebpackEventPlugin {
    /**
    * @constructor
    * @param {object} events - Event hooks to run callbacks for
    */
    constructor(events) {
        this.events = events;
    }

    /**
    * Apply plugin to webpack
    * @param {object} compiler
    */
    apply(compiler) {
        for (let event of this.events) {
            compiler.hooks[event.hook].tap('Webpack Event Plugin', event.callback);
        }
    }
}

module.exports = WebpackEventPlugin;