from django.urls import path
from .views import CommentManagementAPIView, ReactionAPIView

urlpatterns = [
    path('api/comment/<int:product_id>/', CommentManagementAPIView.as_view(), name='get_comments'),
    path('api/reaction/<int:comment_id>/', ReactionAPIView.as_view(), name='delete_reaction'),
    path('api/reaction/<int:comment_id>/<str:react>/', ReactionAPIView.as_view(), name='set-reaction'),
]