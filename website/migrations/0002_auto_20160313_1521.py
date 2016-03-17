# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-03-13 15:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photologue', '0010_auto_20160105_1307'),
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='categories',
        ),
        migrations.AddField(
            model_name='category',
            name='photos',
            field=models.ManyToManyField(to='photologue.Photo'),
        ),
    ]
