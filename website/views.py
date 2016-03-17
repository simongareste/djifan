from django.shortcuts import render
from .models import Category
from braces.views import FormMessagesMixin
from envelope.views import ContactView

from django.utils.translation import ugettext_lazy as _

from .forms import MyContactForm

def indexView(request, category):
    template_name = 'website/index.html'

    try:
        images = Category.objects.get(name=category).photos.all()
    except:
        images = []
    return render(request, template_name, {'images': images})

def videoView(request):
    template_name = 'website/index.html'
    return render(request, template_name, {})

def aboutView(request):
    template_name = 'website/index.html'
    return render(request, template_name, {})

class MyContactView(FormMessagesMixin, ContactView):
    form_invalid_message = _(u"There was an error in the contact form.")
    form_valid_message = _(u"Thank you for your message.")
    form_class = MyContactForm

