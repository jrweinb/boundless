import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import omit from '../boundless-utils-omit-keys/index';
import uuid from '../boundless-utils-uuid/index';

export const PORTAL_DATA_ATTRIBUTE = 'data-portal-id';

export default class Portal extends React.Component {
    static propTypes = {
        // single child only - arrays not allowed

        /**
         * any normal React child, but must be singular; multiple sibling children must have a common wrapper, such as a "layout" `<div>`

         * ✅ OK:

         * ```jsx
         * <Portal>
         *   foo
         * </Portal>

         * <Portal>
         *   <div>foo</div>
         * </Portal>

         * <Portal>
         *   <div>
         *       <div>foo</div>
         *       <div>bar</div>
         *   </div>
         * </Portal>
         * ```

         * ⛔️ Not OK:

         * ```jsx
         * <Portal>
         *   <div>foo</div>
         *   <div>bar</div>
         * </Portal>
         * ```
         */
        children: React.PropTypes.node.isRequired,

        /**
         * the location to append the generated portal and child elements
         */
        destination: PropTypes.instanceOf(HTMLElement),

        /**
         * the ID used to link the portal origin to the destination; added to generated `<div>` appended to the destination HTML node
         */
        portalId: PropTypes.string,
    }

    static defaultProps = {
        children: null,
        destination: document.body,
        portalId: null,
    }

    static internalKeys = Object.keys(Portal.defaultProps)

    id = uuid()

    // the <div> that the children are rendered into
    $portal = null

    // the top-level child rendered into the $portal
    $passenger = null;

    componentWillMount() {
        this.$portal = document.createElement('div');
        this.props.destination.appendChild(this.$portal);

        this.renderPortalledContent();
    }

    renderPortalledContent() {
        const child = React.isValidElement(this.props.children) ? this.props.children : (<div>{this.props.children}</div>);

        // update the portal ID link if needed
        this.$portal.id = this.props.portalId || this.id;

        ReactDOM.unstable_renderSubtreeIntoContainer(this, child, this.$portal);
        this.$passenger = this.$portal.children[0];
    }

    componentDidUpdate() { this.renderPortalledContent(); }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.$portal);
        this.props.destination.removeChild(this.$portal);
    }

    render() {
        return (
            <span
                {...omit(this.props, Portal.internalKeys)}
                {...{[PORTAL_DATA_ATTRIBUTE]: this.props.portalId || this.id}} />
        );
    }
}