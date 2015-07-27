# `UIKit/UICheckbox`
##An accessible checkbox with indeterminate support.

UICheckbox is implemented as a "controlled input", meaning it is a direct representation of the model data passed inside. User interaction will bubble changes in the form of `onChecked` and `onUnchecked` that a controller view must intercept and apply against the data provider.

```jsx
return (
    <UICheckbox checked={true}
                labelAttributes={{ 'data-i18n': 'en-US' }}
                labelContent='Save'
                name='autosave'
                wrapperAttributes={{ className: 'control-autosave' }} />
);
```
Renders:
```html
<div class="ui-checkbox-wrapper control-autosave">
    <input id="{uniqueId}" name="autosave" type="checkbox" aria-checked="true" class="ui-checkbox ui-checkbox-checked" checked />
    <label for="{uniqueId}" data-i18n="en-US">Save</label>
</div>
```

Styling of the element is provided via the class hooks:

- `.ui-checkbox`
- `.ui-checkbox-checked`
- `.ui-checkbox-label`
- `.ui-checkbox-mixed`
- `.ui-checkbox-wrapper`


### Expected Interactions

Type | Context | Expectation
---- | ------- | -----------
**Keyboard** | `[Enter, Space]` | should toggle the `checked` state
**Mouse** | `click` | should toggle the `checked` state


### Required `props`

- **checked** `Boolean`
  determines if the checkbox is rendered as checked/unchecked, see React ["controlled inputs"](https://facebook.github.io/react/docs/forms.html#controlled-components))

- **name** `String`
  rendered as the input control's form name


### Optional `props`

- any [React-supported attribute](https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes); applied to the rendered `<input>` element

- **className** `[String|Array<String>]`
  additional CSS classes to be added to the rendered `<input>` element

- **id** `String`
  the string to be used for the rendered input HTML `id` and corresponding label `for` attributes; auto-generated if not provided

- **indeterminate** `Boolean`
  enables or disables "mixed" checkbox state, read this [CSS-Tricks article](https://css-tricks.com/indeterminate-checkboxes/)  for more information and examples

- **labelAttributes** `Object`
    - **labelAttributes.\***
      any [React-supported attribute](https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes)

- **labelContent** `Node`
  any React-renderable content, most commonly a simple string

- **onChecked** `Function`
  called when the element becomes checked; backing data must be updated to persist the state change

- **onUnchecked** `Function`
  called when the element becomes unchecked; backing data must be updated to persist the state change

- **wrapperAttributes** `Object`
    - **wrapperAttributes.\***
      any [React-supported attribute](https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes)


<sub>A view must be functionally-accessible and whole by props alone.</sub>