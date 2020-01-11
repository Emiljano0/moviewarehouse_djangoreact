from rest_framework import serializers
from documentariesApp.models import Documentaries


class DocumentariesSeriealizers(serializers.ModelSerializer):
    class Meta:
        model = Documentaries
        fields = ('documentary_title', 'documentary_creator1', 'documentary_creator2', 'documentary_synopsis',
                  'documentary_poster','documentary_release_date', 'documentary_budget', 'documentary_gross',
                  'documentary_genre', 'documentary_rating')
