(function () {
    /**
     * Bench object
     * @param {Scene} scene    parent Scene
     * @param {object} options options to be passed
     */
    var Bench = function (scene, options) {
        _DerbySimulator.prototype.object.call(this, scene, options, {
                position: 0,
                offset: {
                    x: 0,
                    y: 0
                }
            });

        this.objectName = 'bench';

        // parent root
        this.scene = scene;
        scene.registerObject(this);

        // Create the chairs
        if (parseInt('' + this.opt.position, 10) === 0) {
            this.chairs = [
                new _DerbySimulator.prototype.Chair({
                    x: 1400,
                    y: -830
                }),
                new _DerbySimulator.prototype.Chair({
                    x: 1450,
                    y: -780
                }),
                new _DerbySimulator.prototype.Chair({
                    x: 1500,
                    y: -730
                }),
                new _DerbySimulator.prototype.Chair({
                    x: 1550,
                    y: -680
                }),
                new _DerbySimulator.prototype.Chair({
                    x: 1600,
                    y: -630
                })
            ];
        } else {
            this.chairs = [
                new _DerbySimulator.prototype.Chair({
                    x: 1400,
                    y: 800
                }),
                new _DerbySimulator.prototype.Chair({
                    x: 1450,
                    y: 750
                }),
                new _DerbySimulator.prototype.Chair({
                    x: 1500,
                    y: 700
                }),
                new _DerbySimulator.prototype.Chair({
                    x: 1550,
                    y: 650
                }),
                new _DerbySimulator.prototype.Chair({
                    x: 1600,
                    y: 600
                })
            ];
        }

        // Build graphical element
        this.element = this.buildElement();
        scene.addElement(this.element);
    };

    Bench.prototype = _DerbySimulator.prototype.inherits({

        /**
         * Build the graphical element
         * @returns {DomElement} SVG element
         */
        buildElement: function () {
            var element;
            if (parseInt('' + this.opt.position, 10) === 0) {
                element = new _DerbySimulator.prototype.SvgElement('g', {
                    class: 'bench',
                    transform: 'matrix(0.707 0.707 -0.707 0.707 ' + (this.opt.offset.x + 1400) + ' ' + (this.opt.offset.y - 900) + ')',
                    id: this.id
                });
            } else {
                element = new _DerbySimulator.prototype.SvgElement('g', {
                    class: 'bench',
                    transform: 'matrix(0.707 -0.707 0.707 0.707 ' + (this.opt.offset.x + 1325) + ' ' + (this.opt.offset.y + 805) + ')',
                    id: this.id
                });
            }

            element.appendChild(new _DerbySimulator.prototype.SvgElement('rect', {
                class: 'bench',
                x: 0,
                y: 0,
                width: 400,
                height: 100
            }));

            element.appendChild(new _DerbySimulator.prototype.SvgElement('text', {
                fill: 'green',
                style: 'font-size:60px',
                class: 'noselect',
                x: 200,
                y: 65,
                'text-anchor': 'middle',
                transform: 'matrix(1 0 0 1 0 0)'
            }, document.createTextNode('Bench')));

            return element;
        }
    });

    _DerbySimulator.prototype.Bench = Bench;
})();