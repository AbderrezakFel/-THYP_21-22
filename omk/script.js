        d3.json("data/resource_templates.json", function (data) {
            
            for (i in data) {

                    html = `<tr>
                                <th scope="row">`+ data[i]["o:id"] +`</th>
                                      <td>`+ data[i]["o:label"] +`</td>
                             </tr>`;

                    d3.select(".temp").append("tr").html(html);
                }

        });


d3.json("data/items.json", function (data) {
            
            for (i in data) {

                    html = `<tr>
                                <th scope="row">`+ data[i]["o:id"] +`</th>
                                      <td>`+ data[i]["o:title"] +`</td>
                             </tr>`;

                    d3.select(".it").append("tr").html(html);
                }

        });
