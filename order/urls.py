from django.urls import path
from .views import AddToCartAPIView, UserOrderListView, RemoveOrderAPIView, OrderDetailAPIView, FinalizeOrderAPIView

urlpatterns = [
    path('api/order/add-to-cart/', AddToCartAPIView.as_view(), name='add_to_cart'),
    path('api/orders/', UserOrderListView.as_view(), name='user-order-list'),
    path('order/remove/<int:order_id>/', RemoveOrderAPIView.as_view(), name='remove-order'),
    path('api/order/<int:order_id>/', OrderDetailAPIView.as_view(), name='order-detail'),
    path('api/order/finalize/<int:order_id>/', FinalizeOrderAPIView.as_view(), name='finalize-order'),
]
