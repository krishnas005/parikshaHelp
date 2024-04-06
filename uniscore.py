# -*- coding: utf-8 -*-
"""UniScore.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/14nyQZCPB-C6sowmIYtRqxRiL8F0lus-0
"""

import numpy as np
from scipy.stats import norm
from pandas import *
import json

data = read_csv("MOCK_DATA.csv")

icse = read_csv("ICSE.csv")
cbse = read_csv("CBSE.csv")
state = read_csv("State.csv")

student_names = read_csv("names.csv")

marks_icse = icse['total_marks']
marks_cbse = cbse['total_marks']
marks_karnataka = state['total_marks']

def calculate_percentile(marks):
    mean = np.mean(marks)
    std_dev = np.std(marks)
    z_scores = [(x - mean) / std_dev for x in marks]
    percentiles = [norm.cdf(z) * 100 for z in z_scores]
    return percentiles

percentiles_icse = calculate_percentile(marks_icse)
percentiles_cbse = calculate_percentile(marks_cbse)
percentiles_karnataka = calculate_percentile(marks_karnataka)

combined_percentiles = percentiles_icse + percentiles_cbse + percentiles_karnataka

sorted_students = sorted(enumerate(combined_percentiles), key=lambda x: x[1], reverse=True)

student_data=[]

print("Students sorted from highest to lowest percentile:")
for rank, (index, percentile) in enumerate(sorted_students, start=1):
    if(index>=1000):
        index = 1
    student_name = student_names.iloc[index]['first_name']
    student_info = {"Rank": rank, "Name": student_name, "Percentile": percentile}
    student_data.append(student_info)
    print(student_info)

with open("student_data.json", "w") as json_file:
    json.dump(student_data, json_file, indent=4)

print("Student data saved to student_data.json")