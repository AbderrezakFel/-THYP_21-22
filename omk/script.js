        d3.json("data/resource_templates.json", function (data) {
            
            for (i in data) {

                    html = `
                    <div class="row gy-5">

                        <div class="col-6">
                            <div class="p-3 border bg-light">
                                <p>Resource Id:`+ data[i]["o:id"] +` Label:`+ data[i]["o:label"] +`</p>
                            </div>
                        </div>
                    </div>`;

                    d3.select(".container").append("p").html(html);
                }

        });
