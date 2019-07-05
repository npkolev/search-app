class ResultList extends HTMLElement {
    constructor() {
        super();
        // Encapsulate by using the shadow DOM so no styles are leaked or overwritten
        this.root = this.attachShadow({ mode: 'open' });
    }
    
    set result(result) {
        const partPhotoUrl = ' http://nobel.divedeeper.io'
        const { full_name, year, photo_url} = result.result.fields;
        const prizeCategory = result.result.fields["Prize Category"].val[0];

        // Capitalise the first letter of each category
        const capitalize = function(category){
            return category.charAt(0).toUpperCase() + category.slice(1);
          }
        
        // Styles could be imported from external stylesheets rather than declaring them hre
        this.root.innerHTML = `
            <style>
                .container {
                    padding: 16px;
                }

                .card {
                    margin: auto;
                    display: flex;
                    flex-wrap: wrap;
                    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                    outline: none;
                    padding: 30px;
                    border-radius: 4px;
                    background-color: #fff;
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                }

                .card-section-container {
                    display: flex;
                }

                .card-right > h1 { 
                    color: rgba(0, 0, 0, 0.87);
                    font-weight: 500;
                    line-height: 1.6;
                    letter-spacing: 0.0075em;
                }

                .card-right {
                    padding: 0 30px;
                }

                .card-label {
                    font-size: 1.1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    letter-spacing: 0.00938em;
                    width: 50%;
                    padding: 0 10px 10px 0;
                }

                .card-value {
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    letter-spacing: 0.00938em;
                }

                @media only screen and (max-width: 580px) {
                    .card-left, .card-right {
                        margin: 0 auto;
                    }
                    .card-right > h1 {
                      font-size: 26px
                    }
                  }

            </style>

            <div class='container'>
                <div class='card'>
                    <div class='card-left'>
                        <img src=${partPhotoUrl}${photo_url.val[0]}>
                    </div>
                    <div class='card-right'>
                        <h1>${full_name.val[0]}</h1>
                        <div class='card-right-details'>
                        <div class='card-section-container'>    
                            <span class='card-label'>Category:</span>
                            <span class='card-value'>${capitalize(prizeCategory)}</span>
                        </div>
                        <div class='card-section-container'>    
                            <span class='card-label'>Year:</span>
                            <span class='card-value'>${year.val[0].act[1]}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Register the element in the CustomElementRegistry
customElements.define('result-list', ResultList);
