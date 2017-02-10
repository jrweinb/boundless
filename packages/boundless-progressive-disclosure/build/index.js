module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){e.exports=require("boundless-utils-omit-keys")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),a=n.n(s),i=n(1),l=n.n(i),c=n(0),u=n.n(c),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),y=function(e){return"function"==typeof e},g=function(){},h=function(e){function t(){var e,n,p,s;o(this,t);for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=p=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),p.state={expanded:p.props.expanded},p.fireStatefulCallback=function(){return p.props[p.state.expanded?"onExpand":"onHide"]()},p.handleClick=function(e){p.setState({expanded:!p.state.expanded},p.fireStatefulCallback),y(p.props.toggleProps.onClick)&&p.props.toggleProps.onClick(e)},p.handleKeyDown=function(e){"Enter"===e.key&&(e.preventDefault(),p.setState({expanded:!p.state.expanded},p.fireStatefulCallback)),y(p.props.toggleProps.onKeyDown)&&p.props.toggleProps.onKeyDown(e)},s=n,r(p,s)}return p(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){e.expanded!==this.props.expanded&&this.setState({expanded:e.expanded},this.fireStatefulCallback)}},{key:"renderContent",value:function(){if(this.state.expanded)return a.a.createElement("div",{className:"b-disclosure-content"},y(this.props.children)?this.props.children():this.props.children)}},{key:"render",value:function(){return a.a.createElement(this.props.component,d({},u()(this.props,t.internalKeys),{className:l()("b-disclosure",this.props.className,{"b-disclosure-expanded":this.state.expanded})}),a.a.createElement(this.props.toggleComponent,d({},this.props.toggleProps,{className:l()("b-disclosure-toggle",this.props.toggleProps.className),onClick:this.handleClick,onKeyDown:this.handleKeyDown,tabIndex:"0"}),this.state.expanded?this.props.toggleExpandedContent||this.props.toggleContent:this.props.toggleContent),this.renderContent())}}]),t}(a.a.PureComponent);h.propTypes={"*":s.PropTypes.any,children:s.PropTypes.oneOfType([s.PropTypes.node,s.PropTypes.arrayOf(s.PropTypes.node),s.PropTypes.func]),component:s.PropTypes.string,expanded:s.PropTypes.bool,onExpand:s.PropTypes.func,onHide:s.PropTypes.func,toggleComponent:s.PropTypes.string,toggleContent:s.PropTypes.node,toggleExpandedContent:s.PropTypes.node,toggleProps:s.PropTypes.shape({"*":s.PropTypes.any})},h.defaultProps={children:null,component:"div",expanded:!1,onExpand:g,onHide:g,toggleComponent:"div",toggleContent:null,toggleExpandedContent:null,toggleProps:{}},h.internalKeys=Object.keys(h.defaultProps),t.default=h}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGUyMDM4Mjk1YjEwMjBiZWUxODU5Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qczJcIjpcImJvdW5kbGVzcy11dGlscy1vbWl0LWtleXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzMlwiOlwiY2xhc3NuYW1lc1wifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanMyXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9ib3VuZGxlc3MtcHJvZ3Jlc3NpdmUtZGlzY2xvc3VyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImluc3RhbGxlZE1vZHVsZXMiLCJpIiwibCIsImNhbGwiLCJtIiwiYyIsInZhbHVlIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwibiIsIl9fZXNNb2R1bGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJyZXF1aXJlIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwid3JpdGFibGUiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fIiwiX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdCIsIl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jbGFzc25hbWVzX18iLCJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY2xhc3NuYW1lc19fX2RlZmF1bHQiLCJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfYm91bmRsZXNzX3V0aWxzX29taXRfa2V5c19fIiwiX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX2JvdW5kbGVzc191dGlsc19vbWl0X2tleXNfX19kZWZhdWx0IiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiaXNGdW5jdGlvbiIsIngiLCJub29wIiwiUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlIiwiX1JlYWN0JFB1cmVDb21wb25lbnQiLCJfcmVmIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJ0aGlzIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJnZXRQcm90b3R5cGVPZiIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJleHBhbmRlZCIsImZpcmVTdGF0ZWZ1bENhbGxiYWNrIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInNldFN0YXRlIiwidG9nZ2xlUHJvcHMiLCJvbkNsaWNrIiwiaGFuZGxlS2V5RG93biIsInByZXZlbnREZWZhdWx0Iiwib25LZXlEb3duIiwibmV3UHJvcHMiLCJhIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiY29tcG9uZW50IiwiaW50ZXJuYWxLZXlzIiwiYi1kaXNjbG9zdXJlLWV4cGFuZGVkIiwidG9nZ2xlQ29tcG9uZW50IiwidGFiSW5kZXgiLCJ0b2dnbGVFeHBhbmRlZENvbnRlbnQiLCJ0b2dnbGVDb250ZW50IiwicmVuZGVyQ29udGVudCIsIlB1cmVDb21wb25lbnQiLCJwcm9wVHlwZXMiLCIqIiwiYW55Iiwib25lT2ZUeXBlIiwibm9kZSIsImFycmF5T2YiLCJmdW5jIiwic3RyaW5nIiwiYm9vbCIsIm9uRXhwYW5kIiwib25IaWRlIiwic2hhcGUiLCJkZWZhdWx0UHJvcHMiLCJrZXlzIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBT0MsUUFDRSxTQUFVQyxHQ0duQixRQUFBQyxHQUFBQyxHQUdBLEdBQUFDLEVBQUFELEdBQ0EsTUFBQUMsR0FBQUQsR0FBQUgsT0FHQSxJQUFBRCxHQUFBSyxFQUFBRCxJQUNBRSxFQUFBRixFQUNBRyxHQUFBLEVBQ0FOLFdBVUEsT0FOQUMsR0FBQUUsR0FBQUksS0FBQVIsRUFBQUMsUUFBQUQsSUFBQUMsUUFBQUUsR0FHQUgsRUFBQU8sR0FBQSxFQUdBUCxFQUFBQyxRQXZCQSxHQUFBSSxLQStEQSxPQW5DQUYsR0FBQU0sRUFBQVAsRUFHQUMsRUFBQU8sRUFBQUwsRUFHQUYsRUFBQUcsRUFBQSxTQUFBSyxHQUEyQyxNQUFBQSxJQUczQ1IsRUFBQVMsRUFBQSxTQUFBWCxFQUFBWSxFQUFBQyxHQUNBWCxFQUFBWSxFQUFBZCxFQUFBWSxJQUNBRyxPQUFBQyxlQUFBaEIsRUFBQVksR0FDQUssY0FBQSxFQUNBQyxZQUFBLEVBQ0FDLElBQUFOLEtBTUFYLEVBQUFrQixFQUFBLFNBQUFyQixHQUNBLEdBQUFjLEdBQUFkLEtBQUFzQixXQUNBLFdBQTJCLE1BQUF0QixHQUFBLFNBQzNCLFdBQWlDLE1BQUFBLEdBRWpDLE9BREFHLEdBQUFTLEVBQUFFLEVBQUEsSUFBQUEsR0FDQUEsR0FJQVgsRUFBQVksRUFBQSxTQUFBUSxFQUFBQyxHQUFzRCxNQUFBUixRQUFBUyxVQUFBQyxlQUFBbEIsS0FBQWUsRUFBQUMsSUFHdERyQixFQUFBd0IsRUFBQSxHQUdBeEIsSUFBQXlCLEVBQUEsS0RPTSxTQUFVNUIsRUFBUUMsR0V2RXhCRCxFQUFBQyxRQUFBNEIsUUFBQSw4QkY2RU0sU0FBVTdCLEVBQVFDLEdHN0V4QkQsRUFB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RFAsUUFBU2YsS0FBS1csWUFDZE8sVUFBV2xCLEtBQUtnQixjQUNoQlksU0FBUyxNQUNSNUIsS0FBS1EsTUFBTUMsU0FBV1QsS0FBS2IsTUFBTTBDLHVCQUF5QjdCLEtBQUtiLE1BQU0yQyxjQUFnQjlCLEtBQUtiLE1BQU0yQyxlQUdwRzlCLEtBQUsrQixxQkw3QzJoSXJDLEdLdEY5L0hyQixFQUFBK0MsRUFBTVksY0FBcEN0QyxHQUNWdUMsV0FJSEMsSUFBSzlELEVBQUEsVUFBVStELElBR2ZaLFNBQVVuRCxFQUFBLFVBQVVnRSxXQUNoQmhFLEVBQUEsVUFBVWlFLEtBQ1ZqRSxFQUFBLFVBQVVrRSxRQUFRbEUsRUFBQSxVQUFVaUUsTUFDNUJqRSxFQUFBLFVBQVVtRSxPQU1kZixVQUFXcEQsRUFBQSxVQUFVb0UsT0FLckIvQixTQUFVckMsRUFBQSxVQUFVcUUsS0FLcEJDLFNBQVV0RSxFQUFBLFVBQVVtRSxLQUtwQkksT0FBUXZFLEVBQUEsVUFBVW1FLEtBS2xCWixnQkFBaUJ2RCxFQUFBLFVBQVVvRSxPQUszQlYsY0FBZTFELEVBQUEsVUFBVWlFLEtBS3pCUixzQkFBdUJ6RCxFQUFBLFVBQVVpRSxLQUVqQ3ZCLFlBQWExQyxFQUFBLFVBQVV3RSxPQUluQlYsSUFBSzlELEVBQUEsVUFBVStELE9BckROekMsRUF5RFZtRCxjQUNIdEIsU0FBVSxLQUNWQyxVQUFXLE1BQ1hmLFVBQVUsRUFDVmlDLFNBQVVqRCxFQUNWa0QsT0FBUWxELEVBQ1JrQyxnQkFBaUIsTUFDakJHLGNBQWUsS0FDZkQsc0JBQXVCLEtBQ3ZCZixnQkFsRWFwQixFQXFFVitCLGFBQWVuRixPQUFPd0csS0FBS3BELEVBQXNCbUQsY0xpQjIwS3pGLEVBQTZCLFFLdEYvNEtzQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm91bmRsZXNzLXV0aWxzLW9taXQta2V5c1wiKTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fd2VicGFja19leHBvcnRzX18sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY2xhc3NuYW1lc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY2xhc3NuYW1lc19fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX2NsYXNzbmFtZXNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX2JvdW5kbGVzc191dGlsc19vbWl0X2tleXNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX2JvdW5kbGVzc191dGlsc19vbWl0X2tleXNfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9ib3VuZGxlc3NfdXRpbHNfb21pdF9rZXlzX18pO1xudmFyIF9leHRlbmRzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHRhcmdldCl7Zm9yKHZhciBpPTE7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7dmFyIHNvdXJjZT1hcmd1bWVudHNbaV07Zm9yKHZhciBrZXkgaW4gc291cmNlKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLGtleSkpe3RhcmdldFtrZXldPXNvdXJjZVtrZXldO319fXJldHVybiB0YXJnZXQ7fTt2YXIgX2NyZWF0ZUNsYXNzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQscHJvcHMpe2Zvcih2YXIgaT0wO2k8cHJvcHMubGVuZ3RoO2krKyl7dmFyIGRlc2NyaXB0b3I9cHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlPWRlc2NyaXB0b3IuZW51bWVyYWJsZXx8ZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGU9dHJ1ZTtpZihcInZhbHVlXCJpbiBkZXNjcmlwdG9yKWRlc2NyaXB0b3Iud3JpdGFibGU9dHJ1ZTtPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LGRlc2NyaXB0b3Iua2V5LGRlc2NyaXB0b3IpO319cmV0dXJuIGZ1bmN0aW9uKENvbnN0cnVjdG9yLHByb3RvUHJvcHMsc3RhdGljUHJvcHMpe2lmKHByb3RvUHJvcHMpZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUscHJvdG9Qcm9wcyk7aWYoc3RhdGljUHJvcHMpZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3RvcixzdGF0aWNQcm9wcyk7cmV0dXJuIENvbnN0cnVjdG9yO307fSgpO2Z1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fWZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsY2FsbCl7aWYoIXNlbGYpe3Rocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTt9cmV0dXJuIGNhbGwmJih0eXBlb2YgY2FsbD09PVwib2JqZWN0XCJ8fHR5cGVvZiBjYWxsPT09XCJmdW5jdGlvblwiKT9jYWxsOnNlbGY7fWZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcyxzdXBlckNsYXNzKXtpZih0eXBlb2Ygc3VwZXJDbGFzcyE9PVwiZnVuY3Rpb25cIiYmc3VwZXJDbGFzcyE9PW51bGwpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiBzdXBlckNsYXNzKTt9c3ViQ2xhc3MucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyYmc3VwZXJDbGFzcy5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTpzdWJDbGFzcyxlbnVtZXJhYmxlOmZhbHNlLHdyaXRhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWV9fSk7aWYoc3VwZXJDbGFzcylPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLHN1cGVyQ2xhc3MpOnN1YkNsYXNzLl9fcHJvdG9fXz1zdXBlckNsYXNzO312YXIgaXNGdW5jdGlvbj1mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpe3JldHVybiB0eXBlb2YgeD09PSdmdW5jdGlvbic7fTt2YXIgbm9vcD1mdW5jdGlvbiBub29wKCl7fTt2YXIgUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlPWZ1bmN0aW9uKF9SZWFjdCRQdXJlQ29tcG9uZW50KXtfaW5oZXJpdHMoUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlLF9SZWFjdCRQdXJlQ29tcG9uZW50KTtmdW5jdGlvbiBQcm9ncmVzc2l2ZURpc2Nsb3N1cmUoKXt2YXIgX3JlZjt2YXIgX3RlbXAsX3RoaXMsX3JldDtfY2xhc3NDYWxsQ2hlY2sodGhpcyxQcm9ncmVzc2l2ZURpc2Nsb3N1cmUpO2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9QXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31yZXR1cm4gX3JldD0oX3RlbXA9KF90aGlzPV9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsKF9yZWY9UHJvZ3Jlc3NpdmVEaXNjbG9zdXJlLl9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKFByb2dyZXNzaXZlRGlzY2xvc3VyZSkpLmNhbGwuYXBwbHkoX3JlZixbdGhpc10uY29uY2F0KGFyZ3MpKSksX3RoaXMpLF90aGlzLnN0YXRlPXtleHBhbmRlZDpfdGhpcy5wcm9wcy5leHBhbmRlZH0sX3RoaXMuZmlyZVN0YXRlZnVsQ2FsbGJhY2s9ZnVuY3Rpb24oKXtyZXR1cm4gX3RoaXMucHJvcHNbX3RoaXMuc3RhdGUuZXhwYW5kZWQ/J29uRXhwYW5kJzonb25IaWRlJ10oKTt9LF90aGlzLmhhbmRsZUNsaWNrPWZ1bmN0aW9uKGV2ZW50KXtfdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWQ6IV90aGlzLnN0YXRlLmV4cGFuZGVkfSxfdGhpcy5maXJlU3RhdGVmdWxDYWxsYmFjayk7aWYoaXNGdW5jdGlvbihfdGhpcy5wcm9wcy50b2dnbGVQcm9wcy5vbkNsaWNrKSl7X3RoaXMucHJvcHMudG9nZ2xlUHJvcHMub25DbGljayhldmVudCk7fX0sX3RoaXMuaGFuZGxlS2V5RG93bj1mdW5jdGlvbihldmVudCl7aWYoZXZlbnQua2V5PT09J0VudGVyJyl7ZXZlbnQucHJldmVudERlZmF1bHQoKTtfdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWQ6IV90aGlzLnN0YXRlLmV4cGFuZGVkfSxfdGhpcy5maXJlU3RhdGVmdWxDYWxsYmFjayk7fWlmKGlzRnVuY3Rpb24oX3RoaXMucHJvcHMudG9nZ2xlUHJvcHMub25LZXlEb3duKSl7X3RoaXMucHJvcHMudG9nZ2xlUHJvcHMub25LZXlEb3duKGV2ZW50KTt9fSxfdGVtcCksX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsX3JldCk7fV9jcmVhdGVDbGFzcyhQcm9ncmVzc2l2ZURpc2Nsb3N1cmUsW3trZXk6J2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLHZhbHVlOmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpe2lmKG5ld1Byb3BzLmV4cGFuZGVkIT09dGhpcy5wcm9wcy5leHBhbmRlZCl7dGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWQ6bmV3UHJvcHMuZXhwYW5kZWR9LHRoaXMuZmlyZVN0YXRlZnVsQ2FsbGJhY2spO319fSx7a2V5OidyZW5kZXJDb250ZW50Jyx2YWx1ZTpmdW5jdGlvbiByZW5kZXJDb250ZW50KCl7aWYodGhpcy5zdGF0ZS5leHBhbmRlZCl7cmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KCdkaXYnLHtjbGFzc05hbWU6J2ItZGlzY2xvc3VyZS1jb250ZW50J30saXNGdW5jdGlvbih0aGlzLnByb3BzLmNoaWxkcmVuKT90aGlzLnByb3BzLmNoaWxkcmVuKCk6dGhpcy5wcm9wcy5jaGlsZHJlbik7fX19LHtrZXk6J3JlbmRlcicsdmFsdWU6ZnVuY3Rpb24gcmVuZGVyKCl7cmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuY29tcG9uZW50LF9leHRlbmRzKHt9LF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9ib3VuZGxlc3NfdXRpbHNfb21pdF9rZXlzX19fZGVmYXVsdCgpKHRoaXMucHJvcHMsUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlLmludGVybmFsS2V5cykse2NsYXNzTmFtZTpfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY2xhc3NuYW1lc19fX2RlZmF1bHQoKSgnYi1kaXNjbG9zdXJlJyx0aGlzLnByb3BzLmNsYXNzTmFtZSx7J2ItZGlzY2xvc3VyZS1leHBhbmRlZCc6dGhpcy5zdGF0ZS5leHBhbmRlZH0pfSksX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy50b2dnbGVDb21wb25lbnQsX2V4dGVuZHMoe30sdGhpcy5wcm9wcy50b2dnbGVQcm9wcyx7Y2xhc3NOYW1lOl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jbGFzc25hbWVzX19fZGVmYXVsdCgpKCdiLWRpc2Nsb3N1cmUtdG9nZ2xlJyx0aGlzLnByb3BzLnRvZ2dsZVByb3BzLmNsYXNzTmFtZSksb25DbGljazp0aGlzLmhhbmRsZUNsaWNrLG9uS2V5RG93bjp0aGlzLmhhbmRsZUtleURvd24sdGFiSW5kZXg6JzAnfSksdGhpcy5zdGF0ZS5leHBhbmRlZD90aGlzLnByb3BzLnRvZ2dsZUV4cGFuZGVkQ29udGVudHx8dGhpcy5wcm9wcy50b2dnbGVDb250ZW50OnRoaXMucHJvcHMudG9nZ2xlQ29udGVudCksdGhpcy5yZW5kZXJDb250ZW50KCkpO319XSk7cmV0dXJuIFByb2dyZXNzaXZlRGlzY2xvc3VyZTt9KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS5QdXJlQ29tcG9uZW50KTtQcm9ncmVzc2l2ZURpc2Nsb3N1cmUucHJvcFR5cGVzPXsnKic6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJQcm9wVHlwZXNcIl0uYW55LGNoaWxkcmVuOl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fW1wiUHJvcFR5cGVzXCJdLm9uZU9mVHlwZShbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJQcm9wVHlwZXNcIl0ubm9kZSxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX1tcIlByb3BUeXBlc1wiXS5hcnJheU9mKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fW1wiUHJvcFR5cGVzXCJdLm5vZGUpLF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fW1wiUHJvcFR5cGVzXCJdLmZ1bmNdKSxjb21wb25lbnQ6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJQcm9wVHlwZXNcIl0uc3RyaW5nLGV4cGFuZGVkOl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fW1wiUHJvcFR5cGVzXCJdLmJvb2wsb25FeHBhbmQ6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJQcm9wVHlwZXNcIl0uZnVuYyxvbkhpZGU6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJQcm9wVHlwZXNcIl0uZnVuYyx0b2dnbGVDb21wb25lbnQ6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJQcm9wVHlwZXNcIl0uc3RyaW5nLHRvZ2dsZUNvbnRlbnQ6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJQcm9wVHlwZXNcIl0ubm9kZSx0b2dnbGVFeHBhbmRlZENvbnRlbnQ6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJQcm9wVHlwZXNcIl0ubm9kZSx0b2dnbGVQcm9wczpfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX1tcIlByb3BUeXBlc1wiXS5zaGFwZSh7JyonOl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fW1wiUHJvcFR5cGVzXCJdLmFueX0pfTtQcm9ncmVzc2l2ZURpc2Nsb3N1cmUuZGVmYXVsdFByb3BzPXtjaGlsZHJlbjpudWxsLGNvbXBvbmVudDonZGl2JyxleHBhbmRlZDpmYWxzZSxvbkV4cGFuZDpub29wLG9uSGlkZTpub29wLHRvZ2dsZUNvbXBvbmVudDonZGl2Jyx0b2dnbGVDb250ZW50Om51bGwsdG9nZ2xlRXhwYW5kZWRDb250ZW50Om51bGwsdG9nZ2xlUHJvcHM6e319O1Byb2dyZXNzaXZlRGlzY2xvc3VyZS5pbnRlcm5hbEtleXM9T2JqZWN0LmtleXMoUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlLmRlZmF1bHRQcm9wcyk7LyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IFByb2dyZXNzaXZlRGlzY2xvc3VyZTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbmRleC5qcyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUyMDM4Mjk1YjEwMjBiZWUxODU5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm91bmRsZXNzLXV0aWxzLW9taXQta2V5c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qczJcIjpcImJvdW5kbGVzcy11dGlscy1vbWl0LWtleXNcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qczJcIjpcImNsYXNzbmFtZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanMyXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IG9taXQgZnJvbSAnYm91bmRsZXNzLXV0aWxzLW9taXQta2V5cyc7XG5cbmNvbnN0IGlzRnVuY3Rpb24gPSAoeCkgPT4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qKlxuX19IaWRlIGNvbnRlbnQgdW50aWwgaXQncyBuZWVkZWQsIHdpdGggY29uZmlndXJhYmxlIHRlYXNlcnMuX19cblxuTWVjaGFuaWNhbGx5LCBoaWRkZW4gZGlzY2xvc3VyZSBjb250ZW50IGlzIG5vdCByZW5kZXJlZCB0byB0aGUgRE9NIHVudGlsIGl0IGlzIG5lZWRlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFueSBbUmVhY3Qtc3VwcG9ydGVkIGF0dHJpYnV0ZV0oaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90YWdzLWFuZC1hdHRyaWJ1dGVzLmh0bWwjaHRtbC1hdHRyaWJ1dGVzKVxuICAgICAgICAgKi9cbiAgICAgICAgJyonOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgICAgIC8qKiBpZiBhIGZ1bmN0aW9uIGlzIHBhc3NlZCwgaXQgd2lsbCBub3QgYmUgY2FsbGVkIHVudGlsIHRoZSBkaXNjbG9zdXJlIGNvbnRlbnQgaXMgZHVlIHRvIGJlIHJlbmRlcmVkICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgICAgICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICAgICAgICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIF0pLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbnkgdmFsaWQgSFRNTCB0YWcgbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjb250cm9scyB0aGUgUHJvZ3Jlc3NEaXNjbG9zdXJlIFwiZXhwYW5kZWRcIiBzdGF0ZSBkZWNsYXJhdGl2ZWx5XG4gICAgICAgICAqL1xuICAgICAgICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNhbGxlZCB3aGVuIHRoZSBjb250ZW50IGlzIHNob3duOyBub3QgY2FsbGVkIG9uIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNhbGxlZCB3aGVuIHRoZSBjb250ZW50IGlzIGhpZGRlbjsgbm90IGNhbGxlZCBvbiBpbml0aWFsIHJlbmRlclxuICAgICAgICAgKi9cbiAgICAgICAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYW55IHZhbGlkIEhUTUwgdGFnIG5hbWVcbiAgICAgICAgICovXG4gICAgICAgIHRvZ2dsZUNvbXBvbmVudDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogY29udGVudCB0byBiZSBzaG93biBuZXh0IHRvIHRoZSBleHBhbnNpb24gdG9nZ2xlIHdoZW4gdGhlIGRpc2Nsb3N1cmUgaXMgaW4gXCJjb250cmFjdGVkXCIgc3RhdGUsIGUuZy4gXCJTaG93IEFkdmFuY2VkIE9wdGlvbnNcIlxuICAgICAgICAgKi9cbiAgICAgICAgdG9nZ2xlQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNvbnRlbnQgdG8gYmUgc2hvd24gbmV4dCB0byB0aGUgZXhwYW5zaW9uIHRvZ2dsZSB3aGVuIHRoZSBkaXNjbG9zdXJlIGlzIGluIFwiZXhwYW5kZWRcIiBzdGF0ZSwgZS5nLiBcIkhpZGUgQWR2YW5jZWQgT3B0aW9uc1wiXG4gICAgICAgICAqL1xuICAgICAgICB0b2dnbGVFeHBhbmRlZENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgICAgIHRvZ2dsZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBhbnkgW1JlYWN0LXN1cHBvcnRlZCBhdHRyaWJ1dGVdKGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdGFncy1hbmQtYXR0cmlidXRlcy5odG1sI2h0bWwtYXR0cmlidXRlcylcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJyonOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICB9KSxcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiAnZGl2JyxcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICBvbkV4cGFuZDogbm9vcCxcbiAgICAgICAgb25IaWRlOiBub29wLFxuICAgICAgICB0b2dnbGVDb21wb25lbnQ6ICdkaXYnLFxuICAgICAgICB0b2dnbGVDb250ZW50OiBudWxsLFxuICAgICAgICB0b2dnbGVFeHBhbmRlZENvbnRlbnQ6IG51bGwsXG4gICAgICAgIHRvZ2dsZVByb3BzOiB7fSxcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJuYWxLZXlzID0gT2JqZWN0LmtleXMoUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlLmRlZmF1bHRQcm9wcylcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBleHBhbmRlZDogdGhpcy5wcm9wcy5leHBhbmRlZCxcbiAgICB9XG5cbiAgICBmaXJlU3RhdGVmdWxDYWxsYmFjayA9ICgpID0+IHRoaXMucHJvcHNbdGhpcy5zdGF0ZS5leHBhbmRlZCA/ICdvbkV4cGFuZCcgOiAnb25IaWRlJ10oKVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICBpZiAobmV3UHJvcHMuZXhwYW5kZWQgIT09IHRoaXMucHJvcHMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2V4cGFuZGVkOiBuZXdQcm9wcy5leHBhbmRlZH0sIHRoaXMuZmlyZVN0YXRlZnVsQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkfSwgdGhpcy5maXJlU3RhdGVmdWxDYWxsYmFjayk7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5wcm9wcy50b2dnbGVQcm9wcy5vbkNsaWNrKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVQcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2V4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZH0sIHRoaXMuZmlyZVN0YXRlZnVsQ2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5wcm9wcy50b2dnbGVQcm9wcy5vbktleURvd24pKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVByb3BzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJDb250ZW50KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5leHBhbmRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYi1kaXNjbG9zdXJlLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICB7aXNGdW5jdGlvbih0aGlzLnByb3BzLmNoaWxkcmVuKSA/IHRoaXMucHJvcHMuY2hpbGRyZW4oKSA6IHRoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgICAgICAgICAgICAgey4uLm9taXQodGhpcy5wcm9wcywgUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlLmludGVybmFsS2V5cyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnYi1kaXNjbG9zdXJlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAnYi1kaXNjbG9zdXJlLWV4cGFuZGVkJzogdGhpcy5zdGF0ZS5leHBhbmRlZCxcbiAgICAgICAgICAgICAgICB9KX0+XG5cbiAgICAgICAgICAgICAgICA8dGhpcy5wcm9wcy50b2dnbGVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMudG9nZ2xlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2ItZGlzY2xvc3VyZS10b2dnbGUnLCB0aGlzLnByb3BzLnRvZ2dsZVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD0nMCc+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmV4cGFuZGVkID8gdGhpcy5wcm9wcy50b2dnbGVFeHBhbmRlZENvbnRlbnQgfHwgdGhpcy5wcm9wcy50b2dnbGVDb250ZW50IDogdGhpcy5wcm9wcy50b2dnbGVDb250ZW50fVxuICAgICAgICAgICAgICAgIDwvdGhpcy5wcm9wcy50b2dnbGVDb21wb25lbnQ+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XG4gICAgICAgICAgICA8L3RoaXMucHJvcHMuY29tcG9uZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL2JvdW5kbGVzcy1wcm9ncmVzc2l2ZS1kaXNjbG9zdXJlL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==