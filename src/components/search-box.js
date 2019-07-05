// Search box custom component
class SearchBox extends HTMLElement {
    constructor() {
        super();

        // Encapsulate by using the shadow DOM so no styles are leaked or overwritten
        const root = this.attachShadow({mode: 'open'});
        // Styles and HTML from Material UI
        root.innerHTML = `
            <style>
                .container {    
                    display: flex;
                    outline: none;
                    padding: 20px;
                    border-radius: 4px;
                    justify-content: flex-start;
                }

                .search {
                    width: 400px;
                    display: flex;
                    padding: 2px 4px;
                    align-items: center;
                }

                .search-elevation {
                    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
                    border-radius: 4px;
                }

                .search-root {
                    color: rgba(0, 0, 0, 0.87);
                    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    background-color: #fff;
                }

                .search-input-container {
                    flex: 1;
                    margin-left: 8px;
                    color: rgba(0, 0, 0, 0.87);
                    cursor: text;
                    display: inline-flex;
                    position: relative;
                    font-size: 1rem;
                    box-sizing: border-box;
                    align-items: center;
                    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                    line-height: 1.1875em;
                }

                .search-input {
                    font: inherit;
                    color: currentColor;
                    width: 100%;
                    border: 0;
                    height: 1.1875em;
                    margin: 0;
                    display: block;
                    padding: 6px 0 7px;
                    min-width: 0;
                    background: none;
                    box-sizing: content-box;
                    -webkit-tap-highlight-color: transparent;
                }

                .search-icon-root {
                    flex: 0 0 auto;
                    overflow: visible;
                    font-size: 1.5rem;
                    text-align: center;
                    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    color: inherit;
                    border: 0;
                    cursor: pointer;
                    margin: 0;
                    display: inline-flex;
                    outline: none;
                    padding: 0;
                    position: relative;
                    align-items: center;
                    user-select: none;
                    border-radius: 0;
                    vertical-align: middle;
                    -moz-appearance: none;
                    justify-content: center;
                    text-decoration: none;
                    background-color: transparent;
                    -webkit-appearance: none;
                    -webkit-tap-highlight-color: transparent;
                }

                .search-icon-label {
                    width: 100%;
                    display: flex;
                    align-items: inherit;
                    justify-content: inherit;
                }

                .svg-icon-root {
                    fill: currentColor;
                    color: rgba(0, 0, 0, 0.54);
                    padding: 10px;
                    width: 1em;
                    height: 1em;
                    display: inline-block;
                    font-size: 1.5rem;
                    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    flex-shrink: 0;
                    user-select: none;
                }

                textarea:focus, input:focus{
                    outline: none;
                }
            </style>
            <div class="container" tabindex="-1">
                <div class="search-root search-elevation search"> 
                    <div class="search-input-container">
                        <input class="search-input" placeholder="Search for a laureate" type="text" aria-label="Search for a laureate" value="">
                    </div>
                    <button class="search-icon-root " tabindex="0" type="button" aria-label="Search">
                        <span class="search-icon-label">
                            <svg class="svg-icon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                        </span>
                    </button>  
                </div>
            </div>
        `;
    }

    // Getter for the value property
    get value() {
        return  this.shadowRoot.activeElement.value;
      }

}

// Register the element in the CustomElementRegistry
customElements.define('search-box', SearchBox);