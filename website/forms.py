from django import forms

class MyContactForm(forms.Form):
    contact_name = forms.CharField(
        required=True,
        widget=forms.TextInput(attrs={'placeholder': 'Nom', 'class': 'form-control'})
    )
    contact_email = forms.EmailField(
        required=True,
        widget=forms.TextInput(attrs={'placeholder': 'Email', 'class': 'form-control'})
    )
    content = forms.CharField(
        required=True,
        widget=forms.Textarea(attrs={'placeholder': 'Message', 'class': 'form-control'})
    )

    def __init__(self, *args, **kwargs):
        super(MyContactForm, self).__init__(*args, **kwargs)
        # Empty the default labels
        self.fields['contact_name'].label = ""
        self.fields['contact_email'].label = ""
        self.fields['content'].label = ""
