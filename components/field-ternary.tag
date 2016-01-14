<field-ternary>

    <div class="uk-button-group">
        <button class="uk-button uk-button-large uk-{ value === null ? 'active' : 'default'}" onclick={setNull}>{ opts.labelNull || '&mdash;'}</button>
        <button class="uk-button uk-button-large uk-button-{ value === true ? 'success' : 'default'}" onclick={setTrue}>{ opts.labelTrue || 'Yes' }</button>
        <button class="uk-button uk-button-large uk-button-{ value === false ? 'danger' : 'default'}" onclick={setFalse}>{ opts.labelFalse || 'No' }</button>
    </div>

    <script>

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

        setNull() {
            this.$setValue(null);
        }

        setTrue() {
            this.$setValue(true);
        }

        setFalse() {
            this.$setValue(false);
        }

    </script>

</field-ternary>
