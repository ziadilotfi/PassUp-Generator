from django.shortcuts import render
from django.http import HttpResponse
from django import forms 
import random
from random import randrange, sample

# Create your views here.
def passup(request): 
    return render(request,"passup/index.html" )

