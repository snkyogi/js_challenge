# Javascript_Challenge

## Belly Button Biodiversity
In this assignment, an interactive dashboard is built to explore the Belly Button Biodiversity dataset, which catalogues the microbes that colonise human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Instructions
The following stepswere follwed:

### Importing Data
The D3 library is used to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

### Horizontal Bar Chart
A horizontal bar chart has been created with a dropdown menu to display the top 10 OTUs found in that individual.

1. sample_values has been used as the values for the bar chart.
2. otu_ids has been used as the labels for the bar chart.
3. otu_labels has been used as the hover text for the chart.

### Bubble Chart
A bubble chart has been created that displays each sample.

1. otu_ids has been used for the x values.
2. sample_values has been used for the y values.
3. sample_values has been used for the marker size.
4. otu_ids has been used for the marker colours.
5. otu_labels has been used for the text values.

### Demographic Information
The sample metadata, i.e., an individual's demographic information hasbeen displayed.
Each key-value pair from the metadata JSON object has been displayed on the page.


All plots are updated when a new sample is selected. 

The app is deployed to a free static page hosting service, such as GitHub Pages. 
