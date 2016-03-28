from django.shortcuts import render
from django.template import Context
from django.template.loader import get_template
from django.core.mail import EmailMessage
from django.conf import settings

from .models import Category
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

def contactView(request):
    form = MyContactForm

    # When submitting the contact form
    if request.method == 'POST':
        form = form(data=request.POST)

        if form.is_valid():
            contact_name = request.POST.get(
                'contact_name'
            , '')
            contact_email = request.POST.get(
                'contact_email'
            , '')
            form_content = request.POST.get('content', '')

            template = get_template('website/contact_template.txt')
            context = Context({
                'contact_name': contact_name,
                'contact_email': contact_email,
                'form_content': form_content,
            })
            content = template.render(context)

            email = EmailMessage(
                settings.ENVELOPE_SUBJECT_INTRO,
                content,
                settings.DEFAULT_FROM_EMAIL,
                settings.ENVELOPE_EMAIL_RECIPIENTS,
                headers = {'Reply-To': contact_email }
            )
            email.send()
            return render(request, 'website/contact_thx.html')

    return render(request,'website/contact.html', {'form': form,})


