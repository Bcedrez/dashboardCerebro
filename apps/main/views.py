from multiprocessing import context
from re import template
from django.shortcuts import render
from django.views.generic import TemplateView,ListView


data = [
         {'nombres':'Jose Luis', 'apellidos':'Davila Orta' ,'Estado':'05','municipio':'030','localidad':'001','seccion':'073','redes':'https://www.facebook.com/profile.php?id=100075033386474"','telefono':'+528441281402' },
         {'nombres':'Brayan', 'apellidos':'Cedrez Oviedo' ,'Estado':'05','municipio':'030','localidad':'001','seccion':'083','redes':'','telefono':'+528442583514' },
         {'nombres':'Enrique', 'apellidos':'Pacheco Salinas' ,'Estado':'05','municipio':'030','localidad':'001','seccion':'034','redes':'https://www.instagram.com/grupodimakers/"','telefono':'' },
          ]

# Create your views here.
class homeView(TemplateView):
    template_name = "home.html"

class listRedes(TemplateView):
     template_name='ListaRedes/listRedes.html'
     
     
     def get_context_data(self, **kwargs):
         context = super().get_context_data(**kwargs)
         context['data']=data
         return context
     
         
     
    
     

class detailPersonaView(TemplateView):
     template_name='detallePersona/detailPersonaView.html'
     
     def get_context_data(self, **kwargs):
         context = super().get_context_data(**kwargs)
         context['data']=data
         return context