# Overview

A simple javascript example of a dynamic dropdown. There will be multiple select dropdowns with the same options in them.
When the user selects an option from the dropdown, the selected option is removed from all of the other selects. This allows
each value in the selects to be unique. Not allowing the same option to be selected more than once.

# How it Works

Utilizes a css class to set the `display: none;` property. This is toggled on user choice to hide the option in the select dropdown.