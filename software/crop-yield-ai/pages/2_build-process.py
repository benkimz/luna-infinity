import streamlit as st

st.set_page_config(
    page_icon=":star:", 
    page_title="Technologies Used"
)

st.header("Build Process")

st.markdown(
    """
    #### Data Source and processig stages
    * Data gathering was done from 
        [Kilimo Open Data](http://kilimodata.developlocal.org/dataset/?organization=crops).
        
    * Data processing and visualization was done in google colab in the following steps:
        - Downloading csv data formats for the various crop production in Kenyan counties per year.
        - Data exploration was done to detect and filter out illegal and null values. 
        - Data visualization was done to detect outliers.
        - Model inputs were defined.
        - Model outputs were defined subject to priority.
        
    * Model Training:
        - TensorFlow/ Keras api was used due to it's easy of application.
        - A sequential model was built to take a region, crop, area units, and year values and 
            give as output a prediction of for production and yield per unit area.
        - Training was done and the following parameters were used:
            - Testing involved trying both mae & mse loss function
            - Adams optimization algorithm
            - A variety of evaluation metrics were used.
        - Model evaluation on test data.
    
    * Model Test phase
     
    * UI/ UX Design and Building
        - Streamlit was the basic framework
        - The UI was designed to be user friendly and to display all the relevant information that 
            a user may need
        - The design involved letting users interact easily with the model.
        
    * Model deployment
        - Model was finally deployed
    """
)