        d3.json("data/resource_templates.json", function (data) {
            
            for (i in data) {

                    html = `<tr>
                                <th scope="row">`+ data[i]["o:id"] +`</th>
                                      <td>`+ data[i]["o:label"] +`</td>
                             </tr>`;

                    d3.select(".table").append("p").html(html);
                }

        });
