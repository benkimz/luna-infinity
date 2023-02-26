import streamlit as st

st.title("Model Inut and Output configs:")

st.write("---")

st.markdown(
    """
    To make a prediction, a python dictionary is passed to a function/ api that does 
    inference from the model and returns the desired outputs.
    
    * Query format:

        ```python
        query = {
            'county': 'county goes here', 
            'crop': 'crop of interest', 
            'year': 'year of interest', 
            'area': 'area of interest in HA'
        }
        ```
        
    * Output format:
    
        ```python
        # production in Metric tons
        # yield in production per unit HA
        output = (production, yield)
        ```
    
    """
)