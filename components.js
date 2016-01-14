riot.tag2('field-ternary', '<div class="uk-button-group"> <button class="uk-button uk-button-large uk-{value === null ? \'active\' : \'default\'}" onclick="{setNull}">{opts.labelNull || \'&mdash;\'}</button> <button class="uk-button uk-button-large uk-button-{value === true ? \'success\' : \'default\'}" onclick="{setTrue}">{opts.labelTrue || \'Yes\'}</button> <button class="uk-button uk-button-large uk-button-{value === false ? \'danger\' : \'default\'}" onclick="{setFalse}">{opts.labelFalse || \'No\'}</button> </div>', '', '', function(opts) {

        if (opts.cls) {
            App.$(this.button).addClass(opts.cls.replace(/uk\-form\-/g, 'uk-button-'));
        }

        this.value = null;

        this.$updateValue = function(value) {

            if (value !== true && value !== false) {
                value = null;
            }

            if (this.value != value) {

                this.value = value;
                this.update();
            }

        }.bind(this);

        this.setNull = function() {
            this.$setValue(null);
        }.bind(this)

        this.setTrue = function() {
            this.$setValue(true);
        }.bind(this)

        this.setFalse = function() {
            this.$setValue(false);
        }.bind(this)

}, '{ }');
