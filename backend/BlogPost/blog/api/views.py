from rest_framework.generics import ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView, CreateAPIView


from .serializers import BlogSerializer
from ..models import Blog

class BlogListView(ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogCreateView(CreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogDetailView(RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogDeleteView(DestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogUpdateView(UpdateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer