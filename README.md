# jq-deepest-copy
Create a deep copy of a set of matched elements while preserving the dynamic state of any matched form elements.

### Example Use Case w/ a ***"select"*** element: 
1. A user clicks the ```$('select#favorite-color')``` dropdown and clicks the ```$('option.red')``` option. 
2. A user then clicks the ```$('button#clone-li')``` button.

- **OUTCOME:** The ```$('li.color-picker')``` list item is cloned and appended to the ```$('ul.last')``` unordered list, WHILE retaining the user selected ```$('option.red')``` option in the cloned ```$('select#favorite-color')``` dropdown.

```html
<ul class="first">
    <li class="color-picker">
        <select name="favorite-color" id="favorite-color">
            <option value="1">Blue</option>
            <option value="2" class="red">Red</option>
            <option value="3">Green</option>
        </select>
    </li>
</ul>

<ul class="last">
    
</ul>

<button type="button" id="clone-li">Clone Color Picker Li</button>

<script type="text/javascript"> $(document).ready(function() {
    // ******************************** v INITIALIZE v ******************************** //
        // Variables:
            // DOM:
                var color_picker_li = $('li.color-picker');
                var last_ul = $('ul.last');
                var clone_color_picker_li_button = $('button#clone-li')
  
    // ******************************** ^ INITIALIZE ^ ******************************** //
    
    // ********************************** v EVENTS v ********************************** //
        // Handle a CLICK on the Clone Color Picker Li Button:
            $(clone_color_picker_li_button).on('click', function() {
                $(color_picker_li).copy().appendTo(last_ul);
            });
        
    // ********************************** ^ EVENTS ^ ********************************** //
}); </script>
```
