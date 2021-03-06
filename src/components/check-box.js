// Check box custom component
class CheckBox extends HTMLElement {
    constructor() {
        super();

        // Encapsulate by using the shadow DOM so no styles are leaked or overwritten
        const root = this.attachShadow({mode: 'open'});
        root.innerHTML = `
            <style>
            /* Customize the label (the container) */
            .container {
                display: block;
                position: relative;
                padding-left: 35px;
                padding-top:5px;
                margin: 0 0 12px 20px;
                width: 160px;
                cursor: pointer;
                font-size: 16px;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

                /* Hide the browser's default checkbox */
                    .container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }

                /* Create a custom checkbox */
                .checkmark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 25px;
                    width: 25px;
                    background-color: #A9A9A9;
                }

                /* On mouse-over, add a grey background color */
                .container:hover input ~ .checkmark {
                    background-color: #ccc;
                }

                /* When the checkbox is checked, add a blue background */
                .container input:checked ~ .checkmark {
                    background-color: #2196F3;
                    border-radius: 3px;
                }

                /* Create the checkmark/indicator (hidden when not checked) */
                .checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                }

                /* Show the checkmark when checked */
                .container input:checked ~ .checkmark:after {
                    display: block;
                }

                /* Style the checkmark/indicator */
                .container .checkmark:after {
                    left: 9px;
                    top: 5px;
                    width: 5px;
                    height: 10px;
                    border: solid white;
                    border-width: 0 3px 3px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
            </style>
            <label class="container">Use wildcard match
                <input type="checkbox" checked>
                <span class="checkmark"></span>
            </label>
        `;
    }

    // Getter for the checked property
    get value() {
        const { activeElement } = this.shadowRoot;
        if(activeElement !== null) {
            return activeElement.checked;
        }
    }

    // Setter for the checked attribute
    set value(newValue) {
        this.setAttribute('checked', newValue);
    }
}

// Register the element in the CustomElementRegistry
customElements.define('check-box', CheckBox);