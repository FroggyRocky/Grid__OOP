class Grid {
    constructor () {
   
        this._renderPlace = "body"

    }

setheader(header) {
if (typeof header === "string" && header.trim() !== "")
    this._header = header.trim()
}

setRenderPlace(renderPlace) {
    this._renderPlace = renderPlace.trim()
}

setHeaderClass(headerClass) {
    this._classHeader = headerClass
}

setTableClass(tableClass) {
    this._tableClass = tableClass
}

 //////////////////////// REFACTORING FUNCTIONS FOR RENDER /////////////////////
 renderHeader() { 
     if(this._header) {
    const whereToRender = document.querySelector(this._renderPlace)
    const h1 = document.createElement("h1")
    h1.textContent = this._header

   this._classHeader.forEach((element) => {
       h1.classList.add(element)
   })

whereToRender.append(h1)
}
 }

 renderTableHeaders(renderPlace) {
    const trHeader = document.createElement("tr")

    for(let key in this.attribute) {
   const th = document.createElement('th')
   if(this.attribute[key].label) {
          th.textContent = this.attribute[key].label;
      } else {
          th.textContent = key
      }
   trHeader.append(th)
   }
   
    renderPlace.append(trHeader)
 }
 conditional(renderPlace) {

    for (let i = 0; i < dataExample.length; i++) {
        const tr = document.createElement("tr")
        const dataLines = dataExample[i]
    
    ////////////////////// CONDITIONAL RENDERING /////////////////////////////////
    
        for (let key in this.attribute) {
            const td = document.createElement("td")
            const value = dataLines[key]
            
            //////////////// CONDITIONAL SRC AND VALUE PROPS ////////////////
    
            if(this.attribute[key].value) {
                this.attribute[key].value(dataLines)
            }
           if(this.attribute[key].src) {
            td.innerHTML = value
           } else { 
               td.textContent = value
           }
            tr.append(td)
         }
    renderPlace.append(tr)
    }
 }

  setData(data) {
    this.setheader(data.header)
    this.setHeaderClass(data.headerClass)
    this.attribute = data.attribute
    this.setTableClass(data.tableClass)
    this.setRenderPlace(data.renderPlace)
  }
  
 ////// RENDER ////

render(scriptData) {
//////////////////////////////SETTING DATA//////////////////////////////////////

this.setData(scriptData)

    /////////////////////RENDER HEADER/////////////////////////////////

    this.renderHeader();

////////////////////////////////// CREATE A TABLE AND INSERT TABLE INTO A BLOCK  ////////////////////////////////////

const table = document.createElement("table")
if(this._tableClass) {
    this._tableClass.forEach((element) => {
        table.classList.add(element)
    })
    document.querySelector(this._renderPlace).append(table)
    }

/////////////////////CREATE AND RENDER TABLE-HEADERS ///////////////////////////

this.renderTableHeaders(table)

///////////// FILL THE TABLE WITH DATA + CONDITIONAL RENDERING //////////////////////

this.conditional(table)

}
}










