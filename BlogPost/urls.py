
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
# from ..blog.api import urls

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('blog.api.urls'), name="blogApi"),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/',include('rest_auth.urls')), 
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html'))
]
