from django.urls import path
from .views import *

urlpatterns = [
    path('', homeView.as_view(), name='index'),
    path('lista-redes', listRedes.as_view(), name='listaRedes'),
    path('datalle-persona', detailPersonaView.as_view(), name='detailPersona'),
]