from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import RedirectView
from envelope.views import ContactView

from website.forms import MyContactForm
import website.views


urlpatterns = [
    url(r'^$', website.views.indexView,{'category':'wedding'}, name='index'),
    url(r'^wedding$', RedirectView.as_view(url='/', permanent=False), name='index'),
    url(r'^commercial$', website.views.indexView,{'category':'commercial'}, name='commercial' ),
    url(r'^portrait$', website.views.indexView,{'category':'portrait'}, name='portrait'),
    url(r'^newborn$', website.views.indexView,{'category':'newborn'}, name='newborn'),
    url(r'^press$', website.views.indexView,{'category':'press'}, name='press'),
    url(r'^video$', website.views.videoView, name='video'),
    url(r'^about$', website.views.aboutView, name='about'),
    url(r'^admin/', admin.site.urls),
    url(r'^photologue/', include('photologue.urls', namespace='photologue')),
    url(r'^contact2/', include('envelope.urls')),
    url(r'^contact/',ContactView.as_view(form_class=MyContactForm), name='contact'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)