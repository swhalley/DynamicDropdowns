(function buildTable() {
    let values = ['Bread', 'Apple', 'Pear', 'Orange', 'Kiwi'];
    let selects = Array.from( document.querySelectorAll('select'));

    selects.forEach((selectElement) => {
        let fragment = document.createDocumentFragment();
        let chooseOne = document.createElement( 'option' );
        chooseOne.innerHTML = '--Choose One--';
        chooseOne.value = '';
        //chooseOne.disabled = true;
        chooseOne.selected = true;
        
        values.forEach((value) => {
            let option = document.createElement('option');
            option.innerHTML = value;
            option.value = value.toLowerCase();

            fragment.appendChild(option);
        });

        selectElement.setAttribute( 'data-previous-value', '');
        selectElement.appendChild( chooseOne );
        selectElement.appendChild( fragment );
    });


    /**
     * Event Listener for a select drop down list. 
     * When an option is selected it will remove it from other dropdowns that have the same value.
     * It will not remove the value from a drop down if it is currently selected
     * @param {Event} event 
     */
    let removeSelectedChoiceFromOtherDropdowns = (event) => {
        let currentSelectedValues = selects.map( select => select.value ).filter( value => value);

        selects.forEach( selectElement => {
            //We dont want to remove the current choice from the users selection 
            if( event.target.id === selectElement.id) return;

            selectElement.childNodes.forEach( option => {
                //hide the option using a css class if it is already chosen from another select
                //but dont hide it if the option is selected on the current dropdown
                option.classList.toggle( 'noDisplay', 
                    option.value !== selectElement.value 
                    && currentSelectedValues.some( value => value === option.value ));
            })
            
        });
    };

    //Register the Event Listener
    selects.forEach( (selectElement) => selectElement.addEventListener( 'change', removeSelectedChoiceFromOtherDropdowns ));
})();