var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: 6,
      title: { text: "Belly Button Washing" },
      type: "indicator",
      colorscale: 'YlGnBu',
      mode: "gauge+number+delta",
      gauge: {
        axis: { range: [null, 9] },
        steps: [
          { range: [0, 1]},
          { range: [1, 2]},
          { range: [2, 3]},
          { range: [3, 4]},
          { range: [4, 5]},
          { range: [5, 6]},
          { range: [6, 7]},
          { range: [7, 8]},
          { range: [8, 9]}
        ],
      }
    }
  ];
  
  var layout = { width: 500, height: 450, showarrow: true, arrowhead: 9 };
  Plotly.newPlot('gauge', data, layout);

  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    updateCharts(newSample);
    updateMetadata(newSample);
  }