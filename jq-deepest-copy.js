$.fn.copy = function() {
    var cloned_set_of_matched_elements = $(this).clone();

    $(this).each(function(this_matched_element_index,this_matched_element)
    {
        this_matched_element_index = Number(this_matched_element_index);

        var this_matched_element_select_element_found = ($(this_matched_element).find('select').length != 0);
        var this_matched_element_textarea_element_found = ($(this_matched_element).find('textarea').length != 0);

        if(this_matched_element_select_element_found)
        {
            var this_matched_element_all_found_select_elements = $(this_matched_element).find('select');

            $(this_matched_element_all_found_select_elements).each(function(this_matched_element_this_found_select_element_index,this_matched_element_this_found_select_element)
            {
                this_matched_element_this_found_select_element_index = Number(this_matched_element_this_found_select_element_index);

                var this_matched_element_this_found_select_element_selected_option_found = ($(this_matched_element_this_found_select_element).find('option:selected').length != 0);
                if(this_matched_element_this_found_select_element_selected_option_found)
                {
                    var cloned_this_matched_element = $(cloned_set_of_matched_elements).get(this_matched_element_index);

                    var cloned_this_matched_element_this_select_element = $(cloned_this_matched_element).find('select').get(this_matched_element_this_found_select_element_index);

                    var this_matched_element_this_found_select_element_selected_option_element = $(this_matched_element_this_found_select_element).find('option:selected');

                    var this_matched_element_this_found_select_element_selected_option_element_index = $(this_matched_element_this_found_select_element_selected_option_element).index();

                    var cloned_this_matched_element_this_select_element_selected_option_element = $(cloned_this_matched_element_this_select_element).find('option').get(this_matched_element_this_found_select_element_selected_option_element_index);

                    $(cloned_this_matched_element_this_select_element_selected_option_element).prop('selected',true);
                }
            });
        }

        if(this_matched_element_textarea_element_found)
        {
            var this_matched_element_all_found_textarea_elements = $(this_matched_element).find('textarea');

            $(this_matched_element_all_found_textarea_elements).each(function(this_matched_element_this_found_textarea_element_index,this_matched_element_this_found_textarea_element)
            {
                this_matched_element_this_found_textarea_element_index = Number(this_matched_element_this_found_textarea_element_index);

                var this_matched_element_this_found_textarea_element_text = $(this_matched_element_this_found_textarea_element).text();
                var this_matched_element_this_found_textarea_element_value = $(this_matched_element_this_found_textarea_element).val();

                var cloned_this_matched_element = $(cloned_set_of_matched_elements).get(this_matched_element_index);

                var cloned_this_matched_element_this_textarea_element = $(cloned_this_matched_element).find('textarea').get(this_matched_element_this_found_textarea_element_index);

                $(cloned_this_matched_element_this_textarea_element).text(this_matched_element_this_found_textarea_element_text);
                $(cloned_this_matched_element_this_textarea_element).val(this_matched_element_this_found_textarea_element_value);
            });
        }
    });
    
    return cloned_set_of_matched_elements;
}
