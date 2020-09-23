from django.urls import path
from .views import BlogListView, BlogDetailView, BlogDeleteView, BlogUpdateView

urlpatterns = [
    path('', BlogListView.as_view(), name="ListView"),
    path('update/<pk>/', BlogUpdateView.as_view(), name="UpdatePost"),
    path('delete/<pk>/', BlogDeleteView.as_view(), name="DeletePost"),
    path('<pk>/', BlogDetailView.as_view(), name="DetailView")
]