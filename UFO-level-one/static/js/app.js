// from data.js
var tableData = data;

// YOUR CODE HERE!
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting

d3.select("#datetime").on("change", updateText)


function updateText(){
    var date = d3.event.target.value

    var tablaimp = []

    data.forEach( dato => {
        if (dato.datetime == date){
            tablaimp.push(dato)
        }
    })

    d3.select("tbody")
        .selectAll("tr")
        .data(tablaimp)
        .enter()
        .append("tr")
        .html(d => {
            return `<td> ${d.datetime} </td>
                    <td> ${d.city} </td>
                    <td> ${d.state} </td>
                    <td> ${d.country} </td>
                    <td> ${d.shape} </td>
                    <td> ${d.durationMinutes} </td>
                    <td> ${d.comments} </td>`
        })

}


