import React, {PropTypes} from 'react';
import cx from 'classnames';

import isFunction from '../boundless-utils-is-function/index';
import isString from '../boundless-utils-is-string/index';
import omit from '../boundless-utils-omit-keys/index';

export default class Input extends React.PureComponent {
    static propTypes = {
        /**
         * triggers the placeholder to disappear when the input field is focused, reappears when the user has tabbed away or focus is moved
         */
        hidePlaceholderOnFocus: PropTypes.bool,

        /**
         * props to be passed through to the input node, `.b-textual-input`; this includes the standard set of React input props like `defaultValue`, `value`, `name`, `placeholder`, `autoFocus`, etc.
         */
        inputProps: PropTypes.shape({
            defaultValue: PropTypes.string,
            onBlur: PropTypes.func,
            onFocus: PropTypes.func,
            onChange: PropTypes.func,
            placeholder: PropTypes.string,
            type: PropTypes.string,
            value: PropTypes.string,
        }),
    }

    static defaultProps = {
        hidePlaceholderOnFocus: true,
        inputProps: {
            type: 'text',
        },
    }

    static internalKeys = Object.keys(Input.defaultProps)

    state = {
        input: '',
        isControlled: isString(this.props.inputProps.value),
        isFocused: false,
    }

    componentWillMount() {
        if (this.state.isControlled === true) {
            return this.setInputValue(this.props.inputProps.value);
        }

        this.setInputValue(this.props.inputProps.defaultValue);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.inputProps.value !== this.props.inputProps.value) {
            this.setInputValue(nextProps.inputProps.value);
        }
    }

    setInputValue = (value = '') => this.setState({input: value})

    getValue = () => this.refs.field.value

    setValue(nextValue) {
        this.setInputValue(nextValue);
        this.refs.field.value = nextValue;

        if (this.state.isControlled === true) {
            // simulate input change event flow
            this.refs.field.dispatchEvent(new Event('input', {bubbles: true}));
            this.refs.field.dispatchEvent(new Event('change', {bubbles: true}));
        }
    }

    handleBlur = (event) => {
        this.setState({isFocused: false});

        if (isFunction(this.props.inputProps.onBlur) === true) {
            this.props.inputProps.onBlur(event);
        }
    }

    handleFocus = (event) => {
        this.setState({isFocused: true});

        if (isFunction(this.props.inputProps.onFocus) === true) {
            this.props.inputProps.onFocus(event);
        }
    }

    handleChange = (event) => {
        // for "controlled" scenarios, updates to the cached input text should come
        // exclusively via props (cWRP) so it exactly mirrors the current application
        // state, otherwise a re-render will occur before the new text has completed its
        // feedback loop and the cursor position is lost
        if (this.state.isControlled === false) {
            this.setInputValue(event.target.value);
        }

        if (isFunction(this.props.inputProps.onChange) === true) {
            this.props.inputProps.onChange(event);
        }
    }

    getPlaceholderText() {
        const isNonEmpty = this.state.input !== '';
        const shouldShowPlaceholder =   this.props.hidePlaceholderOnFocus === true
                                        ? this.state.isFocused === false && isNonEmpty === false
                                        : isNonEmpty === false;

        return shouldShowPlaceholder ? this.props.inputProps.placeholder : '';
    }

    renderPlaceholder() {
        return (
            <div ref='placeholder' className='b-input-placeholder b-input'>
                {this.getPlaceholderText()}
            </div>
        );
    }

    render() {
        const {props} = this;

        return (
            <div
                {...omit(props, Input.internalKeys)}
                ref='wrapper'
                className={cx('b-input-wrapper', props.className)}
                title={this.getPlaceholderText()}>
                {this.renderPlaceholder()}

                <input
                    {...props.inputProps}
                    ref='field'
                    className={cx('b-input', props.inputProps.className)}
                    placeholder={null}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange} />
            </div>
        );
    }
}